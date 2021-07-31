var express = require("express");
var app = express();
const mongoose = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



mongoose
  .connect("mongodb+srv://saim:saim1234@cluster0.qv7jb.mongodb.net/freelance?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


  const userRoutes = require("./api/routes/user");
  const hobbiesRoutes = require("./api/routes/hobbies");
  app.use("/user", userRoutes);
  app.use("/hobby", hobbiesRoutes);




  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server is running on port ${port}`));