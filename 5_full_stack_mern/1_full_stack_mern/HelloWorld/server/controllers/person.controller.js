const Person = require("../models/person.model");

module.exports = {
    index: (req, res) => {
        res.json({
            message: "Hello"
        });
    },
    findAllUsers: (req, res) => {
        console.log("All Users");
        Person.find({})
        .then((allUsers) => {
            res.json(allUsers);
        })
        .catch((err) => {
            console.log("all users failed");
            res.status(400).json(err);
        })
    },
    findOneUser: (req, res)=>{
        Person.findOne({_id: req.params.id})            
        .then((oneUser)=>res.json(oneUser))
        .catch((err)=>{
            console.log("Find one user failed");
            res.status(400).json(err)  
        })
    },

    createPerson: (req, res) => {
        Person.create(req.body)
        .then((newPerson) => res.json(newPerson))
        .catch((err) => {
            console.log("Create Person Failed");
            res.status(400).json(err)
        })
    },
    updateUser: (req, res) => {
        Person.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedUser => res.json(updatedUser))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    deleteUser: (req, res)=>{
        Person.deleteOne({_id: req.params.id})
        .then((deletedUser)=>res.json({deleted: deletedUser}))
        .catch((err)=>res.json({message: "Errors in deleteUser", error:err}))
    }
}