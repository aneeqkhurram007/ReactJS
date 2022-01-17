const { check } = require("express-validator");

const ValidationsUser = {
  withPassword: [
    check("name", "Please enter your full name")
      .not()
      .isEmpty(),
    check("username", "Please enter your user name")
      .not()
      .isEmpty(),
    check("email", "Add a valid email").isEmail(),
    check("password", "The password must be a minimum of 6 characters").isLength({
      min: 6
    })
  ],
  withoutPassword: [
    check("name", "Please enter your full")
      .not()
      .isEmpty(),
    check("email", "Add a valid email").isEmail()
  ],
  password: [
    check("password", "The password must be a minimum of 6 characters").isLength({
      min: 6
    }),
    check(
      "password_confirm",
      "The password must be a minimum of 6 characters"
    ).isLength({
      min: 6
    })
  ]
};

module.exports = ValidationsUser;
