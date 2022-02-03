/*1.	Para el departamento de facturación:
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
	precioUno = parseInt(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseInt(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseInt(precioTres);

	resultado = precioUno + precioDos + precioTres;



	alert(resultado);
	
}

function Promedio () 
{

	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseInt(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseInt(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseInt(precioTres);

	resultado = (precioUno + precioDos + precioTres) / 3;



	alert(resultado);

}

function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var iva;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseInt(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseInt(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseInt(precioTres);

	iva = 1.21;
	iva = parseFloat(iva);

	resultado = (precioUno + precioDos + precioTres) * iva;



	alert(resultado);
}