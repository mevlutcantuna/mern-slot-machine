const User = require("../models/user");
const { generateToken, verifyToken } = require("../utils/token");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // account verification
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errorMessage: "The Account Not Found..." });
    }

    // check password
    const checkPassword = await user.checkPassword(password);
    if (!checkPassword) {
      return res.status(400).json({ errorMessage: "The Password is Wrong..." });
    }

    // create access token
    const accessToken = generateToken(user._id);

    return res.status(200).json({ user: { ...user._doc, accessToken } });
  } catch (err) {
    return res.status(400).json({ errorMessage: err.message });
  }
};

const signup = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  try {
    // the account exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ errorMessage: "The Account already Exists..." });
    }

    const user = new User({ fullName, email, password });
    await user
      .save()
      .then(() => {
        return res.status(200).json(user);
      })
      .catch((err) => {
        return res.status(400).json({ errorMessage: err.message });
      });
  } catch (err) {
    return res.status(400).json({ errorMessage: err.message });
  }
};

const getUser = async (req, res) => {
  const authBarear = req.headers["authorization"];
  // get token
  const accessToken = authBarear && authBarear.split(" ")[1];
 
  try {
    // access token verification
    const verifiedToken = verifyToken(accessToken); 
    if (!verifiedToken) {
      return res
        .status(400)
        .json({ errorMessage: "The Access Token don't Verify..." });
    }

    // get user
    const user = await User.findOne({ _id: verifiedToken });

    return res.status(200).json(user);
  } catch (err) { 
    return res.status(400).json({ errorMessage: err.message });
  }
};

const incOrDescCoin = async (req,res) => {
  const { coinValue,id } = req.body;

  try {
    // get user
    const user = await User.findByIdAndUpdate(id,{coins:coinValue},{new:true});

    // save updated coins of user
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({errorMessage:err.message})
  }
}

module.exports = { login, signup, getUser, incOrDescCoin };