const Note = require("../models/Note");

exports.addBlock = async (
  req,
  res
) => {
  try {
    const note =
      await Note.findOne({
        _id: req.params.noteId,
        user: req.user._id,
      });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    note.blocks.push(req.body);

    await note.save();

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateBlock = async (
  req,
  res
) => {
  try {
    const note =
      await Note.findOne({
        _id: req.params.noteId,
        user: req.user._id,
      });

    const block =
      note.blocks.id(
        req.params.blockId
      );

    Object.assign(
      block,
      req.body
    );

    await note.save();

    res.json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteBlock = async (
  req,
  res
) => {
  try {
    const note =
      await Note.findOne({
        _id: req.params.noteId,
        user: req.user._id,
      });

    note.blocks.pull(
      req.params.blockId
    );

    await note.save();

    res.json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

