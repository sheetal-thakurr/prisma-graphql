"use strict";
module.exports = {
    issuer:process.env.APP_DOMAIN,
    audience:process.env.APP_DOMAIN,
    expiresIn:process.env.EXPIRES_IN,
    secretKey:process.env.JWT_SECRET_KEY
}