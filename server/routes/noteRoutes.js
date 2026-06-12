const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/authMiddleware"
);

const {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
} = require(
  "../controllers/noteController"
);

router.use(protect);

router.post("/", createNote);

router.get("/", getNotes);

router.get("/:id", getNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;