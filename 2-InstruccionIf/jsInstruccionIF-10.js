/* 
Alumno: Lucas De Nardo
Div G
EJ 10

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	var nota;

	nota = Math.random()* 10 + 1;
	nota = Math.floor(nota);

	if (nota >= 9) 
	{
		alert( "Su nota es "+ nota + ": EXCELENTE");
	}

	else
	{
		if (nota >= 4) 
		{
			alert("Su nota es "+ nota + ": APROBÓ");
		}
		else 
		{
			alert("Su nota es "+ nota + ": Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN