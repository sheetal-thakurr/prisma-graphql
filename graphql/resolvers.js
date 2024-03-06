const { bcryptConfig } = require("../config/index");
const bcrypt = require("bcrypt");
// const { generateSignInToken, generate } = require("../middleware/passport");
const { generate } = require("../util/jwt.util");




const resolvers = {
  Query: {
    getUserById: async (_parent, args) => {
      const user = await prisma.user.findFirst({
        where: {
          id: parseInt(args.id)
        }
      })
      if (!user) {
        throw new Error("User not found")
      }

      return user;
    },

    getAllUsers: async () => {
      return await prisma.user.findMany();
    },
  },

  Mutation: {
    signInUser: async (_parent, { input }) => {
      try {
        const existUser = await prisma.user.findFirst({
          where: {
            email: input.email
          }
        });

        if (existUser) {
          throw new Error("This Email has already been taken");
        }

        if (input.password) {
          input.password = bcrypt.hashSync(input.password, bcryptConfig.hasRound);
        }

        const createUser = await prisma.user.create({
          data: input
        });

        // const data = await generate(createUser);
        return {
          user: createUser,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },

    loginUser: async (_parent, { input }) => {
      try {
        const user = await prisma.user.findUnique({
          where: {
            email: input.email
          }
        });

        if (!user) {
          throw new Error("Invalid Email");
        } else {
          if (user && user.password) {
            if (bcrypt.compareSync(input.password, user.password)) {
              const token = await generate(user);
              console.log("token------", token);
              return {
                user: user,
                token: token
              }
            }
          }
        }

      } catch (error) {
        throw new Error(error.message);
      }
    }
  }

};

module.exports = { resolvers };