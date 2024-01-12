require('dotenv').config();
const express = require('express');
const RouteFactory = require('./Routes/RouteFactory');
const app = express();
require("./config/db")();

app.use(express.json()); 

// Votre code Express ici
app.get('/', (req,res) => {
    res.send("Bienvenue sur l'API RESTful");
})

// Utilisation de la factory pour créer le routeur pour les produits
app.use('/products', RouteFactory.create('product')); 
app.use('/categories', RouteFactory.create('category')); 

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
