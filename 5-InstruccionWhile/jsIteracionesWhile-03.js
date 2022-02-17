/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{

	var claveIngresada;

	claveIngresada = prompt("Ingese la clave:");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Clave erronea, ingrese nuevamente.");
	}
	
}//FIN DE LA FUNCIÓN
