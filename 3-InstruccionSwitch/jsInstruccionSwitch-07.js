/*
Alumno: Lucas De Nardo
Div G
EJ 7
*/
function mostrar()
{
	var destino;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Cataratas":
			mensaje = "El destino está al Norte.";
			break;
		case "Mar del plata":
			mensaje = "EL destino está al Este";
			break;
		case "Bariloche":
			mensaje = "El destino está al Oeste";
			break;
		default:
			mensaje = "El destino está al Sur";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN