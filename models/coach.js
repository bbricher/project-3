const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema =new Schema({
    tag: { type: String, default: "work" }, // enumerable -- enum key
    start: Date,
    end: Date,
    title: { type: String, required: true },
    classType: { type: String, required: true },
    classLevel: { type: String, required: true },
    childBirthDay: Date
});

const coachProfileSchema = new Schema ({
  name: { type: String, required: true },
  introduction: { type: String, required: true },
  favoriteAge: { type: String, required: true },
  messagingToken: { type: String }
})


const coachSchema = new Schema({
  email: { type: String, required: true },
//   profileCreated: { type: Boolean, required: true, default: false },
  eventsOnCalendar: { type: [eventSchema] },
  sub: { type: String, required: true },
  iss: { type: String, required: true },
  idToken: { type: String, required: true },
  profile: { type: coachProfileSchema }
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;