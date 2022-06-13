/**
 * Conversion de Unidades, de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - producto
 * @param {string} valor - precio
 * @return
 */
/*function add(producto, precio) {
    console.log(producto, precio);
}
function cargarMetodo(){
    var pago, entrega, urlComp;

    pago=document.getElementsByName("pago").value;
    entrega=document.getElementsByName("entrega").value;

    urlComp= "pagar.html#" + pago + "#" + entrega;
    window.open(urlComp);
}
*/


/* metodo de entrega

window.onload = function () {

   /* Variables globales (por estar declaradas sin var)

    casillaDatos = document.getElementById('datos'); //Nodo donde vamos a mostrar los datos


    radioButTrat = document.getElementsByName("entrega");//Nodos radio buttons

    checkboxElements = new Array();



    var elementosDelForm = document.getElementsByName('entrega'); //Elementos input


    for(var i=0; i<elementosDelForm.length;i++) {

        if (elementosDelForm[i].type == 'radio') {elementosDelForm[i].addEventListener("click", actualizarDatos);}

        else {elementosDelForm[i].addEventListener("change", actualizarDatos);}

        if (elementosDelForm[i].type == 'checkbox') {checkboxElements.push(elementosDelForm[i]);}

    }

    for (var i=0; i<elementosSelect.length;i++) {elementosSelect[i].addEventListener("change", actualizarDatos);}

}



function actualizarDatos() {


    var radioButSelValue = '';

    for (var i=0; i<radioButTrat.length; i++) {if (radioButTrat[i].checked == true) { radioButSelValue= radioButTrat[i].value;} }


    var checkBoxSel = new Array();

    for (var i=0; i<checkboxElements.length;i++) {

        if (checkboxElements[i].checked ==true) {checkBoxSel.push(checkboxElements[i].name);}

    }



        casillaDatos.innerHTML='<h4> Datos de la compra: </h4><p>Metodo de entrega: '+(radioButSelValue||' --- ')+'</p>';

}