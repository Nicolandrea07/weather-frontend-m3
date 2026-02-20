# Weather App - Módulo 3 (Villarrica y Zona Lacustre)

Esta es la versión profesional de la aplicación de clima enfocada en la Región de la Araucanía. [cite_start]En esta iteración, se ha refactorizado el código para aplicar estándares de la industria en cuanto a organización de estilos y responsividad[cite: 6].

## 🛠️ Tecnologías y Metodologías
* [cite_start]**HTML5 Semántico:** Estructura clara utilizando etiquetas como `header`, `main` y `footer`[cite: 21, 111].
* [cite_start]**Bootstrap 5:** Implementación de un sistema de grillas (Grid) totalmente responsivo[cite: 63, 64].
* [cite_start]**SASS (Preprocesador):** Modularización de estilos mediante parciales, uso de variables y mixins[cite: 11, 45].
* [cite_start]**Metodología BEM:** Organización de clases CSS bajo el esquema Bloque-Elemento-Modificador para un código mantenible[cite: 10, 41].

## 📂 Estructura de Archivos SASS
[cite_start]El proyecto utiliza una arquitectura modular de SASS[cite: 47, 53, 79]:
* [cite_start]`scss/base/_variables.scss`: Contiene los colores, fuentes y medidas globales del proyecto[cite: 49, 55].
* [cite_start]`scss/components/_place-card.scss`: Estilos específicos de las tarjetas de clima usando anidamiento y mixins[cite: 51, 56].
* [cite_start]`scss/main.scss`: Archivo maestro que importa todos los parciales para su compilación[cite: 52, 53].

## 📱 Responsividad (Layout)
[cite_start]La interfaz se adapta automáticamente a diferentes pantallas[cite: 36, 85]:
* [cite_start]**Móvil (≤420px):** Las tarjetas se muestran en una sola columna (`col-12`)[cite: 37, 64].
* [cite_start]**Escritorio (≥1024px):** Se muestran varias tarjetas por fila (`col-lg-4`) con espaciado coherente[cite: 38, 64].

## 🔗 Enlace al Repositorio
[TU_ENLACE_A_GITHUB_AQUÍ]