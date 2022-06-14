/**
 * Conversion de Unidades, de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - producto
 * @param {string} valor - precio
 * @return
 */



function cargar_iniciar(){
    var mail, urlComp;

    mail=document.getElementById("email").value;


    urlComp= "index.html#" + mail;
    window.open(urlComp);
}

function cargarResultado_iniciar() {
    var urlComp, email;
    urlComp = window.location.href.split("/")[5];

    email = urlComp.split("#")[1];

    document.getElementById("datos").value = email;
}