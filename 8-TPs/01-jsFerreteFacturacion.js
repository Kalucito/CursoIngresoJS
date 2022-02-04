/*

alumno: Lucas De Nardo Div G TP N°1

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseFloat(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseFloat(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseFloat(precioTres);

	resultado = precioUno + precioDos + precioTres;


	alert(resultado);
	
}

function Promedio () 
{

	var precioUno;
	var precioDos;
	var precioTres;
	var cantidadDeProductos;
	var resultado;

	cantidadDeProductos = 3;
	
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseFloat(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseFloat(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseFloat(precioTres);

	resultado = (precioUno + precioDos + precioTres) / cantidadDeProductos;


	alert(resultado);

}

function PrecioFinal () 
{
	/*var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var iva;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseFloat(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseFloat(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseFloat(precioTres);

	iva = 1.21;

	resultado = (precioUno + precioDos + precioTres) * iva;


	alert(resultado); */

	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var iva;
	var precioConIva;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseFloat(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseFloat(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseFloat(precioTres);

	iva = 1.21;

	suma = precioUno + precioDos + precioTres;

	precioConIva = suma * iva;


	alert(precioConIva);
}



