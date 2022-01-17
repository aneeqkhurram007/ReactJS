const Sequelize = require("sequelize");
const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");
const { Op } = require("sequelize");
const User = require("../Models/User");

const nodemailer = require('nodemailer');
const { signUpValidation } = require("../JoiValidaions/User");
const Buyer = require("../Models/Buyer");
const Seller = require("../Models/Seller");
const Phase1 = require("../Models/Phase1");
const Phase2 = require("../Models/Phase2");
require('dotenv').config();


const accountSid = "ACdc43df7169390d21694cc8c6fca1caa1";
const authToken = "3f65ce6cf0c46255a77b3c6f919c5aa3";
const client = require('twilio')(accountSid, authToken);

module.exports = {
  async signUp(req, res) {
    // try {
    console.log("-----------------TEXENC_EMAIL-", process.env.TEXENC_EMAIL)
    const verificationCode = Math.floor(1000 + Math.random() * 9000)


    //senmding text to sim 



    console.log("------------------", verificationCode)
    const { firstName, lastName, email, username, password, phone, type } = req.body;
    const result = signUpValidation(req.body);
    if (result.error != null) {
      return res.status(400).json
        ({
          success: false,
          message: (result.error.details[0].message)
        })
    }
    console.log("-----------------phone-", phone)

    const checkEmail = await User.findOne({
      where: { email: email }
    })
    if (checkEmail) {
      return res.status(400).json({
        message: "email alredy register with password " + checkEmail.password,
      })
    }
    const checkUsername = await User.findOne({
      where: { username: username }
    })
    if (checkUsername) {
      return res.status(400).json({
        message: "username alredy taken "
      })
    }
    const checkPhone = await User.findOne({
      where: { phone: phone }
    })
    if (checkPhone) {
      return res.status(400).json({
        message: "phone  alredy registed "
      })
    }
    const user = await User.create(
      {
        firstName, lastName, email, username, password, phone, type,
        verificationCode: verificationCode
      })
    // console.log("--------user-----", user.id)

    // if (user.type == "buyer") {
    //   return res.json({
    //     message: "Account created successfuly",
    //     data: user,
    //     // buyer: buyer
    //   })
    // }
    const token = jwt.sign({ id: user.id }, process.env.JWTPRIVATEKEY)

    if (user.type == "buyer") {
      const buyer = await Buyer.create(
        { userId: user.id }
      )
      const seller = await Seller.create(
        { userId: user.id }
      )
      await Phase1.create(
        { sellerId: seller.id }
      )
      await Phase2.create(
        { sellerId: seller.id }
      )
      client.messages
        .create({
          body: 'your verification code is ' + verificationCode + ' write to verify ',
          from: '+14783758095',
          to: '+923424083037'
        })
        .then(message => console.log("-----------twilio message ", message))
        .catch(error => console.log(error))
      var transporter = nodemailer.createTransport
        ({
          service: 'gmail',
          auth:
          {
            user: process.env.TEXENC_EMAIL,
            pass: process.env.TEXENC_PASSWORD
          }
        });

      var mailOptions;
      let sender = "BLACK BOOKING ORG"
      var mailOptions =
      {
        from: process.env.TEXENC_EMAIL,
        to: req.body.email,
        subject: 'Confirmation code',
        text: "Your Confirmation code is  " + verificationCode
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.json({
            success: false,
            message: error,
          })
        }


        else {

          return res.json({
            success: true,
            token: token,
            message: "Account created successfuly. Complete your application to become a verified seller ",
            message2: "kindly Check your email for confirmation code",
            data: user,
            buyer: buyer,

          })
        }
      });
    }


    // }
    // catch (err) {
    //   return res.json({
    //     message: err
    //   })

    // }
  },


  async textCodeVerification(req, res) {
    const { phone, verificationCode } = req.body;
    console.log("helloooo")
    var checkPhone = await User.findOne({
      where: { phone: phone, verificationCode: verificationCode }
    })
    console.log("helloooo", req.body)
    if (checkPhone) {
      checkPhone.update({ phoneVerified: true });

      return res.json({
        message: "phoneno verified  successfully"
      })
    }
    if (!checkPhone) {
      return res.status(400).json({
        message: "Invalid code "
      })
    }

  },

  async emailCodeVerification(req, res) {
    const { email, verificationCode } = req.body;
    console.log("emaillllll")
    const checkEmail = await User.findOne({
      where: { email: email, verificationCode: verificationCode }
    })
    console.log("---------------------", checkEmail)
    if (checkEmail) {
      checkEmail.update({ emailVerified: true });

      return res.json({
        message: "email verified "
      })
    }
    if (!checkEmail) {
      return res.status(400).json({
        message: "Invalid code "
      })
    }
  },

  async logIn(req, res) {

    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email, password },
      attributes: {
        exclude: ["password"],
      },
    })
    if (!user) {
      res.status(400).json({
        message: "Email or password incorrect  "
      })
    }
    const token = jwt.sign({ id: user.id }, process.env.JWTPRIVATEKEY)


    if (user.emailVerified == false) {
      res.status(400).json({
        message: "kindly verify your email "
      })
    }
    if (user.phoneVerified == false) {
      res.status(400).json({
        message: "kindly verify your phone no "
      })
    }


    if (user.type == "buyer") {
      res.json({
        token: token,
        data: user,
        message: "login Successfully"
      })
    }
    if (user.type == "seller") {
      const user = await User.findOne({
        where: { email, password },
        attributes: {
          exclude: ["password"],
        },
      })
      res.json({
        data: user,
        message: "login Successfully"
      })
    }

  },
};

