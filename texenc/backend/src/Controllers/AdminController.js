const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { Router } = require("express");
const { Seller } = require("../../models");
const { User } = require("../../models");
const routes = Router();

module.exports = {
    async updatePhase1Status(req, res) {

        // const seller = await Seller.find(
        //     { where: {phase1Status:submitted } }
        // )
        const seller = await Seller.findOne(
            { where: { userId: req.body.id } }
        )
        seller.update({ phase1Status: req.body.phase1Status })
        return res.status(200).json(
            {
                message: "phase1 status updated to " + req.body.phase1Status,
                phase1Status: seller.phase1Status
            });
    },
}
