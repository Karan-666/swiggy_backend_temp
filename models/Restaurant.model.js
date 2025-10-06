
const mongoose = require("mongoose")

// scheme

const restaurantSchema = new mongoose.Schema({
    name : String,
    imageUrl : String,
    rating : String,
    cuisines : String,
    deliverytime : String,
});

// model

// vscode variable (RestaurantModel) , collection name in db (Restaurants), schema name (restaurantSchema)
const RestaurantModel = mongoose.model('Restaurants', restaurantSchema)

// export default RestaurantModel;
module.exports = RestaurantModel;
