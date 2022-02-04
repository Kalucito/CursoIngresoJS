/*3.

Alumno: Lucas De Nardo 
Div G 
TP N°3

	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

	var gradosFahrenheit;
	var pasaje;
	
	gradosFahrenheit = document.getElementById("txtIdTemperatura").value;
	gradosFahrenheit = parseFloat(gradosFahrenheit);

	pasaje = (gradosFahrenheit - 32) * 5 / 9;
	
	alert(pasaje + "°C.");


}

function CentigradosFahrenheit () 
{
	
	var gradosCentigrados;
	var pasaje;
	
	gradosCentigrados = document.getElementById("txtIdTemperatura").value;
	gradosCentigrados = parseFloat(gradosCentigrados);

	pasaje = gradosCentigrados * 1.8 + 32;

	alert(pasaje + "°F.");


}
