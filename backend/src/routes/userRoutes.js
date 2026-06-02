const express = require("express");
const { createUser, getUsers } = require("../controllers/userController");
const auth = require("../middleware/auth");
const allowRoles = require("../middleware/role");

const router = express.Router();

router.post("/", auth, allowRoles("admin"), createUser);
router.get("/", auth, allowRoles("admin"), getUsers);

module.exports = router;