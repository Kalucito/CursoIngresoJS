/*
Alumno: Lucas De Nardo
Div G
EJ 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;

	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese el número:");
		numeroIngresado = parseInt(numeroIngresado);
		
		respuesta = prompt("¿Desea ingresar más números?");

		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
		}
		else
		{
			multiplicacionNegativos *= numeroIngresado;
		}
		respuesta = prompt("¿Desea ingresar más números?");
	}
	


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN