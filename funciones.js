/**
 * Conversion de Unidades, de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - producto
 * @param {string} valor - precio
 * @return
 */


/*GUARDAR INICIAR SESION
function guardar_local_storage(){
    let email;

    email = document.getElementById("email").value;
    localStorage.setItem("emailLS", email);

    window.open('index.html');

}*/

/*GUARDAR PRODUCTOS*/
function guardar_local_storage(){
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
    let unidad1, unidad2, unidad3;

    unidad1 = localStorage.getItem("unidad1LS");
    unidad2 = localStorage.getItem("unidad2LS");
    unidad3 = localStorage.getItem("unidad3LS");

    document.getElementById("dist1").value = unidad1
    document.getElementById("dist2").value = unidad2
    document.getElementById("dist3").value = unidad3

}
/*
/* Precios de pantalones
var Precio_pantalon1 = 10590;
var Precio_pantalon2 = 9590;
var Precio_pantalon3 = 9590;


/* getelements
var  pantalon1= document.getElementById("pantalon1");
var  pantalon2= document.getElementById("pantalon2");
var  pantalon3= document.getElementById("pantalon3");




var FormParaJS = document.getElementById("formulario");
var Canvas = document.getElementById("canvas");
var Boton_principal = document.getElementById("btnSend");
/* Valor total de los platos reservadas
var Total = 0;



function reservar(){

        Canvas.style.display = "flex";
        location.href = "#canvas";
        Total= pantalon1* Precio_pantalon1 + pantalon2 * Precio_pantalon2 + pantalon3.value * Precio_pantalon3;
        PlayAnimation(animation_hand);
    }



    /*CANVAS
/* CANVAS SECTION

/* getelements
var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
 Alto y Ancho del canvas
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

    if (x > mycanvas.width) {
        x = 0;
        y += dy;
    }
    x += dx;
    if (y > heightMax && x > widthMax) {
        PauseAnimation();
        cerrarform();
        borrarform();
        ActivarForm();
    }
}
function draw() {

    var margenderecho = 60;
    var interline = 20;
    var margenizquierdo = 20;
    ClearCanvas();
    var starttxt = 160;
    WriteText("Reserva a nombre de: ", margenizquierdo, starttxt - interline);
    WriteText(Names.value, margenizquierdo, starttxt);
    WriteText("Cantidad de Personas: " + Personas.value, margenizquierdo, starttxt + interline);
    WriteText("Fecha: " + Fecha.value, margenizquierdo, starttxt + 2 * interline);
    WriteText("Hora: " + Hora.value, margenizquierdo, starttxt + 3 * interline);

    starttxt = 280;
    WriteText("Plato", margenizquierdo, starttxt - 1.2 * interline);
    WriteText("Risotto", margenizquierdo, starttxt);
    WriteText("Hamburguesas", margenizquierdo, starttxt + interline);
    WriteText("Wrap", margenizquierdo, starttxt + 2 * interline);
    WriteText("Sushi", margenizquierdo, starttxt + 3 * interline);
    WriteText("Cheeseecake", margenizquierdo, starttxt + 4 * interline);
    WriteText("Tiramisu", margenizquierdo, starttxt + 5 * interline);
    WriteText("Total", margenizquierdo, starttxt + 7 * interline);
    WriteText("Te esperamos!", 100, starttxt + 10 * interline);

    WriteText("Cant", widthMax - margenderecho, starttxt - 1.2 * interline);
    WriteText(Risotto.value, widthMax - margenderecho, starttxt);
    WriteText(Hamburguesa.value, widthMax - margenderecho, starttxt + interline);
    WriteText(Wrap.value, widthMax - margenderecho, starttxt + 2 * interline);
    WriteText(Sushi.value, widthMax - margenderecho, starttxt + 3 * interline);
    WriteText(Cheeseecake.value, widthMax - margenderecho, starttxt + 4 * interline);
    WriteText(Tiramisu.value, widthMax - margenderecho, starttxt + 5 * interline);
    WriteText("$ " + Total, widthMax - margenderecho, starttxt + 7 * interline);

}*/