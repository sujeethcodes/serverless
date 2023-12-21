require("dotenv").config();

const userModel = require("../models/user");
const Sequelize = require("sequelize");
const DB = new Sequelize(
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

const User = userModel(DB,Sequelize)
let model = { User };

let dbConTest = async () => {
  try {
await DB
.authenticate()

  console.log("DB_CONNECTED_SUCCESSFULLY");
  console.log(model)
  return model
} catch (error) {
  console.log("unable to conect", error);
}

};

module.exports = {dbConTest, Sequelize}; 
