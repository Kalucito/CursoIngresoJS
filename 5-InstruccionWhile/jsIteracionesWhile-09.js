/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	banderaDelPrimero = true;

	do
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("ERROR. Ingrese un número valido.");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado > numeroMaximo || banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
		}
		if (numeroIngresado < numeroMinimo || banderaDelPrimero == true) 
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}

		respuesta = prompt("¿Desea continuar?").toLowerCase();
	}
	while(respuesta == "si");
	

	document.getElementById("txtIdMinimo").value = numeroMinimo; 
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	//podria agregrar msj numero maximo es..

	//iniciar variables

}//FIN DE LA FUNCIÓN