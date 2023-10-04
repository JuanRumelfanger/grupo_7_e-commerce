const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img/avatars');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
    const ext = path.extname(file.originalname);
    const extensionIsOk = acceptedExtensions.includes(ext);
    if (!extensionIsOk) {
      req.file = file;
    }
    cb(null, extensionIsOk);
  },
});

module.exports = upload;
