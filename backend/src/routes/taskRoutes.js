const express = require("express");
const {
  createTask,
  getTasks,
  updateTaskStatus
} = require("../controllers/taskController");

const auth = require("../middleware/auth");
const allowRoles = require("../middleware/role");

const router = express.Router();

router.post("/", auth, allowRoles("admin"), createTask);
router.get("/", auth, getTasks);
router.patch("/:id/status", auth, updateTaskStatus);

module.exports = router;