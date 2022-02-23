/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorNumerosPares;
	var mensaje;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorNumerosPares = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("ERROR. Ingrese un numero valido");
			numeroIngresado = parseInt(numeroIngresado);
		}			

		if(numeroIngresado < 0)
		{
			sumaNegativos -= numeroIngresado;
			contadorNegativos++;
		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos += numeroIngresado;
				contadorPositivos++;
			}
			else
			{
				contadorCeros++;
			}
		}

		if(numeroIngresado %2 == 0)
		{
			contadorNumerosPares++;			
		}

		respuesta = prompt("¿Quiere ingresar otro numero? Responda si o no.").toLowerCase();
	}
	
	while(respuesta == "si");

	promedioPositivos = sumaPositivos / contadorPositivos;

	promedioNegativos = sumaNegativos / contadorNegativos;	

	mensaje = "La suma de los negativos es "+sumaNegativos+" </br>"; 
	mensaje += "La suma de los positivos es "+sumaPositivos+" </br>";
	mensaje += "La cantidad de los numeros positivos es "+contadorPositivos+" </br>";
	mensaje += "La cantidad de los numeros negativos es "+contadorNegativos+" </br>";
	mensaje += "La cantidad de ceros es "+contadorCeros+" </br>";
	mensaje += "La cantidad de numeros pares es "+contadorNumerosPares+" </br>";
	mensaje += "El promedio de los numeros positivos es "+promedioPositivos+" </br>";
	mensaje += "El promedio de los numeros negativos es "+promedioNegativos+" </br>"; 

	if(contadorPositivos >= contadorNegativos)
	{
		diferencia = contadorPositivos - contadorNegativos;
		switch(diferencia)
		{
			case 0: 
				mensaje += "No hay diferencia entre la cantidad de numeros positivos y negativos";
			break;
			case 1:
				mensaje += "Hay "+ diferencia +" numero positivo mas que negativo";
			break;
			default:
				mensaje += "Hay "+ diferencia +" numeros positivos mas que negativos";
			break;
		}
	}
	else
	{
		diferencia = contadorNegativos - contadorPositivos;
		switch(diferencia)
		{
			case 1:
				mensaje += "Hay "+ diferencia +" numero negativo mas que positivo";
			break;
			default:
				mensaje += "Hay "+ diferencia +" numeros negativos mas que positivos";
			break;
		}
	}

	

	document.write(mensaje);

}//FIN DE LA FUNCIÓN


