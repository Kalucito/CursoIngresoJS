/*

alumno: Lucas De Nardo Div G TP N°2

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largo;
	var ancho;
	var perimetro;
	var hilosDeAlambre;
	var alambre;

	hilosDeAlambre = 3;

	largo = document.getElementById("txtIdLargo").value;
	largo = parseFloat(largo);

	ancho = document.getElementById("txtIdAncho").value;
	ancho = parseFloat(ancho);

	perimetro = (largo + ancho) * 2;

	alambre = perimetro * hilosDeAlambre;

	alert("Se necesitan " + alambre + "m de alambre.");



}
function Circulo () 
{

	var radio;
	var circulo;
	var hilosDeAlambre;
	var alambre;

	hilosDeAlambre = 3;

	radio = document.getElementById("txtIdRadio").value;
	radio = parseFloat(radio);

	circulo = 3.14 * 2 * radio;

	alambre = circulo * hilosDeAlambre;

	alert("Se necesitan " + alambre + "m de alambre.");

	
}
function Materiales () 
{
	
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;

	cemento = 2;
	cal = 3;

	largo = document.getElementById("txtIdLargo").value;
	largo = parseFloat(largo);

	ancho = document.getElementById("txtIdAncho").value;
	ancho = parseFloat(ancho);

	area = largo * ancho;

	cemento = area * cemento;
	cal = area * cal;

	alert(" Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");


}