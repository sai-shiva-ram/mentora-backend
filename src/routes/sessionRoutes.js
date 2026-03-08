const router = require("express").Router()

const auth = require("../middleware/authMiddleware")

const {
 createSession,
 getLessonSessions
} = require("../controllers/sessionController")

router.post("/", auth, createSession)

router.get("/lesson/:id", auth, getLessonSessions)

module.exports = router