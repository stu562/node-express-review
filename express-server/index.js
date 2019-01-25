const express = require('express');
http = require('http');
//middleware 
const PORT = 3000;
const path = require('path');
const routes = require('./routes.js')
const parser = require('body-parser');
const app = express();

app.use(parser.json()); //takes incoming request and turn into a string 
//nicely into one line 
app.use(parser.urlencoded({
    extended: true
})); //converts readiable text to our language,
//takes out random characters 
app.use('/api', routes); //******************* */
app.use(express.static(path.resolve(__dirname, "../static")));
//leads to index.html,(the static file) - use this file to host the server 






// http.createServer(app).listen(1337); console.log('express server is listen on port 1337')
app.listen(PORT, () => console.log('app is listening yo', PORT))