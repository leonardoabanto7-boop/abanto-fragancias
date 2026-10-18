
document.addEventListener("DOMContentLoaded", () => {
    const botonBuscar = document.getElementById("abrir-buscador");
    const panelBuscar = document.getElementById("panel-buscador");
    const campoBuscar = document.getElementById("campo-busqueda");
    const resultados = document.getElementById("resultados-busqueda");

    if (!botonBuscar || !panelBuscar || !campoBuscar || !resultados) return;

    const URL = "https://vvntaanbzaqlkretstrg.supabase.co";
    const KEY = "sb_publishable_yLVoioG4a-nA_KkJ1wQzTQ_kr_9WYnH";

    let perfumes = [];
    let cargado = false;

    function normalizar(texto = "") {
        return String(texto)
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim();
    }

    function slug(nombre = "") {
        return normalizar(nombre).replace(/\s+/g, "-");
    }

    async function cargarPerfumes() {
        try {
            const respuesta = await fetch(
                `${URL}/rest/v1/productos?select=id,nombre,marca,categoria,imagen_url,imagenes,precio_3ml,precio_5ml,precio_10ml,precio_frasco,disponible&order=nombre.asc`,
                { headers: { apikey: KEY }, cache: "no-store" }
            );

            if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);

            const datos = await respuesta.json();

            perfumes = datos.filter(p => p.nombre).map(p => {
                const precios = [
                    p.precio_3ml,
                    p.precio_5ml,
                    p.precio_10ml,
                    p.precio_frasco
                ].map(Number).filter(n => Number.isFinite(n) && n > 0);

                return {
                    ...p,
                    imagen: p.imagen_url || p.imagenes?.[0] || "",
                    precio: precios.length ? Math.min(...precios) : null
                };
            });

            cargado = true;
            mostrarResultados();
        } catch (error) {
            console.error("Error al cargar perfumes:", error);
            resultados.textContent = "No se pudo cargar el catálogo. Intenta nuevamente.";
        }
    }

    function mostrarResultados() {
        resultados.replaceChildren();

        const consulta = normalizar(campoBuscar.value);
        if (!consulta) return;

        if (!cargado) {
            resultados.textContent = "Cargando perfumes...";
            return;
        }

        const encontrados = perfumes.filter(p =>
            normalizar(`${p.nombre} ${p.marca || ""} ${p.categoria || ""}`)
                .includes(consulta)
        );

        if (!encontrados.length) {
            const mensaje = document.createElement("p");
            mensaje.className = "mensaje-buscador";
            mensaje.textContent = "No encontramos ese perfume. Prueba con otro nombre.";
            resultados.appendChild(mensaje);
            return;
        }

        encontrados.forEach(p => {
            const enlace = document.createElement("a");
            enlace.className = "resultado-busqueda";
            enlace.href = `producto.html?producto=${encodeURIComponent(slug(p.nombre))}`;

            const imagen = document.createElement("img");
            imagen.src = p.imagen;
            imagen.alt = p.nombre;
            imagen.loading = "lazy";
            imagen.addEventListener("error", () => {
                imagen.style.display = "none";
            });

            const informacion = document.createElement("div");

            const nombre = document.createElement("h3");
            nombre.textContent = p.nombre;

            const precio = document.createElement("p");
            precio.textContent = p.precio !== null
                ? `Desde S/ ${p.precio}`
                : "Consultar precio";

            informacion.append(nombre, precio);

            if (p.disponible === false) {
                const estado = document.createElement("p");
                estado.className = "estado-agotado-buscador";
                estado.textContent = "AGOTADO";
                informacion.appendChild(estado);
            }

            enlace.append(imagen, informacion);
            resultados.appendChild(enlace);
        });
    }

    botonBuscar.addEventListener("click", () => {
        panelBuscar.hidden = !panelBuscar.hidden;

        if (!panelBuscar.hidden) {
            campoBuscar.focus();
            if (!cargado) cargarPerfumes();
        } else {
            campoBuscar.value = "";
            resultados.replaceChildren();
        }
    });

    campoBuscar.addEventListener("input", mostrarResultados);

    document.addEventListener("click", evento => {
        if (!panelBuscar.contains(evento.target) &&
            !botonBuscar.contains(evento.target)) {
            panelBuscar.hidden = true;
        }
    });

    campoBuscar.addEventListener("keydown", evento => {
        if (evento.key === "Escape") panelBuscar.hidden = true;
    });

    window.addEventListener("scroll", () => {
        if (!panelBuscar.hidden) panelBuscar.hidden = true;
    }, { passive: true });
});
