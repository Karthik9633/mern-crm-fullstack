const Customer = require("../models/Customer");

// CREATE
exports.createCustomer = async (req, res, next) => {
  try {
    const data = await Customer.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

// GET
exports.getCustomers = async (req, res, next) => {
  try {
    const data = await Customer.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

// UPDATE
exports.updateCustomer = async (req, res, next) => {
  try {
    const data = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) {
      res.status(404);
      throw new Error("Customer not found");
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
};

// DELETE
exports.deleteCustomer = async (req, res, next) => {
  try {
    const data = await Customer.findByIdAndDelete(req.params.id);

    if (!data) {
      res.status(404);
      throw new Error("Customer not found");
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
};