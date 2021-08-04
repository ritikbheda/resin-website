const express = require("express");
const http = require("http");
const swaggerize = require("swaggerize-express");
const swagger = require('./config/swagger.json');

app = express();

var server = http.createServer(app);

app.use(swaggerize({
    api: swagger,
    handlers: './handlers'
}))

app.listen(3000, () =>{
    console.log("App is up!");
})

// server.listen(post, 'localhost', function(){
//     app.swagger.api.host = server.address().address + ':' + server.address().port;
// })
