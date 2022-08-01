const express = require('express');

const app = express();

let prodArray = ["manzana", "banana", "mandarina", "leche", "pollo", "zanahoria"];

app.get("/productos", (req,res) => {
	res.send(JSON.stringify(prodArray));
})

app.get("/productoRandom", (req, res) => {
	const randomProd = prodArray[Math.floor(Math.random() * 7)]
	res.send(JSON.stringify(randomProd));
}) //obtiene data

app.post("/productos", (req, res) => {
	const newElement = req.query.e
	if (newElement) {
		//prodArray.push(newElement.length > 0 ? newElement : 'defautl') con ternarios
		if (newElement.length != 0) {
			prodArray.push(newElement)
			res.send(`Se ha agregado correctamente el producto ${newElement}`)
		}
		else {
			res.send(`El campo producto es invalido`)
		}
	}
	else {
		res.send (`verifique que el query fue bien escrito`)
	}
})

app.put("/productos/:search", (req, res) => {
	const oldElement = req.params.search;
	const newElement = req.query.update;

	if (!oldElement || !newElement) {
		res.send (`alguno de los elementos es invalido`)
		return
	}

	const indexElement = prodArray.findIndex ((item)=> item === oldElement)
	if (indexElement == -1) {
		res.send(`el producto ingresado no existe`);
	} else {
		prodArray [indexElement] = newElement;
		res.send(`El producto ${oldElement} fue cambiado por ${newElement} con exito`)
	}
})

app.delete("/productos", (req, res) => {
	const cleanElement = req.query.d;
	if (cleanElement) {
		//prodArray.push(newElement.length > 0 ? newElement : 'defautl') con ternarios
		if (cleanElement.length != 0) {
			prodArray = prodArray.filter((item) => item !== cleanElement)
			res.send(`Se ha eliminado correctamente el producto ${cleanElement}`)
		}
		else {
			res.send(`no hay nada que eliminar`)
		}
	}
	else {
		res.send (`verifique que el query fue bien escrito`)
	}
})

const PORT = 8080
app.listen(PORT, () => console.log("Conexion exitosa al puerto", PORT));