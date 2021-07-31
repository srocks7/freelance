const User = require('../models/user');


exports.create_user = (req, res) => {
  const user = new User(req.body);

  user
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

exports.get_all_user = (req, res) => {
    User.find({})
  .populate("hobbies")
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

exports.get_all_user_by_hobbies = (req, res) => {
  User.find({ hobbies: req.params.id })
    .populate("hobbies")
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

exports.edit_user = (req, res) => {
  User.update({ _id: req.params.id }, { $set: req.body })
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json({
        message: "User edited successfully",
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

exports.delete_user = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json({
        message: "User deleted successfully",
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
