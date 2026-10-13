const numeroWhatsApp = "51973740935";

const perfumes = {
    "bharara-king": {
        nombre: "Bharara King",
        marca: "Bharara",
        descripcion: "Una fragancia de carácter elegante y llamativo.",
        imagenes: [
            "img/productos/1. Bahara king.png"
        ],
        precios: {
            "3 ml": 20,
            "5 ml": 35,
            "10 ml": 45
        },
        agotados: ["3 ml", "5 ml", "10 ml"],
        precioCompleto: 220
    },

    "hawas-ice": {
        nombre: "Hawas Ice",
        marca: "Rasasi",
        descripcion: "Una fragancia fresca, moderna y vibrante.",
        imagenes: [
            "img/productos/2. Hawas Ice.png"
        ],
        precios: {
            "3 ml": 17,
            "5 ml": 27,
            "10 ml": 35
        },
        precioCompleto: 180
    },

    "khamrah-clasico": {
        nombre: "Khamrah Clásico",
        marca: "Lattafa",
        descripcion: "Una fragancia cálida, dulce y envolvente.",
        imagenes: [
            "img/productos/3. Khamrah Clasico.png"
        ],
        precios: {
            "3 ml": 15,
            "5 ml": 25,
            "10 ml": 30
        },
        precioCompleto: 160
    },

    "asad-bourbon": {
        nombre: "Asad Bourbon",
        marca: "Lattafa",
        descripcion: "Una fragancia intensa, cálida y sofisticada.",
        imagenes: [
            "img/productos/4. Asad bourbon.png"
        ],
        precios: {
            "3 ml": 17,
            "5 ml": 27,
            "10 ml": 35
        },
        precioCompleto: 150
    },

    "9-pm": {
        nombre: "9 PM",
        marca: "Afnan",
        descripcion: "Una fragancia dulce, seductora y nocturna.",
        imagenes: [
            "img/productos/5. 9 pm.png"
        ],
        precios: {
            "3 ml": 17,
            "5 ml": 27,
            "10 ml": 35
        },
        precioCompleto: 170
    },

    "badee-al-oud-sublime": {
        nombre: "Bade'e Al Oud Sublime",
        marca: "Lattafa",
        descripcion: "Una fragancia frutal, elegante y envolvente.",
        imagenes: [
            "img/productos/6. Badée Al Oud Sublime.png"
        ],
        precios: {
            "3 ml": 15,
            "5 ml": 25,
            "10 ml": 30
        },
        precioCompleto: 150
    },

    "yara-pink": {
        nombre: "Yara Pink",
        marca: "Lattafa",
        descripcion: "Una fragancia dulce, cremosa y femenina.",
        imagenes: [
            "img/productos/7. Yara Pink.png"
        ],
        precios: {
            "3 ml": 15,
            "5 ml": 25,
            "10 ml": 30
        },
        precioCompleto: 140
    },
    
     "stronger-with-you-intensely": {
        nombre: "Stronger With You Intensely",
        marca: "Emporio Armani",
        descripcion: "Una fragancia cálida, dulce e intensa, con un carácter elegante y envolvente.",
        imagenes: [
            "img/productos/8. Stronger With You Intensely.png"
        ],
        precios: {
            "3 ml": 20,
            "5 ml": 32,
            "10 ml": 55
        },
        agotados: ["3 ml", "5 ml", "10 ml"],
        precioCompleto: 420
    },

    "valentino-born-in-roma-intense": {
        nombre: "Valentino Born in Roma Intense",
        marca: "Valentino",
        descripcion: "Una fragancia intensa y sofisticada, ideal para destacar en ocasiones especiales.",
        imagenes: [
            "img/productos/9. Valentino Born in Roma Intense.png"
        ],
        precios: {
            "3 ml": 25,
            "5 ml": 40,
            "10 ml": 65
        },
        agotados: ["3 ml", "5 ml", "10 ml"],
        precioCompleto: 520
    },

    "le-beau-le-parfum": {
        nombre: "Le Beau Le Parfum",
        marca: "Jean Paul Gaultier",
        descripcion: "Una fragancia tropical, dulce y amaderada, con un estilo sensual.",
        imagenes: [
            "img/productos/10. Le Beau Le Parfum.png"
        ],
        precios: {
            "3 ml": 25,
            "5 ml": 40,
            "10 ml": 65
        },
        agotados: ["3 ml", "5 ml", "10 ml"],
        precioCompleto: 450
    },

     "xerjoff-erba-pura": {
        nombre: "Xerjoff Erba Pura",
        marca: "Xerjoff",
        descripcion: "Una fragancia intensa, frutal, dulce y envolvente.",
        imagenes: [
            "img/productos/11. Xerjoff Erba Pura.png"
        ],
        precios: {
            "3 ml": 35,
            "5 ml": 55,
            "10 ml": 90
        },
        agotados: ["3 ml", "5 ml", "10 ml"],
                precioCompleto: 950
    },

    "khamrah-qahwa": {
        nombre: "Khamrah Qahwa",
        marca: "Lattafa",
        descripcion: "Una fragancia cálida, dulce e intensa.",
        imagenes: ["img/productos/19. Khamrah Qahwa.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
precioCompleto: 180
    },

    "khamrah-dukan": {
        nombre: "Khamrah Dukan",
        marca: "Lattafa",
        descripcion: "Una fragancia de carácter cálido y envolvente.",
        imagenes: [],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
precioCompleto: 180
    },

    "9-pm-night-out": {
        nombre: "9 PM Night Out",
        marca: "Afnan",
        descripcion: "Una fragancia moderna y llamativa.",
        imagenes: ["img/productos/14. 9 pm night Out.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
precioCompleto: 180
    },

    "veneno-bianco": {
        nombre: "Veneno Bianco",
        marca: "French Avenue",
        descripcion: "Una fragancia elegante y distintiva.",
        imagenes: ["img/productos/17. Veneno Bianco.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
agotados: ["3 ml", "5 ml", "10 ml"],
precioCompleto: 180
    },

    "nitro-red-intensely": {
        nombre: "Nitro Red Intensely",
        marca: "Dumont",
        descripcion: "Una fragancia intensa y llamativa.",
        imagenes: ["img/productos/20. Nitro Red Intensely.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
agotados: ["3 ml", "5 ml", "10 ml"],
precioCompleto: 180
    },

    "hawas-la-mer": {
        nombre: "Hawas La Mer",
        marca: "Rasasi",
        descripcion: "Una fragancia fresca y moderna.",
        imagenes: ["img/productos/18. Hawas La Mer.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
agotados: ["3 ml", "5 ml", "10 ml"],
precioCompleto: 180
    },

    "yara-tous": {
        nombre: "Yara Tous",
        marca: "Lattafa",
        descripcion: "Una fragancia dulce y tropical.",
        imagenes: ["img/productos/24. Yara Tous.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
agotados: ["3 ml", "5 ml", "10 ml"],
precioCompleto: 180
    },

    "yum-yum": {
        nombre: "Yum Yum",
        marca: "Armaf",
        descripcion: "Una fragancia dulce y atractiva.",
        imagenes: ["img/productos/25. Yum Yum.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
agotados: ["3 ml", "5 ml", "10 ml"],
precioCompleto: 180
    },

    "honor-glory": {
        nombre: "Honor & Glory",
        marca: "Lattafa",
        descripcion: "Una fragancia intensa y envolvente.",
        imagenes: ["img/productos/16. Honor & Glory.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
agotados: ["3 ml", "5 ml", "10 ml"],
precioCompleto: 180
    },

    "club-de-nuit-intense-man": {
        nombre: "Club de Nuit Intense Man",
        marca: "Armaf",
        descripcion: "Una fragancia de carácter intenso y elegante.",
        imagenes: ["img/productos/15. Club de Nuit Intense Man.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
precioCompleto: 180
    },

    "odyssey-aqua": {
        nombre: "Odyssey Aqua",
        marca: "Armaf",
        descripcion: "Una fragancia fresca y versátil.",
        imagenes: ["img/productos/21. Odyssey Aqua.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
precioCompleto: 180
    },

    "9-am-dive": {
        nombre: "9 AM Dive",
        marca: "Afnan",
        descripcion: "Una fragancia fresca y moderna.",
        imagenes: ["img/productos/12. 9 am Dive.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
precioCompleto: 180
    },

    "opulent-dubai": {
        nombre: "Opulent Dubai",
        marca: "Lattafa",
        descripcion: "Una fragancia de carácter sofisticado.",
        imagenes: ["img/productos/22. Opulent Dubai.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
precioCompleto: 180
    },

    "vulcan-feu": {
        nombre: "Vulcan Feu",
        marca: "French Avenue",
        descripcion: "Una fragancia intensa y expresiva.",
        imagenes: ["img/productos/23. Vulcan Feu.png"],
        precios: {
    "3 ml": 15,
    "5 ml": 25,
    "10 ml": 35
},
agotados: ["3 ml", "5 ml", "10 ml"],
precioCompleto: 180
    },

"mandarin-sky": {
    nombre: "Mandarin Sky",
    marca: "Armaf",
    descripcion: "Una fragancia cítrica, dulce y vibrante.",
    imagenes: ["img/productos/27. Mandrin Sky.png"],
    precios: {
        "3 ml": 15,
        "5 ml": 25,
        "10 ml": 35
    },
    precioCompleto: 180
},

"yara-elixir": {
    nombre: "Yara Elixir",
    marca: "Lattafa",
    descripcion: "Una fragancia dulce, cremosa y envolvente.",
    imagenes: ["img/productos/29. Yara Elixir.png"],
    precios: {
        "3 ml": 15,
        "5 ml": 25,
        "10 ml": 35
    },
    precioCompleto: 160
},
"mandarin-sky-elixir": {
    nombre: "Mandarin Sky Elixir",
    marca: "Armaf",
    descripcion: "Una fragancia cítrica, dulce e intensa.",
    imagenes: ["img/productos/28. Mandarin Sky Elixir.png"],
    precios: {
        "3 ml": 15,
        "5 ml": 25,
        "10 ml": 35
    },
    agotados: ["3 ml", "5 ml", "10 ml"],
    precioCompleto: 190
}

};

const parametros = new URLSearchParams(window.location.search);
const productoId = parametros.get("producto");
const enlaceVolver = document.getElementById("enlace-volver-catalogo");

const productosDisenador = [
    "stronger-with-you-intensely",
    "valentino-born-in-roma-intense",
    "le-beau-le-parfum",
    "xerjoff-erba-pura"
];

if (enlaceVolver && productosDisenador.includes(productoId)) {
    enlaceVolver.href = "perfumes-disenador.html";
}
const perfume = perfumes[productoId];

if (perfume) {
    document.getElementById("nombre-producto").textContent = perfume.nombre;
    document.getElementById("marca-producto").textContent = perfume.marca;
    document.getElementById("descripcion-producto").textContent = perfume.descripcion;

    const foto = document.getElementById("foto-producto");
    const numeroFoto = document.getElementById("numero-foto");
    const anterior = document.getElementById("foto-anterior");
    const siguiente = document.getElementById("foto-siguiente");

    let indiceFoto = 0;

    function mostrarFoto() {
        foto.src = perfume.imagenes[indiceFoto];
        foto.alt = perfume.nombre;
        numeroFoto.textContent = `${indiceFoto + 1} / ${perfume.imagenes.length}`;
    }

    anterior.addEventListener("click", () => {
        indiceFoto = (indiceFoto - 1 + perfume.imagenes.length) % perfume.imagenes.length;
        mostrarFoto();
    });

    siguiente.addEventListener("click", () => {
        indiceFoto = (indiceFoto + 1) % perfume.imagenes.length;
        mostrarFoto();
    });

    const opciones = document.getElementById("opciones-tamano");
    const precioPrincipal = document.getElementById("precio-principal");
    const precioElegido = document.getElementById("precio-elegido");
    const precioCompleto = document.getElementById("precio-completo");
    const botonCompleto = document.getElementById("elegir-completo");
    const volumenCompleto = document.getElementById("volumen-completo");
    const botonComprar = document.getElementById("comprar-producto");

    let presentacionElegida = null;
    let precioSeleccionado = null;

Object.entries(perfume.precios).forEach(([tamano, precio]) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "opcion-tamano";

    if (perfume.agotados && perfume.agotados.includes(tamano)) {
        boton.classList.add("agotado");
        boton.disabled = true;
        boton.innerHTML = `
            <small>${tamano}</small>
            <strong>AGOTADO</strong>
        `;
    } else {
        boton.innerHTML = `<small>${tamano}</small><strong>S/${precio}</strong>`;

        boton.addEventListener("click", () => {
            presentacionElegida = tamano;
            precioSeleccionado = precio;

            opciones.querySelectorAll("button").forEach(opcion => {
                opcion.classList.remove("seleccionado");
            });

            boton.classList.add("seleccionado");
            precioPrincipal.textContent = `S/${precio}`;
            precioElegido.textContent = `S/${precio}`;
            botonComprar.disabled = false;
        });
    }

    opciones.appendChild(boton);
});

    precioCompleto.textContent = `S/${perfume.precioCompleto}`;
    volumenCompleto.textContent = "100 ml";

    botonCompleto.addEventListener("click", () => {
        presentacionElegida = "Frasco completo de 100 ml";
        precioSeleccionado = perfume.precioCompleto;

        opciones.querySelectorAll("button").forEach(opcion => {
            opcion.classList.remove("seleccionado");
        });

        precioPrincipal.textContent = `S/${precioSeleccionado}`;
        precioElegido.textContent = `S/${precioSeleccionado}`;
        botonComprar.disabled = false;
    });

    botonComprar.addEventListener("click", () => {
        if (!presentacionElegida || precioSeleccionado === null) {
            return;
        }

        const mensaje = `Hola, Abanto Fragancias. Deseo comprar ${perfume.nombre}, presentación: ${presentacionElegida}, precio: S/${precioSeleccionado}. ¿Está disponible?`;

        window.open(
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`,
            "_blank"
        );
    });

    mostrarFoto();
} else {
    document.querySelector(".ficha-producto").innerHTML =
        "<p>No se encontró el perfume. Regresa al catálogo y selecciona un producto.</p>";
}
