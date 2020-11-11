//Start.js
const app = require('./app');

//Start server
const server = app.listen(3000, () => {
    console.log(`Server is running on port ${server.address().port}`);
});