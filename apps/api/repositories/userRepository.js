const db = require("../config/db")

const getUsers = async () => {
  const result = await db.query("SELECT * FROM users")
  return result.rows
}

module.exports = {
  getUsers
}