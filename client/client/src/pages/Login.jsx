import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      setError("Email and password required");
      return;
    }

    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      nav("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && (
          <p className="text-red-500 mb-2 text-sm">{error}</p>
        )}

        <input className="border p-2 w-full mb-2 rounded"
          placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})} />

        <input type="password"
          className="border p-2 w-full mb-3 rounded"
          placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})} />

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700">
          Login
        </button>
      </div>
    </div>
  );
}