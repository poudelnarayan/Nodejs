const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Narayan:UQWCCCZcNfYmzYrd@cluster0.nh7pm.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected to MongoDB");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
