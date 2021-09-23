const express = require("express");
const {login,signup,getUser,incOrDescCoin} = require("../controllers/user");

const router = express.Router();

router.post("/api/auth/login",login);
router.post("/api/auth/signup",signup);
router.get("/api/auth/get-user",getUser)
router.patch("/api/auth/inc-desc-coin",incOrDescCoin)       

module.exports = router 