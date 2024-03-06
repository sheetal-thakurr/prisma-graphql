const jwt = require("jsonwebtoken");
const {jwtConfig} = require("../config");

const generateToken = (user)=> {
    return jwt.sign(user , jwtConfig.secretKey , {
        expiresIn:jwtConfig.expiresIn,
        issuer:jwtConfig.issuer,
        audience:jwtConfig.audience
    })
}

const verifyToken = (token,) => {
    return jwt.verify(token, jwtConfig.secretKey);
}


module.exports = {generateToken, verifyToken}