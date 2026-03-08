const Session = require("../models/Session")

// Create session
exports.createSession = async (req, res) => {

 try {

  const { lessonId, date, topic, summary } = req.body

  const session = await Session.create({
   lessonId,
   date,
   topic,
   summary
  })

  res.json(session)

 } catch (error) {

  console.log(error)

  res.status(500).json({
   message: "Server error"
  })

 }

}


// Get sessions for lesson
exports.getLessonSessions = async (req, res) => {

 try {

  const sessions = await Session.find({
   lessonId: req.params.id
  })

  res.json(sessions)

 } catch (error) {

  res.status(500).json({ message: "Server error" })

 }

}