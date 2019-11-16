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
        console.log(user.data)
        res.json({});
      })
      // db.Coach.findById({ email: req.body.email })
      // .then( results => {

        // if (results === "{}") {
        //   db.Coach.create(req.body).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
        // } else {
        //   
        //  
        //   // instance.defaults.headers.common['Authorization'] = "Bearer " + req.body.
        //   instance.get(''

        //   )
        //   res.json(results)
        // }
      // })
      // .catch(err => res.status(422).json(err));

      // auth --- res(name, email) coach.findBy{Email}, respond with the coach object, if empty {cant find email --- coach.create}
      // db.Coach.create(req.body).then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
  });

router.route("/:coachId/events")
  .get(function(req, res) {
    
  })
  .post(function(req, res){
    // db.Coach.findById(req.params.coachId).then(results => )
  })

router.route("/:coachId/messaging")
  .post(function(req, res) {
  
  })
module.exports = router;