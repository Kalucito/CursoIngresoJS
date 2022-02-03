/*

alumno: Lucas De Nardo Div G

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var uno;
	var dos;
	var suma;

	uno = document.getElementById('txtIdNumeroUno').value;
	uno = parseInt(uno);
	dos = document.getElementById('txtIdNumeroDos').value;
	dos = parseInt(dos);

	suma = uno + dos;

	alert(suma);


}

