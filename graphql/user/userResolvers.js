
const userService = require("./userService");

const userResolvers = {
  Query: {
    getUserById: (_parent, args, _context) => userService.getUserById(args),
    loggedInUser: (_parent, _args, context) => userService.loggedInUser(context),
    getAllUsers: (_parent, args, _context) => userService.getAllUsers(args),
  },

  Mutation: {
    signInUser: (_parent, _args, _context) =>userService.signInUser({ input }),
    loginUser: (_parent, _args, _context) =>userService.loginUser({ input })
  }

};

module.exports = { userResolvers };