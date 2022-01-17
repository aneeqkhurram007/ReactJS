const { Router } = require("express");
const multer = require("multer");
// const multerConfig = require("./Config/multer");
const path = require("path");
const fs = require("fs");
const routes = Router();

// const authMiddleware = require("");
// const user=require("")

// ** Controllers ** //
const sellerController = require("./Controllers/SellerController");
const userController = require('./Controllers/UserController')
const adminController = require('./Controllers/AdminController');
const buyerController = require("./Controllers/BuyerController");



// const redisMiddleware = require("./Middleware/redis"); // Middleware of redis
// const cache_howiam = require("./Middleware/redisCache"); // Middleware of redis


// const ValidationAuth = require("./Validations/ValidationAuth");


// **  User Routes  ** //
routes.get("/", (req, res) => res.send('yes i am here!!!!'));
routes.post("/user/signup", userController.signUp);
routes.post("/user/login", userController.logIn);
routes.post("/user/emailCodeVerification", userController.emailCodeVerification);
routes.post("/user/phonenoverification", userController.textCodeVerification);


// 1 *****      Seller Routes     ***** //
// 1.1 **  Seller phase1 & phase 2    ** //

routes.post("/addseller", sellerController.addSeller);
routes.post("/seller/getseller", sellerController.getSeller);
routes.get("/seller/allseller", sellerController.getAllSeller);
routes.post("/seller/phase1request", sellerController.phase1);
routes.post("/seller/phase2request", sellerController.phase2);

routes.put("/seller/updateuserstatus", sellerController.updateUserStatus);

// **  Seller Services Routes  ** //

routes.post("/seller/addservice", sellerController.addService);
routes.post("/seller/getservice", sellerController.getService);
routes.get("/seller/allservices", sellerController.getAllServices);
routes.get("/seller/getallsellerservice/:sellerid", sellerController.getAllSellerService);
routes.get("/seller/getallsellerportfolio/:sellerid", sellerController.getAllSellerPortfolio);



// **  Seller Portfolio  Routes  ** //

routes.post("/seller/createPortfolio", sellerController.addPortfolio);
routes.get("/seller/getallportfolio", sellerController.getAllPortfolio);
routes.get("/seller/getPortfolio/:id", sellerController.getPortfolio);


// **  Collections  Routes  ** //

routes.post("/seller/createsellercollection", sellerController.createSellerCollection);
routes.post("/seller/createprojectcollection", sellerController.createProjectCollection);
routes.post("/seller/addprojectincollection", sellerController.addProjectInCollection);
routes.post("/seller/addsellerincollection", sellerController.addSellerInCollection);
routes.get("/seller/sellercollection/:userID", sellerController.getSellerCollection);

// **  ssaved unsave jobs ** //

routes.post("/seller/saveJob", sellerController.saveJob);
routes.get("/seller/getallSavedJobs/:sellerId", sellerController.getSavejobs);




// **  Admin Routes  ** //

routes.post("/admin/updatephase1status", adminController.updatePhase1Status);





routes.post("/buyer/addnewjob", buyerController.addNewJob);
routes.get("/buyer/alljobs", buyerController.getAllJobs);
routes.get("/buyer/jobdetail/:jobId", buyerController.getJobDetail);
routes.get("/buyer/getalljobsofbuyer/:buyerId", buyerController.getAllJobsOfBuyer);

routes.get("/buyer/getalljoboffer/:jobId", buyerController.getAllJobOffer);





routes.post("/seller/sendjoboffer", sellerController.sendJobOffer);



module.exports = routes;
