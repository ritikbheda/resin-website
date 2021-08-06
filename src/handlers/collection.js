'use strict';
const mongoose = require("mongoose");
const Item = require("../../db/model/item");

function addItem(req, res, next){

    console.log(req.body);
    const item = new Item({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })

    item.save()
        .then((result) =>{
            console.log(result)
            res.send("item added!!")
        })
        .catch((err) =>{
            console.log(err)
            res.send("got an error!", err)
        })

}

function deleteItem(req, res, next){
    Item.deleteOne({"name":"Book"})
        .then(result =>{
            console.log(result);
            res.send("we probably just deleted one guy!")
        })
        .catch(err =>{
            console.log("we got this err", err)
            res.send("didnt work.")
        })
}

function updateItem(req, res, next){
    Item.findOne({"name":"mouse"})
        .then(result =>{
            console.log(result)
            result.name = "not mouse";
            result.save();
            res.send("probably going good")
            
        })
        .catch(err =>{
            console.log(err)
            res.send("not going good. work!!")
        })

}


function getItemByID(req, res){
    res.send("sending item by id");
    console.log(req.headers);
}

module.exports = { 
    get: getItemByID,
    post: addItem,
    delete: deleteItem,
    put: updateItem
};