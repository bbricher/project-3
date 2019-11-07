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

const coachSchema = new Schema({
  name: { type: String, required: true },
  eventsOnCalendar: { type: [eventSchema] }
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;