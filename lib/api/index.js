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
        country: req.body.country
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


// @route   PUT api/users/:id
// @desc    Put user by id
// @access  Private
API.patch('/api/users/:id', async (req, res) => {
  //get user from DB
  const user = await db.User.findByPk(req.params.id);
  if (!user) {
    throw new Error('no such user id exist to update');
  }
    //update the User property
  const updatedUser = await db.User.update({
    name: req.body.name || name,
    email: req.body.email || email,
    password: req.body.password || password,
    phone: req.body.phone || phone,
    address: req.body.address || address,
    city: req.body.city || city,
    country: req.body.country || country
  }, { where: { id: req.params.id }});

  //EveryThing OKAY
  return res.status(200).json('Updated User Successfully');
});
    
    

module.exports = {
  statusAPI,
  API,
};
