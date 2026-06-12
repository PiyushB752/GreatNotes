const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        blocks: [
            {
                type: {
                    type: String,
                    required: true,
                    enum: [
                        "text",
                        "definition",
                        "image",
                        "voice",
                        "youtube",
                        "summary",
                    ],
                },

                content: {
                    type: String,
                    default: "",
                },

                term: {
                    type: String,
                    default: "",
                },

                definition: {
                    type: String,
                    default: "",
                },

                createdAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Note",
    noteSchema
);