/* 
Alumno: Lucas De Nardo
Div G
EJ 5

Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	if (edad < 13 || edad > 17) 
	{

		alert("La persona no es adolescente.");
	}

}//FIN DE LA FUNCIÓN