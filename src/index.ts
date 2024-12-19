import app from "./app";

const PORT = process.env.PORT || 3000;

// Inicialização do servidor
app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
