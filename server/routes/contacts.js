const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const {
  createContact,
  getAllContacts,
  deleteContact
} = require('../controllers/ContactsController');

router.post('/', createContact);
router.get('/', [verifyToken, checkAdmin], getAllContacts);
router.delete('/:id', [verifyToken, checkAdmin], deleteContact );

module.exports = router;
