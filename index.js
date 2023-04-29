const express = require('express');
const app = express();
const port = 3001;

app.get('/:peso/:altura', (req, res) => {
  const peso = Number(req.params.peso);
  const altura = Number(req.params.altura);
  
  if (isNaN(peso) || isNaN(altura)) {
    res.status(400).send('Parâmetros inválidos');
  } else {
    const imc = peso / (altura ** 2);
    res.send(`Seu IMC é ${imc.toFixed(2)}`);
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});