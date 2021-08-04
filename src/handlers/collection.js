'use strict';

function getItemByID(req, res){
    res.send("sending item by id");
    console.log(req.headers);
}

module.exports = { get: getItemByID};