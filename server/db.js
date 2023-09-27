const mongoose = require("mongoose");

const connectToMongo = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // You can choose to handle the error in a way that makes sense for your application,
    // such as throwing an error, exiting the application, or taking other appropriate action.
  }
};

module.exports = connectToMongo;
