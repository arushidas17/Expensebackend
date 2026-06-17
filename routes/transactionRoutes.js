const router = require("express").Router();
const protect = require("../middleware/authMiddleware");
const { addTransaction, getTransactions, deleteTransaction } = require("../controllers/transactionController");

router.use(protect); // all transaction routes are protected
router.post("/", addTransaction);
router.get("/", getTransactions);
router.delete("/:id", deleteTransaction);
module.exports = router;