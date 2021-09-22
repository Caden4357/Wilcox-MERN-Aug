const CartoonController = require("../controllers/cartoon.controller");
const {authenticate} = require('../config/jwt.config');

//we are exporting an arrow function with a parameter of app that contains five statements.
// We import in server.js like this: require("./routes/cartoon.routes")(app);

module.exports = (app) => {
    app.get('/api/allCartoons', CartoonController.findAllCartoons);
    //if data is being sent to my server to create something new, we use a POST request
    app.post('/api/cartoons', authenticate, CartoonController.createNewCartoon);
    //Make sure this goes second (with the params) because it will search this one by default.
    app.get('/api/cartoons/:id', CartoonController.findOneCartoon);
    app.put('/api/cartoons/:id', CartoonController.updateCartoon);
    app.delete('/api/cartoons/:id', CartoonController.deleteCartoon);
}