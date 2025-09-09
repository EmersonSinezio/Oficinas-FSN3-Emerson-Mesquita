const express = require("express");
const router = express.Router();
const {
  listarAlunos,
  criarAluno,
  atualizarAluno,
  excluirAluno,
  getAlunoById,
} = require("../controllers/alunoController");

router.get("/", listarAlunos);
router.get("/:id", getAlunoById);
router.post("/", criarAluno);
router.put("/:id", atualizarAluno);
router.delete("/:id", excluirAluno);
module.exports = router;
