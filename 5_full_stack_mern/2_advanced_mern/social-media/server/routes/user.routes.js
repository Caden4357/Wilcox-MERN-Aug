const UserController = require('../controllers/user.controller')

module.exports = (app) => {
    app.post('/api/user/register', UserController.register);
    app.put("/api/user/upload/:id", UserController.changePic);
    app.post('/api/user/login', UserController.login);
    app.post('/api/user/logout', UserController.logout);
    app.get('/api/user/:id', UserController.getOneUser);
    app.get('/dashboard', UserController.viewAll);
}