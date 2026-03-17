require("dotenv").config()

const express = require("express")
const userRoutes = require("./routes/userRoutes")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).json({
    name: "backend-monorepo-api",
    status: "ok",
    routes: ["/health", "/api/users"]
  })
})

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" })
})

app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})