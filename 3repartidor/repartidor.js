const express = require('express');
const axios = require('axios');
//const axios = require('axios');

const app = express();
const port = 5001;

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

app.post('/verificar_pedido_repartidor', (req, res) => {
    const data = req.body.test1;
    // Hacer algo con los datos recibidos en la Aplicación 2
    console.log('pedido en camino No:', data);
  
    res.status(200).json('pedido en camino No. '+ data);
});

app.post('/avisar_repartidor_pedido', (req, res) => {
    const data = req.body.test1;
    // Hacer algo con los datos recibidos en la Aplicación 2
    console.log('pedido listo:', data);
  
    res.status(200).json('pedido listo. '+ data);
});


app.get('/recibir_pedido', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    // Hacer algo con los datos recibidos en la Aplicación 2
    console.log('pedido recibido: ', numeroAleatorio);
  
    res.status(200).json('pedido recibido: '+ numeroAleatorio);
});



app.get('/estado_del_pedido', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    // Hacer algo con los datos recibidos en la Aplicación 2
    console.log('pedido en camino: ', numeroAleatorio);
  
    res.status(200).json('pedido en camino: '+ numeroAleatorio);
});

app.get('/marcar_entregado', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    // Hacer algo con los datos recibidos en la Aplicación 2
    console.log('pedido entregado: ', numeroAleatorio);
  
    res.status(200).json('pedido entregado: '+ numeroAleatorio);
});





  
app.listen(port, () => {
  console.log(`APP REPARTIDOR ${port}`);
});
