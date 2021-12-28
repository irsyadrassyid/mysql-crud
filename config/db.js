const sequelize = require("sequelize");

const db = new sequelize("smartschool", "root", "", {
	dialect: "mysql",
});

db.sync({});

module.exports = db;
