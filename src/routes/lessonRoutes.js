const router = require("express").Router()

const auth = require("../middleware/authMiddleware")

const { createLesson } = require("../controllers/lessonController")

router.post("/", auth, createLesson)

module.exports = router