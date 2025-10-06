// logics of API

const RestaurantModel = require("../models/Restaurant.model")

async function fetchRestaurant(req, res){
    try{
        let data = await RestaurantModel.find() // all db methods returns promise (99.9%)
    if(!data){
        return res.status(404).json({
            message:"Restaurannts are not found"
        })
    }
    return res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({message: "Error while fetching data"})
    }
}

async function createRestaurant(req, res){
    try{
        // console.log(req.body);
        // return res.send(req.body);
        let newRestaurant = await RestaurantModel.create(req.body) // returns promise
        res.status(201).json(newRestaurant)
    }
    catch(err){
        return res.status(500).json({message: "Error while fetching data"})
    }

}

async function updateRestaurant(req, res){
    try{
        // console.log(req.params);
        let {id} = req.params;
        let updatedRestaurant = await RestaurantModel.findByIdAndUpdate(id, req.body, {new:true});
        return res.status(200).json(updatedRestaurant);
    }
    catch(err){
        return res.status(500).json({message: "Error while fetching data"})
    }
}


async function deleteRestaurant(req, res){
    try{
        // console.log(req.params);
        let {id} = req.params;
        let deletedRestaurant = await RestaurantModel.findByIdAndDelete(id, req.body, {new:true});
        return res.status(200).json(deletedRestaurant);
    }
    catch(err){
        return res.status(500).json({message: "Error while fetching data"})
    }
}

module.exports = {createRestaurant, fetchRestaurant, updateRestaurant, deleteRestaurant}
