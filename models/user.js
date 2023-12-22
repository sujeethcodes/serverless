module.exports = (sequelize, DataTypes)=>{
    return sequelize.define(
        "user",
        {
          id: {
            field: "id",
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          userId: {
            field: "userId",
            type: DataTypes.INTEGER,
          },
          name: {
            field: "name",
            type: DataTypes.STRING,
          },
          industry: {
            field: "industry",
            type: DataTypes.STRING,
          },
          role:{ 
           field: "role",
           type: DataTypes.STRING,
          }
       
        },
        {
          timestamps: false,
          tableName: "user",
        }
      );
      
}