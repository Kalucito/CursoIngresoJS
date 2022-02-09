/* 
Alumno: Lucas De Nardo
Div G
EJ 9

Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	var numero;

	numero = Math.random()*10 + 1;
	numero = Math.floor(numero);

	alert(numero);

}//FIN DE LA FUNCIÓN