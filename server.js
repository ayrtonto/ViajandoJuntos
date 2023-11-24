const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require("mongoose");
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
let User=require('./models/User');

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/details", {
  useNewUrlParser: true
});


const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
