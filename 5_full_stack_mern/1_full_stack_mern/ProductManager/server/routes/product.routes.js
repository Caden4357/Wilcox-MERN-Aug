const ProductController = require("../controllers/product.controller");

//we are exporting an arrow function with a parameter of app that contains five statements.
// We import in server.js like this: require("./routes/cartoon.routes")(app);

module.exports = (app) => {
    app.get('/api/products', ProductController.findAllProducts);
    //if data is being sent to my server to create something new, we use a POST request
    app.post('/api/newProduct', ProductController.createNewProduct);
    //Make sure this goes second (with the params) because it will search this one by default.
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}