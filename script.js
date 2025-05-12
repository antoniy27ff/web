function mostrarPantalla(id) {
  const pantallas = document.querySelectorAll(".pantalla");
  pantallas.forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";
}

mostrarPantalla("pantalla1");

function continuarDesdeRegistro() {
  mostrarPantalla("pantalla4");
}

function continuarDesdeLogin() {
  mostrarPantalla("pantalla4");
}

function cerrarSesion() {
  mostrarPantalla("pantalla1");
}

const productos = [
  {
    nombre: "Hamaca Maya Artesanal Verde",
    descripcion: "Hermosa hamaca tejida a mano en tonos verdes.",
    precio: 1200
  },
  {
    nombre: "Hamaca Maya Multicolor Artesanal",
    descripcion: "Hamaca colorida hecha a mano por artesanas yucatecas.",
    precio: 1350
  }
];

let carrito = [];

function agregarAlCarrito(indice) {
  carrito.push(productos[indice]);
  alert("Producto agregado al carrito.");
}

function mostrarPantallaCarrito() {
  mostrarPantalla('pantalla7');
  const contenido = document.getElementById('contenidoCarrito');
  contenido.innerHTML = "";

  if (carrito.length === 0) {
    contenido.innerHTML = "<p>Tu carrito está vacío.</p>";
  } else {
    let total = 0;

    carrito.forEach((producto, index) => {
      contenido.innerHTML += `
        <div>
          <p><strong>${producto.nombre}</strong><br>
          ${producto.descripcion}<br>
          Precio: $${producto.precio}</p>
          <button class="eliminar-btn" onclick="eliminarProducto(${index})">Eliminar</button>
          <hr>
        </div>`;
      total += producto.precio;
    });

    contenido.innerHTML += `<p class="total-carrito">Total: $${total}</p>`;
  }
}

function eliminarProducto(indice) {
  carrito.splice(indice, 1);
  mostrarPantallaCarrito();
}
