const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const taskRoutes = require('./src/routes/taskRoutes.js');
const userRoutes = require('./src/routes/userRoutes.js');
// const routerT = express.Router();


// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à la base de données :', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes personnalisées
app.use('/api/tasks', taskRoutes); // Routes pour les tâches
app.use('/api/users', userRoutes); // Routes pour les utilisateurs

// Route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de gestion de tâches !');
});

// Middleware
const authMiddleware = require('../Tasks/middleware/auth.js'); // Chemin vers le middleware

// Route protégée pour les tâches
app.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Bienvenue dans une route protégée !', task: req.task });
});

// Route protégée pour les utilisateurs
app.get('/protect', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Bienvenue, votre route est protégée !', user: req.user });
});

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Bienvenue sur l\'API !', endpoints: ['/api/tasks', '/api/users'] });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Mon serveur est actif sur l'adresse http://localhost:${PORT}`);
});
