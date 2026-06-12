exports.uploadFile = async (
  req,
  res
) => {
  try {
    res.json({
      fileUrl: req.file.path,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};