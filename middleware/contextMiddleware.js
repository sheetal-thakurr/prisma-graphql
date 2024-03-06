const { verifyToken } = require("../util/jwt.util");

module.exports.context = async ({req }) => {
    const authQuery = ["loggedInUser"];
    const authMutation = [];
    const auth = [...authQuery, ...authMutation];
            if (auth.some(item => req.body.query.includes(item))) {
      const authToken = req.headers["authorization"];
      try {
        const user = await verifyToken(authToken);
        return user;
      } catch (error) {
        console.log("Token must be provided");
        throw new Error("Token must be provided");
      }
    }
    return {};
  }