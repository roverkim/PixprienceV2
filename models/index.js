/////////////////////////////////////////////// /* Monggoose Connection  */ ////////////////////////////////////////////////////////
const mongoose = require('mongoose'); // MongoDB ORM
const mongooseConnection = mongoose.connection;

module.exports = {
  // export the schemas
  User: require("./user"),
  Image: require("./image"),
  connect: (uri) => {
    // plug in the promise library:
    mongoose.Promise = global.Promise; // Set up promises with mongoose

    mongoose.connect( // Connect to the Mongo DB
        process.env.MONGODB_URI || uri);

    mongooseConnection.on("error", console.error.bind(console, "connection error:"));

    mongooseConnection.once("open", function() {
      console.log("Sucessfully Connected to Mongo DB !"); // If Connection is successful, Console.log(Message)
    });

    mongoose.connection.on('error', (err) => {
      console.error(`Mongoose connection error: ${err}`);
      process.exit(1);
    });

    /////////////////////////////////////////////// /* Add New Models Here */ ////////////////////////////////////////////////////////
    require('./user');
    require("./image");
  }

};
