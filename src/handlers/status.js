'use strict';

function handler(req, res){
    res.send("ok");
    console.log("stutus reached");
}

module.exports = {get: handler};