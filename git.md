# Git / GitHub

## Git

Git es un sistema de versiones distribuido más usado en el mundo.

### Configuración de nombre de usuario y correo de usuario en local

1. Establecer la identidad del usuario de forma global: `git config --global user.name "knnv-ar"`
2. Para verificar la identidad del usuario asignado al proyecto actual: `git config user.name`
3. Establecer el correo del usuario de forma global: `git config --global user.email "knvv.ar@gmail.com"`
4. Para verificar el correo del usuario asignado al proyecto actual: `git config user.email`

### Crear un proyecto nuevo en local y vincular su repositorio en Github

1. Ejecutar Git Bash.
2. Ir hasta la carpeta del proyecto.
3. Inicializar el control de versionado del proyecto: `git init`

### Creo un repositorio en GitHub y lo clono en local

1. Crear un nuevo repositorio en Github.
2. Copiar la **URL** con formato git https.
3. Vincular el proyecto actual (en la carpeta que esté parado) con su repositorio en GitHub: `git remote add origin https://github.com/knnv-ar/prueba-node.git`
4. Para verificar que la conexión se realizó de forma exitosa: `git remote -v`

## Sitios de interes

https://learngitbranching.js.org/?locale=es_ES: Git interactivo con guía: es un sitio que propone desarrollar los conceptos de Git en forma guiada y gráfica.

https://gitexplorer.com/: Sitio web que traduce acciones a comandos de Git: en este sitio indicamos qué cosas queremos hacer con Git y nos dice qué comando tenemos que ejecutar.


---
Agrega un archivo al stage area: `git add [nombre-de-archivo]`

Agrega todos los archivos del directorio actual al stage area: `git add .`

Agrega un directorio determinado al stage area: `git add [nombre-de-directorio]`

Renueve un archivo del stage area: `git rm [nombre-de-archivo]`

Commit de los archivos del stage area: `git commit -m "Mensaje"`





Ramas más comunes en un proyecto:

Master

Development (experimentos)

Hotfix (bugfixing)

---

### 1ra práctica

1. Crear un archivo y hacer un add y un commit.
2. Ver status.
3. Luego modificar datos del archivo y hacer add y commit.
4. Ver log.

- git add [nombre-de-archivo]
- git commit -m "Mensaje"
- git status
- git log [nombre-de-archivo]

Señal importante: (HEAD -> master)

---

### 2da práctica

`git show` para ver los cambios de un archivo

Agrego un tercer párrafo y guardo

- git show [nombre-de-archivo]
- git commit -m "Mensaje"
- git status
- git log [nombre-de-archivo]

Señal importante: (HEAD -> master)

---

vi commit

esc, shift, z, z 