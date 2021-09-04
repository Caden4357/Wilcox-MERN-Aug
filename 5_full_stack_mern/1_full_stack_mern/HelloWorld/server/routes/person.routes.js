const pController = require("../controllers/person.controller");

module.exports = (app) => {
    app.get('/api', pController.index);
    app.post('/api/people', pController.createPerson);
}