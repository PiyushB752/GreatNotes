const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isImage =
      file.mimetype.startsWith("image");

    return {
      folder: isImage
        ? "great-notes/images"
        : "great-notes/audio",

      resource_type: isImage
        ? "image"
        : "video",

      public_id:
        Date.now().toString(),
    };
  },
});

module.exports = multer({
  storage,
});