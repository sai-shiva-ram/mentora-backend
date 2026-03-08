const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
 name: String,
 age: Number,
 parentId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
 }
})

module.exports = mongoose.model("Student", studentSchema)