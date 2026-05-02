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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Customer Dashboard</h2>

      <CustomerForm onAdd={addCustomer} />

      <div className="grid gap-4 mt-4">
        {customers.map((c) => (
          <div key={c._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center">

            <div>
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-gray-500">{c.email}</p>
            </div>

            <button
              onClick={() => deleteCustomer(c._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}