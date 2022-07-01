const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const multer = require('multer');

router.use(multer().any());



router.post('/resumeDetails', userController.createUser);


module.exports = router;