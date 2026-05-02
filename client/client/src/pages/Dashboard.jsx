import { useEffect, useState } from "react";
import API from "../api/api";
import CustomerForm from "../components/CustomerForm";

export default function Dashboard() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const res = await API.get("/customers");
    setCustomers(res.data);
  };

  const addCustomer = async (data) => {
    await API.post("/customers", data);
    fetchCustomers();
  };

  const deleteCustomer = async (id) => {
    await API.delete(`/customers/${id}`);
    fetchCustomers();
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="p-5">
      <CustomerForm onAdd={addCustomer} />

      {customers.map((c) => (
        <div key={c._id} className="border p-3 mb-2 flex justify-between">
          <div>
            <p>{c.name}</p>
            <p>{c.email}</p>
          </div>
          <button onClick={()=>deleteCustomer(c._id)}
            className="bg-red-500 text-white px-3">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}