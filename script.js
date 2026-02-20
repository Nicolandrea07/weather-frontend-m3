const lugares = [
    {
        id: 1,
        nombre: "Villarrica Centro",
        pronostico: [
            { dia: "Hoy", temperatura: 18, estado: "Despejado" }
        ]
    },
    {
        id: 2,
        nombre: "Pucón",
        pronostico: [
            { dia: "Hoy", temperatura: 17, estado: "Parcial" }
        ]
    },
    {
        id: 3,
        nombre: "Lican Ray",
        pronostico: [
            { dia: "Hoy", temperatura: 19, estado: "Despejado" }
        ]
    },
    {
        id: 4,
        nombre: "Coñaripe",
        pronostico: [
            { dia: "Hoy", temperatura: 18, estado: "Soleado" }
        ]
    },
    {
        id: 5,
        nombre: "Curarrehue",
        pronostico: [
            { dia: "Hoy", temperatura: 15, estado: "Nublado" }
        ]
    },
    {
        id: 6,
        nombre: "Caburgua",
        pronostico: [
            { dia: "Hoy", temperatura: 16, estado: "Parcial" }
        ]
    },
    {
        id: 7,
        nombre: "Molco",
        pronostico: [
            { dia: "Hoy", temperatura: 17, estado: "Parcial" }
        ]
    },
    {
        id: 8,
        nombre: "Ñancul",
        pronostico: [
            { dia: "Hoy", temperatura: 18, estado: "Parcial" }
        ]
    }
];

function mostrarTarjetas() {
    const contenedor = document.getElementById("contenedor-cards");
    contenedor.innerHTML = "";

    lugares.forEach(lugar => {
        const card = document.createElement("div");
        // Grid de Bootstrap: 1 columna en móvil, 2 en tablet, 3 en escritorio
        card.className = "col-12 col-md-6 col-lg-4 mb-4";
        
        // Estructura con Metodología BEM
        card.innerHTML = `
            <article class="place-card" onclick="verDetalle(${lugar.id})">
                <h3 class="place-card__name">${lugar.nombre}</h3>
                <p class="place-card__temp">${lugar.pronostico[0].temperatura}°C</p>
                <span class="place-card__status badge bg-primary">${lugar.pronostico[0].estado}</span>
            </article>
        `;
        contenedor.appendChild(card);
    });
}

function verDetalle(id) {
    const lugar = lugares.find(l => l.id === id);
    alert(`Clima en ${lugar.nombre}: ${lugar.pronostico[0].temperatura}°C, ${lugar.pronostico[0].estado}`);
}

// Inicializar la carga de tarjetas
document.addEventListener("DOMContentLoaded", mostrarTarjetas);
// Versión final módulo 3
