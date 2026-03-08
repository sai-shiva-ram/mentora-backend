const Booking = require("../models/Booking")
const Student = require("../models/Student")
const Lesson = require("../models/Lesson")

exports.createBooking = async (req, res) => {

 try {

  const { studentId, lessonId } = req.body

  const student = await Student.findById(studentId)

  if (!student) {
   return res.status(404).json({ message: "Student not found" })
  }

  // ensure student belongs to parent
  if (student.parentId.toString() !== req.user.id) {
   return res.status(403).json({ message: "Not allowed" })
  }

  const lesson = await Lesson.findById(lessonId)

  if (!lesson) {
   return res.status(404).json({ message: "Lesson not found" })
  }

  const booking = await Booking.create({
   studentId,
   lessonId
  })

  res.json(booking)

 } catch (error) {

    console.log(error)

    res.status(500).json({
    message: "Server error",
    error: error.message
    })

}

}