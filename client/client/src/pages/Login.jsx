import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handleSubmit = async () => {
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    nav("/dashboard");
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h2 className="text-xl mb-3">Login</h2>

      <input className="border p-2 w-full mb-2" placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})} />

      <input type="password" className="border p-2 w-full mb-2" placeholder="Password"
        onChange={(e)=>setForm({...form,password:e.target.value})} />

      <button onClick={handleSubmit} className="bg-green-600 text-white p-2 w-full">
        Login
      </button>
    </div>
  );
}