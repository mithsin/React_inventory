const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(express.static("client/public"));
// Set up promises with mongoose
mongoose.Promise = global.Promise;

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/EHF",
  {
    useMongoClient: true
  }
);
const routes = require("./controllers/lhController");
app.use(routes);

//------------------------------------------------------------------------------
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
