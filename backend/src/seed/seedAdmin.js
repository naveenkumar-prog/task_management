const bcrypt = require("bcryptjs");
require("dotenv").config();

const sequelize = require("../config/db");
const User = require("../models/User");

const seedAdmin = async () => {
  try {
    await sequelize.sync();

    const existingAdmin = await User.findOne({
      where: { email: "admin@example.com" }
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    await User.create({
      name: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin"
    });

    console.log("Admin created successfully");
    console.log("Email: admin@example.com");
    console.log("Password: Admin@123");

    process.exit();
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};

seedAdmin();