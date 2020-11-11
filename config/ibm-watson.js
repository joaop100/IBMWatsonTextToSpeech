//IBM Watson Text to Speech
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
//IBM Watson Authenticator
const { IamAuthenticator } = require('ibm-watson/auth');


//Authenticate
const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({ apikey: 'T2eRxKL-tC1rrnqLvVSm4yZ5MA_vmC68SdGZ8HEUqTEo'}),
    serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/bf537bd5-afbf-4336-8a12-2c0ba3f27a83'
});

module.exports = {textToSpeech: textToSpeech};
