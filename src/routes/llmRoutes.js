const router = require("express").Router()

const { summarize } = require("../controllers/llmController")

router.post("/summarize", summarize)

module.exports = router