//routes/index.js
const express = require('express');

const router = express.Router();

//Base url
router.get('/', (req, res) => {
    //Redirect to comments
    res.redirect('/comments');
});

module.exports = router;