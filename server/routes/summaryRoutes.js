const express =
  require("express");

const router =
  express.Router();

const protect =
  require(
    "../middleware/authMiddleware"
  );

const {
  generateSummary,
} = require(
  "../controllers/summaryController"
);

router.post(
  "/generate",
  protect,
  generateSummary
);

module.exports = router;