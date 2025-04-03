const express = require('express');
const router = express.Router();
const Task = require("../models/taskModel"); // Assurez-vous que le chemin est correct

// Route GET - Récupérer toutes les tâches
router.get('/', async (req, res) => {
    try {
        const allTasks = await Task.find(); // Récupérer toutes les tâches depuis MongoDB
        res.status(200).json(allTasks); // Retourner les tâches en JSON
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des tâches', error: error.message });
    }
});

// Route POST - Créer une nouvelle tâche
router.post('/', async (req, res) => {
    try {
        const { title = "", description = "", dueDate = "", status = "" } = req.body;
        const newTask = new Task({ title, description, dueDate, status }); // Créer une nouvelle tâche
        await newTask.save(); // Enregistrer la tâche dans la base de données
        res.status(201).json(newTask); // Retourner la tâche créée avec un statut HTTP 201
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de la tâche', error: error.message });
    }
});

// Route PUT - Mettre à jour une tâche par ID
router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Mise à jour
        if (!updatedTask) {
            return res.status(404).json({ message: 'Tâche non trouvée' }); // Si l'ID est incorrect
        }
        res.status(200).json(updatedTask); // Retourner la tâche mise à jour
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la tâche', error: error.message });
    }
});

// Route DELETE - Supprimer une tâche par ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id); // Suppression
        if (!deletedTask) {
            return res.status(404).json({ message: 'Tâche non trouvée' }); // Si l'ID est incorrect
        }
        res.status(200).json({ message: 'Tâche supprimée avec succès', deletedTask });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la tâche', error: error.message });
    }
});

module.exports = router;
