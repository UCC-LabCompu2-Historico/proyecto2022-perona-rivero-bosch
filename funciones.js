/**
 * Conversion de Unidades, de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - producto
 * @param {string} valor - precio
 * @return
 */

function guardar_local_storage_iniciar(){
    var mail, contra;

    mail = document.getElementById("email").value;
    contra = document.getElementById("contraseña").value;

    localStorage.setItem("emailLS", mail);
    localStorage.setItem("contraseñaLS", contra);

    window.open('pagar.html');

}

function cargar_local_storage_iniciar(){
    var mail, contra;

    mail = localStorage.getItem("emailLS");
    contra = localStorage.getItem("contraseñaLS");

    document.getElementById("datos_compra").value = mail;
}

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