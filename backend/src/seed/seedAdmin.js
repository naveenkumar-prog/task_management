const User = require("../models/User");
const bcrypt = require("bcryptjs");

const seedAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({
      where: { email: "admin@example.com" }
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    await User.create({
      name: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin"
    });

    console.log("Admin user created");
  } catch (error) {
    console.error("Error creating admin:", error.message);
  }
};

module.exports = seedAdmin;