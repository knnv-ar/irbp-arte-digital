# Git / GitHub

## Las cinco áreas de registros

https://ndpsoftware.com/git-cheatsheet.html#loc=stash;

```
reserva (stash)
v

CARPETA DE TRABAJO (workspace, working tree, working directory)
-Área de archivos de trabajo-
v

ÍNDICE (index o staging area)
-Área de archivos preparados-
v

REPOSITORIO LOCAL (local repository)
-Área de archivos confirmados-

v
repositorio en la nube (upstream repository)
```

## Estado de control de versión de archivos

- U - archivo sin rastrear (Untracked file)
- A - archivo agregado al índice (Added file)
- M - archivo del índice modificado (Modified file)

## Agregando archivos al índice

```git
git add <file>
```

Agregar un archivo determinado al repo local: `git add app.js`

Agregar todos los archivos de la carpeta al repo local: `git add .`

Ver en qué estado se encuentran los elementos del repo local: `git status`

## Confirmando archivos

```git
git commit [-m <msg>]
```

Una confirmación (_commit_) es un paquete de adiciones oficial con marca indeleble de tiempo y firmado por un autor.

La sintaxis del comando es la siguiente: `git commit -m "mensaje entre comillas donde establecemos una descripción resumida hecho hasta ese momento"`

`git commit -m "primer commit del proyecto"`

Para revisar los commits realizados hasta el momento: `git log`

## Subiendo repositorio local al repositorio en la nube

La sintaxis del comando es la siguiente: `git push origin [repositorio en la nube] master [rama]`

`git push origin master`

## La tríada sagrada

add > commit > push

## Clonando un reposito en la nube a mi computadora local

El comando **clone** permite crear una copia exacta en la computadora (repositorio local) de todos los archivos existentes en un repositorio en la nube.

La sintaxis del comando es la siguiente: `git clone [repositorioRemoto]`

`git clone https://github.com/knnv-ar/prueba-node.git`

## Para actualizar y mantener sincronizados los archivos de un proyecto en distintas computadoras utilizamos git pull:

`git pull origin main`

## Ramas (branches)

Una rama dentro de un repositorio es una copia alternativa del mismo hasta el momento. Es una línea paralela. Por decirlo de otra manera, una versión dos que más adelante la podría fusionar con la rama principal (master).

> Observaciones: Para ver un listado de commits realizados hasta el momento: `git log`

## Para borrar un repositorio local:

Ir al directorio del proyecto, y correr en git bash el siguiente comando: `rm -rf .git`

Corroborar que el directorio oculto git haya desaparecido con: `ls -al`

Mensajes de git en VS Code:

U: untracked (sin seguimiento)

A: added (agregado)

M: modified (archivo modificado)

===================================================

# Git TN29

Pasos para crear el repositorio en Github:

1. Ir a github.com y darle click en **New repository**.
2. Crear la carpeta en la máquina local.
3. Abrir la carpeta con Vscode y crear el archivo `.gitignore`.
4. Abrir la carpeta con git bash.
5. En git bash hacer `git init` para iniciar el repositorio en la máquina.
6. En git bash hacer `git add .` para agregar esos archivos al próximo commit.
7. En git bash hacer `git commit -m "first commit"` para crear el commit con los archivos creados o modificados que se agregaron con `git add .`.
8. Luego en git bash hacer `git branch -M main` para crear el branch principal.
9. En la consola hacer `git remote add <reemplazar por la url del repositorio remoto>`.
10. luego en git bash hacer `git push -u origin main` para subir el branch main al repositorio remoto

"" Para crear el archivo .gtignore

`echo "node_modules" > .gitignore`

git push

```
…or create a new repository on the command line
echo "# fsdfsdf" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/knnv-ar/fsdfsdf.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/knnv-ar/fsdfsdf.git
git branch -M main
git push -u origin main
```

https://github.com/andreybejaranodh/clase7

git help

## Herramientas complementarias

https://ndpsoftware.com/git-cheatsheet.html#loc=index;

---

git repositoty

local computer / remote computer

remote computer??? Do you have access to a phisical one? Is it a virtual one? Is it a cloud service like Github?

---

Instalar VS Code
Instalar git/git bash
Ver comandos básicos de Bash

SSH Secure SHell
