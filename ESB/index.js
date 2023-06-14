const express= require ('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.get('/api/solicitar_pedido', async (req,res)=>{
    try{
        //envia la solicitud al servicio B
        const response = await axios.get('http://localhost:3001/solicitar_pedido', req.body);

    res.status(200).json(response.data);

    }catch{
        console.error(error);
        res.status(500).json({error: "ocurrio un error en el ESB"});
    }
})


app.get('/api/verificar_pedido_restaurante', async (req,res)=>{
    try{
        //envia la solicitud al servicio B
        const response = await axios.get('http://localhost:3001/verificar_pedido_restaurante', req.body);

    res.status(200).json(response.data);

    }catch{
        console.error(error);
        res.status(500).json({error: "ocurrio un error en el ESB"});
    }
})

app.get('/api/verificar_pedido_repartidor', async (req,res)=>{
    try{
        //envia la solicitud al servicio B
        const response = await axios.get('http://localhost:3001/verificar_pedido_repartidor', req.body);

    res.status(200).json(response.data);

    }catch{
        console.error(error);
        res.status(500).json({error: "ocurrio un error en el ESB"});
    }
})

app.get('/api/recibir_pedido', async (req,res)=>{
    try{
        //envia la solicitud al servicio B
        const response = await axios.get('http://localhost:4001/recibir_pedido', req.body);

    res.status(200).json(response.data);

    }catch{
        console.error(error);
        res.status(500).json({error: "ocurrio un error en el ESB"});
    }
})


app.get('/api/informar_estado_pedido_cliente', async (req,res)=>{
    try{
        //envia la solicitud al servicio B
        const response = await axios.get('http://localhost:4001/informar_estado_pedido_cliente', req.body);

    res.status(200).json(response.data);

    }catch{
        console.error(error);
        res.status(500).json({error: "ocurrio un error en el ESB"});
    }
})

app.get('/api/avisar_repartidor_pedido', async (req,res)=>{
    try{
        //envia la solicitud al servicio B
        const response = await axios.get('http://localhost:4001/avisar_repartidor_pedido', req.body);

    res.status(200).json(response.data);

    }catch{
        console.error(error);
        res.status(500).json({error: "ocurrio un error en el ESB"});
    }
})

app.get('/api/recibir_pedido', async (req,res)=>{
    try{
        //envia la solicitud al servicio B
        const response = await axios.get('http://localhost:5001/recibir_pedido', req.body);

    res.status(200).json(response.data);

    }catch{
        console.error(error);
        res.status(500).json({error: "ocurrio un error en el ESB"});
    }
})

app.get('/api/estado_del_pedido', async (req,res)=>{
    try{
        //envia la solicitud al servicio B
        const response = await axios.get('http://localhost:5001/estado_del_pedido', req.body);

    res.status(200).json(response.data);

    }catch{
        console.error(error);
        res.status(500).json({error: "ocurrio un error en el ESB"});
    }
})


app.get('/api/marcar_entregado', async (req,res)=>{
    try{
        //envia la solicitud al servicio B
        const response = await axios.get('http://localhost:5001/marcar_entregado', req.body);

    res.status(200).json(response.data);

    }catch{
        console.error(error);
        res.status(500).json({error: "ocurrio un error en el ESB"});
    }
})





app.post('/api/ejemplo', async (req,res)=>{
    try{
        //envia la solicitud al servicio B
        const response = await axios.post('localhost:3001/api/serviceB', req.body);

        //enviar la respuesta del servicio B al servicio C
        const responseC= await axios.post("localhost:3002/api/serviceC", response.data);
    res.json(responseC.data);

    }catch{
        console.error(error);
        res.status(500).json({error: "ocurrio un error en el ESB"});
    }
})
app.listen(3000, () =>{
    console.log("ESB ejecutandose en el puerto 3000");
})