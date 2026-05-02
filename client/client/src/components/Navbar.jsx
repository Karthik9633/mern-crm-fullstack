import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">CRM System</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
        <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}