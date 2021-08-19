const multer = require('multer');
const storage = multer.memoryStorage({
  destination: function (req, res, callback) {
    callback(null, '');
  }
});

/**Uses multer to manage image provided by the user (the image should be sent in the body with key "image").
 * @function upload
 * @example
 * const {upload} = require('middlewares/manageFiles');
 * router.get('/image', upload, getFile);
 */
const upload = multer({ storage }).single('image');

module.exports = upload;
