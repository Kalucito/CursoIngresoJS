/*
Alumno: Lucas De Nardo
Div G
EJ 7
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	

	contador=0;
	acumulador=0;
	// respuesta = "si"; --> la saco porque el do while me ahorra de hardcodear.

	do
	{
		numeroIngresado = prompt("Ingrese el número:");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
		contador ++;
		respuesta = prompt("¿Desea ingresar más números?").toLowerCase();
	}
	while(respuesta == "si"); //va punto y coma porque ahi termina el bloque, ya esta en el do la funcion.

	/*while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese el número:");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
		contador ++;
		respuesta = prompt("¿Desea ingresar más números?").toLowerCase();
	}*/

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;




}//FIN DE LA FUNCIÓN