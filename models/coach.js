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
  name: { type: String, required: true, default: "Coach Bri" },
  introduction: { type: String, required: true, default: "Bri has worked for playwisely since Fall of 2017. She is very enthusiastic with card flashing and has the energy to work well with growing minds of all types!" },
  favoriteAge: { type: String, required: true, default: "Babies 2, and Preschool" },
  messagingToken: { type: String }
})


const coachSchema = new Schema({
  email: { type: String, required: true },
//   profileCreated: { type: Boolean, required: true, default: false },
  eventsOnCalendar: { type: [eventSchema] },
  sub: { type: String, required: true },
  profile: { type: coachProfileSchema }
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;