import { useState } from "react";

export default function CustomerForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const submit = () => {
    onAdd(form);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <div className="mb-4">
      <input placeholder="Name" className="border p-2 m-1"
        value={form.name}
        onChange={(e)=>setForm({...form,name:e.target.value})} />

      <input placeholder="Email" className="border p-2 m-1"
        value={form.email}
        onChange={(e)=>setForm({...form,email:e.target.value})} />

      <input placeholder="Phone" className="border p-2 m-1"
        value={form.phone}
        onChange={(e)=>setForm({...form,phone:e.target.value})} />

      <button onClick={submit} className="bg-blue-500 text-white p-2">
        Add
      </button>
    </div>
  );
}