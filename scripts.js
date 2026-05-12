let productos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Audifonos"
]; // Array inicial

function mostrarInventario() {
    console.log("Inventario actual:");
    for (let i = 0; i < productos.length; i++) {
        console.log(`${i + 1}. ${productos[i]}`);
    }
} // Función mostrar inventario

function agregarProducto(producto) {
    if (productos.indexOf(producto) !== -1) {
        console.log(`Ese producto ya existe`);
    } else {
        productos.push(producto);
        console.log(`Producto agregado: ${producto}`);
        mostrarInventario();
    }
} // Función agregar producto

function eliminarUltimoProducto() {
    if (productos.length > 0) {
        let eliminado = productos.pop();
        console.log(`Producto eliminado: ${eliminado}`);
        mostrarInventario();
    } else {
        console.log("El inventario ya está vacío.");
    }
} // Función eliminar último producto

function reemplazarProducto(indice, nuevoProducto) {
    if (indice >= 0 && indice < productos.length) {
        productos.splice(indice, 1, nuevoProducto);
        console.log(`Producto en índice ${indice} reemplazado por: ${nuevoProducto}`);
        mostrarInventario();
    } else {
        console.log(`El índice ${indice} no es válido.`);
    }
} // Función reemplazar producto

function buscarProducto(producto) {
    let indice = productos.indexOf(producto);
    if (indice !== -1) {
        console.log(`Producto "${producto}" encontrado en índice ${indice}`);
    } else {
        console.log(`El producto "${producto}" no existe en el inventario.`);
    }
} // Función buscar producto

function ordenarProductos() {
    productos.sort();
    console.log("Inventario ordenado:");
    mostrarInventario();
} // Función ordenar inventario

function mostrarCantidad() {
    console.log(`Cantidad total: ${productos.length} productos`);
} // Función mostrar cantidad

function agregarProductoPrompt() {
    let nuevoProducto = prompt("Ingresa el nombre del producto a agregar (puedes separar varios con comas):");
    if (nuevoProducto && nuevoProducto.trim() !== "") {
        let productosSeparados = nuevoProducto.split(",");
        for (let i = 0; i < productosSeparados.length; i++) {
            let productoLimpio = productosSeparados[i].trim();
            if (productoLimpio !== "") {
                agregarProducto(productoLimpio);
            }
        }
    }
} // Función agregar producto con prompt

function buscarProductoPrompt() {
    let productoBuscado = prompt("Ingresa el nombre del producto a buscar:");
    if (productoBuscado && productoBuscado.trim() !== "") {
        buscarProducto(productoBuscado.trim());
    }
} // Función buscar producto con prompt

function reemplazarProductoPrompt() {
    let indiceStr = prompt("Ingresa el índice (empezando desde 0) del producto a reemplazar:");
    if (indiceStr !== null && indiceStr.trim() !== "") {
        let indice = parseInt(indiceStr);
        if (!isNaN(indice)) {
            let nuevoProducto = prompt("Ingresa el nombre del nuevo producto:");
            if (nuevoProducto && nuevoProducto.trim() !== "") {
                reemplazarProducto(indice, nuevoProducto.trim());
            }
        } else {
            console.log("Por favor, ingresa un número de índice válido.");
        }
    }
} // Función reemplazar producto con prompt

function mostrarMenu() {
    console.log(`
              --- MENÚ DE COMANDOS ---
Puedes ejecutar las siguientes funciones en esta consola:

- mostrarInventario()        -> Muestra todos los productos.
- agregarProductoPrompt()    -> Pide un producto y lo agrega.
- eliminarUltimoProducto()   -> Elimina el último producto.
- buscarProductoPrompt()     -> Busca un producto por nombre.
- reemplazarProductoPrompt() -> Reemplaza un producto existente.
- ordenarProductos()         -> Ordena el inventario alfabéticamente.
- mostrarCantidad()          -> Muestra el total de productos.

¡Escribe el nombre de la función seguido de paréntesis () y presiona Enter!
    `);
} // Función mostrar menú

mostrarMenu();
