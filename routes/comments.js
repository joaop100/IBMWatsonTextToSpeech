//routes/comments.js
const express = require('express');
const router = express.Router();

//Instance of comments controller
var comments_controller = require('../controllers/commentsController');

//Base
router.get('/', comments_controller.index);

//Route to save a comment
router.post('/create', comments_controller.saveComment);

module.exports = router;