const express = require('express');

const app = express();

const prodArray = ["manzana", "banana"];

app.get("/productos", (req,res) => {
	//obtener del Container los productos
	
	res.send(JSON.stringify(prodArray));
})//(path, callback) -> callback: function(req, res)

app.get("/productoRandom", (req, res) => {
	const randomProd = prodArray[0]//Container.getItemById(Math.random());
	
	res.send(JSON.stringify(randomProd));
})

const PORT = 8080
app.listen(PORT, () => console.log("Conexion exitosa al puerto", PORT));