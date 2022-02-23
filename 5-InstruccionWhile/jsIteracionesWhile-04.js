/*
Alumno: Lucas De Nardo
Div G
EJ 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("Numero ingresado no valido.");
	}

	document.getElementById("txtIdNumero").value = "El número ingresado es " + numeroIngresado;
	
}//FIN DE LA FUNCIÓN