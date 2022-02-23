/*
Alumno: Lucas De Nardo
Div G
EJ 6
al presionar el botón 
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador < 5)
	{
	numeroIngresado = prompt("Ingrese los numeros.");
	numeroIngresado = parseInt(numeroIngresado);
	acumulador += numeroIngresado;
	contador++;
	}

	document.getElementById("txtIdSuma"). value = acumulador;
	document.getElementById("txtIdPromedio"). value = acumulador / 5;




}//FIN DE LA FUNCIÓN