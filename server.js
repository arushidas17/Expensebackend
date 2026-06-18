const express = require("express");
const cors    = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();  // ✅ app created FIRST

connectDB();

app.use(cors());
app.use(express.json());

// ✅ ALL routes AFTER app
app.use("/api/auth",         require("./routes/authRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));
app.use("/api/user",         require("./routes/userRoutes"));

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));