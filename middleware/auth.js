const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Récupérer le token après "Bearer"

    if (!token) {
        return res.status(401).json({ message: 'Authentification requise.' });
    }

    try {
        // Vérifier et décoder le token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Utilisez votre clé secrète définie dans .env

        // Ajouter l'utilisateur décodé au req
        req.user = {
            name: decoded.name,
            email: decoded.email,
            age: decoded.age,
            password: decoded.password,
            date: decoded.date,

        };

        // Ajouter une tâche fictive au req (vous pouvez le personnaliser selon vos besoins)
        req.task = {
            title: 'Exemple de tâche',
            description: 'Ceci est une tâche protégée.',
            duedate: 'la tache prend fin de 12/09/2025',
            status: 'Statut/objectiif de la tâche',
            createdAt: 'La tâche a été créée le 03/03/2025'
        };

        next(); // Passer à la prochaine étape
    } catch (error) {
        res.status(403).json({ message: 'Token invalide.' });
    }
};
