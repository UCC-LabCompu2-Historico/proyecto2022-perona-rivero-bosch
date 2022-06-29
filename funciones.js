

/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total3 = 0;

function DibujarFact3() {

    let i3 = document.getElementsByName("geTurno3")[0].value;
    let cont3 = document.getElementsByName("geTurno3")[0].value = Number(i3) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades3').value;
    let precio3 = calcularPrecio(x);


    const value = document.getElementById('unidades3').value;
    let option = document.getElementById('unidades3').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades2').value = "";

    total3 += precio3;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont3) {
        case 1:

            ctx.fillText(x, 12, 140);
            ctx.fillText(precio3, 555, 140);
            break;
        default:
            alert("Elegir una opcion");
            total3 = total3 - precio3;

    }


   /* ctx.fillText(total3, 555, 403);
    document.getElementById('unidades3').option.setAttribute("disabled", "disabled");*/


}







/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total2 = 0;

function DibujarFact2() {

    let i2 = document.getElementsByName("geTurno2")[0].value;
    let cont2 = document.getElementsByName("geTurno2")[0].value = Number(i2) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades2').value;
    let precio2 = calcularPrecio(x);


    const value = document.getElementById('unidades2').value;
    let option = document.getElementById('unidades2').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades2').value = "";

    total2 += precio2;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont2) {
        case 1:

            ctx.fillText(x, 12, 120);
            ctx.fillText(precio2, 555, 120);
            break;
        default:
            alert("Elegir una opcion");
            total2 = total2 - precio2;

    }


    /*ctx.fillText(total2, 555, 403);
    document.getElementById('unidades2').option.setAttribute("disabled", "disabled");*/


}


/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total = 0;

function DibujarFact() {

    let i = document.getElementsByName("geTurno")[0].value;
    let cont = document.getElementsByName("geTurno")[0].value = Number(i) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades1').value;
    let precio = calcularPrecio(x);


    const value = document.getElementById('unidades1').value;
    let option = document.getElementById('unidades1').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades1').value = "";

    total += precio;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont) {
        case 1:

            ctx.fillText(x, 12, 100);
            ctx.fillText(precio, 555, 100);
            break;
        default:
            alert("Elegir una opcion");
            total = total - precio;

    }


    /*ctx.fillText(total, 555, 403);
    document.getElementById('unidades1').option.setAttribute("disabled", "disabled");*/


}


/**
 * Cargar fondo del Canvas
 * @method cargarCanvas
 * @return VoidFunction
 */
function cargarCan() {
    let canvas = document.getElementById('canvasdibujar');
    let ctx = canvas.getContext("2d");
    let fondo = new Image();
    fondo.src = "Imagenes/factura.png";
    ctx.drawImage(fondo, 0, 0);
    fondo.onload = function () {
        ctx.drawImage(fondo, 0, 0)
    };
    let canvas2 = document.getElementById('canvasanima');
    let ctx2 = canvas2.getContext("2d");

    ctx2.fillStyle = "#ffffff";
    ctx2.fillRect(0, 0, 666, 50);
    fondo2.onload = function () {
        ctx2.drawImage(fondo2, 0, 0)
    };

}

/**
 * Mostrar en pantalla el precio segun la opcion elegida
 * @method calcularPrecio
 * @return Precio
 * @param host
 */
function calcularPrecio(host) {
    switch (host) {
        case "ninguno":
            return 0;
        case "1_pantalon_corto":
            return 10590;
        case "2_pantalon_corto":
            return (10590 * 2);
        case "3_pantalon_corto":
            return (10590 * 3);
        case "4_pantalon_corto":
            return (10590 * 4);
        case "1_pantalon_naranja":
            return 9590;
        case "2_pantalon_naranja":
            return 9590 * 2;
        case "3_pantalon_naranja":
            return 9590 * 3;
        case "4_pantalon_naranja":
            return 9590 * 4;
        case "1_pantalon_jean":
            return 9700;
        case "2_pantalon_jean":
            return 9700 * 2;
        case "3_pantalon_jean":
            return 9700 * 3;
        case "4_pantalon_jean":
            return 9700 * 4;
    }
}


/**
 * Verificador de datos completados
 * @method iniciarsesion
 * @return void
 */
function pedirTurno() {


    let email = document.getElementById('email').value;
    let contra = document.getElementById('contraseña'.value);
    if (contra === "" || email === "") {
        alert("Por favor completar todo el formulario antes de iniciar sesion");
    } else {
        animar();

        document.getElementById('input_email').value = "";

    }
}

/**
 * Comprueba que el usuario, contraseña y mail sean validos
 * @method check
 * @return Precio
 * @param e
 */
function check(e) {
    const patronL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const patronD = patronL + "+-_.0123456789@";

    let auxN = 0;
    let auxA = 0;
    let auxAr = 0;
    let auxD = 0;
    let auxP = 0;
    let auxC = 0;
    switch (e) {
        case "usuario":
            let nombre = document.getElementById('usuario').value;
            let sizen = document.getElementById('usuario').value.length;
            for (let i = 0; i < sizen; i++) {
                for (let j = 0; j < patronL.length; j++) {
                    if (nombre[i] === patronL[j]) {
                        auxN++;
                    }
                }
            }
            if (auxN !== nombre.length) {
                alert("Ingrese un usuario valido");
                document.getElementById('usuario').value = "";
            }
            break;
        case "contraseña":
            let size = document.getElementById('contraseña').value.length;
            let ape = document.getElementById('contraseña').value;
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < patronL.length; j++) {
                    if (ape[i] === patronL[j]) {
                        auxA++;
                    }
                }
            }
            if (auxA !== ape.length) {
                alert("Ingrese contraseña valida");
                document.getElementById('contraseña').value = "";
            }
            break;
        case "email":
            let email = document.getElementById('email').value;
            let sizee = document.getElementById('email').value.length;
            for (let i = 0; i < sizee; i++) {
                for (let j = 0; j < patronD.length; j++) {
                    if (email[i] === patronD[j]) {
                        auxD++;
                    }
                }
                if (email[i] === "@") {
                    auxAr++;
                }
                if (email[i] === ".") {
                    auxP++;
                }

            }
            if (auxD !== email.length || auxAr !== 1 || auxP < 1) {
                alert("Ingrese un email valido");
                document.getElementById('email').value = "";
            }
            break;
        case "confirmar_contraseña":
            let nomb = document.getElementById('confirmar_contraseña').value;
            let siz = document.getElementById('confirmar_contraseña').value.length;
            for (let i = 0; i < siz; i++) {
                for (let j = 0; j < patronL.length; j++) {
                    if (nomb[i] === patronL[j]) {
                        auxC++;
                    }
                }
            }
            if (auxN !== nomb.length) {
                alert("Ingrese contraseña valido");
                document.getElementById('confirmar_contraseña').value = "";
            }
            break;

    }
}

/**
 * Setea el intervalo de tiempo llamando a la funcion canvascargando
 * @method animar
 * @return void
 * @param onload
 */
var posicionX = 5;

function animar() {
    setInterval("canvascargando(),100")
}

/**
 * Dibuja una linea que simula la carga de datos
 * @method canvascargando
 * @return void
 */
function canvascargando() {
    let contexto = document.getElementById('canvasanima').getContext("2d");
    contexto.fillStyle = "#ca7702";
    contexto.fillRect(posicionX, 5, 40, 40);
    if (posicionX > 655) {
        contexto.fillStyle = "#ffffff";
        contexto.fillRect(0, 0, 666, 50);
        contexto.font = "24pt Sin Serif";
        contexto.fillStyle = 'black';
        var string = "Se ha pedido el turno!"
        contexto.fillText(string, 200, 35)
    }
    if (posicionX > 755) {
        window.location.reload();
        alert("Se ha solicitado el turno");


    }
    posicionX = 10 + posicionX;


}


/**
 * realizar compra
 * @method compra
 * @return void
 */

function show() {
    alert("La compra fue realizada con exito!!");
}

