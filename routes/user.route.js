const { register, login } = require("../controllers/user.controller");


function userRoutes(app){
    // sign up
    app.post('/api/register', register )
    // login
    app.post('/api/login', login )

}

module.exports = userRoutes;