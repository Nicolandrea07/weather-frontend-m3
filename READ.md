# ☀️ Clima Araucanía - Módulo 4 (Lógica y Estadísticas)

Esta aplicación proporciona información meteorológica detallada de la zona lacustre de la Región de la Araucanía. En esta versión, se ha implementado la lógica interna mediante JavaScript para transformar una interfaz estática en una plataforma dinámica y funcional.

## 🚀 Funcionalidades del Módulo 4
* **Renderización Dinámica:** La interfaz se construye a partir de estructuras de datos en JS, eliminando el contenido "quemado" en el HTML.
* **Procesamiento de Datos:** Uso de ciclos y condicionales para analizar pronósticos semanales.
* **Cálculo de Estadísticas:** Generación automática de valores meteorológicos clave para cada localidad.
* **Navegación Single Page:** Cambio entre vista general y detalle mediante manipulación del DOM.

## 📊 Modelado de Datos
La información está organizada en un arreglo de objetos llamado `lugares`. Cada objeto sigue esta estructura técnica:
* **Identificadores:** `id` único y `nombre` de la localidad.
* **Estado Actual:** `tempActual` y `estadoActual`.
* **Pronóstico Semanal:** Un arreglo interno de 7 objetos, donde cada uno contiene `dia`, `min`, `max` y `estado` (ej: "Soleado", "Nublado", "Lluvioso").

## 📈 Estadísticas Calculadas
La aplicación procesa el `pronostico

## 🔗 Enlace al Repositorio
https://nicolandrea07.github.io/weather-frontend-m3/
