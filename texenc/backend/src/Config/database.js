require("dotenv").config();
module.exports = {
    host: "texenc.cceemwfbktrh.us-east-2.rds.amazonaws.com",
    username: "postgres",
    password: "postgres",
    database: "texenc",
    post: 5432,
    protocol: "postgres",
    define: {
        timestamps: true,
        underscored: true,
    },
    dialect: "postgres",
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false
    //   }
    // },
};