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
// const { Phase1, Phase2, Service, Package, SellerPortfolio, SellerCollection, ProjectCollection } = require("../../models");
const { BuyerJob, JobOffer } = require("../../models");
const routes = Router();

module.exports = {
    async addNewJob(req, res) {
        console.log("request coming")
        const { buyerId, title, category, subCategory, sellerType, jobType, location, budget, projectLength, description, attachments, submitted } = req.body;
        var job = await BuyerJob.create(
            req.body
        )
        if (job) {
            return res.status(200).json(
                {
                    job: job,

                });
        }
        if (!job) {
            return res.status(400).json(
                {
                    message: "something wrong "

                });
        }
    },
    async getAllJobs(req, res) {

        const jobs = await BuyerJob.findAll({
            include: [
                {
                    association: "JobOffers",
                },

            ],
        })
        if (jobs.length == 0) {
            return res.status(400).json({ message: "no jobs exist" });
        }
        if (jobs.length > 0) {
            return res.status(200).json({ data: jobs });
        }

    },
    async getAllJobsOfBuyer(req, res) {

        const jobs = await BuyerJob.findAll({
            where: {
                buyerId: req.params.buyerId
            }
        })
        if (jobs.length == 0) {
            return res.status(400).json({ message: "no jobs exist" });
        }
        if (jobs.length > 0) {
            return res.status(200).json({ jobs });
        }

    },
    async getJobDetail(req, res) {

        const job = await BuyerJob.findOne({
            where: {
                id: req.params.jobId
            }
        })
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        if (job) {
            return res.status(200).json({ job: job });
        }

    },
    async getAllJobOffer(req, res) {

        const jobOffer = await JobOffer.findAll({
            where: { jobId: req.params.jobId },
            include: [
                {
                    association: "JobDetail",
                },
            ],
        })
        var offers = []
        var averageOffer = 0
        jobOffer.map(offer => {
            console.log(offer.price)
            offers.push(offer.price.amount)
            averageOffer = averageOffer + offer.price.amount
            console.log(offers)
            console.log("this is min ", (Math.min.apply(Math, offers)))
            console.log("this is max ", (Math.max.apply(Math, offers)))
            console.log(averageOffer)
        })
        averageOffer = averageOffer / jobOffer.length
        var lowestOffer = Math.min.apply(Math, offers)

        var highestOffer = Math.max.apply(Math, offers)

        if (jobOffer.length == 0) {
            return res.status(400).json({ message: "no job offers recived" });
        }
        if (jobOffer.length > 0) {
            return res.status(200).json({ jobOffer, lowestOffer, highestOffer, averageOffer });
        }

    },

}