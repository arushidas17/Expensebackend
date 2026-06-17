const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
  const { title, amount, type, category, date, description } = req.body;
  try {
    const txn = await Transaction.create({ userId: req.user._id, title, amount, type, category, date, description });
    res.status(201).json(txn);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getTransactions = async (req, res) => {
  try {
    const txns = await Transaction.find({ userId: req.user._id }).sort({ date: -1 });
    res.json(txns);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) { res.status(500).json({ message: err.message }); }
};