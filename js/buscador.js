document.addEventListener("DOMContentLoaded", () => {
    const botonBuscar = document.getElementById("abrir-buscador");
    const panelBuscar = document.getElementById("panel-buscador");
    const campoBuscar = document.getElementById("campo-busqueda");
    const resultados = document.getElementById("resultados-busqueda");

    if (!botonBuscar || !panelBuscar || !campoBuscar || !resultados) {
        return;
    }

    const perfumes = [
        {
            nombre: "Bharara King",
            marca: "Bharara",
            precio: 20,
            imagen: "img/productos/1. Bahara king.png",
            id: "bharara-king",
            alias: "barara bhara king"
        },
        {
            nombre: "Hawas Ice",
            marca: "Rasasi",
            precio: 17,
            imagen: "img/productos/2. Hawas Ice.png",
            id: "hawas-ice",
            alias: "jauas hawas hielo"
        },
        {
            nombre: "Khamrah Clásico",
            marca: "Lattafa",
            precio: 15,
            imagen: "img/productos/3. Khamrah Clasico.png",
            id: "khamrah-clasico",
            alias: "kamra khamra khamrah clasico"
        },
        {
            nombre: "Asad Bourbon",
            marca: "Lattafa",
            precio: 17,
            imagen: "img/productos/4. Asad bourbon.png",
            id: "asad-bourbon",
            alias: "asad burbon"
        },
        {
            nombre: "9 PM",
            marca: "Afnan",
            precio: 17,
            imagen: "img/productos/5. 9 pm.png",
            id: "9-pm",
            alias: "9pm nine pm"
        },
        {
            nombre: "Bade'e Al Oud Sublime",
            marca: "Lattafa",
            precio: 15,
            imagen: "img/productos/6. Badée Al Oud Sublime.png",
            id: "badee-al-oud-sublime",
            alias: "bade oud sublime badee"
        },
        {
            nombre: "Yara Pink",
            marca: "Lattafa",
            precio: 15,
            imagen: "img/productos/7. Yara Pink.png",
            id: "yara-pink",
            alias: "yara rosa pink"
        },
        {
            nombre: "Stronger With You Intensely",
            marca: "Emporio Armani",
            precio: 20,
            imagen: "img/productos/8. Stronger With You Intensely.png",
            id: "stronger-with-you-intensely",
            alias: "stronger strnger intensely armani"
        },
        {
            nombre: "Valentino Born in Roma Intense",
            marca: "Valentino",
            precio: 25,
            imagen: "img/productos/9. Valentino Born in Roma Intense.png",
            id: "valentino-born-in-roma-intense",
            alias: "valentino roma intense"
        },
        {
            nombre: "Le Beau Le Parfum",
            marca: "Jean Paul Gaultier",
            precio: 25,
            imagen: "img/productos/10. Le Beau Le Parfum.png",
            id: "le-beau-le-parfum",
            alias: "lebo beau jpg jean paul gaultier"
        },
        {
            nombre: "Xerjoff Erba Pura",
            marca: "Xerjoff",
            precio: 40,
            imagen: "img/productos/11. Xerjoff Erba Pura.png",
            id: "xerjoff-erba-pura",
            alias: "serjof xerjof erba pura"
        },
        {
            nombre: "Khamrah Qahwa",
            marca: "Lattafa",
            precio: 15,
            imagen: "img/productos/19. Khamrah Qahwa.png",
            id: "khamrah-qahwa",
            alias: "khamra qahwa cafe"
        },
        {
            nombre: "Khamrah Dukan",
            marca: "Lattafa",
            precio: 15,
            imagen: "img/productos/26. khamrah Dukhan.png",
            id: "khamrah-dukan",
            alias: "khamrah dukhan dukhan"
        },
        {
            nombre: "Veneno Bianco",
            marca: "French Avenue",
            precio: 15,
            imagen: "img/productos/17. Veneno Bianco.png",
            id: "veneno-bianco",
            alias: "veneno bianco"
        },
        {
            nombre: "Yara Tous",
            marca: "Lattafa",
            precio: 15,
            imagen: "img/productos/24. Yara Tous.png",
            id: "yara-tous",
            alias: "yara tous"
        },
        {
            nombre: "Yum Yum",
            marca: "Armaf",
            precio: 15,
            imagen: "img/productos/25. Yum Yum.png",
            id: "yum-yum",
            alias: "yum yum armaf"
        },
        {
            nombre: "Club de Nuit Intense Man",
            marca: "Armaf",
            precio: 15,
            imagen: "img/productos/15. Club de Nuit Intense Man.png",
            id: "club-de-nuit-intense-man",
            alias: "club nuit intense man"
        },
        {
            nombre: "Odyssey Aqua",
            marca: "Armaf",
            precio: 15,
            imagen: "img/productos/21. Odyssey Aqua.png",
            id: "odyssey-aqua",
            alias: "odyssey aqua"
        },
        {
            nombre: "9 AM Dive",
            marca: "Afnan",
            precio: 15,
            imagen: "img/productos/12. 9 am Dive.png",
            id: "9-am-dive",
            alias: "9am dive"
        },
        {
            nombre: "Opulent Dubai",
            marca: "Lattafa",
            precio: 15,
            imagen: "img/productos/22. Opulent Dubai.png",
            id: "opulent-dubai",
            alias: "opulent dubai"
        },
        {
            nombre: "Vulcan Feu",
            marca: "French Avenue",
            precio: 15,
            imagen: "img/productos/23. Vulcan Feu.png",
            id: "vulcan-feu",
            alias: "vulcan feu"
        },
        {
            nombre: "Mandarin Sky",
            marca: "Armaf",
            precio: 15,
            imagen: "img/productos/27. Mandarin Sky.png",
            id: "mandarin-sky",
            alias: "mandarin sky"
        },
        {
            nombre: "Yara Elixir",
            marca: "Lattafa",
            precio: 15,
            imagen: "img/productos/29. Yara Elixir.png",
            id: "yara-elixir",
            alias: "yara elixir"
        },
        {
            nombre: "Mandarin Sky Elixir",
            marca: "Armaf",
            precio: 15,
            imagen: "img/productos/28. Mandarin Sky Elixir.png",
            id: "mandarin-sky-elixir",
            alias: "mandarin sky elixir"
        }
    ]

    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/g, "");
    }

    function mostrarResultados() {
        const consulta = normalizar(campoBuscar.value.trim());
        resultados.replaceChildren();

        if (!consulta) {
            return;
        }

        const encontrados = perfumes.filter(perfume => {
            const texto = normalizar(
                `${perfume.nombre} ${perfume.marca} ${perfume.alias}`
            );

            return texto.includes(consulta);
        });

        if (encontrados.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.className = "mensaje-buscador";
            mensaje.textContent =
                "No encontramos una coincidencia. Prueba con otra forma de escribir el nombre.";
            resultados.appendChild(mensaje);
            return;
        }

        encontrados.forEach(perfume => {
            const enlace = document.createElement("a");
            enlace.className = "resultado-busqueda";
            enlace.href = `producto.html?producto=${perfume.id}`;

            const imagen = document.createElement("img");
            imagen.src = perfume.imagen;
            imagen.alt = perfume.nombre;
            imagen.loading = "lazy";

            imagen.addEventListener("error", () => {
                imagen.alt = "Imagen no disponible";
            });

            const nombre = document.createElement("h3");
            nombre.textContent = perfume.nombre;

            const precio = document.createElement("p");
            precio.textContent = `Desde S/ ${perfume.precio}`;

            enlace.append(imagen, nombre, precio);
            resultados.appendChild(enlace);
        });
    }

    botonBuscar.addEventListener("click", () => {
        panelBuscar.hidden = !panelBuscar.hidden;

        if (!panelBuscar.hidden) {
            campoBuscar.focus();
        } else {
            campoBuscar.value = "";
            resultados.replaceChildren();
        }
    });

    campoBuscar.addEventListener("input", mostrarResultados);

    document.addEventListener("click", evento => {
        if (
            !panelBuscar.contains(evento.target) &&
            !botonBuscar.contains(evento.target)
        ) {
            panelBuscar.hidden = true;
        }
    });

    campoBuscar.addEventListener("keydown", evento => {
        if (evento.key === "Escape") {
            panelBuscar.hidden = true;
        }
    });

    window.addEventListener("scroll", () => {
        if (!panelBuscar.hidden) {
            panelBuscar.hidden = true;
        }
    }, { passive: true });
})