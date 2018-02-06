var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Note = require('./Notes');

var companySchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    users: {type: Schema.Types.ObjectId,ref: "User"}
});
var Company = module.exports = mongoose.model('Company', companySchema);

module.exports = {
        getCompanies: function(req, res) {
          Company
            .find(req.query)
            // .populate(Note)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addCompany: function(req, res) {
          Company
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getCompaniesById: function(req, res) {
          Company
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateCompany: function(req, res) {
          Company
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deleteCompany: function(req, res) {
          Company
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
