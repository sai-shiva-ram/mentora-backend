const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
 studentId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Student"
 },
 lessonId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Lesson"
 },
 createdAt: {
  type: Date,
  default: Date.now
 }
})

module.exports = mongoose.model("Booking", bookingSchema)