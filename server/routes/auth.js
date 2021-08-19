const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const AuthController = require('../controllers/AuthController');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/me', [verifyToken], AuthController.getCurrentUserInfo);

module.exports = router;
