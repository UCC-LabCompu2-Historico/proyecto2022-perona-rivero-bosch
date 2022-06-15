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




/*CANVAS*/


let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.font="10pt Verdana";
ctx.fillStyle = "blue";
ctx.fillText( "Gracias por la Compra!!!", canvas.width/2, canvas.height/2);