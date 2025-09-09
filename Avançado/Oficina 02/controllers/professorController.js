const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const listarProfessores = async (req, res) => {
  try {
    const professores = await prisma.professor.findMany();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const criarProfessor = async (req, res) => {
  const { nome, email, idade } = req.body;

  if (!nome || !email || !idade) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const professor = await prisma.professor.create({
      data: { nome, email, idade: parseInt(idade) },
    });
    res.status(201).json(professor);
  } catch (error) {
    if (error.code === "P2002") {
      res.status(400).json({ error: "Email já existe" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const atualizarProfessor = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const professor = await prisma.professor.update({
      where: { id: parseInt(id) },
      data: { nome, email },
    });
    res.json(professor);
  } catch (error) {
    if (error.code === "P2025") {
      res.status(404).json({ error: "Professor não encontrado" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const excluirProfessor = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.professor.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      res.status(404).json({ error: "Professor não encontrado" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = {
  listarProfessores,
  criarProfessor,
  atualizarProfessor,
  excluirProfessor,
};
