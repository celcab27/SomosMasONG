const { PublicData } = require('../models');
const log = require('../utils/logger');

module.exports = {
  /**
   * Get publicData
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getPublicData(req, res) {
    try {
      const publicData = await PublicData.findOne({
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt']
        }
      });
      log.info('Seending Public Data');
      res.status(200).json({ publicData: publicData });
    } catch (error) {
      log.error(
        `Error happened trying to send all the activities. Error: [${error.message}]`
      );
      res.status(500).json({ Error: error.message });
    }
  }
};
