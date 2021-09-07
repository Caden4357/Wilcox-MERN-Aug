const pController = require("../controllers/person.controller");

module.exports = (app) => {
    app.get('/api', pController.index);
    app.post('/api/newUser', pController.createPerson);
    app.get('/api/users/:id', pController.findOneUser);
    app.put('/api/user/:id', pController.updateUser);
    app.delete('/api/user/:id', pController.deleteUser);
}