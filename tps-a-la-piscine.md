# Guía de montaje de TPs para la galería `<la-piscine>`

Realizada por Raúl Federico Lacabanne (aka: knnv-ar)

## Bloque 1. Crear carpetas de trabajo

1. Creá las carpetas de trabajo en el Escritorio: `descargar` y `subir`.
2. Dentro de la carpeta `descargar` creá dos carpetas con el nombre de tus TPs: el nombre de cada carpeta debe ser como el título de la obra, sin espacios ni tildes, utilizando el guión medio `-` como separador de palabras: por ejemplo, `bola-de-fetiche` o `entrando-al-flujo`. 

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
6. Seleccioná `Archivo > Exportar > Exportación rápida como PNG` y guardá el archivo con el nombre `thumbnail` en la carpeta correspondiente al nombre de tu TPNº 1 que se encuentra en la carpeta `descargar`.
7. Repetí pasos 2 al 6 pero seleccionando el TPNº 2.

## Bloque 4. Descomprimir y adecuar los proyectos para su montaje en la galería

1. Descomprimí el archivo `zip` del TPN º1.
2. Copiá los archivos `sketch.js` y los archivos de medios usados si los tuviera (imágenes, sonidos, mùsica, video, objetos 3D, fuentes, etc) a la carpeta correspondiente al nombre de tu TPNº 1 que se encuentra en la carpeta `descargar`.
3. Creá en la misma carpeta un archivo `statement.md` mediante vscode o la consola: `touch statement.md`. **Importante**: El archivo markdown creado en el paso 3 será el archivo central que vinculará tu declaración de obra (es decir el componente **Escrito** de la entrega del TP) con el **sketch** (`sketch.js`) y el **thumbnail** (`thumbnail.png`).
4. Tomá como referencia el marchivo `statement.md` del [modelo de obra](https://github.com/knnv-ar/la-piscine/tree/main/_projects/modelo-de-obra) adecuá los contenidos de las siguientes líneas de código al lenguaje markdown:
    1.  **línea 03**: entre las comillas dobles escribí el nombre de tu obra.
    2.  **línea 03**: entre los guiones bajos escribí tu nombre y apellido.
    3.  **línea 17 y posteriores**: tomá el texto del **Escrito** y transpasalo respetando las normas del lengueje markdown.
5. Para tener una idea más acabada, a continuación presentamos una versión abreviada de una posible aplicación:

```md
---
layout: post
title: "Bola de fetiche"
date: 2022-10-09
thumbnail: thumbnail.png
dependencies:
  - p5
  - p5.sound
---

<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>

_Martín Antuña_, 2022.

**Bola de feriche**

Breve descripción.

**Desarrollo técnico, estético y conceptual**

Texto párrafo 1.
Texto párrafo 2.
Texto párrafo 3.

**Bibliografía**

APELLIDO, Nombre. (año). _"Título del libro"_. Ciudad: Editorial.
```

6. Una vez finalizado el paso 4, guardá los cambios del archivo `statement.md`.
7. Abrí el archivo `sketch.js`.
8. Limpiá el código de posibles `console.log()` que te hayan quedado.
9. Buscá el bloque setup() y reemplazá la línea createCanvas() con la siguiente `let canvas = createCanvas(512, 512);` adecuando los valores de los parámetros `width` y `height` de la función a los de tu TP. Recordá que si estás usando WEBGL, lo tenés que incorporar como tercer parámetro: `let canvas = createCanvas(512, 512, WEBGL);`.
10. Por último agregá una nueva línea a continuación de la anterior con el siguiente código: `canvas.parent('div-sketch');`
11. Si tu TP tuviera un `width` y `height` de 512, el código de dichas dos líneas debería verse así:

```js
let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
```

12. Por otro lado, si tu TP tuviera uno o más archivos `.js` además del `sketch.js`, tendrás que abrirlos y copiar todo el contenido de cada archivo `.js` adicional a continuación de la última línea de código de `sketch.js` para así tener todo el código en un mismo archivo. 
13. Una vez finalizado, guardá los cambios del archivo `sketch.js`.
14. A todo esto tendrías que tener en la carpeta del TP los siguientes arhivos:

- sketch.js
- statement.md
- thumbnail.png

15. Copiá la carpeta del TP a la carpeta `subir` del Escritorio.
16. Por último, repetí pasos 1 al 13 pero seleccionando el TPNº 2.

## Bloque 5. Forkeá, brancheá y hacé una petición de aceptación del código enviado

1. Ingresá con tu usuario al sitio https://github.com/.
2. Ingresá al repositorio https://github.com/knnv-ar/la-piscine.
3. Cliqueá en el botón **Fork** y luego en el botón **Create fork**.
4. Una vez creada la bifurcación (fork) deberemos crear una rama (branch) de trabajo propia. Para esto hagamos clic en el botón `1 branch`.
5. Cliqueá en el botón **New branch**.
6. En el área de texto _Branch name_ escribí tu nombre, apellido y tpn1 separados por un guión medio: por ejemplo: `martin-antuña-tpn1`.
7. En el área de texto _Branch source_ seleccioná la opción **knnv-ar/la-piscine** y luego cliqueá en el botón **Create branch**.
8. Volvé a la carpeta correspondiente a tu fork `<la-piscine>`.
9. Cliqueá el botón de la rama `main` y luego cliqueá en la rama `nombre-apellido-tpn1`.
10. Ingresá a la carpeta `_projects`.
11. Cliqueá en el botón `Add file` y luego `Upload files`.
14. Arrastrá y soltá la carpeta de tu TPNº 1 que se encuentra en `subir` en el área **Drag files here to add them to your repository**.
15. En el área del mensaje del commit escribí tu nombre y apellido seguido de TPN1: por ejemplo: `Martín Antuña TPN1`.
16. Seleccioná la opción **Commit directly to the nombre-apellido-tp1 branch.**.
17. Cliqueá el botón `Commit changes`.
18. El paso anterior habilitará la posibilidad de una petición de aceptación (pull request). Cliqueá el botón `Contribute` y luego `Open pull request`.
19. Cliqueá el botón `Create pull request`.
20. Por último, volvé a la carpeta correspondiente a tu fork `<la-piscine>` y repetí los pasos 5 a 19 pero esta vez creando una rama que sea `nombre-apellido-tpn2` y subí la carpeta correspondiente al TPNº 2.

Sólo resta esperar a que el administrador de la galería <la-piscine> acepte la petición realizada.

### ¡Felicitaciones llegaste al final del proceso de montaje de tus TPNº 1 y 2 en la galería `<la-piscine>`!
