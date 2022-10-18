
const {UserModel} = require("./users.model");

class UsersService {
  constructor() {}

  async createUser(user) {
    return UserModel.create(user);
  }

  async findUserByUsername(username) {
    return UserModel.findOne({where: {username}});
  }

  async findUserByEmail(email) {
    return UserModel.findOne({where: { 
      email: email }});
  }

  async updatePassword(user_id, newPasswordHash) {
    return UserModel.update({
      passwordHash: newPasswordHash
    }, {
      where: {
        userId: user_id
      }
    })
  }
}

module.exports = {
  UsersService: new UsersService()
};
