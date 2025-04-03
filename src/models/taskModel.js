const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, default: "" }, // Titre de la tâche
  description: { type: String, default: "" }, // Description de la tâche
  dueDate: { type: Date, default: Date.now }, // Par défaut, la date actuelle
  createdAt: { type: Date, default: Date.now }, // Date de création de la tâche
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
