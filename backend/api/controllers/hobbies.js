const Hobbies = require('../models/hobbies');

exports.create_hobby = (req, res) => {
    const hobbies = new Hobbies(req.body);
  
    hobbies
      .save()
      .then((response) => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch((err) => {
        console.log(err);
  
        res.status(500).json(response);
      });
  };
  
  exports.get_all_hobbies = (req, res) => {
    Hobbies.find({})
      .exec()
      .then((docs) => {
        console.log(docs);
  
        res.status(200).json(docs);
      })
      .catch((err) => {
        console.log(err);
  
        res.status(500).json({
          error: err,
        });
      });
  };
  
  exports.edit_hobby = (req, res) => {
    Hobbies.update({ _id: req.params.id }, { $set: req.body })
      .exec()
      .then((docs) => {
        console.log(docs);
        res.status(200).json({
          message: "hobby edited successfully",
          _id: req.params.id,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  };
  
  exports.delete_hobby = (req, res) => {
    Hobbies.deleteOne({ _id: req.params.id })
      .exec()
      .then((docs) => {
        console.log(docs);
        res.status(200).json({
          message: "hobby deleted successfully",
          _id: req.params.id,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  };
  