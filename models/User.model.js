
const mongoose = require("mongoose")

// scheme

const userSchema = new mongoose.Schema({
    email : String,
    user_name : String,
    password : String
});

// model

// vscode variable (RestaurantModel) , collection name in db (Restaurants), schema name (userSchema)
const UserModel = mongoose.model('users', userSchema)

// export default RestaurantModel;
module.exports = UserModel;
