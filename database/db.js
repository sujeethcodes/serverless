require("dotenv").config();

// const User = require("../models/user");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
    logging: false,
    dialectModule: require("mysql2"),
  }
);

// let model = { User };
module.exports.dbConTest = async () => {
  try {
     sequelize.authenticate();
    console.log("DB_CONNECTED_SUCCESSFULLY");
    // return model;
  } catch (error) {
    console.log("Unable to connect", error);
  }
};

module.exports = sequelize; 
