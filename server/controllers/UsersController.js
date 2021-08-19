const { User } = require('../models');
const log = require('../utils/logger')

module.exports = {
  /**
   * Get all users
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: {
          exclude: ['password']
        }
      });
      log.info('Sended all the users');
      res.json({ users });
    } catch (err) {
      log.error(`Error happened trying sending the users. Error: [${err.message}]`)
      res.status(500).json({ error: err.message });
    }
  },
  async deleteUser(req, res) {
    try {
      const response = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (response == 1) res.sendStatus(204)
      else res.sendStatus(404)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
};
