
// do i add post route for user name here or leave in messaging?
// Matches with "/api/coaches"
const router = require("express").Router();
const db = require("../../models");
const Chatkit = require("pusher-chatkit-server");
import ReactDOM from "react-dom";



router.route("/")
  .get(function (req, res) {
    db.Coach.find().then(results => {
      res.json(results)
    }).catch(err => res.status(422).json(err));
  })
  .post(function (req, res) {
    db.Coach.create(req.body).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

router.route("/:coachId/events")
  .post(function (req, res) {
    // db.Coach.findById(req.params.coachId).then(results => )
  })




///Route for messaging //axios call // route /api/coaches/Messaging
router.route("/:coachId/messaging")
  .post(function (req, res) {

  })




//chitkat
//chat kit 
const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:33698389-3965-4f60-aec9-9a955b4f7956',
  key: "530edcc8-b3c6-4bdf-b68f-9440c5b2114f:SF8XG0EH8PGpiuk5YGWhRyuXD93UN+L7GGNYBETZMp4="
})

chatkit
  .createUser({
    name: username,
    id: username
  })
  .then(() => res.sendStatus(201))
  .catch(error => {
    if (error.error === 'services/chatkit/user_already_exists') {
      res.sendStatus(200)
    } else {
      res.status(error.status).json(error)
    }
  })


  app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({ userId: req.query.user_id })
    res.status(authData.status).send(authData.body)
  })




module.exports = router;