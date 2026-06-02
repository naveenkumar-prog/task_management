const Task = require("../models/Task");
const User = require("../models/User");

const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo } = req.body;

    if (!title || !assignedTo) {
      return res.status(400).json({ message: "Title and assigned user are required" });
    }

    const assignee = await User.findByPk(assignedTo);

    if (!assignee) {
      return res.status(404).json({ message: "Assigned user not found" });
    }

    const task = await Task.create({
      title,
      description,
      assignedTo,
      createdBy: req.user.id
    });

    return res.status(201).json({
      message: "Task created successfully",
      task
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create task" });
  }
};

const getTasks = async (req, res) => {
  try {
    const whereCondition =
      req.user.role === "admin" ? {} : { assignedTo: req.user.id };

    const tasks = await Task.findAll({
      where: whereCondition,
      include: [
        {
          model: User,
          as: "assignee",
          attributes: ["id", "name", "email"]
        },
        {
          model: User,
          as: "creator",
          attributes: ["id", "name", "email"]
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    return res.json({ tasks });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ["Pending", "In Progress", "Completed"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid task status" });
    }

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (req.user.role !== "admin" && task.assignedTo !== req.user.id) {
      return res.status(403).json({ message: "You can update only your assigned tasks" });
    }

    task.status = status;
    await task.save();

    return res.json({
      message: "Task status updated successfully",
      task
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to update task status" });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTaskStatus
};