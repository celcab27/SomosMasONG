const { Entry } = require('../models');
const log = require('../utils/logger')

module.exports = {
  /**
   *@module controllers
   */
  /**
   * Get all the entries with type 'news'
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getNews(req, res) {
    log.info('Sending all the entries')
    try {
      const news = await Entry.findAll({
        where: { type: 'news' },
        attributes: ['name', 'image', 'createdAt', 'id']
      });

      log.info('Sended entries with category: news')
      res.json({ news });
    } catch (error) {
      log.warn(`Something went wrong. Error: [${error.message}]`)
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * Get the details for the entry with the specific id
   * @param {import('express').Request} req
   * @param {import('express').Response } res
   */
  async getNewsDetail(req, res) {
    const id = req.params.id
    log.info(`Getting details from entry with id [${id}]`)
    try {
      const newsDetail = await Entry.findByPk(id);
      if(newsDetail === null){
        log.warn(`Entry with id [${id}] does not exist`);
        res.status(404).end();
      } else {
        log.info(`Sended details for entry with id [${id}]`)
        res.json({ newsDetail });
      }
    } catch (error) {
      log.error(`Error happened trying to send entry details. Error: [${error.message}]`)
      res.status(500).json({ error: error.message });
    }
  },

  async postNew(req, res) {
    log.info('Creating new entry')
    try{
      const newPost = await Entry.create(req.body)
      log.info('New entry created')
      res.json(newPost);
    } catch (err) {
      log.error(`Error happened trying create new entry. Error: [${err.message}]`)
      res.status(500).json({ error: err.message });
    }
  },

  /** Update an entry
   * @function putNew
   * @param {import('express').Request} req
   * @param {import('express').Response } res
   */
  async putNew (req, res) {
    log.info('Editing an entry')
    const id = req.params.id
    try{
      const entry = await Entry.findByPk(id);

      if(!entry){
        log.warn(`Entry with id [${id}]`)
        res.status(404).json({Error: "Entry not found"});
      } 

      const operation = await entry.update(req.body);

      if(operation){
        log.info(`Entry with id [${id}] was edited`)
        res.status(200).json(entry);
      } 
      
    } catch(err) {
      log.error(`Error happened trying to edit an entry. Error: [${err.message}]`)
      res.status(500).json({Error: err})
    }
  },

  /**
   * Deletes an entry
   * @function deleteNew
   * @param {import('express').Request} req
   * @param {import('express').Response } res 
   * @returns 404 && "Entry not found" // 200 && "Entry successfully deleted" // 500 && Server error
   */
  async deleteNew(req, res) {
    log.info('Deleting an entry')
    const id = req.params.id
    try {
      const entry = await Entry.findByPk(id);

      if(!entry){
        log.warn(`Entry with id [${id}] not found`)
        return res.status(404).json({Error: "Entry not found"});
      } 
        
      const operation = entry.destroy();

      if(operation){
        log.info(`Entry with id [${id}] was deleted`)
        res.status(200).json("Entry successfully deleted");
      } 
    } catch(err){
      log.error(`Error happened trying delete an entry. Error: [${err.message}]`)
      res.status(500).json({ Error: err });
    }
  }
};
