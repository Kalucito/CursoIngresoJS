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
		// if (edad >= 13 && edad <= 17) Esto es peor que lo otro, porque el programa ya descartó los mayores= a 18.
		if (edad >= 13)
		{
			alert("La persona adolescente.")

		}
		else
		{
			alert("La persona es un niño.")
		}
	}

/* Si hubiera un contexto de senso en la facultad, lo más probable es q la mayoría sean adultos
 menos probables es que haya adolescente y muy baja la probabilidad de que haya niños
 entonces convendría armar el prograrma en base a eso. Preguntariamos primero (if) si hay adultos, luego 
 adolescente y por último niños.*/
	


}//FIN DE LA FUNCIÓN