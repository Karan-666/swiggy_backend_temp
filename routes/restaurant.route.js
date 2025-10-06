// apis

const { fetchRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } = require("../controllers/restaurant.controller");
const verifyToken = require("../middleware/verifyToken");

function restaurantRoutes(app){
    // read
    app.get('/api/restaurants', fetchRestaurant )
    // write
    app.post('/api/restaurant', verifyToken, createRestaurant )
    // update
    app.patch('/api/restaurant/:id', updateRestaurant )
    // delete
    app.delete('/api/restaurant/:id', deleteRestaurant )

}

module.exports = restaurantRoutes;