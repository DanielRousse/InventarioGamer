// 1. Crear el array inicial
let productos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Audifonos"
];

// 2. Mostrar inventario
function mostrarInventario() {
    console.log("Inventario actual:");
    for (let i = 0; i < productos.length; i++) {
        console.log(`${i + 1}. ${productos[i]}`);
    }
}

// 3. Agregar producto
function agregarProducto(producto) {
    // PUNTO EXTRA: Evitar productos duplicados
    if (productos.indexOf(producto) !== -1) {
        console.log(`Ese producto ya existe ❌`);
    } else {
        productos.push(producto);
        console.log(`Producto agregado: ${producto}`);
        mostrarInventario();
    }
}

// 4. Eliminar último producto
function eliminarUltimoProducto() {
    if (productos.length > 0) {
        let eliminado = productos.pop();
        console.log(`Producto eliminado: ${eliminado}`);
        mostrarInventario();
    } else {
        console.log("El inventario ya está vacío.");
    }
}

// 5. Reemplazar producto
function reemplazarProducto(indice, nuevoProducto) {
    if (indice >= 0 && indice < productos.length) {
        productos.splice(indice, 1, nuevoProducto);
        console.log(`Producto en índice ${indice} reemplazado por: ${nuevoProducto}`);
        mostrarInventario();
    } else {
        console.log(`El índice ${indice} no es válido.`);
    }
}

// 6. Buscar producto
function buscarProducto(producto) {
    let indice = productos.indexOf(producto);
    if (indice !== -1) {
        console.log(`Producto "${producto}" encontrado en índice ${indice}`);
    } else {
        console.log(`El producto "${producto}" no existe en el inventario.`);
    }
}

// 7. Ordenar inventario
function ordenarProductos() {
    productos.sort();
    console.log("Inventario ordenado:");
    mostrarInventario();
}

// 8. Mostrar cantidad
function mostrarCantidad() {
    console.log(`Cantidad total: ${productos.length} productos`);
}

// =========================================================
// PUNTO EXTRA 2: Funciones con prompt() para los botones
// =========================================================

function agregarProductoPrompt() {
    let nuevoProducto = prompt("Ingresa el nombre del producto a agregar:");
    if (nuevoProducto && nuevoProducto.trim() !== "") {
        agregarProducto(nuevoProducto.trim());
    }
}

function buscarProductoPrompt() {
    let productoBuscado = prompt("Ingresa el nombre del producto a buscar:");
    if (productoBuscado && productoBuscado.trim() !== "") {
        buscarProducto(productoBuscado.trim());
    }
}

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
}
