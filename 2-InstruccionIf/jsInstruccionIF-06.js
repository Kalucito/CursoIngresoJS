/* 
Alumno: Lucas De Nardo
Div G
EJ 6

Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	if (edad >= 18) 
	{
		alert("La persona es mayor.")
	}

	else 
	{
		if (edad >= 13 && edad <= 17) 
		{
			alert("La persona adolescente.")

		}
		else
		{
			alert("Eses un niño.")
		}
	}


	


}//FIN DE LA FUNCIÓN