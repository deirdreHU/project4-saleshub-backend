const {UsersService} = require("./users.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');

class UsersController {
  constructor() {}

  async getUsers(req, res) {
    const users = await UsersService.getUsers();
    res.status(200).json(users);
  }

  async signUp(req, res) {
    try {
      const user = req.body;

      let oldUser = await UsersService.findUserByEmail(user.email);

      // check user if exist
      if (oldUser) {
        return res.status(409).send("User already exist. Please login.");
      }

      oldUser = await UsersService.findUserByUsername(user.username);
      
      if (oldUser) {
        return res.status(409).send("User already exist. Please login.");
      }

      // create new user
      user.passwordHash = await bcrypt.hash(user.password, 10);
      user.companyId = uuidv4();
      user.isAdmin = true;
      let newUser = await UsersService.createUser(user);

      let token = jwt.sign({
        email: user.email,
        username: user.username,
        id: newUser.userId,
        companyId: newUser.companyId
      }, process.env.JWT_SECRET)
      res.status(201).json({
        token
      });
    } catch (err) {
      console.log(err)
      res.status(500).send(err.message);
    }
  }

  async signIn(req, res) {
    try {
      let oldUser, 
      token;
      const {email, password} = req.body;
      // check user if exist
      oldUser = await UsersService.findUserByEmail(email);
      if (!oldUser) {
        return res.status(400).send("Invalid Credentials");
      }

      // check password if correct
      if (await bcrypt.compare(password, oldUser.passwordHash)) {
        token = jwt.sign({
          email: oldUser.email,
          username: oldUser.username,
          id: oldUser.userId,
          companyId: oldUser.companyId
        }, process.env.JWT_SECRET)
      } else {
        return res.status(400).send("Invalid Credentials");
      }
      res.status(200).json({token});
    } catch (err) {
      console.log(err)
      res.status(500).send(err);
    }
  }

  async createStaff(req, res) {
    try
    {
      const {username, email, password, isAdmin} = req.body;

      const oldUser1 = await UsersService.findUserByEmail(email);
      const oldUser2 = await UsersService.findUserByUsername(username);
      if(oldUser1 || oldUser2)
      {
        return res.status(409).send("User already exist. Please login.");
      }

      let newUser = await UsersService.createUser({
        username: username,
        email: email,
        password: await bcrypt.hash(password, 10),
        companyId: req.user.companyId,
        isAdmin: false
      });

      res.status(201).send("Staff created");
    }

    catch(err)
    {
      console.log(err)
      res.status(500).send(err);
    }
  }

  async updatePassword(req, res) {
    const user = req.user;
    const {password} = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    await UsersService.updatePassword(user.id, passwordHash);
    res.status(200).send();
  }
}

module.exports = {
  UsersController: new UsersController()
};
