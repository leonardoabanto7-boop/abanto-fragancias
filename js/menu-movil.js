
document.addEventListener("DOMContentLoaded", () => {
    const botonMenu = document.getElementById("botonMenuMovil");
    const menu = document.getElementById("menuPrincipal");

    if (!botonMenu || !menu) return;

    // Abrir y cerrar el menú móvil
    botonMenu.addEventListener("click", () => {
        const estaAbierto = menu.classList.toggle("menu-movil-abierto");

        botonMenu.setAttribute("aria-expanded", String(estaAbierto));
        botonMenu.setAttribute(
            "aria-label",
            estaAbierto ? "Cerrar menú" : "Abrir menú"
        );
    });

    // Cerrar el menú al elegir un enlace principal
    menu.querySelectorAll(":scope > a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            menu.classList.remove("menu-movil-abierto");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.setAttribute("aria-label", "Abrir menú");
        });
    });

    // Cerrar al tocar fuera del menú
    document.addEventListener("click", (evento) => {
        if (
            !menu.contains(evento.target) &&
            !botonMenu.contains(evento.target)
        ) {
            menu.classList.remove("menu-movil-abierto");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.setAttribute("aria-label", "Abrir menú");
        }
    });

    // Cerrar con Escape
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            menu.classList.remove("menu-movil-abierto");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.setAttribute("aria-label", "Abrir menú");
        }
    });
});
