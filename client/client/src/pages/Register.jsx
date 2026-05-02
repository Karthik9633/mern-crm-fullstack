import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      await API.post("/auth/register", form);
      nav("/");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl mb-4 text-center font-bold">Register</h2>

        {error && (
          <p className="text-red-500 mb-2 text-sm">{error}</p>
        )}

        <input className="border p-2 w-full mb-2 rounded"
          placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})} />

        <input className="border p-2 w-full mb-2 rounded"
          placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})} />

        <input type="password"
          className="border p-2 w-full mb-3 rounded"
          placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})} />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700">
          Register
        </button>
      </div>
    </div>
  );
}