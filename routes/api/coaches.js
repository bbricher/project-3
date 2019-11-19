const router = require("express").Router();
const db = require("../../models")
const axios = require("axios")

// Matches with "/api/coaches"
router.route("/")
  .get(function(req, res){
    db.Coach.find().then(results => {
        res.json(results)
    }).catch(err => res.status(422).json(err));
  })
  .post(function(req, res){
      // console.log(req.headers) // req.headers

      var url = `${req.headers.iss}api/v2/users/${req.headers.sub}`

      // console.log(req.headers.idtoken)
      axios({
        url,
        method: 'GET',
        headers: {Authorization: `Bearer ${req.headers.idtoken}`}
      }).then(user => {
        db.Coach.findOne({ email: user.data.email }).then(results => {
          if (results.length === 0) {
            db.Coach.create({
              sub: req.headers.sub,
              email: user.data.email
            }).then(user => res.json(user))
            .catch(err => res.status(400).json(err));
          } else {
            res.json(results)
          }
          
        })
      })
  });


router.route("/:coachId/events")
.get(function(req, res) {
    var coach = req.params.coachId;
    db.Coach.find( { sub: coach } )
  })
  .post(function(req, res){
    // db.Coach.findById(req.params.coachId).then(results => )
  })

router.route("/:coachId/messaging")
  .post(function(req, res) {
  
  })
module.exports = router;