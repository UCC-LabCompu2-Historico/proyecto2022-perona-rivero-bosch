/*TOPS*/

/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total10 = 0;

function DibujarFact10() {

    let i10 = document.getElementsByName("geTurno10")[0].value;
    let cont10 = document.getElementsByName("geTurno10")[0].value = Number(i10) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades10').value;
    let precio10 = calcularPrecio(x);


    const value = document.getElementById('unidades10').value;
    let option = document.getElementById('unidades10').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades10').value = "";

    total10 += precio10;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont10) {
        case 1:

            ctx.fillText(x, 12, 280);
            ctx.fillText(precio10, 555, 280);
            break;
        default:
            alert("Elegir una opcion");
            total10 = total10 - precio10;

    }


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 +total8 + total9 + total10, 555, 403);
    document.getElementById('unidades10').option.setAttribute("disabled", "disabled");

}

/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total11 = 0;

function DibujarFact11() {

    let i11 = document.getElementsByName("geTurno11")[0].value;
    let cont11 = document.getElementsByName("geTurno11")[0].value = Number(i11) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades11').value;
    let precio11 = calcularPrecio(x);


    const value = document.getElementById('unidades11').value;
    let option = document.getElementById('unidades11').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades11').value = "";

    total11 += precio11;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont11) {
        case 1:

            ctx.fillText(x, 12, 300);
            ctx.fillText(precio11, 555, 300);
            break;
        default:
            alert("Elegir una opcion");
            total11 = total11 - precio11;

    }


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades11').option.setAttribute("disabled", "disabled");

}

/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total12 = 0;

function DibujarFact12() {

    let i12 = document.getElementsByName("geTurno12")[0].value;
    let cont12 = document.getElementsByName("geTurno12")[0].value = Number(i12) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades12').value;
    let precio12 = calcularPrecio(x);


    const value = document.getElementById('unidades12').value;
    let option = document.getElementById('unidades12').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades12').value = "";

    total12 += precio12;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont12) {
        case 1:

            ctx.fillText(x, 12, 320);
            ctx.fillText(precio12, 555, 320);
            break;
        default:
            alert("Elegir una opcion");
            total12 = total12 - precio12;

    }


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades12').option.setAttribute("disabled", "disabled");

}



/*REMERAS*/

/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total7 = 0;

function DibujarFact7() {

    let i7 = document.getElementsByName("geTurno7")[0].value;
    let cont7 = document.getElementsByName("geTurno7")[0].value = Number(i7) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades7').value;
    let precio7 = calcularPrecio(x);


    const value = document.getElementById('unidades7').value;
    let option = document.getElementById('unidades7').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades7').value = "";

    total7 += precio7;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont7) {
        case 1:

            ctx.fillText(x, 12, 220);
            ctx.fillText(precio7, 555, 220);
            break;
        default:
            alert("Elegir una opcion");
            total7 = total7 - precio7;

    }


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades7').option.setAttribute("disabled", "disabled");

}

/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total8 = 0;

function DibujarFact8() {

    let i8 = document.getElementsByName("geTurno8")[0].value;
    let cont8 = document.getElementsByName("geTurno8")[0].value = Number(i8) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades8').value;
    let precio8 = calcularPrecio(x);


    const value = document.getElementById('unidades8').value;
    let option = document.getElementById('unidades8').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades8').value = "";

    total8 += precio8;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont8) {
        case 1:

            ctx.fillText(x, 12, 240);
            ctx.fillText(precio8, 555, 240);
            break;
        default:
            alert("Elegir una opcion");
            total8 = total8 - precio8;

    }


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades8').option.setAttribute("disabled", "disabled");

}

/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total9 = 0;

function DibujarFact9() {

    let i9 = document.getElementsByName("geTurno9")[0].value;
    let cont9 = document.getElementsByName("geTurno9")[0].value = Number(i9) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades9').value;
    let precio9 = calcularPrecio(x);


    const value = document.getElementById('unidades9').value;
    let option = document.getElementById('unidades9').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades9').value = "";

    total9 += precio9;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont9) {
        case 1:

            ctx.fillText(x, 12, 260);
            ctx.fillText(precio9, 555, 260);
            break;
        default:
            alert("Elegir una opcion");
            total9 = total9 - precio9;

    }


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades9').option.setAttribute("disabled", "disabled");

}
/*SHORTS*/
/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total4 = 0;

function DibujarFact4() {

    let i4 = document.getElementsByName("geTurno4")[0].value;
    let cont4 = document.getElementsByName("geTurno4")[0].value = Number(i4) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades4').value;
    let precio4 = calcularPrecio(x);


    const value = document.getElementById('unidades4').value;
    let option = document.getElementById('unidades4').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades4').value = "";

    total4 += precio4;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont4) {
        case 1:

            ctx.fillText(x, 12, 160);
            ctx.fillText(precio4, 555, 160);
            break;
        default:
            alert("Elegir una opcion");
            total4 = total4 - precio4;

    }


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades4').option.setAttribute("disabled", "disabled");

}



/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total5 = 0;

function DibujarFact5() {

    let i5 = document.getElementsByName("geTurno5")[0].value;
    let cont5 = document.getElementsByName("geTurno5")[0].value = Number(i5) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades5').value;
    let precio5 = calcularPrecio(x);


    const value = document.getElementById('unidades5').value;
    let option = document.getElementById('unidades5').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades5').value = "";

    total5 += precio5;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont5) {
        case 1:

            ctx.fillText(x, 12, 180);
            ctx.fillText(precio5, 555, 180);
            break;
        default:
            alert("Elegir una opcion");
            total5 = total5 - precio5

    }


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades5').option.setAttribute("disabled", "disabled");

}

/**
 * Dibujar en Canvas la factura
 * @method DibujarFact
 * @return voidFunction
 */
let total6 = 0;

function DibujarFact6() {

    let i6 = document.getElementsByName("geTurno6")[0].value;
    let cont6 = document.getElementsByName("geTurno6")[0].value = Number(i6) + 1;
    let canvas = document.getElementById('canvasdibujar');
    let ser = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    let x = document.getElementById('unidades6').value;
    let precio6 = calcularPrecio(x);


    const value = document.getElementById('unidades6').value;
    let option = document.getElementById('unidades6').querySelector(`option[value="${value}"]`);
    option.disabled = true;
    document.getElementById('unidades6').value = "";

    total6 += precio6;
    ser.fillStyle = "#ffffff";
    ser.fillRect(555, 390, 100, 18);

    ser.fillStyle = "#ffffff";
    ser.fillRect(10, 413, 648, 45);

    ctx.font = "12pt Sin Serif";
    ctx.fillStyle = "black";


    ctx.font = "13pt Sin Serif";
    ctx.fillStyle = "black";

    switch (cont6) {
        case 1:

            ctx.fillText(x, 12, 200);
            ctx.fillText(precio6, 555, 200);
            break;
        default:
            alert("Elegir una opcion");
            total6 = total6 - precio6;

    }


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades6').option.setAttribute("disabled", "disabled");

}


/*PANTALONES*/
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
    document.getElementById('unidades3').value = "";

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


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades3').option.setAttribute("disabled", "disabled");

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


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades2').option.setAttribute("disabled", "disabled");


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


    ctx.fillText(total3 + total + total2 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12, 555, 403);
    document.getElementById('unidades1').option.setAttribute("disabled", "disabled");


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
    fondo.src = "Imagenes/factura.jpg";
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


        case "1_short_jean":
            return 5590;
        case "2_short_jean":
            return 5590*2;
        case "3_short_jean":
            return 5590*3;
        case "4_short_jean":
            return 5590*4;
        case "1_short_verde":
            return 6590;
        case "2_short_verde":
            return 6590*2;
        case "3_short_verde":
            return 6590*3;
        case "4_short_verde":
            return 6590*4;
        case "1_short_oscuro":
            return 5590;
        case "2_short_oscuro":
            return 5590*2;
        case "3_short_oscuro":
            return 5590*3;
        case "4_short_oscuro":
            return 5590*4;


        case "1_remera_rosa":
            return 4590;
        case "2_remera_rosa":
            return 4590*2;
        case "3_remera_rosa":
            return 4590*3;
        case "4_remera_rosa":
            return 4590*4;
        case "1_remera_bordada":
            return 5590;
        case "2_remera_bordada":
            return 5590*2;
        case "3_remera_bordada":
            return 5590*3;
        case "4_remera_bordada":
            return 5590*4;
        case "1_remera_tejida":
            return 5590;
        case "2_remera_tejida":
            return 5590*2;
        case "3_remera_tejida":
            return 5590*3;
        case "4_remera_tejida":
            return 5590*4;

        case "1_top_negro":
            return 2590;
        case "2_top_negro":
            return 2590*2;
        case "3_top_negro":
            return 2590*3;
        case "4_top_negro":
            return 2590*4;
        case "1_top_blanco":
            return 3590;
        case "2_top_blanco":
            return 3590*2;
        case "3_top_blanco":
            return 3590*3;
        case "4_top_blanco":
            return 3590*4;
        case "1_top_escote":
            return 3590;
        case "2_top_escote":
            return 3590*2;
        case "3_top_escote":
            return 3590*3;
        case "4_top_escote":
            return 3590*4;
    }}


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
        var string = "Se realizo la compra!"
        contexto.fillText(string, 200, 35)
    }
    if (posicionX > 755) {
        window.location.reload();
        alert("Se realizo la compra con exito");


    }
    posicionX = 10 + posicionX;


}




