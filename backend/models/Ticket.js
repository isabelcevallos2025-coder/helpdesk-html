const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        enum: ["Abierto", "En proceso", "Resuelto"],
        default: "Abierto"
    },
    prioridad: {
        type: String,
        enum: ["Baja", "Media", "Alta"],
        default: "Media"
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Ticket", TicketSchema);