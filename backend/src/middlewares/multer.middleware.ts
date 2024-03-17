import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let path;
    if (file.fieldname == "post_image") {
      path = "./public/posts";
    } else {
      path = "./public/users";
    }
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

export const upload = multer({ storage });
