import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import ThemeToggle from "../components/ThemeToggle";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed"),{
        duration: 5000,
      };
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
          Task Manager
        </h1>

        <p className="text-center text-slate-500 dark:text-slate-400 mt-2">
          Login to manage your tasks
        </p>

        {error && (
          <div className="mt-5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-4 py-3 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-6 space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="input mt-2"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Password
            </label>

            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="input mt-2"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button disabled={loading} className="btn disabled:opacity-60">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-3">
            Please use the credentials provided in the project documentation.
        </p>
      </div>
    </div>
  );
};

export default Login;