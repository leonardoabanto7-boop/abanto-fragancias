
/* =====================================
   DETALLE DE PRODUCTOS - ABANTO FRAGANCIAS
===================================== */

const productosAbanto = [
  {
    nombre: "Bharara King",
    imagenes: ["img/productos/1. Bahara king.png"],
    precioInicial: 20
  },
  {
    nombre: "Hawas Ice",
    imagenes: ["img/productos/2. Hawas Ice.png"],
    precioInicial: 17
  },
  {
    nombre: "Khamrah Clásico",
    imagenes: ["img/productos/3. Khamrah Clasico.png"],
    precioInicial: 15
  },
  {
    nombre: "Asad Bourbon",
    imagenes: ["img/productos/4. Asad bourbon.png"],
    precioInicial: 17
  },
  {
    nombre: "9 PM",
    imagenes: ["img/productos/5. 9 pm.png"],
    precioInicial: 17
  },
  {
    nombre: "Bade'e Al Oud Sublime",
    imagenes: ["img/productos/6. Badée Al Oud Sublime.png"],
    precioInicial: 15
  },
  {
    nombre: "Yara Pink",
    imagenes: ["img/productos/7. Yara Pink.png"],
    precioInicial: 15
  }
];

const tarjetasAbanto = document.querySelectorAll(".producto-arabe");
const ventanaDetalle = document.getElementById("detalle-perfume");
const cerrarDetalle = document.getElementById("cerrar-detalle");
const imagenDetalle = document.getElementById("imagen-detalle");
const nombreDetalle = document.getElementById("nombre-detalle");
const precioDetalle = document.getElementById("precio-detalle");
const contadorImagenes = document.getElementById("contador-imagenes");

let productoActual = null;
let indiceImagen = 0;

function mostrarImagenDetalle() {
  if (!productoActual) return;

  const imagenes = productoActual.imagenes;

  imagenDetalle.src = imagenes[indiceImagen];
  imagenDetalle.alt = productoActual.nombre;
  contadorImagenes.textContent =
    `${indiceImagen + 1} / ${imagenes.length}`;
}

function abrirDetalle(producto) {
  productoActual = producto;
  indiceImagen = 0;

  nombreDetalle.textContent = producto.nombre;
  precioDetalle.textContent =
    `Desde S/ ${producto.precioInicial}`;

  mostrarImagenDetalle();

  ventanaDetalle.hidden = false;
  document.body.style.overflow = "hidden";
}

function cerrarVentanaDetalle() {
  ventanaDetalle.hidden = true;
  document.body.style.overflow = "";
}

tarjetasAbanto.forEach((tarjeta, indice) => {
  tarjeta.addEventListener("click", () => {
    abrirDetalle(productosAbanto[indice]);
  });
});

cerrarDetalle.addEventListener("click", cerrarVentanaDetalle);

document.getElementById("imagen-anterior").addEventListener("click", () => {
  if (!productoActual) return;

  indiceImagen =
    (indiceImagen - 1 + productoActual.imagenes.length) %
    productoActual.imagenes.length;

  mostrarImagenDetalle();
});

document.getElementById("imagen-siguiente").addEventListener("click", () => {
  if (!productoActual) return;

  indiceImagen =
    (indiceImagen + 1) % productoActual.imagenes.length;

  mostrarImagenDetalle();
});

ventanaDetalle.addEventListener("click", (evento) => {
  if (evento.target === ventanaDetalle) {
    cerrarVentanaDetalle();
  }
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && !ventanaDetalle.hidden) {
    cerrarVentanaDetalle();
  }
});
