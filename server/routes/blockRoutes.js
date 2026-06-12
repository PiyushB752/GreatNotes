const express =
  require("express");

const router =
  express.Router();

const protect =
  require(
    "../middleware/authMiddleware"
  );

const {
  addBlock,
  updateBlock,
  deleteBlock,
} = require(
  "../controllers/blockController"
);

router.use(protect);

router.post(
  "/:noteId",
  addBlock
);

router.put(
  "/:noteId/:blockId",
  updateBlock
);

router.delete(
  "/:noteId/:blockId",
  deleteBlock
);

module.exports = router;