var express = require("express");
var router = express.Router();
const { firebase } = require("../config/fiebase/index");
// const firebaseui = require("firebaseui");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", firebase });
});

module.exports = router;
