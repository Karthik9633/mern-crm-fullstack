import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const nav = useNavigate();

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      alert("All fields required");
      return;
    }

    await API.post("/auth/register", form);
    alert("Registered Successfully");
    nav("/");
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h2 className="text-xl mb-3">Register</h2>

      <input className="border p-2 w-full mb-2" placeholder="Name"
        onChange={(e)=>setForm({...form,name:e.target.value})} />

      <input className="border p-2 w-full mb-2" placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})} />

      <input type="password" className="border p-2 w-full mb-2" placeholder="Password"
        onChange={(e)=>setForm({...form,password:e.target.value})} />

      <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 w-full">
        Register
      </button>
    </div>
  );
}