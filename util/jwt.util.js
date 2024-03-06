const jwt = require("jsonwebtoken");
const {jwtConfig} = require("../config");

const generate = (user)=> {
    return jwt.sign(user , jwtConfig.secretKey , {
        expiresIn:jwtConfig.expiresIn,
        issuer:jwtConfig.issuer,
        audience:jwtConfig.audience
    })
}

const generateRefreshToken = (user) => {
    return jwt.sign(user,jwtConfig.secretKey , {
        expiresIn:jwtConfig.expiresIn,
        issuer:jwtConfig.issuer,
        audience:jwtConfig.audience
    })
}

const verifyToken = (token,) => {
    return jwt.verify(token, jwtConfig.secretKey);
}



const TokenType = {
 ID_TOKEN: "idToken",
 REFRESH_TOKEN : "refreshToken"
}

module.exports = {generate , generateRefreshToken , TokenType, verifyToken}