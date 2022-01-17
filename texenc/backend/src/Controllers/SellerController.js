const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { Router } = require("express");
const Seller = require("../Models/Seller");
const User = require("../Models/User");
const Phase1 = require("../Models/Phase1");
const Phase2 = require("../Models/Phase2");
const Service = require("../Models/Service");
const Package = require("../Models/Package");
const SellerPortfolio = require("../Models/SellerPortfolio");
const SellerCollection = require("../Models/SellerCollection");
const ProjectCollection = require("../Models/ProjectCollection");
const JobOffer = require("../Models/JobOffer");
const SavedJob = require("../Models/SavedJob");



const routes = Router();


module.exports = {
    async addSeller(req, res) {
        try {
            const seller = await Seller.create(
                req.body
            )
            return res.status(200).json({ data: seller });

        } catch (err) {
            return res.status(500).json({ error: err })
        }
    },
    async updateUserStatus(req, res) {
        const user = await User.findOne({
            where: { id: req.body.id }
        })

        const seller = await Seller.findOne({
            where: { userId: req.body.id },
            include: [
                {
                    association: "phase1",
                    attributes: ["phase1Status"],
                },
                {
                    association: "phase2",
                    attributes: ["phase2Status"],
                },
            ],
        })
        if (seller.phase1.phase1Status == "approved" && seller.phase2.phase2Status == "approved") {
            return res.json({
                data: seller
            })
        }
        if (seller.phase1.phase1Status == "not submitted") {
            return res.status(400).json({
                message: "phase 1 not submitted",
            })
        }
        if (seller.phase2.phase2Status == "not submitted") {
            user.update({ type: "seller" })
            return res.json({
                message: "phase 2 not verified but user type updated",
            })
        }
    },
    async phase1(req, res) {
        console.log("request coming")
        const { type, skills, about, noOfEmployees, projects, socialMediaUrls, language, experience, education, applicationSubmitted, phase1Status } = req.body;
        if (type == "indvidual") {
            var seller = await Phase1.findOne({
                where: { sellerId: req.body.id }
            })
            seller.update(
                { type, skills, about, projects, socialMediaUrls, language, experience, education, applicationSubmitted, phase1Status, phase1SubmittionTime: req.body }
            )
            if (applicationSubmitted == true) {
                var user = await User.findOne({
                    where: { id: req.body.id }
                })
                user.update({ type: "seller" })
                return res.json({
                    success: true,
                    message: "Phase 1 application submitted successfully",
                    data: seller
                })
            }
            if (applicationSubmitted == false)
                return res.status(400).json({
                    success: false,
                    message: "Phase 1 application not submitted changes saved as draft",
                    seller: seller
                })
        }
        if (type == "agency") {
            var seller = await Phase1.findOne({
                where: { sellerId: req.body.id }
            })
            seller.update({
                type, skills, about, projects, noOfEmployees, socialMediaUrls, language, experience, education, applicationSubmitted, phase1Status
            })
            if (applicationSubmitted == true) {
                var user = await User.findOne({
                    where: { id: req.body.id }
                })
                user.update({ type: "seller" })
                return res.json({
                    success: true,
                    message: "Phase 1 application submitted successfully",
                    data: seller
                })
            }
            if (applicationSubmitted == false)
                return res.status(400).json({
                    success: false,
                    message: "Phase 1 application not submitted changes saved as draft",
                    seller: seller
                })
        }
    },
    async phase2(req, res) {
        console.log("request coming")
        console.log(req.body)
        const { type, profileImage, portfolioAttachments, license, supportingUrls, supportingMaterial, phase2Status, SubmittionTime, applicationSubmitted } = req.body;
        if (type == "indvidual") {
            var seller = await Phase2.findOne({
                where: { sellerId: req.body.id }
            })
            if (!seller)
                return res.sendStatus(400).send('fucked')
            seller.update(
                { profileImage, portfolioAttachments, license, supportingUrls, supportingMaterial, phase2Status, SubmittionTime, applicationSubmitted: req.body.body }
            )
            if (applicationSubmitted == true) {
                return res.json({
                    success: true,
                    message: "Phase 2 application submitted successfully",
                    data: seller
                })
            }
            if (applicationSubmitted == false)
                return res.status(400).json({
                    success: false,
                    message: "Phase 2 application not submitted changes saved as draft",
                    seller: seller
                })
        }
        if (type == "agency") {
            var seller = await Phase2.findOne({
                where: { sellerId: req.body.id }
            })
            seller.update({
                profileImage, portfolioAttachments, license, supportingUrls, supportingMaterial, phase2Status, SubmittionTime
            })
            if (applicationSubmitted == true) {
                return res.json({
                    success: true,
                    message: "Phase 2 application submitted successfully",
                    data: seller
                })
            }
            if (applicationSubmitted == false)
                return res.status(400).json({
                    success: false,
                    message: "Phase 2 application not submitted changes saved as draft",
                    seller: seller
                })
        }
        return res.status(400).send('type invalid');
    },
    async getSeller(req, res) {

        const seller = await Seller.findOne({
            where: { id: req.body.id },
            include: [
                {
                    association: "phase1",
                    // attributes: ["phase1Status"],
                },
                {
                    association: "phase2",
                    // attributes: ["phase2Status"],
                },
            ],
        })
        if (!seller) {
            return res.status(400).json({ message: "seller doest exist" });
        }
        if (seller) {
            return res.status(200).json({ data: seller });
        }

    },
    async getAllSeller(req, res) {

        const seller = await Seller.findAll({
            include: [
                {
                    association: "seller",
                    // attributes: ["phase1Status"],
                },

            ],
        })
        if (seller.length == 0) {
            return res.status(400).json({ message: "no seller exist" });
        }
        if (seller.length > 0) {
            return res.status(200).json({ data: seller });
        }


    },

    //------------------services-----------------//
    async addService(req, res) {
        console.log("request coming")
        const { sellerId, packagesId, title, category, subCategory, searchTags, type, description, imagesAndVideos, files, url, silver, gold, platinium, addDeliverable, submitted } = req.body;
        var service = await Service.create(
            req.body
        )
        var package = await Package.create(
            req.body,
        )
        package.update({ serviceId: service.id })
        service.update({ packagesId: package.id })
        return res.status(200).json(
            {
                service: service,
                package: package
            });
    },
    async getService(req, res) {

        const service = await Service.findOne({
            where: { id: req.body.id },
            include: [
                {
                    association: "package",
                    // include: [
                    //     {
                    //         association: "service",
                    //         // attributes: ["phase1Status"],
                    //     },
                    // ]
                    // attributes: ["phase1Status"],
                },
            ],
        })
        if (!service) {
            return res.status(400).json({ message: "Service doest exist" });
        }
        if (service) {
            return res.status(200).json({ data: service });
        }

    },
    async getAllSellerService(req, res) {

        const service = await Seller.findOne({
            where: { id: req.params.sellerid },
            include: [
                {
                    association: "services",
                    include: [
                        {
                            association: "package",
                        },
                    ],
                    // include: [
                    //     {
                    //         association: "service",
                    //         // attributes: ["phase1Status"],
                    //     },
                    // ]
                    // attributes: ["phase1Status"],
                },
            ],
        })
        if (!service) {
            return res.status(400).json({ message: "Service doest exist" });
        }
        if (service) {
            return res.status(200).json({ data: service });
        }

    },
    async getAllSellerPortfolio(req, res) {

        const portfolio = await Seller.findOne({
            where: { id: req.params.sellerid },
            include: [
                {
                    association: "portfolio",
                    // include: [
                    //     {
                    //         association: "service",
                    //         // attributes: ["phase1Status"],
                    //     },
                    // ]
                    // attributes: ["phase1Status"],
                },
            ],
        })
        if (!portfolio) {
            return res.status(400).json({ message: "portfolio doest exist" });
        }
        if (portfolio) {
            return res.status(200).json({ data: portfolio });
        }

    },
    async getAllServices(req, res) {

        const service = await Service.findAll({
            include: [
                {
                    association: "package",
                },
            ],
        })
        if (service.length == 0) {
            return res.status(400).json({ message: "no service exist" });
        }
        if (service.length > 0) {
            return res.status(200).json({ data: service });
        }
    },

    //------------------Portfolio-----------------//
    async addPortfolio(req, res) {
        console.log("request coming")
        const { sellerId, title, category, subCategory, relatedJob, budget, description, imagesAndVideos, files, url, time, submitted } = req.body;

        var portfolio = await SellerPortfolio.create(
            req.body
        )
        return res.status(200).json(
            {
                message: "portfolio created successfully",
                data: portfolio
            });
    },
    async getPortfolio(req, res) {

        const portfolio = await SellerPortfolio.findOne({
            where: { id: req.params.id },
        })
        if (!portfolio) {
            return res.status(400).json({ message: "portfolio doest exist" });
        }
        if (portfolio) {
            return res.status(200).json({ data: portfolio });
        }

    },
    async getAllPortfolio(req, res) {
        // portfolio

        const portfolio = await SellerPortfolio.findAll({
            include: [
                {
                    association: "portfolio",
                    include: [
                        {
                            association: "seller",
                            // attributes: ["phase1Status"],
                        },
                    ]

                },
            ],
        })
        if (portfolio.length == 0) {
            return res.status(400).json({ message: "no portfolio exist" });
        }
        if (portfolio.length > 0) {
            return res.status(200).json({ data: portfolio });
        }
    },

    //------------------Selleer collection-----------------//

    async getSellerCollection(req, res) {
        console.log("==== 1======")

        const getCollection = await SellerCollection.findAll({
            // include: [
            //     {
            //         association: "SellerCollection",
            //     }
            // ],
            where: { userId: req.params.userID },
        },
            console.log("==== 2======")
        )
        console.log("==== 3======")
        console.log("==========", getCollection)
        if (getCollection.length == 0) {

            //what is status in this case 
            return res.status(400).json(
                {
                    message: "No Collection exist",
                })
        }
        if (getCollection.length > 0) {
            //what is status in this case 
            return res.status(200).json(
                {
                    data: getCollection,
                })
        }
    },
    async createSellerCollection(req, res) {
        try {
            const checkCollection = await SellerCollection.findOne({
                where: { userId: req.body.userId, name: req.body.name }
            })
            console.log("==========", checkCollection)
            if (checkCollection) {
                return res.status(400).json(
                    {
                        message: "collection with this name alredy created",
                    })
            }
            const sellerCollection = await SellerCollection.create
                ({ userId: req.body.userId, name: req.body.name })
            return res.status(200).json(
                {
                    message: "collection created successfully",
                    data: sellerCollection
                });
        } catch (error) {
            console.log(error)
            return res.status(500).json(
                {
                    message: error,

                });
        }
    },
    async addSellerInCollection(req, res) {
        // apply this check seller  exist in backend with collectionSellerId
        const getCollection = await SellerCollection.findOne({
            where: {
                userId: req.body.userId,
                name: req.body.name,
                sellerId: req.body.sellerId
            }
        })
        if (getCollection) {
            return res.status(400).json(
                {
                    message: "Seller alredy added in collection",
                })
        }
        else {
            const update = await SellerCollection.create({
                userId: req.body.userId,
                name: req.body.name,
                sellerId: req.body.sellerId
            })
            return res.status(400).json(
                {
                    message: "Seller added in collection",
                    data: update
                })

        }
    },

    //------------------Project collection collection-----------------//

    async createProjectCollection(req, res) {

        const checkCollection = await ProjectCollection.findOne({
            where: { sellerId: req.body.sellerId, name: req.body.name }
        })
        if (checkCollection != null) {
            return res.status(400).json(
                {
                    message: "collection with this name alredy created",
                })
        }
        const projectCollection = await ProjectCollection.create
            ({ sellerId: req.body.sellerId, name: req.body.name })
        return res.status(200).json(
            {
                message: "collection created successfully",
                data: projectCollection
            });
    },
    async addProjectInCollection(req, res) {
        // checks
        // check project id exist which is coming from front end 
        // apply this check project exist in backend with projectID1
        const getCollection = await ProjectCollection.findOne({
            where: {
                sellerId: req.body.sellerId,
                name: req.body.name,
                // collectionSellerId: req.body.collectionSellerId
            }
        })
        if (getCollection) {
            if (getCollection.projectId == req.body.projectId) {
                return res.status(400).json(
                    {
                        message: "Project alredy added in collection",
                    })
            }
            else {
                const update = await getCollection.update({ projectId: req.body.projectId })
                return res.status(400).json(
                    {
                        message: "Project added in collection",
                        data: update
                    })
            }
        }

    },


    async sendJobOffer(req, res) {
        console.log("request coming")
        const { sellerId, jobId, relatedService, price, completionTime, coverLetter, attachments, submitted } = req.body;
        var jobOffer = await JobOffer.create(
            req.body
        )
        return res.status(200).json(
            {
                jobOffer
            });
    },
    async saveJob(req, res) {
        const findJob = await SavedJob.findOne({
            sellerId: req.params.sellerId,
            jobId: req.params.jobId
        })
        if (!findJob) {
            const savedjob = await SavedJob.create(
                req.body
            )
            return res.status(200).json({ savedjob, messge: "saved successfully" });
        }
        if (findJob) {
            const unsave = await findJob.destroy()
            return res.status(200).json({ message: "unsaved successfully " });
        }
    },
    async getSavejobs(req, res) {
        console.log("==== 1======")

        const savedJobs = await SavedJob.findAll({
            include: [
                {
                    association: "seller",
                },
                {
                    association: "jobDetails",
                }
            ],
            where: { sellerId: req.params.sellerId },
        },
            console.log("==== 2======")
        )
        console.log("==== 3======")
        console.log("==========", savedJobs)
        if (savedJobs.length == 0) {

            //what is status in this case 
            return res.status(400).json(
                {
                    message: "No saved Jobs exist",
                })
        }
        if (savedJobs.length > 0) {
            //what is status in this case 
            return res.status(200).json(
                {
                    savedJobs
                })
        }
    },

    // async getSellerCollection(req, res) {
    //     console.log("==== 1======")

    //     const getCollection = await ProjectCollection.findAll({
    //         where: { id: req.params.sellerId },
    //         include: [
    //             {
    //                 association: "ProjectCollection",
    //             }
    //         ]
    //     },
    //         console.log("==== 2======")
    //     )
    //     console.log("==== 3======")
    //     console.log("==========", getCollection)
    //     if (getCollection) {
    //         getSellerCollection
    //         //what is status in this case 
    //         return res.status(400).json(
    //             {
    //                 message: "No Collection exist",
    //             })
    //     }
    //     // if (getCollection.length > 0) {
    //     //     //what is status in this case 
    //     //     return res.status(200).json(
    //     //         {
    //     //             data: getCollection,
    //     //         })
    //     // }
    // },

};
//get seller collection and all its seller api
//get all collection and projects in each collection api 
