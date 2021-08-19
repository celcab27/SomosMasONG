const express = require('express');
const router = express.Router();
const { getPublicData } = require('../controllers/PublicDataController');

router.get('/', getPublicData);

module.exports = router;
