var express = require("express");
var router = express.Router();

var Movie = require("../models/Movies.js");

/* GET /movies listing. */
router.get("/", function(req, res, next) {
  Movie.find(function(err, movies) {
    if (err) return next(err);
    res.json(movies);
  });
});

/* POST /movies */
router.post("/", function(req, res, next) {
  Movie.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /movies/id */
router.get("/:id", function(req, res, next) {
  Movie.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /movies/:id */
router.put("/:id", function(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /movies/:id */
router.delete("/:id", function(req, res, next) {
  Movie.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
