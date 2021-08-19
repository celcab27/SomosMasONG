const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const checkAdmin = require('./../middlewares/checkAdmin');
const {
  getAllCategories,
  deleteCategory,
  updateCategory,
  createCategory
} = require('../controllers/CategoriesController');

router.get('/', [verifyToken, checkAdmin], getAllCategories);
router.post('/', [verifyToken, checkAdmin], createCategory);
router.put('/:id', [verifyToken, checkAdmin], updateCategory);
router.delete('/:id', [verifyToken, checkAdmin], deleteCategory);

module.exports = router;
