/**
 * guarda valores iniciar sesion
 * @method guardar_local_storage_iniciar
 */
/**
 * guarda valores productos
 * @method guardar_local_storage
 */
/**
 * muestra valores cargados
 * @method cargar_local_storage
 */


/*GUARDAR INICIAR SESION*/
function guardar_local_storage_iniciar() {

    let email;

    email = document.getElementById("email").value;
    localStorage.setItem("emailLS", email);

    window.open('index.html');

}


/*GUARDAR PRODUCTOS*/
function guardar_local_storage() {
    let unidad1, unidad2, unidad3;

    unidad1 = document.getElementsByName("unidades1")[0].value;
    unidad2 = document.getElementsByName("unidades2")[0].value;
    unidad3 = document.getElementsByName("unidades3")[0].value;

    localStorage.setItem("unidad1LS", unidad1);
    localStorage.setItem("unidad2LS", unidad2);
    localStorage.setItem("unidad3LS", unidad3);

    window.open('pagar.html');

}

function cargar_local_storage() {
    let unidad1, unidad2, unidad3, email;

    unidad1 = localStorage.getItem("unidad1LS");
    unidad2 = localStorage.getItem("unidad2LS");
    unidad3 = localStorage.getItem("unidad3LS");
    email = localStorage.getItem("emailLS");

    document.getElementById("dist1").value = unidad1
    document.getElementById("dist2").value = unidad2
    document.getElementById("dist3").value = unidad3
    document.getElementById("email").value = email

}

/*VALIDACION*/

function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {
        return 1;
    } else {
        return 0;
    }
}


/*CANVAS
 */

var precioPantalonRecto = 10590;
var precioPantalonNaranja= 9590;
var precioJean=9590;

/* getelements */

var PantalonRecto = document.getElementById("pantalonRecto");
var usuario = document.getElementById("usuario");
var mail = document.getElementById("email");
var FormParaJS = document.getElementById("formparajs");
var Canvas = document.getElementById("canvas");
var Boton_principal = document.getElementById("btnSend");

/* Valor total de los platos reservadas */
var Total =(pantalonRecto*10590)+500;

function borrarform() {
    PantalonRecto.value = "";
    usuario.value = "";
    mail.value = "";
}


function cerrarcanva() {
    Canvas.style.display = "none";
    PauseAnimation();
    x = 0;
    y = 160;
}

function cerrarform() {
    FormParaJS.style.display = "none";
    borrarform();
}

function bloquearForm() {
    usuario.disabled = true;
    mail.disabled = true;
    Boton_principal.disabled = true;
}
function ActivarForm() {
    usuario.disabled = false;
    mail.disabled = false;
    Boton_principal.disabled = false;
}



/* CANVAS SECTION */

/* getelements */

var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
/* Alto y Ancho del canvas */
var widthMax = mycanvas.width;
var heightMax = mycanvas.height;

function ClearCanvas() {
    mycanvas.width = mycanvas.width;
}

function WriteText(content, posx, posy) {
    ctx.font = "italic small-caps bold 12px arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(content, posx, posy);

}
function cerrar(){
    document.getElementById("formparajs").style.display= "none";
    document.getElementById("canvas").style.display= "none";
    var x = 0;
    var dx = 3
    var y = 160;
    var dy = 20;
    var a;
    function PlayAnimation(fname) {
        a = setInterval(fname, 10);
    }
    function PauseAnimation() {
        clearInterval(a);
    }

    function animation_hand() {
        draw();
        ctx.clearRect(0, y, widthMax, heightMax);
        ctx.clearRect(x, y - dy, widthMax - x, dy);
        var img = new Image();
        img.src = "img/main_logo_black.png";
        ctx.drawImage(img, 87, 59.75, 180 * 0.7, 65 * 0.7);
        var img = new Image();
        img.src = "img/hand.png";
        ctx.drawImage(img, x, y, 20, 20);
        function draw() {

            var margenderecho = 60;
            var interline = 20;
            var margenizquierdo = 20;
            ClearCanvas();
            var starttxt = 160;
            WriteText("Comprador: ", margenizquierdo, starttxt - interline);
            WriteText(usuario.value, margenizquierdo, starttxt);
            WriteText("Producto: " + pantalonRecto.value, margenizquierdo, starttxt + interline);
            WriteText("Precio por unidad: " + precioPantalonRecto.value, margenizquierdo, starttxt + interline);

            starttxt = 280;
            WriteText("PantalonRecto", margenizquierdo, starttxt - 1.2 * interline);

            WriteText("Cantidad", pantalonRecto, widthMax - margenderecho, starttxt - 1.2 * interline);
            WriteText(pantalonRecto.value, widthMax - margenderecho, starttxt);
            WriteText("Precio de envio: $500")
            WriteText("$ " + Total, widthMax - margenderecho, starttxt + 7 * interline);

        }}}

