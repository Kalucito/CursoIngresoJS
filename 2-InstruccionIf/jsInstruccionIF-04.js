/* 
Alumno: Lucas De Nardo
Div G
EJ 4

Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	if (edad >= 13 && edad <= 17) 
	{

		alert("La persona es adolescente.");
	}



}//FIN DE LA FUNCIÓN