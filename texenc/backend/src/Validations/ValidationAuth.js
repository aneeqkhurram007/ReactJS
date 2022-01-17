const { check } = require("express-validator");

const ValidationAuth = {
  login: [
    check("email", "Enter your username")
      .not()
      .isEmpty(),
    check("password", "Enter your password")
      .not()
      .isEmpty()
  ]
};

module.exports = ValidationAuth;
