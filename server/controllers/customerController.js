const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
  const data = await Customer.create(req.body);
  res.json(data);
};

exports.getCustomers = async (req, res) => {
  const data = await Customer.find();
  res.json(data);
};

exports.updateCustomer = async (req, res) => {
  const data = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.deleteCustomer = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};