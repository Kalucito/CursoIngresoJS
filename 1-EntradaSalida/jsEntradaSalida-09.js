/*

alumno: Lucas De Nardo Div G

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var resultado;
	var aumento;

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo= parseInt(sueldo);	
	
	aumento = sueldo * 0.1;
	aumento = parseFloat(aumento);

	resultado = sueldo + aumento;

	document.getElementById('txtIdResultado').value = resultado;

	

}
