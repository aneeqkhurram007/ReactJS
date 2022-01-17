const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const User = require("../Models/User");

AWS.config.update({
  accessKeyId: "AKIAI3BPRR6UJDH4YPFA",
  secretAccessKey: "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",
});

const S3 = new AWS.S3();
const isAllowedMimetype = (mime) =>
  [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/x-ms-bmp",
    "image/webp",
  ].includes(mime.toString());
const fileFilter = (req, file, callback) => {
  // console.log('---------------------------------------');
  // console.log('---------- in file -----------------------------');
  // // console.log();
  // console.log('---------------------------------------');
  // console.log('---------------------------------------');
  const fileMime = file.mimetype;
  if (isAllowedMimetype(fileMime)) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};
const getUniqFileName = (originalname) => {
  const ext = originalname.split(".").pop();
  // console.log("filename", originalname)
  return `${originalname}.${ext}`;
};

module.exports = {
  fileFilter,
  storage: multerS3({
    s3: S3,
    bucket: "nft-marketplace-development",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const fileName =
        (Math.random() + 1).toString(36).substring(7) +
        getUniqFileName(file.originalname)
          .replace(/[^a-z0-9]/gi, "_")
          .toLowerCase() +
        "";
      const s3_inner_directory = req.userId + "";
      const finalPath = `${s3_inner_directory}/${fileName}`;

      file.newName = fileName;
      User.update(
        {
          avatar_url:
            "https://nft-marketplace-development.s3.us-east-2.amazonaws.com/" +
            finalPath,
        },
        { where: { id: req.userId } }
      );
      cb(null, finalPath);
    },
  }),
};
