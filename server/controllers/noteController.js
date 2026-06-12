const Note = require("../models/Note");

exports.createNote = async (
  req,
  res
) => {
  try {
    const note = await Note.create({
      title: req.body.title,
      user: req.user._id,
      blocks: [],
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getNotes = async (
  req,
  res
) => {
  try {
    const {
      search = "",
      sort = "latest",
    } = req.query;

    const query = {
      user: req.user._id,
      title: {
        $regex: search,
        $options: "i",
      },
    };

    const sortOption =
      sort === "oldest"
        ? { createdAt: 1 }
        : { createdAt: -1 };

    const notes =
      await Note.find(query).sort(
        sortOption
      );

    res.json(notes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getNote = async (
  req,
  res
) => {
  try {
    const note =
      await Note.findOne({
        _id: req.params.id,
        user: req.user._id,
      });

    if (!note) {
      return res
        .status(404)
        .json({
          message:
            "Note not found",
        });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateNote = async (
  req,
  res
) => {
  try {
    const note =
      await Note.findOneAndUpdate(
        {
          _id: req.params.id,
          user: req.user._id,
        },
        {
          title: req.body.title,
        },
        {
          new: true,
        }
      );

    res.json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteNote = async (
  req,
  res
) => {
  try {
    await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    res.json({
      success: true,
      message:
        "Note deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};