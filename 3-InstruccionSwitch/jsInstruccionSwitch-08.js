function mostrar()
{
	var destino;
	var mensaje;

	switch(destino)
	{
		case "Cataratas":
			mensaje = "En el destino hace Calor";
			break;
		default:
			mensaje = "En el destino hace frío.";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN