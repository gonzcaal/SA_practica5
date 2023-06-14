const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

const fs = require('fs');

// Middleware para registrar las consultas en un archivo
app.use((req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
  fs.appendFile('../lista.log', log, (err) => {
    if (err) console.error(err);
  });
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/solicitar_pedido', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

  axios.post('http://localhost:4001/solicitar_pedido', {test1:numeroAleatorio})
    .then(response => {
        console.log(response.data)
      res.send(`Restaurante: ${response.data}`);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("eror al realizar pedido al restaurante");
    });
});


app.get('/verificar_pedido_restaurante', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

  axios.post('http://localhost:4001/verificar_pedido_restaurante', {test1:numeroAleatorio})
    .then(response => {
        console.log(response.data)
      res.send(`Restaurante: ${response.data}`);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("error al verificar pedido al restaurante");
    });
});

app.get('/verificar_pedido_repartidor', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

  axios.post('http://localhost:5001/verificar_pedido_repartidor', {test1:numeroAleatorio})
    .then(response => {
        console.log(response.data)
      res.send(`REPARTIDOR: ${response.data}`);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("error al verificar pedido al repartidor");
    });
});




app.listen(port, () => {
  console.log(`APP CLIENTE ${port}`);
});
