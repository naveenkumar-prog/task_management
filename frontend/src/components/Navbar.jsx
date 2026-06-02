import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const Navbar = ({ title }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/");
};

  return (
    <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {user?.name} • {user?.role}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button
          onClick={logout}
          className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl hover:opacity-90"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;