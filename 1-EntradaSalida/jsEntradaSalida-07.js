/*

alumno: Lucas De Nardo Div G


Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno 
	var dos 
	var suma 

	uno = document.getElementById('txtIdNumeroUno').value;
	dos = document.getElementById('txtIdNumeroDos').value;

	suma = parseInt(uno) + parseInt(dos);

	alert("la suma es " + suma);
}

function restar()
{
	var uno 
	var dos 
	var resta 

	uno = document.getElementById('txtIdNumeroUno').value;
	dos = document.getElementById('txtIdNumeroDos').value;

	resta = parseInt(uno) - parseInt(dos);

	alert("la resta es " + resta);
}

function multiplicar()
{ 
	var uno 
	var dos 
	var multiplicar 	

	uno = document.getElementById('txtIdNumeroUno').value;
	dos = document.getElementById('txtIdNumeroDos').value;

	multiplicar = parseInt(uno) * parseInt(dos);

	alert("la multiplicación es " + multiplicar); 
}

function dividir()
{
	var uno 
	var dos
	var dividir

	uno = document.getElementById('txtIdNumeroUno').value;
	dos = document.getElementById('txtIdNumeroDos').value;

	dividir = parseInt(uno) / parseInt(dos);

	alert("la división es " + dividir);
}

