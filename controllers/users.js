const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  getUserByEmail,
};

async function signup(req, res) {
  const info = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    categories: req.body.categories,
    services: req.body.services,
    businessName: req.body.businessName,
    businessWebsite: req.body.website,
    businessPhone: req.body.phoneNum,
    businessAddress: req.body.address,
  };
  const user = new User(info);
  try {
    await user.save();
    // creating JWT after user is saved
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(401).json(err);
  }
}

async function getUserByEmail(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    return res.status(200).send(user);
  } catch (err) {
    console.error(err);
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  //  returns payload
  return jwt.sign(
    { user }, // data payload
    SECRET, // assigns secret verfication
    { expiresIn: "24h" }
  );
}
