var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Note = require('./Notes');

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    userImage: {
      data: Buffer,
      contentType:String,
      required: false
    },
    resume: String,
    bio: String,
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});
var User = module.exports = mongoose.model('User', userSchema);

module.exports = {
        getUsers: function(req, res) {
          User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addUser: function(req, res) {
          User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getUsersById: function(req, res) {
          User
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateUser: function(req, res) {
          User
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deleteUser: function(req, res) {
          User
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
