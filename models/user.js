const Sequelize = require("sequelize");
const DB = require("../database/db");
const User = DB.define(
  "user",
  {
    id: {
      field: "id",
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      field: "userId",
      type: Sequelize.DataTypes.INTEGER,
    },
    name: {
      field: "name",
      type: Sequelize.DataTypes.STRING,
    },
    industry: {
      field: "industry",
      type: Sequelize.DataTypes.STRING,
    },
    role:{ 
     field: "role",
     type: Sequelize.DataTypes.STRING,

    }
 
  },
  {
    timestamps: false,
    tableName: "user",
  }
);


module.exports = User