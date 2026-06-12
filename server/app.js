const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");
const blockRoutes = require("./routes/blockRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const summaryRoutes = require("./routes/summaryRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.CLIENT_URL,
    ],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "GreatNotes API Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/blocks", blockRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/summary", summaryRoutes);
app.use("/api/todos", todoRoutes);

module.exports = app;