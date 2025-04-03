// const express = require('express');
// const routerT = express.Router();
// routerT.use(express.json());

// // Exemple de données utilisateurs
// var users = [
//     { _id: 'user1', email: 'user1@example.com', name: 'Utilisateur 1', age: 25, 
//         password: 'password123', createdAt: new Date() },
//     { _id: 'user2', email: 'user2@example.com', name: 'Utilisateur 2', age: 30, 
//         password: 'password456', createdAt: new Date() },
// ];

// // Route GET - Récupérer tous les utilisateurs
// routerT.get('/', (req, res) => {
//     res.status(200).json(users);
// });

// // Route POST - Créer un nouvel utilisateur
// routerT.post('/', (req, res) => {
//     const { email, name, age, password } = req.body; // Ajout du champ "password"
//     if (!email || !name || !age || !password) {
//         return res.status(400).json({ message: 'Tous les champs (email, name, age, password) sont requis.' });
//     }
//     const newUser = {
//         _id: Date.now().toString(), // Génération d'un identifiant unique
//         email,
//         name,
//         age,
//         password,
//         createdAt: new Date(), // Enregistre la date de création
//     };
//     users.push(newUser);
//     res.status(201).json({
//         message: 'Utilisateur créé avec succès !',
//         user: newUser,
//     });
// });

// // Route PUT - Mettre à jour un utilisateur
// routerT.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const updatedData = req.body;

//     const userIndex = users.findIndex(user => user._id === id);
//     if (userIndex !== -1) {
//         users[userIndex] = { ...users[userIndex], ...updatedData }; // Met à jour les données utilisateur
//         res.status(200).json({
//             message: 'Utilisateur mis à jour avec succès !',
//             updatedUser: users[userIndex],
//         });
//     } else {
//         res.status(404).json({ message: 'Utilisateur non trouvé !' });
//     }
// });

// // Route DELETE - Supprimer un utilisateur
// routerT.delete('/:id', (req, res) => {
//     const id = req.params.id;
//     const initialLength = users.length;
//     users = users.filter(user => user._id !== id);

//     if (users.length < initialLength) {
//         res.status(200).json({ message: 'Utilisateur supprimé avec succès !' });
//     } else {
//         res.status(404).json({ message: 'Utilisateur non trouvé !' });
//     }
// });

// // module.exports = routerT; // Exporter les routes

// module.exports = {
//     getAllUsers: (req, res) => { res.send('All users'); },
//     getAllStuff: (req, res) => { res.send('All stuff'); },
//     createThing: (req, res) => { res.send('Thing created'); },
//     getOneThing: (req, res) => { res.send(`Thing with ID: ${req.params.id}`); },
//     modifyThing: (req, res) => { res.send(`Thing modified with ID: ${req.params.id}`); },
//     deleteThing: (req, res) => { res.send(`Thing deleted with ID: ${req.params.id}`); }
//   };
  