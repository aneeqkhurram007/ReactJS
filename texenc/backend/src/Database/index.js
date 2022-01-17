const Sequelize = require("sequelize");
const ConfigDB = require("../Config/database");

const User = require("../Models/User");
const Buyer = require("../Models/Buyer");
const BuyerJob = require("../Models/BuyerJob");
const JobOffer = require("../Models/JobOffer");
const Package = require("../Models/Package");
const Phase1 = require("../Models/Phase1");
const Phase2 = require("../Models/Phase2");
const ProjectCollection = require("../Models/ProjectCollection");
const SavedJob = require("../Models/SavedJob");
const Seller = require("../Models/Seller");
const SellerCollection = require("../Models/SellerCollection");
const SellerPortfolio = require("../Models/SellerPortfolio");
const Service = require("../Models/Service");


const connection = new Sequelize(ConfigDB);
connection.authenticate();

User.init(connection);
Buyer.init(connection);
BuyerJob.init(connection);
JobOffer.init(connection);
Package.init(connection);
Phase1.init(connection);
Phase2.init(connection);
ProjectCollection.init(connection);
SavedJob.init(connection);
Seller.init(connection);
SellerCollection.init(connection);
SellerPortfolio.init(connection);
Service.init(connection);


User.associate(connection.models);
Buyer.associate(connection.models);
BuyerJob.associate(connection.models);
JobOffer.associate(connection.models);
Package.associate(connection.models);
Phase1.associate(connection.models);
Phase2.associate(connection.models);
ProjectCollection.associate(connection.models);
SavedJob.associate(connection.models);
Seller.associate(connection.models);
SellerCollection.associate(connection.models);
SellerPortfolio.associate(connection.models);
Service.associate(connection.models);

module.exports = connection;
