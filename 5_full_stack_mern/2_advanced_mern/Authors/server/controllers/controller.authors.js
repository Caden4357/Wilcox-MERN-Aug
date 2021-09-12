const Author = require('../models/models.authors');

module.exports = {
    findAllAuthors: (req, res) => {
        Author.find({})
            .then((allAuthors) => {
                res.json(allAuthors);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    findOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then((oneAuthor) => res.json(oneAuthor))
            .catch((err) => {
                console.log("find one author failed");
                res.status(400).json(err)
            })
    },
    addNewAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => res.json(newAuthor))
            .catch((err) => {
                console.log('create author failed');
                res.status(400).json(err)
            })
    },
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch((err) => res.status(400).json(err))
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((deletedAuthor) => res.json({deleted: deletedAuthor}))
            .catch((err) => res.status(400).json(err))
    }
}

