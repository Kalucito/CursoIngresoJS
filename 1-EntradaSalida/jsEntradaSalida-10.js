/*

alumno: Lucas De Nardo Div G

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var importe;
	var resultado;
	var descuento;


	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);

	descuento = 0.75;
	descuento = parseFloat(descuento);

	resultado = importe * descuento;

	document.getElementById('txtIdResultado').value = resultado;


}	
