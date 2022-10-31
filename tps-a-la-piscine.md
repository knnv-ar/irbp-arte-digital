# Guía montaje de TPs de AM1 en `<la-piscine>`

Realizada por Raúl Federico Lacabanne (aka: knnv-ar)

## Bloque 1. Crear carpetas de trabajo

1. Creá las carpetas de trabajo en el Escritorio: `descargar` y `subir`.
2. Dentro de la carpeta `descargar` creá dos carpetas con el nombre de tus TPs, con palabras separadas por guiones medios; por ejemplo :`bola-de-fetiche` o `entrando-al-flujo`.

## Bloque 2. Descargar los TPs del editor de p5js

1. Ingresá con tu usuario al sitio https://editor.p5js.org/.
2. Cliqueá en `File > Open` y seleccionar el TPNº 1.
3. Cliqueá en `File > Download`y guardar el archivo zip en la carpeta `descargar`.
4. Repetí pasos 2 al 3 pero seleccionando el TPNº 2.

## Bloque 3. Generar miniaturas de los TPs

1. Volvé al sitio https://editor.p5js.org/.
2. Cliqueá en `File > Open` y seleccionar el TPNº 1.
3. Ejecutá la aplicación y hacer una captura de pantalla en un momento representativo de nuestro trabajo. En Windows usar el atajo: `Windows + Mayús + S` y seleccionar pantalla completa.
4. Abrí Photoshop (o símil) generá un archivo nuevo con el tañamo total de tu escritorio, y luego pegá el contenido del Portapeles.
5. Recortá el área de representación de tu trabajo y luego seleccioná `Imagen > Tamaño de imagen` y en Anchura y Altura colocá el valor **360**.
6. Seleccioná `Archivo > Exportar > Exportación rápida como PNG` y guardá el archivo en la carpeta correspondiente al nombre de tu TPNº 1 que se encuentra en la carpeta `descargar`.
7. Repetí pasos 2 al 6 pero seleccionando el TPNº 2.

## Bloque 3. Descomprimir y adecuar los proyectos para su montaje en la galería

1. Descomprimir en una carpeta propia el TPNº1 descargado en el bloque primero.
2. Copiar los archivos `sketch.js` y los archivos de medios usados (imágenes, sonidos, mùsica, video, objetos 3D, fuentes, etc) a una carpeta nueva dentro de `code`. El nombre de la carpeta debe ser como el título de la obra, sin espacios ni tildes, utilizando el signo `-` con separador de palabras: por ejemplo, `titulo-de-la-obra`.
3. Crear con la consola dos archivos en dicha carpeta: `touch statement.md` 


arhivos dentro de la carpeta:

- sketch.js
- statement.md
- thumbnail.png

Texto.

## 3. Descargar los proyectos del editor de p5js

Texto.

## 4. Descargar los proyectos del editor de p5js

Texto.

En el `sketch.js` ingresar en el setup estas dos líneas de código:

```js
canvas = createCanvas(512, 512);
canvas.parent("div-sketch");
```

---

git branch <main>: crear rama <main>
git chackout <main>: me posiciono en rama <main>
git branch -D <master>: elimina la rama <master>

---

function setup() {
  canvas = createCanvas(710, 400);
  canvas.parent('div-sketch');
}

-----------------------------------------------------------------

---
layout: post
title: "Representación del aura"
date: 2020-12-10
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
    <script type="text/javascript" src="sketch.js"></script>
</div>

<Nombre-y-Apellido-Autor-a>, 2022.

**Título de la obra**

Breve descripción.

**Desarrollo técnico, estético y conceptual**

Texto párrafo 1.
Texto párrafo 2.
Texto párrafo 3.




