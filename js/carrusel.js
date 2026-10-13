const carrusel = document.querySelector(".carrusel-contenedor");
const banners = document.querySelectorAll(".carrusel-contenedor img");

const botonAnterior = document.getElementById("bannerAnterior");
const botonSiguiente = document.getElementById("bannerSiguiente");

let bannerActual = 0;
let temporizadorCarrusel;

function mostrarBanner() {
    if (!carrusel || banners.length === 0) return;

    carrusel.style.transform = `translateX(-${bannerActual * 100}%)`;
}

function cambiarBanner() {
    bannerActual = (bannerActual + 1) % banners.length;
    mostrarBanner();
}

function bannerAnterior() {
    bannerActual = (bannerActual - 1 + banners.length) % banners.length;
    mostrarBanner();
}

function reiniciarTemporizador() {
    clearInterval(temporizadorCarrusel);
    temporizadorCarrusel = setInterval(cambiarBanner, 8000);
}

if (carrusel && banners.length > 0) {
    botonAnterior?.addEventListener("click", () => {
        bannerAnterior();
        reiniciarTemporizador();
    });

    botonSiguiente?.addEventListener("click", () => {
        cambiarBanner();
        reiniciarTemporizador();
    });

    mostrarBanner();
    reiniciarTemporizador();
}

/* CARRUSEL DE MENSAJES INFERIOR */

const franjaMensajes = document.querySelector(".franja-mensajes");
const mensajesCarrusel = document.getElementById("mensajesCarrusel");

if (franjaMensajes && mensajesCarrusel) {
    const mensajes = Array.from(mensajesCarrusel.children);
    let mensajeActual = 0;

    function mostrarSiguienteMensaje() {
        mensajeActual = (mensajeActual + 1) % mensajes.length;

        mensajesCarrusel.style.transform = "translateX(100%)";

        setTimeout(() => {
            mensajes.forEach((mensaje, indice) => {
                mensaje.style.display =
                    indice === mensajeActual ? "inline-block" : "none";
            });

            mensajesCarrusel.style.transition = "none";
            mensajesCarrusel.style.transform = "translateX(-100%)";

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    mensajesCarrusel.style.transition = "transform 0.6s ease";
                    mensajesCarrusel.style.transform = "translateX(0)";
                });
            });
        }, 600);
    }

    mensajes.forEach((mensaje, indice) => {
        mensaje.style.display = indice === 0 ? "inline-block" : "none";
    });

    mensajesCarrusel.style.transition = "transform 0.6s ease";
    mensajesCarrusel.style.transform = "translateX(0)";

    setInterval(mostrarSiguienteMensaje, 5000);
}
