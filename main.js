function calcularStats(pronostico) {
    let minS = pronostico[0].min;
    let maxS = pronostico[0].max;
    let suma = 0;
    let soleados = 0;

    for (let d of pronostico) {
        if (d.min < minS) minS = d.min;
        if (d.max > maxS) maxS = d.max;
        suma += (d.min + d.max) / 2;
        if (d.estado === "Soleado") soleados++;
    }

    const promedio = (suma / pronostico.length).toFixed(1);
    const resumen = soleados > 3 ? "Semana mayormente soleada." : "Semana con clima variable.";

    return { minS, maxS, promedio, resumen };
}

function verDetalle(id) {
    const lugar = lugares.find(l => l.id === id);
    const stats = calcularStats(lugar.pronosticoSemanal);

    document.getElementById("home").classList.add("d-none");
    document.getElementById("detalle").classList.remove("d-none");
    document.getElementById("detalle-nombre").innerText = lugar.nombre;

    let htmlP = "";
    lugar.pronosticoSemanal.forEach(d => {
        htmlP += `<li class="list-group-item d-flex justify-content-between">
            <span>${d.dia}</span>
            <span>${d.min}° / ${d.max}° - ${d.estado}</span>
        </li>`;
    });
    document.getElementById("lista-pronostico").innerHTML = htmlP;

    // Corregido: Uso de backticks (``) para el HTML dinámico
    document.getElementById("stats-info").innerHTML = `
        <h5>Estadísticas Semanales</h5>
        <p>Mínima: ${stats.minS}°C</p>
        <p>Máxima: ${stats.maxS}°C</p>
        <p>Promedio: ${stats.promedio}°C</p>
        <div class="alert alert-info">${stats.resumen}</div>
    `;
}

// Carga inicial de tarjetas
document.addEventListener("DOMContentLoaded", () => {
    const cont = document.getElementById("contenedor-lugares");
    lugares.forEach(l => {
        cont.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <h5>${l.nombre}</h5>
                        <p class="h3">${l.tempActual}°C</p>
                        <button class="btn btn-dark w-100" onclick="verDetalle(${l.id})">Ver Detalles</button>
                    </div>
                </div>
            </div>`;
    });
});
