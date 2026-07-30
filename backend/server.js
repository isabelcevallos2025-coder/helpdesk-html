require("dotenv").config();

const express = require("express");
const cors = require("cors");

const conectarDB = require("./config/db");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();

// Conectar a MongoDB
conectarDB();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.send("API del Sistema de Gestión de Incidentes funcionando");
});

// Rutas de tickets
app.use("/api/tickets", ticketRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});