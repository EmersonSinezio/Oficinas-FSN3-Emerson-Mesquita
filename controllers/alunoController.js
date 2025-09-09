const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const listarAlunos = async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAlunoById = async (req, res) => {
  const { id } = req.params;

  try {
    const aluno = await prisma.aluno.findUnique({
      where: { id: parseInt(id) },
    });

    if (!aluno) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const criarAluno = async (req, res) => {
  const { nome, email, idade } = req.body;

  if (!nome || !email || !idade) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const aluno = await prisma.aluno.create({
      data: { nome, email, idade: parseInt(idade) },
    });
    res.status(201).json(aluno);
  } catch (error) {
    if (error.code === "P2002") {
      res.status(400).json({ error: "Email já existe" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const atualizarAluno = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body; // Não recebe idade

  try {
    const aluno = await prisma.aluno.update({
      where: { id: parseInt(id) },
      data: { nome, email },
    });
    res.json(aluno);
  } catch (error) {
    if (error.code === "P2025") {
      res.status(404).json({ error: "Aluno não encontrado" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const excluirAluno = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.aluno.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      res.status(404).json({ error: "Aluno não encontrado" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = {
  listarAlunos,
  criarAluno,
  atualizarAluno,
  excluirAluno,
  getAlunoById,
};
