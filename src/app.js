const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")
const studentRoutes = require("./routes/studentRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/auth", authRoutes)
app.use("/students", studentRoutes)
module.exports = app