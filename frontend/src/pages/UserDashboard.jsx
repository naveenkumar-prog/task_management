import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

const UserDashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data.tasks);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTasks();
  }, []);

  const updateStatus = async (taskId, status) => {
    await API.patch(`/tasks/${taskId}/status`, { status });
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Navbar title="User Dashboard" />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          My Assigned Tasks
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tasks.map((task) => (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{task.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mt-2">{task.description}</p>
                </div>

                <StatusBadge status={task.status} />
              </div>

              <div className="mt-5">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Update Status
                </label>
                <select
                  className="input mt-2"
                  value={task.status}
                  onChange={(e) => updateStatus(task.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <p className="text-xs text-slate-400 mt-4">
                Created: {new Date(task.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}

          {tasks.length === 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6 text-slate-500 dark:text-slate-400">
              No tasks assigned yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${styles[status]}`}>
      {status}
    </span>
  );
};

export default UserDashboard;