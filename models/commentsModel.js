//Db instance
var db = require('../config/database');
//IBM Watson instance
var ibmWatson = require('../config/ibm-watson');
//File system instance
var fs = require('fs');

//Get the comments from db
exports.getComments = function (callback) {
    db.query('SELECT comment, file FROM comments', (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            var comments = [];
            result.forEach(function(row) {
                comments.push(row);
            });
            callback(null, comments);
        }
    });
}

//Save comment in db
exports.saveComment = function (data, callback) {
    db.query('INSERT INTO comments SET ?', data, (error, result) => {
        if (error) {
            callback(error);
        }
        else {
            //If query is succeed, call the function to get the comment audio
            textToSpeechFile(result.insertId, data.comment, function (error) {
                if (error) {
                    callback(error);
                }
                else {
                    callback(null);
                }
            });
        }
    });
}

//Function to get the audio file of the comment
function textToSpeechFile (commentId, commentText, callback) {
    var params = {
        text: commentText,
        voice: 'pt-BR_IsabelaV3Voice', //Voice used
        accept: 'audio/wav'//Audio file type
    };
    ibmWatson.textToSpeech
        .synthesize(params)
        .then(response => {
            //Repair the audio
            const audio = response.result;
            return ibmWatson.textToSpeech.repairWavHeaderStream(audio);
        })
        .then(repairedFile => {
            //Write file on folder public/audio/
            var filename = __dirname + '/../public/audio/audio' + commentId + '.wav';
            fs.writeFileSync(filename, repairedFile);
            //If file exists, update the db field with the path of the file
            fs.exists(filename, function (exists) {
                if (exists) {
                    db.query(
                        "UPDATE comments SET file = '/audio/audio" + commentId + ".wav' WHERE id = " + commentId,
                        (error) => {
                            if (error) {
                                console.log(error);
                                callback(error)
                            }
                            else {
                                callback(null);
                            }
                        }
                    );
                }
            });
        })
        .catch(err => {
            console.log(err);
            callback(err);
        });
}