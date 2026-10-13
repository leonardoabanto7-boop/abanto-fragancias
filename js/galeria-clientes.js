
const galeriaClientes = document.getElementById("galeria-clientes");
const indicadoresClientes = document.getElementById("indicadores-clientes");

if (galeriaClientes) {
    const fotosOriginales = Array.from(
        galeriaClientes.querySelectorAll("img")
    );

    const cantidadFotos = fotosOriginales.length;

    let arrastrando = false;
    let inicioX = 0;
    let desplazamientoInicial = 0;
    let anchoGrupo = 0;
    let ajustandoPosicion = false;

    // Crear copias al principio y al final
    const fragmentoInicio = document.createDocumentFragment();
    const fragmentoFinal = document.createDocumentFragment();

    fotosOriginales.forEach((foto) => {
        const copiaInicio = foto.cloneNode(true);
        const copiaFinal = foto.cloneNode(true);

        copiaInicio.setAttribute("aria-hidden", "true");
        copiaFinal.setAttribute("aria-hidden", "true");

        fragmentoInicio.appendChild(copiaInicio);
        fragmentoFinal.appendChild(copiaFinal);
    });

    galeriaClientes.prepend(fragmentoInicio);
    galeriaClientes.appendChild(fragmentoFinal);

    const todasLasFotos = Array.from(
        galeriaClientes.querySelectorAll("img")
    );

    // Medir el ancho real de un grupo de fotos
    function medirGrupo() {
        if (fotosOriginales.length > 0) {
            const primera = fotosOriginales[0];
            const ultima = fotosOriginales[cantidadFotos - 1];

            anchoGrupo =
                ultima.offsetLeft + ultima.offsetWidth - primera.offsetLeft;

            // Colocarse en el grupo original
            if (anchoGrupo > 0) {
                galeriaClientes.scrollLeft =
                    fotosOriginales[0].offsetLeft -
                    galeriaClientes.offsetLeft -
                    parseFloat(getComputedStyle(galeriaClientes).paddingLeft || 0);
            }
        }
    }

    // Crear indicadores solo para las fotos originales
    if (indicadoresClientes) {
        indicadoresClientes.innerHTML = "";

        fotosOriginales.forEach((foto, indice) => {
            const indicador = document.createElement("button");

            indicador.type = "button";
            indicador.className = "indicador-cliente";
            indicador.setAttribute(
                "aria-label",
                `Mostrar fotografía ${indice + 1}`
            );

            indicador.addEventListener("click", () => {
                galeriaClientes.scrollTo({
                    left: foto.offsetLeft -
                        galeriaClientes.offsetLeft -
                        (galeriaClientes.clientWidth - foto.clientWidth) / 2,
                    behavior: "smooth"
                });
            });

            indicadoresClientes.appendChild(indicador);
        });
    }

    // Arrastrar con el mouse
    galeriaClientes.addEventListener("mousedown", (evento) => {
        if (evento.button !== 0) return;

        arrastrando = true;
        inicioX = evento.pageX;
        desplazamientoInicial = galeriaClientes.scrollLeft;
        galeriaClientes.style.scrollBehavior = "auto";
    });

    window.addEventListener("mousemove", (evento) => {
        if (!arrastrando) return;

        evento.preventDefault();

        galeriaClientes.scrollLeft =
            desplazamientoInicial - (evento.pageX - inicioX);
    });

    function terminarArrastre() {
        if (!arrastrando) return;

        arrastrando = false;
        galeriaClientes.style.scrollBehavior = "auto";
    }

    window.addEventListener("mouseup", terminarArrastre);
    window.addEventListener("blur", terminarArrastre);

    galeriaClientes.addEventListener("dragstart", (evento) => {
        evento.preventDefault();
    });

    // Mantener el desplazamiento dentro de la zona central
    function mantenerInfinito() {
        if (ajustandoPosicion || anchoGrupo <= 0) return;

        const inicioOriginal =
            fotosOriginales[0].offsetLeft -
            galeriaClientes.offsetLeft -
            parseFloat(getComputedStyle(galeriaClientes).paddingLeft || 0);

        const finalOriginal = inicioOriginal + anchoGrupo;

        if (galeriaClientes.scrollLeft < inicioOriginal) {
            ajustandoPosicion = true;
            galeriaClientes.scrollLeft += anchoGrupo;
            ajustandoPosicion = false;
        } else if (galeriaClientes.scrollLeft >= finalOriginal) {
            ajustandoPosicion = true;
            galeriaClientes.scrollLeft -= anchoGrupo;
            ajustandoPosicion = false;
        }
    }

    // Destacar la foto central y actualizar los indicadores
    
function actualizarCarrusel() {
    mantenerInfinito();

    const centroGaleria =
        galeriaClientes.getBoundingClientRect().left +
        galeriaClientes.clientWidth / 2;

    let fotoCentral = null;
    let distanciaMinima = Infinity;

    todasLasFotos.forEach((foto) => {
        const rect = foto.getBoundingClientRect();
        const centroFoto = rect.left + rect.width / 2;
        const distancia = Math.abs(centroGaleria - centroFoto);

        if (distancia < distanciaMinima) {
            distanciaMinima = distancia;
            fotoCentral = foto;
        }
    });

    // Aplicar el efecto a todas las fotos, incluidas las copias
    todasLasFotos.forEach((foto) => {
        foto.classList.toggle(
            "tarjeta-destacada",
            foto === fotoCentral
        );
    });

    // Actualizar el indicador correspondiente a la foto original
    if (indicadoresClientes && fotoCentral) {
        const indiceEnTodas = todasLasFotos.indexOf(fotoCentral);
        const indiceOriginal = indiceEnTodas % cantidadFotos;

        const indicadores =
            indicadoresClientes.querySelectorAll("button");

        indicadores.forEach((indicador, indice) => {
            indicador.classList.toggle(
                "activo",
                indice === indiceOriginal
            );
        });
    }
}

    galeriaClientes.addEventListener("scroll", actualizarCarrusel);

    window.addEventListener("resize", () => {
        medirGrupo();
        actualizarCarrusel();
    });

    // Esperar a que las imágenes tengan sus dimensiones definitivas
    window.addEventListener("load", () => {
        medirGrupo();
        actualizarCarrusel();
    });

    medirGrupo();
    actualizarCarrusel();
}
