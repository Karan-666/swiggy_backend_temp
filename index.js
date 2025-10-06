
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const restaurantRoutes = require("./routes/restaurant.route"); // in case of require .js in not mandatory
const userRoutes = require("./routes/user.route");

// local db
// mongoose.connect('mongodb://127.0.0.1:27017/SWIGGY_BACKEND') 

// cloud db
mongoose.connect('mongodb+srv://karankumar00619_db_user:AVAJIc5Ss1xMAVsp@cluster0.oocrlrf.mongodb.net/')
.then(()=>{
    console.log("DB created successfuly");
})
.catch((err)=>{
    console.log("Error: ",err);
})

app.use(express.json()) // middleware for req.body, as by default req.body is undefined
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Welcome to root route!!");
})

const port = 8080;

app.listen(port, ()=>{
    console.log("Server connected successfuly!");
})

restaurantRoutes(app);
userRoutes(app);

// karankumar00619_db_user
// AVAJIc5Ss1xMAVsp