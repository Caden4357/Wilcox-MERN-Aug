const Player = require("../models/teamManager.models");


module.exports = {

findAllPlayers: (req,res)=>{
    console.log("All the players!");
    Player.find({})
    .then((allPlayers) => {
        res.json(allPlayers);
    })
    .catch((err)=>{
        console.log("Get all players failed");
        res.status(400).json(err);
    })
},

findOnePlayer: (req, res)=>{
    console.log("inside single player function")
    Player.findOne({_id: req.params.id})            
    .then((onePlayer)=>res.json(onePlayer))
    .catch((err)=>{
        console.log("Find one player failed");
        res.status(400).json(err)  
    })
},

createNewPlayer: (req, res)=>{
    console.log("inside create function")
    Player.create(req.body)
    .then((newPlayer)=> res.json(newPlayer))
    .catch((err)=> {
        console.log("Create players failed");
        res.status(400).json(err)
    })
},

updatePlayer: (req, res) => {
    Player.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
},

deletePlayer: (req, res)=>{
    Player.deleteOne({_id: req.params.id})
    .then((deletedPlayer)=>res.json({deleted: deletedPlayer}))
    .catch((err)=>res.json({message: "Errors in deleteplayer", error:err}))
}
}