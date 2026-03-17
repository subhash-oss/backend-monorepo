const userRepository = require("../repositories/userRepository")

const getAllUsers = async () => {
  return await userRepository.getUsers()
}

module.exports = {
  getAllUsers
}