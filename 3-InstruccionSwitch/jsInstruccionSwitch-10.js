/*
Alumno: Lucas De Nardo
Div G
EJ 10
*/
function mostrar()
{

	var destinoIngresado;
	var estacionIngresada;
	var mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":

			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "Se viaja.";
					break;
				default:
					mensaje = "No se viaja.";
					break;
			}
			break;
		case "Otoño":
			mensaje = "Se viaja.";
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja.";
					break;
				default:
					mensaje = "No se viaja.";
					break;
			}
			break;
		default:
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "No se viaja.";|
					break;
				default:
					mensaje = "Se viaja.";
			}
			break;
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN