const Student = require("../models/Student")

// Create student
exports.createStudent = async (req, res) => {

 const { name, age } = req.body

 try {

  const student = await Student.create({
   name,
   age,
   parentId: req.user.id
  })

  res.json(student)

 } catch (error) {

  res.status(500).json({ message: "Server error" })

 }

}


// Get students of parent
exports.getStudents = async (req, res) => {

 try {

  const students = await Student.find({
   parentId: req.user.id
  })

  res.json(students)

 } catch (error) {

  res.status(500).json({ message: "Server error" })

 }

}