const router = require("express").Router();
const db = require("../../models")

// Matches with "/api/books"
router.route("/")
  .get(function(req, res){
    db.Coach.find().then(results => {
        res.json(results)
    }).catch(err => res.status(422).json(err));
  })
  .post(function(req, res){
    db.Coach.create(req.body).then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  });

router.route("/:coachId/events")
  .post(function(req, res){
    // db.Coach.findById(req.params.coachId).then(results => )
  })

module.exports = router;