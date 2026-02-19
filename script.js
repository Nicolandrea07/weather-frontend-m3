const localidades = [
{ nombre: "Villarrica Centro", temp: "18°C", estado: "Despejado" },
{ nombre: "Pucón", temp: "17°C", estado: "Parcial" },
{ nombre: "Lican Ray", temp: "19°C", estado: "Despejado" },
{ nombre: "Coñaripe", temp: "18°C", estado: "Soleado" },
{ nombre: "Curarrehue", temp: "15°C", estado: "Nublado" },
{ nombre: "Caburgua", temp: "16°C", estado: "Parcial" },
{ nombre: "Molco", temp: "17°C", estado: "Viento" },
{ nombre: "Ñancul", temp: "18°C", estado: "Despejado" },
{ nombre: "Pucura", temp: "17°C", estado: "Parcial" },
{ nombre: "Calafquén", temp: "19°C", estado: "Despejado" }
];

function cargarHome() {
const contenedor = document.getElementById('contenedor-cards');
if (!contenedor) return;
contenedor.innerHTML = "";
localidades.forEach((loc, index) => {
contenedor.innerHTML +=  <div class="col-12 col-md-4 mb-3"> <div class="card p-3 shadow-sm" onclick="verDetalle(${index})" style="cursor:pointer"> <h3>${loc.nombre}</h3> <p class="h2">${loc.temp}</p> <span class="badge bg-primary">${loc.estado}</span> </div> </div>;
});
}

function verDetalle(index) {
const loc = localidades[index];
document.getElementById('home-section').style.display = 'none';
document.getElementById('detalle-section').style.display = 'block';
document.getElementById('contenido-detalle').innerHTML =  <div class="card p-4 shadow"> <h2>Detalle: ${loc.nombre}</h2> <p>Estado: ${loc.estado}</p> <p>Temperatura: ${loc.temp}</p> </div>;
}

function mostrarHome() {
document.getElementById('home-section').style.display = 'block';
document.getElementById('detalle-section').style.display = 'none';
}

window.onload = cargarHome;