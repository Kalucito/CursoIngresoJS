/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	/*
    var precioLamparas;
    var cantidadDeLamparas;
    var marca;
    var precioBruto;
    var descuentoSeis;
    var descuentoCincoArgentinaLuz;
    var descuentoCinco;
    var descuentoCuatroMarcasSeleccionadas;
    var descuentoCuatro;
    var descuentoTresArgentinaLuz;
    var descuentoTresFelipeLamparas;
    var descuentoTres;
    var descuentoCalculado;
    var precioConDescuento;
    var ingresosBrutos;
    var ingresosBrutosCalculado;
    var precioFinal;

    precioLamparas = 35;

    ingresosBrutos = 10;

    descuentoCalculado= 0;
    ingresosBrutosCalculado = 0;

    descuentoSeis = 50;
    descuentoCincoArgentinaLuz = 40;
    descuentoCinco = 30;
    descuentoCuatroMarcasSeleccionadas = 25;
    descuentoCuatro = 20;
    descuentoTresArgentinaLuz = 15;
    descuentoTresFelipeLamparas = 10;
    descuentoTres = 5;


    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    precioBruto = precioLamparas * cantidadDeLamparas;
    marca = document.getElementById("Marca").value;

   
    if (cantidadDeLamparas >= 6) {

        descuentoCalculado = precioBruto * descuentoSeis / 100;
    }
    else {

        
    }

   

    if (cantidadDeLamparas == 5 && marca == "ArgentinaLuz") {

        descuentoCalculado = precioBruto * descuentoCincoArgentinaLuz / 100;
    }
    else if (cantidadDeLamparas == 5) {

        descuentoCalculado = precioBruto * descuentoCinco / 100;
    }
    else {

        
    }



    if (cantidadDeLamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {

        descuentoCalculado = precioBruto * descuentoCuatroMarcasSeleccionadas / 100;
    }

    else if (cantidadDeLamparas ==4) {

        descuentoCalculado = precioBruto * descuentoCuatro / 100;
    }
    else {

        
    }



    if (cantidadDeLamparas == 3 && marca == "ArgentinaLuz") {

        descuentoCalculado = precioBruto * descuentoTresArgentinaLuz / 100;
    }

    else if (cantidadDeLamparas == 3 && marca == "FelipeLamparas") {

        descuentoCalculado = precioBruto * descuentoTresFelipeLamparas / 100;
    }

    else if (cantidadDeLamparas == 3) {

        descuentoCalculado = precioBruto * descuentoTres / 100;
    }
    else {

        descuentoCalculado = 0;

        
    }

    precioConDescuento = precioBruto - descuentoCalculado;




    if (precioConDescuento > 120) {

        ingresosBrutosCalculado =  precioConDescuento * ingresosBrutos / 100;

        precioTotal = precioConDescuento - ingresosBrutosCalculado;
    }

    else {

        precioTotal = precioConDescuento;

    }






    document.getElementById("txtIdprecioDescuento").value = precioConDescuento; 



    var precioLamparas;
    var cantidadDeLamparas;
    var marca;
    var precioBruto;
    var descuentoSeis;
    var descuentoCincoArgentinaLuz;
    var descuentoCinco;
    var descuentoCuatroMarcasSeleccionadas;
    var descuentoCuatro;
    var descuentoTresArgentinaLuz ;
    var descuentoTresFelipeLamparas ;
    var descuentoTres;
    var descuentoCalculado;
    var precioConDescuento;
    var ingresosBrutos;
    var ingresosBrutosCalculado;
    var precioFinal;

    precioLamparas = 35;

    ingresosBrutos = 10;

    descuentoSeis = 50;
    descuentoCincoArgentinaLuz = 40;
    descuentoCinco = 30;
    descuentoCuatroMarcasSeleccionadas = 25;
    descuentoCuatro = 20;
    descuentoTresArgentinaLuz = 15;
    descuentoTresFelipeLamparas = 10;
    descuentoTres = 5;


    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marca = document.getElementById("Marca").value;

    precioBruto = precioLamparas * cantidadDeLamparas;

    
//USO INNECESARIO DE CODIGO, MUCHAS REPETICIONES, TRATAR DE ANIDAR, USAR COMO EJEMPLO
//EL EJERCIOCIO DE IF/SWITCH 6.
    if (cantidadDeLamparas >= 6) {

        descuentoCalculado = precioBruto * descuentoSeis / 100;
    }

    else if (cantidadDeLamparas == 5 && marca == "ArgentinaLuz") {

        descuentoCalculado = precioBruto * descuentoCincoArgentinaLuz / 100;
    }

    else if (cantidadDeLamparas == 5) {

        descuentoCalculado = precioBruto * descuentoCinco / 100;
    }

    else if (cantidadDeLamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {

        descuentoCalculado = precioBruto * descuentoCuatroMarcasSeleccionadas / 100;
    }

    else if (cantidadDeLamparas ==4) {

        descuentoCalculado = precioBruto * descuentoCuatro / 100;
    }

    else if (cantidadDeLamparas == 3 && marca == "ArgentinaLuz") {

        descuentoCalculado = precioBruto * descuentoTresArgentinaLuz / 100;
    }

    else if (cantidadDeLamparas == 3 && marca == "FelipeLamparas") {

        descuentoCalculado = precioBruto * descuentoTresFelipeLamparas / 100;
    }

    else if (cantidadDeLamparas == 3) {

        descuentoCalculado = precioBruto * descuentoTres / 100;
    }

    else {

        descuentoCalculado = 0;
    }


    precioConDescuento = precioBruto - descuentoCalculado;

    if (precioConDescuento > 120) {

        ingresosBrutosCalculado = precioConDescuento * ingresosBrutos / 100;

        precioFinal = precioConDescuento + ingresosBrutosCalculado;
    }

    else {

        precioFinal = precioConDescuento;
    }


    document.getElementById("txtIdprecioDescuento").value = precioFinal;


     
/*

    var precioLamparas;
    var cantidadDeLamparas;
    var marca;
    var precioBruto;
    var descuentoSeis;
    var descuentoCincoArgentinaLuz;
    var descuentoCinco;
    var descuentoCuatroMarcasSeleccionadas;
    var descuentoCuatro;
    var descuentoTresArgentinaLuz ;
    var descuentoTresFelipeLamparas ;
    var descuentoTres;
    var descuentoCalculado;
    var precioConDescuento;
    var ingresosBrutos;
    var ingresosBrutosCalculado;
    var precioFinal;


    precioLamparas = 35;

    ingresosBrutos = 10;

    descuentoSeis = 50;
    descuentoCincoArgentinaLuz = 40;
    descuentoCinco = 30;
    descuentoCuatroMarcasSeleccionadas = 25;
    descuentoCuatro = 20;
    descuentoTresArgentinaLuz = 15;
    descuentoTresFelipeLamparas = 10;
    descuentoTres = 5;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    switch (cantidadDeLamparas){

        case 6:
            alert("dou");

            break;


    default: 

    alert("xd");




*/

    var precioLamparas;
    var cantidadDeLamparas;
    var marca;
    var descuento;
    var descuentoCalculado;
    var ingresosBrutos;
    var ingresosBrutosCalculados;
    var precioBruto;
    var precioConDescuento;
    var precioFinal;
    var mensaje;

    precioLamparas = 35;

    ingresosBrutos = 10;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marca = document.getElementById("Marca").value;

    if (cantidadDeLamparas > 0) //Para asegurar la entrada de numero valido.
    {
        if (cantidadDeLamparas >= 6) 
        {
            descuento = 50;
        }
        else
        {
            if (cantidadDeLamparas == 5) 
            {
                if (marca == "ArgentinaLuz") 
                {
                    descuento = 40;
                }
                else 
                {
                    descuento = 30;
                }
            }
            else 
            {
                if (cantidadDeLamparas == 4) 
                {
                    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
                    {
                        descuento = 25;
                    }
                    else 
                    {
                        descuento = 20;
                    }
                }
                else 
                {
                    if (cantidadDeLamparas == 3) 
                    {
                        if (marca == "ArgentinaLuz") 
                        {
                            descuento = 15;
                        }
                        else
                        {
                            if (marca == "FelipeLamparas") 
                            {
                                descuento = 10;
                            }
                            else 
                            {
                                descuento = 5;
                            }
                        }
                    }
                    else
                    {
                        descuento = 0;
                    }
                }
            }
        }
    }
    else 
    {
        alert("ERROR. Número ingresado no valido.");
    }
   
    precioBruto = precioLamparas * cantidadDeLamparas;

    descuentoCalculado = precioBruto * descuento / 100;

    precioFinal = precioBruto - descuentoCalculado;

    if (precioFinal >= 120)
    {
        ingresosBrutosCalculados = precioFinal * ingresosBrutos / 100;
        
        precioFinal = precioFinal + ingresosBrutosCalculados;

        mensaje = "Usted pagó " +  ingresosBrutosCalculados + "$ de IIBB.";

        alert(mensaje);
    }


    

    document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal;


 }