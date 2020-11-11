//Instance of Comments Model
var Comments = require('../models/commentsModel');

//Main controller, called when home page is accessed
exports.index = function (req, res) {
    //Model function to get the comments already saved
    Comments.getComments(function (error, data) {
        if (error) {
            console.log("ERROR : ", error);
        }
        //Render home page
        res.render('home', {title: 'Text to Speech', comments: data, alert: {}});
    });
};

//Controller called when the form to save a comment is submitted
exports.saveComment = function (req, res) {
    //Model function to save a comment
    Comments.saveComment(req.body, function (error) {
        if (error) {
            console.log("ERROR : ", error);
        }
        //Redirect the page
        res.redirect('/');
    });
};