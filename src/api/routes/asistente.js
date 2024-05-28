const { isAuth } = require("../../middlewares/auth");
const { getAsistenteById, getAsistentes, updateAsistente, deleteAsistente, postAsistente,  getEventosOfAsistente } = require("../controllers/asistente");

const asistentesRouter = require('express').Router()

asistentesRouter.get('/', isAuth ,getAsistentes)
asistentesRouter.get('/:id', isAuth ,getAsistenteById)
asistentesRouter.get('/eventos/:id', isAuth ,getEventosOfAsistente)
asistentesRouter.post('/', isAuth ,postAsistente)
asistentesRouter.put('/:id', isAuth ,updateAsistente)
asistentesRouter.delete('/:id', isAuth ,deleteAsistente)

module.exports = asistentesRouter

