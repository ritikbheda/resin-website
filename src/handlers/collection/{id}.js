'use strict';

function handler(req, res, next){
    res.send("collection id reached");
}

module.exports = {get: handler};