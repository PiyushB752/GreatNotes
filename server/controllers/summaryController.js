const {
  generateSummary,
} = require(
  "../services/geminiService"
);

exports.generateSummary =
  async (req, res) => {
    try {
      const { text } =
        req.body;

      if (!text) {
        return res
          .status(400)
          .json({
            message:
              "Text is required",
          });
      }

      const summary =
        await generateSummary(
          text
        );

      res.json({
        success: true,
        summary,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };