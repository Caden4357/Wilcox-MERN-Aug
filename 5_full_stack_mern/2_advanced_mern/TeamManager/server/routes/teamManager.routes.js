const PlayerController = require("../controllers/player.controller");


module.exports = (app) => {
    app.get('/api/players/list', PlayerController.findAllPlayers);
    app.post('/api/new/player', PlayerController.createNewPlayer);
    app.get('/api/player/:id', PlayerController.findOnePlayer);
    app.put('/api/player/edit/:id', PlayerController.updatePlayer);
    app.delete('/api/player/delete/:id', PlayerController.deletePlayer);
}