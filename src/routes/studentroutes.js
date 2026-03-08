const router = require("express").Router()

const auth = require("../middleware/authMiddleware")

const {
 createStudent,
 getStudents
} = require("../controllers/studentController")

router.post("/", auth, createStudent)

router.get("/", auth, getStudents)

module.exports = router