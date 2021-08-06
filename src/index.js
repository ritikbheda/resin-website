const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const swaggerize = require("swaggerize-express");
const swagger = require('./config/swagger.json');

require("dotenv").config();

app = express();

var server = http.createServer(app);

mongoose.connect(`mongodb+srv://ritikbheda:${process.env.password}@cluster0.nxuez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use(swaggerize({
    api: swagger,
    handlers: './handlers'
}))
//console.log(server.address().address);
app.listen(3000, () =>{
    console.log("App is up!");
})

// server.listen(function(){
//     app.swagger.api.host = server.address().address + ':' + server.address().port;
// })
