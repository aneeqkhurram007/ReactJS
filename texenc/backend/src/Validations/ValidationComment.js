const { check } = require("express-validator");

const ValidationComment = {
  comment: [
    check("body", "Comment cannot be empty!")
      .not()
      .isEmpty()
  ]
};

module.exports = ValidationComment;
