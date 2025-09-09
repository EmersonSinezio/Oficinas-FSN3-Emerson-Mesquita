const express = require("express");
const router = express.Router();
const {
  listarProfessores,
  criarProfessor,
  atualizarProfessor,
  excluirProfessor,
} = require("../controllers/professorController");

router.get("/", listarProfessores);
router.post("/", criarProfessor);
router.put("/:id", atualizarProfessor);
router.delete("/:id", excluirProfessor);

module.exports = router;
