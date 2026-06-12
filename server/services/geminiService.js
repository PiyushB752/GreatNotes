const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const generateSummary = async (
    text
) => {
    const response =
        await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Summarize the following study material. Keep it concise. Keep important concepts. Maximum 250 words. Text: ${text}`
        });
    return response.text;
};

module.exports = {
    generateSummary,
};