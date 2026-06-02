import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import { toast } from "react-hot-toast";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
  });

  const fetchData = async () => {
    try {
      const [usersRes, tasksRes] = await Promise.all([
        API.get("/users"),
        API.get("/tasks"),
      ]);

      setUsers(usersRes.data.users);
      setTasks(tasksRes.data.tasks);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load dashboard data"),{
        duration: 5000,
      };
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  const createUser = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users", userForm);

      toast.success("User created successfully"),{
        duration: 5000,
      };

      setUserForm({
        name: "",
        email: "",
        password: "",
        role: "user",
      });

      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create user");
    }
  };

  const createTask = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", taskForm);

      toast.success("Task created successfully"),{
        duration: 5000,
      };

      setTaskForm({
        title: "",
        description: "",
        assignedTo: "",
      });

      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create task"),{
        duration: 5000,
      };
    }
  };

  const total = tasks.length;
  const pending = tasks.filter((t) => t.status === "Pending").length;
  const progress = tasks.filter((t) => t.status === "In Progress").length;
  const completed = tasks.filter((t) => t.status === "Completed").length;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Navbar title="Admin Dashboard" />

      <div className="p-6 space-y-6">
        <div className="grid md:grid-cols-4 gap-4">
          <Card title="Total Tasks" value={total} />
          <Card title="Pending" value={pending} />
          <Card title="In Progress" value={progress} />
          <Card title="Completed" value={completed} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
            <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">
              Create User
            </h2>

            <form onSubmit={createUser} className="space-y-4">
              <input
                className="input"
                placeholder="Name"
                value={userForm.name}
                onChange={(e) =>
                  setUserForm({ ...userForm, name: e.target.value })
                }
                required
              />

              <input
                className="input"
                type="email"
                placeholder="Email"
                value={userForm.email}
                onChange={(e) =>
                  setUserForm({ ...userForm, email: e.target.value })
                }
                required
              />

              <input
                className="input"
                type="password"
                placeholder="Password"
                value={userForm.password}
                onChange={(e) =>
                  setUserForm({ ...userForm, password: e.target.value })
                }
                required
              />

              <select
                className="input"
                value={userForm.role}
                onChange={(e) =>
                  setUserForm({ ...userForm, role: e.target.value })
                }
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>

              <button className="btn">Create User</button>
            </form>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
            <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">
              Create Task
            </h2>

            <form onSubmit={createTask} className="space-y-4">
              <input
                className="input"
                placeholder="Task Title"
                value={taskForm.title}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, title: e.target.value })
                }
                required
              />

              <textarea
                className="input"
                placeholder="Description"
                value={taskForm.description}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, description: e.target.value })
                }
                rows="4"
              />

              <select
                className="input"
                value={taskForm.assignedTo}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, assignedTo: e.target.value })
                }
                required
              >
                <option value="">Assign to user</option>

                {users
                  .filter((u) => u.role === "user")
                  .map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name} - {user.email}
                    </option>
                  ))}
              </select>

              <button className="btn">Create Task</button>
            </form>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              All Tasks
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <tr>
                  <th className="text-left p-4 text-slate-700 dark:text-slate-300">
                    Task
                  </th>
                  <th className="text-left p-4 text-slate-700 dark:text-slate-300">
                    Assigned To
                  </th>
                  <th className="text-left p-4 text-slate-700 dark:text-slate-300">
                    Status
                  </th>
                  <th className="text-left p-4 text-slate-700 dark:text-slate-300">
                    Created
                  </th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((task) => (
                  <tr
                    key={task.id}
                    className="border-t border-slate-200 dark:border-slate-700"
                  >
                    <td className="p-4">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {task.title}
                      </p>

                      <p className="text-slate-500 dark:text-slate-400">
                        {task.description}
                      </p>
                    </td>

                    <td className="p-4 text-slate-900 dark:text-white">
                      {task.assignee?.name || "N/A"}
                    </td>

                    <td className="p-4">
                      <StatusBadge status={task.status} />
                    </td>

                    <td className="p-4 text-slate-900 dark:text-white">
                      {new Date(task.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}

                {tasks.length === 0 && (
                  <tr>
                    <td
                      className="p-6 text-slate-500 dark:text-slate-400"
                      colSpan="4"
                    >
                      No tasks found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>

    <h3 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
      {value}
    </h3>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    Pending:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
    "In Progress":
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default AdminDashboard;