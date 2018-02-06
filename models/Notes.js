var mongoose = require('mongoose');

var notesSchema = new mongoose.Schema({
  id: String,
  name: String,
  body: String
});

const Note = module.export = mongoose.model('Note', notesSchema);

module.exports = {
        getNotes: function(req, res) {
          Note
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addNote: function(req, res) {
          Note
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getNotesById: function(req, res) {
          Note
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateNote: function(req, res) {
          Note
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deleteNote: function(req, res) {
          Note
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
