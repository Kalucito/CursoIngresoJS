/*
Alumno: Lucas De Nardo
Div G
EJ 9
*/
function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	var mensaje;
	var tarifa;
	var modificador;
	var precioFinal;	

	tarifa = 15000;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					modificador = 1.2;
					break;
				case "Mar del Plata":
					modificador = 0.8;
					break;
				default:
					modificador = 0.9;
					break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					modificador = 0.8;
					break;
				case "Mar del Plata":
					modificador = 1.2;
					break;
				default:
					modificador = 1.1;
					break;
			}
		break;
		default:
			switch(destinoIngresado)
			{
				case "Cordoba":
					modificador = 1;
					break;
				default:
					modificador = 1.1;
					break;
			}	
		break;
	}	//Fin del Switch.

	precioFinal = tarifa * modificador;
	alert("$" + precioFinal);

}//FIN DE LA FUNCIÓN