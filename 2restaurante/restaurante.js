const express = require('express');

const app = express();
const port = 4001;
const axios = require('axios');

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

app.post('/solicitar_pedido', (req, res) => {
  const data = req.body.test1;
  // Hacer algo con los datos recibidos en la Aplicación 2
  console.log('PEDIDO DEL CLIENTE RECIBIDO:', data);

  res.status(200).json('PEDIDO REALIZADO: No. '+ data);
});

app.post('/verificar_pedido_restaurante', (req, res) => {
    const data = req.body.test1;
    // Hacer algo con los datos recibidos en la Aplicación 2
    console.log("Pedido realizandose NO: " + data);
  
    res.status(200).json('Pedido realizandose NO: '+ data);
  });


app.get('/recibir_pedido', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

 
    console.log("pedido recibido: " + numeroAleatorio);
    res.status(200).json('pedido recibido: '+ numeroAleatorio);
  });

  app.get('/informar_estado_pedido_cliente', (req, res) => {
    const numeroAleatorio =  Math.random() * (1 - 0) + 1;
    const pedido = Math.floor(Math.random() * 1000) + 1;


    if (numeroAleatorio){
 
        console.log("realizando pedido: " + pedido);
        res.status(200).json('realizando pedido: '+ pedido);
    
    }else{

        console.log("pedido enviado: " + pedido);
        res.status(200).json('pedido enviado: '+ pedido);
    }
  });


  app.get('/avisar_repartidor_pedido', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

  axios.post('http://localhost:5001/avisar_repartidor_pedido', {test1:numeroAleatorio})
    .then(response => {
        console.log(response.data)
      res.send(`REPARTIDOR: ${response.data}`);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("error al AVISARLE al repartidor");
    });
});






app.listen(port, () => {
  console.log(`APP REPARTIDOR ${port}`);
});
