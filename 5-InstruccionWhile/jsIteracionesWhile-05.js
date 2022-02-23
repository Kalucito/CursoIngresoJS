/*
Alumno: Lucas De Nardo
Div G
EJ 5
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("Ingrese su sexo:").toLowerCase();

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("ERROR. Ingrese un dato valido.").toLowerCase();
		
	}

	document.getElementById("txtIdSexo").value = "Su sexo es: " + sexoIngresado + ".";

}//FIN DE LA FUNCIÓN