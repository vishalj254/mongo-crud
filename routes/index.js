var express = require("express");
var router = express.Router();
var User = require("./model/userModel");
/* GET home page. */
router.get("/", function (req, res) {
  User.find({}, function (err, data) {
    if (err) {
      res.status(500).json({ status: false, message: err });
    } else {
      res.status(200).json({ status: true, data, message: "Data found!" });
    }
  });
});

router.get("/:_id", function (req, res) {
  const { _id } = req.params;
  User.findOne({ _id }, function (err, data) {
    if (err) {
      res.status(500).json({ status: false, message: err });
    } else {
      res.status(200).json({ status: true, data, message: "Data found!" });
    }
  });
});

router.post("/", function (req, res) {
  const user = new User(req.body);
  user.save(function (err, data) {
    if (err) {
      res.status(500).json({ status: false, message: err.toString() });
    } else {
      res.status(200).json({ status: true, data, message: "User Created!" });
    }
  });
});

router.put("/:_id", function (req, res) {
  const { _id } = req.params;
  User.findOneAndUpdate({ _id }, req.body, { new: true }, function (err, data) {
    if (err) {
      res.status(500).json({ status: false, message: err.toString() });
    } else {
      res
        .status(200)
        .json({ status: true, data, message: "User updated successfully!" });
    }
  });
});

router.delete("/:_id", function (req, res) {
  const { _id } = req.params;
  User.findOneAndDelete({ _id }, function (err, data) {
    if (err) {
      res.status(500).json({ status: false, message: err.toString() });
    } else {
      res
        .status(200)
        .json({ status: true, data, message: "User deleted successfully!" });
    }
  });
});

module.exports = router;
