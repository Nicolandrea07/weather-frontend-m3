const localidades = [
    { nombre: 'Villarrica Centro', temp: '18°C', estado: 'Despejado' },
    { nombre: 'Pucón', temp: '17°C', estado: 'Parcial' },
    { nombre: 'Lican Ray', temp: '19°C', estado: 'Despejado' },
    { nombre: 'Coñaripe', temp: '18°C', estado: 'Soleado' },
    { nombre: 'Curarrehue', temp: '15°C', estado: 'Nublado' },
    { nombre: 'Caburgua', temp: '16°C', estado: 'Parcial' },
    { nombre: 'Molco', temp: '17°C', estado: 'Viento' },
    { nombre: 'Ñancul', temp: '18°C', estado: 'Despejado' },
    { nombre: 'Pucura', temp: '17°C', estado: 'Parcial' },
    { nombre: 'Calafquén', temp: '19°C', estado: 'Despejado' }
];

function cargarHome() {
    const contenedor = document.getElementById('contenedor-cards');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    
    localidades.forEach(function(loc, index) {
        // Estructura BEM: Bloque (place-card) y Elementos (__name, __temp, __status)
        // Responsividad: col-12 (móvil), col-md-6 (tablet), col-lg-4 (escritorio)
        contenedor.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <article class="place-card text-center shadow-sm" onclick="verDetalle(${index})">
                <h3 class="place-card__name">${loc.nombre}</h3>
                <p class="place-card__temp">${loc.temp}</p>
                <span class="place-card__status badge bg-primary">${loc.estado}</span>
            </article>
        </div>`;
    });
}

function verDetalle(index) {
    const loc = localidades[index];
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('detalle-section').style.display = 'block';
    
    // Vista de detalle también usando clases BEM
    document.getElementById('contenido-detalle').innerHTML = `
    <div class="col-12 col-md-8 mx-auto">
        <article class="place-card place-card--detail p-5 shadow">
            <h2 class="place-card__name display-4">${loc.nombre}</h2>
            <p class="place-card__temp display-1">${loc.temp}</p>
            <p class="place-card__status lead mb-4">Estado actual: ${loc.estado}</p>
            <button class="btn btn-secondary" onclick="mostrarHome()">Volver al Inicio</button>
        </article>
    </div>`;
}

function mostrarHome() {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('detalle-section').style.display = 'none';
}


window.onload = cargarHome;