const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}

const verifyToken = (accessToken) => {
    const decoded = jwt.verify(accessToken,process.env.JWT_SECRET)
    return decoded.id;
}

module.exports = {generateToken,verifyToken}; 