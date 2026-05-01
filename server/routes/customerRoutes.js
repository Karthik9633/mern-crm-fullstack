const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { validateCustomer } = require("../middleware/validate");

const {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

router.use(auth);

router.post("/", validateCustomer, createCustomer);
router.get("/", getCustomers);
router.put("/:id", validateCustomer, updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;