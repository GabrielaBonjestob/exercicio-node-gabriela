import express from "express";
import musics from "./musics.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  resposta.send(musics);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
