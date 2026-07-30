const express = require("express");
const router = express.Router();

const {
    obtenerTickets,
    obtenerTicket,
    crearTicket,
    actualizarTicket,
    eliminarTicket
} = require("../controllers/ticketController");

// CRUD de Tickets
router.get("/", obtenerTickets);
router.get("/:id", obtenerTicket);
router.post("/", crearTicket);
router.put("/:id", actualizarTicket);
router.delete("/:id", eliminarTicket);

module.exports = router;