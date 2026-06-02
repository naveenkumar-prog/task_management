const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.ENUM("Pending", "In Progress", "Completed"),
      defaultValue: "Pending"
    }
  },
  {
    tableName: "tasks",
    timestamps: true
  }
);

User.hasMany(Task, {
  foreignKey: "assignedTo",
  as: "assignedTasks"
});

Task.belongsTo(User, {
  foreignKey: "assignedTo",
  as: "assignee"
});

User.hasMany(Task, {
  foreignKey: "createdBy",
  as: "createdTasks"
});

Task.belongsTo(User, {
  foreignKey: "createdBy",
  as: "creator"
});

module.exports = Task;