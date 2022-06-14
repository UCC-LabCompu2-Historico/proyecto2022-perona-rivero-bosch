/**
 * Conversion de Unidades, de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - producto
 * @param {string} valor - precio
 * @return
 */


/*GUARDAR INICIAR SESION*/
function guardar_local_storage(){
    let email;

    email = document.getElementById("email").value;

    localStorage.setItem("emailLS", email);

    window.open('index.html');

}

function cargar_local_storage() {
    let email;

    email = localStorage.getItem("emailLS");
    document.getElementById("mail").value = email
}

/*GUARDAR PRODUCTOS*/
function guardar_local_storage_productos(){
    let title, precio;

    title = document.getElementById("producto_title").value;
    precio = document.getElementById("producto_price").value;
    localStorage.setItem("titleLS", title);
    localStorage.setItem("priceLS", precio);

    window.open('pagar.html');

}

function cargar_local_storage_productos() {
    let title, precio;

    title = localStorage.getItem("titleLS");
    precio = localStorage.getItem("precioLS");
    document.getElementById("producto_title").value = title;
    document.getElementById("producto_price").value = precio;
}

