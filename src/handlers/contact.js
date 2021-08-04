'use strict';

function handler(req, res){
    console.log("contact page");
    res.send("contact page");
}

module.exports = {get: handler};