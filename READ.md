## 🚀 Módulo 4: Lógica y Estadísticas (JavaScript)

[cite_start]En esta iteración, la aplicación ha pasado de tener contenido estático a generar toda la interfaz dinámicamente mediante JavaScript, cumpliendo con los objetivos de programación funcional y manipulación del DOM[cite: 106, 113].

### 📊 Modelado de Datos
Los datos están centralizados en un archivo `datos.js` mediante un arreglo de objetos llamado `lugares`. [cite_start]Cada objeto contiene[cite: 159, 161]:
* **ID y Nombre:** Identificadores únicos para la navegación.
* **Clima Actual:** Temperatura y estado para la vista principal.
* **Pronóstico Semanal:** Un sub-arreglo de 7 objetos que detallan el día, temperaturas mínimas/máximas y el estado del cielo.

### 📈 Lógica de Estadísticas
[cite_start]Se implementó una función de procesamiento que recorre el pronóstico semanal de cada lugar utilizando ciclos (`for...of`) para calcular[cite: 166, 167]:
1. **Temperatura Mínima y Máxima:** Los valores extremos alcanzados en la semana.
2. **Promedio Semanal:** Calculado mediante la acumulación de temperaturas diarias y su posterior división.
3. [cite_start]**Contador de Clima:** Un análisis de los estados del tiempo para generar un resumen textual dinámico (ej: "Semana mayormente soleada") mediante condicionales[cite: 170, 171].

### 💻 Funcionalidades Técnicas
* [cite_start]**Renderización Dinámica:** El Home se construye recorriendo el arreglo de datos e inyectando HTML en el DOM al cargar la página[cite: 147].
* [cite_start]**Navegación entre Vistas:** Uso de clases de Bootstrap (`d-none`) para alternar entre el listado principal y el detalle de cada lugar sin recargar el navegador[cite: 148].

## 🔗 Enlace al Repositorio
https://nicolandrea07.github.io/weather-frontend-m3/
