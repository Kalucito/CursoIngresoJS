/*
Alumno: Lucas De Nardo
Div G
EJ 2
*/
function mostrar()
{
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
	// es mejor poner un default para q descarte en vez de poner case enereo, febrero , etc.
		default:
			mensaje = "Falta para el invierno.";
			break;
	}

	alert(mensaje);






}//FIN DE LA FUNCIÓN