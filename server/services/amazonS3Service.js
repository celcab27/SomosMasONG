/**@module amazonS3Service */
require('dotenv/config');
const AWS = require('aws-sdk');

//Config info
const region = process.env.AWS_BUCKET_REGION;
const accessKeyID = process.env.AWS_ACCESS_KEY;
const secretKeyID = process.env.AWS_SECRET_KEY;
const bucket = process.env.AWS_BUCKET_NAME;

AWS.config.update({
  accessKeyId: accessKeyID,
  secretAccessKey: secretKeyID,
  region: region
});

const s3 = new AWS.S3();

module.exports = {
  /**This function post a file in AWS S3
   * @function postFile
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns -201 & Created object // 500 & Server error
   */
  async postFile(req, res) {
    const file = req.file;

    //Spaces in a file name can be troublesome if we want to use them as ID's
    const fileName = file.originalname.replace(/ /g, '-');

    console.log(bucket);
    const params = {
      Bucket: bucket,
      Key: fileName,
      Body: file.buffer
    };

    s3.upload(params, (error, data) => {
      if (error) return res.status(500).json({ Error: error });

      return res.status(201).json({ Data: data });
    });
  },

  /**This function get a file from AWS S3
   * @function postFile
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns -200 & File // 500 & Server error
   */

  async getFile(req, res) {
    const id = req.params.id;

    const params = {
      Bucket: bucket,
      Key: id
    };

    s3.getObject(params, (error, data) => {
      if (error) return res.status(500).json({ Error: error });

      return res.status(200).json({ Data: data });
    });
  },

  /**This function deletes a file from AWS S3
   * @function postFile
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns -200 & "File successfully deleted" // 500 & Server error
   */
  async deleteFile(req, res) {
    const id = req.params.id;

    const params = {
      Bucket: bucket,
      Key: id
    };

    s3.deleteObject(params, (error) => {
      if (error) return res.status(500).json({ Error: error });

      return res.status(200).json('File successfully deleted');
    });
  }
};
