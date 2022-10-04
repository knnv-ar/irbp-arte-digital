# Git / GitHub

## Indice

1. [Qué es git](#1-qué-es-git)
2. [Instalación de git](#2-instalación-de-git)
3. [Configuración de nombre de usuario y correo de usuario en local](#3-configuración-de-nombre-de-usuario-y-correo-de-usuario-en-local)
4. [Crear un proyecto nuevo en local y vincular su repositorio en Github](#4-crear-un-proyecto-nuevo-en-local-y-vincular-su-repositorio-en-github)
5. [Crear un repositorio en GitHub y clonarlo en local](#5-crear-un-repositorio-en-GitHub-y-clonarlo-en-local)
6. [Sitios de interes](#6-sitios-de-interes)

---

## 1. Qué es git

Git es un **software de control de versiones** diseñado por Linus Torvalds y lanzado el 7 de abril de 2005. Es un software gratuito y de código abierto para el **control de versiones distribuidas**: es decir, **seguimiento de cambios en cualquier conjunto de archivos**, generalmente utilizado para **coordinar el trabajo entre programadores que desarrollan código fuente de forma colaborativa** durante el desarrollo del software. Sus objetivos incluyen la velocidad, la integridad de los datos y la compatibilidad con flujos de trabajo no lineales distribuidos (miles de sucursales paralelas que se ejecutan en diferentes sistemas).

Los **sistemas de control de versiones distribuidos** son una forma de control de versiones en la que el código base completo, incluido su historial completo, es copiado en la computadora de cada desarrollador. En comparación con el control de versiones centralizado, esto permite la administración automática de bifurcación (branching) y fusión (merging), acelera la mayoría de las operaciones (excepto empujar (push) y tirar (pull)), mejora la capacidad de trabajar sin conexión (offline) y no depende de una sola ubicación para las copias de seguridad.

---

## 2. Instalación de git

1. Descargar git desde: https://git-scm.com/

2. La versión con la que trabajaremos es la _v2.38.0_ (fecha de lanzamiento: 2 de octubre de 2022)

3. Instalar git en Windows 10. Recomendaciones de intalación. Tildar las siguiente opciones:

**Select components**

- Windows Explorer integration && Git Bash Here && Git GUI Here
- Git LFS
- Associate .git\* configuration files with the default text editor
- Associate .sh files to be run with Bash
- (NEW!) Add a Git Bash Profile to Wiondows Terminal

**Choosing the default editor used by Git**

- Use Visual Studio Code as Git´s default editor

**Adjunsting the name of the initial branch in new repositories**

- Let Git decide (master)

> **Nota:** La otra opción habilita la elección de otros nombres como por ejemplo: `main`, `trunk`, `development`, o cualquier otro que desees. **Recomendamos seguir esta otra opción.**

**Adjusting your PATH environment**

- Git from the command line and also from 3rd-party software

**Choosing the SSH executable**

- Use bundled OpenSSH

**Choosing HTTPS transport backend**

- Use the OpenSSL library

**Configuring the line ending conversions**

- Checkout Windows-style, commit Unix-style line endings

**Configuring the terminal emulator to use with Git Bash**

- USe WinTTY...

**Choose the default behavior of 'git pull'**

- Default

**Choose a credential helper**

- Git Credential Manager

**Configuring extra options**

- Enable file system caching

---

## 3. Configuración de nombre de usuario y correo de usuario en local

1. Establecer la identidad del usuario de forma global: `git config --global user.name "knnv-ar"`
2. Para verificar la identidad del usuario asignado al proyecto actual: `git config user.name`
3. Establecer el correo del usuario de forma global: `git config --global user.email "knvv.ar@gmail.com"`
4. Para verificar el correo del usuario asignado al proyecto actual: `git config user.email`

---

## 4. Crear un proyecto nuevo en local y vincular su repositorio en Github

1. Ejecutar Git Bash.
2. Ir hasta la carpeta del proyecto.
3. Inicializar el control de versionado del proyecto: `git init`

---

## 5. Crear un repositorio en GitHub y clonarlo en local

1. Crear un nuevo repositorio en Github.
2. Copiar la **URL** con formato `git https`.
3. Vincular el proyecto actual (en la carpeta que esté parado) con su repositorio en GitHub: `git remote add origin https://github.com/knnv-ar/prueba-node.git`
4. Para verificar que la conexión se realizó de forma exitosa: `git remote -v`

> **Nota:** La palabra `origin` puede ser cambiada por cualquier otro término pero generalmente se opta por este para denominar al repositorio principal remoto.

---

## 6. Sitios de interes

https://learngitbranching.js.org/?locale=es_ES: Git interactivo con guía: es un sitio que propone desarrollar los conceptos de Git en forma guiada y gráfica.

https://gitexplorer.com/: Sitio web que traduce acciones a comandos de Git: en este sitio indicamos qué cosas queremos hacer con Git y nos dice qué comando tenemos que ejecutar.

---

Agrega un archivo al stage area: `git add [nombre-de-archivo]`

Agrega todos los archivos del directorio actual al stage area: `git add .`

Agrega un directorio determinado (y todo su contenido) al stage area: `git add [nombre-de-directorio]`

Remueve un archivo del stage area: `git rm [nombre-de-archivo]`

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

`esc`, `i`
`esc`, `shift`, `z`, `z`

diff: previamente se hace un `git log` para tener a mano los números de commit

- git diff [numero-de-commit1-mas-vieja] [numero-de-commit2-mas-nueva]

Para volver un archivo a un commit más viejo:

- git checkout [numero-de-commit] [nombre-de-archivo]

Para volver un archivo al último commit del `master`:

- git checkout master [nombre-de-archivo]

---

### ¿Rama master o main?

Luego del asesinato de George Floyd (25 de mayo de 2020) tanto el Git Project como la Software Freedom Conservancy sugirieron el cambio de nombre de la rama principal de los proyectos basados en Git [(ver fuente)](https://www.theserverside.com/feature/Why-GitHub-renamed-its-master-branch-to-main):

> "Both Conservancy and the Git project are aware that the initial branch name, 'master,' is offensive to some people and we empathize with those hurt by the use of that term," said the Software Freedom Conservancy. [(ver fuente)](https://sfconservancy.org/news/2020/jun/23/gitbranchname/)

El 1ro de octubre de 2020 Github decidió promover esta sugerencia al recomendar el uso del término `main` para la rama principal de cualquier repositorio.

Esta toma de conciencia está vinculada a otras que promueven la construcción de los lenguajes inclusivos especialmente dentro del sector IT. [(ver fuente)](https://www.theserverside.com/feature/How-enterprises-are-building-inclusive-language-in-code)

Para renombrar master a main:
`git branch -M main`
