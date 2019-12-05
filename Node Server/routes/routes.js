const express = require('express');
const router = express.Router();

// controllers
const watsonVisualRecognitionController = require('../controllers/watsonVisualRecognitionController');

router.post('/inputData', watsonVisualRecognitionController.inputData);

module.exports = router;