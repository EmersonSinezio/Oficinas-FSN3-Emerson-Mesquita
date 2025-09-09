const express = require("express");
const alunoRoutes = require("./routes/alunos");
const professorRoutes = require("./routes/professores");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/alunos", alunoRoutes);
app.use("/professores", professorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
