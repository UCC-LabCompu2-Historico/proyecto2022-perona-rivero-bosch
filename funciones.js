/**
 * Conversion de Unidades, de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - producto
 * @param {string} valor - precio
 * @return
 */


/*GUARDAR INICIAR SESION*/
function guardar_local_storage_iniciar(){
    let email;

    email = document.getElementById("email").value;
    localStorage.setItem("emailLS", email);

    window.open('index.html');

}

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
    let unidad1, unidad2, unidad3,email;

    unidad1 = localStorage.getItem("unidad1LS");
    unidad2 = localStorage.getItem("unidad2LS");
    unidad3 = localStorage.getItem("unidad3LS");
    email= localStorage.getItem("emailLS");

    document.getElementById("dist1").value = unidad1
    document.getElementById("dist2").value = unidad2
    document.getElementById("dist3").value = unidad3
    document.getElementById("email").value = email

}