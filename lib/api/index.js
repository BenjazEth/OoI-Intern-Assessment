const statusAPI = require("./status");

const API = require("express").Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

API.use("/status", statusAPI);

API.get("api/users/test", (req, res) => res.json({
  status: 'API Its Working',
  message: 'Users Route Works,welcome!',
}));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
API.post("/api/users/register", async (req, res) => {
const { errors, isValid } = validateRegisterInput(req.body);

//check validation 
if (!isValid) {
  return res.status(400).json(errors);
}

await db.User.findOne({where: { email: req.body.email }}).then(async user => {
  if (user) {
     errors.email = "Email already exists";
      return res.status(400).json(errors);
   } else {

    const newUser = await new db.User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        image: req.body.image
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login user / Returning JWT Token
// @access  Public
API.post("/api/users/login", async(req, res) => {

  const { errors,isValid } = validateLoginInput(req.body);

  //check Validation
  if(!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  await db.User.findOne({where: {email: email }}).then(user => {
    // Check for user
    if (!user) {
      errors.email = "user not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // user Matched
        const payload = { 
            id: user.id,
            name: user.name,
            password: user.password,
            email: user.email,
            phone: user.phone
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = {
  statusAPI,
  API,
};
