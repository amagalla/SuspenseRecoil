const express = require('express');
const animeController = require('../controllers/animeController.js');
const router = express.Router();

// get request

// Finds and displays all shows in data base in json
router.get('/getShow', animeController.getShow, (req, res) => {
  res.status(200).json(res.locals.getShow);
});

// Posts content to mongoDB
router.post('/postShow', animeController.postShow, (req, res, next) => {
  res.status(200).json('hello');
});

// Delets data from MongoDB
router.delete(
  '/deleteShow/:id',
  animeController.deleteShow,
  (req, res, next) => {
    res.status(200).json({});
  }
);

module.exports = router;
