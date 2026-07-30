const Ticket = require("../models/Ticket");

// Obtener todos los tickets
const obtenerTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener un ticket por ID
const obtenerTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({ mensaje: "Ticket no encontrado" });
        }

        res.json(ticket);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear un ticket
const crearTicket = async (req, res) => {
    try {
        const ticket = new Ticket(req.body);
        const nuevoTicket = await ticket.save();
        res.status(201).json(nuevoTicket);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar un ticket
const actualizarTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!ticket) {
            return res.status(404).json({ mensaje: "Ticket no encontrado" });
        }

        res.json(ticket);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar un ticket
const eliminarTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);

        if (!ticket) {
            return res.status(404).json({ mensaje: "Ticket no encontrado" });
        }

        res.json({ mensaje: "Ticket eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerTickets,
    obtenerTicket,
    crearTicket,
    actualizarTicket,
    eliminarTicket
};