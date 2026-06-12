const Todo = require("../models/Todo");

exports.createTodo = async (
  req,
  res
) => {
  try {
    const todo =
      await Todo.create({
        title: req.body.title,
        user: req.user._id,
      });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getTodos = async (
  req,
  res
) => {
  try {
    const { filter } =
      req.query;

    let query = {
      user: req.user._id,
    };

    if (filter === "completed") {
      query.completed = true;
    }

    if (filter === "pending") {
      query.completed = false;
    }

    const todos =
      await Todo.find(query).sort({
        createdAt: -1,
      });

    res.json(todos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateTodo = async (
  req,
  res
) => {
  try {
    const todo =
      await Todo.findOneAndUpdate(
        {
          _id: req.params.id,
          user: req.user._id,
        },
        req.body,
        {
          new: true,
        }
      );

    res.json(todo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteTodo = async (
  req,
  res
) => {
  try {
    await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};