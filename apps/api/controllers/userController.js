const userService = require("../services/userService")

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getUsers
}