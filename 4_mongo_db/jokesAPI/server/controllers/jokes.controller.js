const Joke = require("../models/jokes.model");

module.exports = {

    findAllJokes: (req, res) => {
        Joke.find({})
        .then((allJokes) => {
            res.json(allJokes);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    },
    createJoke: (req, res) => {
        Joke.create(req.body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => {
            res.status(400).json(err)
        })
    },
    findOneJoke: (req, res) => {
        Joke.findOne({_id: req.params.id})
        .then((oneJoke) => res.json(oneJoke))
        .catch((err) => {
            res.status(400).json(err)
        })
    },
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json({ message: "something went wrong",  error: err}))
    },
    deleteJoke: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
        .then((deletedJoke) => res.json({deleted: deletedJoke}))
        .catch((err) => res.json({message: "Errors in deleteJoke", error:err}))
    }
}
