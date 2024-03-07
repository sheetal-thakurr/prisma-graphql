const bcrypt = require("bcrypt");
const { generateToken } = require("../../util/jwt.util");
const { bcryptConfig } = require("../../config");

const getUserById = async (args) => {

    try {
        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(args.id)
            }
        })
        if (!user) {
            throw new Error("User not found")
        }

        return user;

    } catch (error) {
        throw new Error("User not found")
    }

}

const loggedInUser = async (context) => {
    try {
        console.log("context-----", context);
        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(context.id)
            }
        })
        if (!user) {
            throw new Error("User not found")
        }
        return user;
    } catch (error) {
        throw new Error("somthing went wrong!")
    }
}

const getAllUsers = async (args) => {
    try {
        const users = await prisma.user.findMany({
            skip: parseInt(args.skip),
            take: parseInt(args.limit),
        });
        const totalUsers = await prisma.user.count();

        return {
            skip: parseInt(args.skip),
            limit: parseInt(args.limit),
            total: totalUsers,
            users: users
        }

    } catch (error) {
        console.log("error:", error);
        throw new Error(error.message)
    }
}

const signInUser = async ({ input }) => {
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

        // const data = await generateToken(createUser);
        return createUser;
    } catch (error) {
        throw new Error(error.message);
    }
}

const loginUser = async ({ input }) => {
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
                    delete user.password;
                    const token = await generateToken(user);
                    console.log("token------", token);
                    return {
                        user: user,
                        token: token
                    }
                }
            }
        }

    } catch (error) {
        console.log("error------", error);
        throw new Error(error.message);
    }
}

module.exports = {
    getUserById,
    loggedInUser,
    getAllUsers,
    signInUser,
    loginUser
}