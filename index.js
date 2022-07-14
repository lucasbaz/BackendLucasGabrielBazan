const express = require('express');

const app = express();

const prodArray = ["manzana", "banana", "mandarina", "leche", "pollo", "zanahoria"];

app.get("/productos", (req,res) => {
	res.send(JSON.stringify(prodArray));
})

app.get("/productoRandom", (req, res) => {
	const randomProd = prodArray[Math.floor(Math.random() * 7)]
	res.send(JSON.stringify(randomProd));
})

const PORT = 8080
app.listen(PORT, () => console.log("Conexion exitosa al puerto", PORT));