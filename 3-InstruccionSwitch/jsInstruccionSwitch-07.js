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
		case "Mar Del Plata":
			mensaje = "EL destino está al Este";
			break;
		default:
			mensaje = "El destino está al Sur";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN