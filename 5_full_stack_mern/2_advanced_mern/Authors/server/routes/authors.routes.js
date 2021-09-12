const AuthorControler = require("../controllers/controller.authors");

//we are exporting an arrow function with a parameter of app that contains five statements.
// We import in server.js like this: require("./routes/cartoon.routes")(app);

module.exports = (app) => {
    app.get('/api/authors', AuthorControler.findAllAuthors);
    //if data is being sent to my server to create something new, we use a POST request
    app.post('/api/new/author', AuthorControler.addNewAuthor);
    //Make sure this goes second (with the params) because it will search this one by default.
    app.get('/api/author/:id', AuthorControler.findOneAuthor);
    app.put('/api/author/edit/:id', AuthorControler.updateAuthor);
    app.delete('/api/author/delete/:id', AuthorControler.deleteAuthor);
}