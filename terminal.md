# Guía de terminal

## Terminal, consola, shell, línea de comandos y prompt

### Terminal

![Operadoras de teletipos durante la WWII](./images/WACsOperateTeletype.jpg)

Una terminal es un dispositivo que nos permite comunicarnos con una computadora. Básicamente es una interfaz de usuario que nos permite enviar y recibir datos a una computadora principal remota (mainframe computer).

![Teletype ASR 33](./images/Teletype-33-full.jpg)

![Teletype ASR 33](./images/Teletype%20Model%20ASR-33.jpg)

Su nombre deviene de los teletipos (TeleTYpe -tty, tt- o telex), terminales electromecánicas, usadas en el campo de la telegrafía, que recibían e imprimían textos y cintas perforadas, y permitían enviar datos a través de la lectura de cintas perforadas. Un teletipo muy usado fue el Teletype ASR 33 (1963).

![Tektronix 4010](./images/Tektronix_4010_DSC_0056.jpg)

Cuando se empezaron a imponer las terminales con pantallas de tubos de rayos catódicos como la Tektronix 4010 (1972), las electromecánicas lentamente comenzaron a caer en desuso.

[Video de Teletipo ASR 33 funcionando](https://youtu.be/S81GyMKH7zw)

![Thompson & Ritchie @ 1972](./images/Dennis%20Ritchie%20y%20Ken%20Thompson%20y%20el%20SO%20Unix%20en%201972.jpg)

En la imagen superior podemos ver una foto donde se encuentran Dennis Ritchie (parado), creador del lenguaje C, y Ken Thompson (sentado), creador de Unix y de los lenguajes B y Go, escribiendo en una terminal Teletype ASR 33 y de fondo una minicomputadora Digital Equipment Corporation PDP-11 de 16-bit (circa 1972).

### Consola

![Consola Lear Siegler ADM3A](./images/Lear%20Siegler%20ADM%203A%20Dumb%20console.jpg)

Muchas veces se usa el término consola como sinónimo de terminal, pero precisemos un poco más su sentido. Una consola hacía referencia al conjunto compuesto por un dispositivo de entrada de tipo teclado (que inicialmente sólo disponía de teclas con números y sin ratón) y un dispositivo de salida como la pantalla que complementaba al anterior y como conjunto nos permitía un dominio de operación y control de la computadora.

A día de hoy se suele usar el término consola como el modo no gráfico del emulador de terminal, es decir sin GUI, ni la opción de usar un ratón. También se lo denomina full-screen keyboard-text-only mode console.

### Shell

![Unix shell](./images/unix-shell.jpeg)

En 1969 aparecería UNIX, el primer sistema operativo portable, multitarea y multiusuario. Para comunicarse con el sistema operativo se usaría un programa llamado Thompson shell (Ken Thopmson, 1971, Unix v1 hasta v6), el primer shell (o intérprete de comandos de línea) de Unix. A partir de la versión 7 de Unix se incorporaría el Bourne shell (Stephen Bourne, 1979, Unix v7 hasta SVR4(1989)).

La metáfora de la caparazón (shell) hace alusión a aquello que contiene y protege el núcleo (kernel) del sistema operativo.

En 1989 aparecería en escena BASH (Bourne-Again SHell), escrito por Brian Fox esta vez desarrollado para el GNU project, que incorpora elementos de Bourne sh, csh y ksh.

En 1990 Paul Falstad desarrollaría Z shell, que incorpora elementos de Bourne sh, ksh y tcsh.

### Línea de comandos y prompt

![bash prompt](./images/linux-bash-prompt.jpg)

Las terminales con pantalla contaban con un cursor titilante para indicar al usuario el espacio de escritura pero por sí mismo era pobre como interfaz de usuario. Por esta razón, los shells cuentan con una línea de comandos precedida por un prompt o indicador que indica el lugar a interactuar. Por ejemplo en unix contamos con un prompt con varios elementos:

`usuario@máquina:~$`

donde 'usuario' es el nombre del usuario, seguido de @máquina que corresponde al nombre de la computadora, la virgulilla indica el directorio principal y el signo $ denota que se trata de un usuario sin privilegios en el sistema.

`root@máquina:~#`

donde 'root' es el nombre del superusuario, seguido de @máquina que corresponde al nombre de la computadora, la virgulilla indica el directorio principal y el signo # denota que se trata de un usuario con privilegios de administrador del sistema.

En el cmd de windows el promp simplemente es: `c:/`

![Unix shell](./images/Hard_reset_BBC_Micro_32K_Acorn_DFS.gif)

Mientras que el prompt del BBC Micro es: `>`

![Gnome prompt](./images/640px-Linux_command-line._Bash._GNOME_Terminal._screenshot.png)

![Arrow prompt](./images/CmderPrompt.png)

![iTerm zsh](./images/iterminal-zsh.jpg)

![oh Terminal](./images/terminal-oh-final-2.png)

Arriba podemos ver otros ejemplos de personalización gráfica de shells.

## Git Bash

### Lista de comandos nativos en Git Bash

Bash, además de ser un intérprete de comandos de línea es un muy robusto lenguaje de programación que se utiliza comunmente en los denominados **scripts de bash**.

Bash nos permite trabajar sobre la información en nuestra computadora. Por el momento vamos a considerar que disponemos sólamente de dos tipos de archivos: los **archivos regulares** y los **directorios** (o carpetas).

A continuación nosotros sólo nos concentraremos en algunos de los comandos nativos de Bash más usados para trabajar sobre archivos y directorios:

```bash
# Devuelve el nombre del shell instalado en el sistema:
echo $SHELL

# Devuelve la versión del shell de bash instalado:
echo $BASH_VERSION

# Devuelve el directorio donde estoy actualmente (print working directory):
pwd

# Listar la información sobre archivos y directorios:
ls

# Devuelve la ayuda del comando ls:
ls --help

# Con el agregador del argumento -a (all), lista incluso los elementos ignorados que empiezan con .:
ls -a

# Con el agregador del argumento -a (all) y -l (long), lista incluso los elementos ignorados que empiezan con . y lo muestra con formato largo:
ls -al 

# Cambia a directorio de usuario: Home
cd

# Cambia a directorio raiz:
cd /

# Cambia a directorio de usuario: Home:
cd ~

# Con flecha arriba y flecha abajo navegamos por el historial de comandos introducidos:
^ v

# Limpia la pantalla de la terminal:
clear o ctrl/cmd+l

# Cambia a directorio raiz de la unidad c:
cd /C

# Cambia a directorio Users:
cd Users

# Los dos puntos permiten volver al directorio anterior:
cd ..

# Cambia directorio a la carpeta U...:
cd U[TAB]

# Cambia directorio a la carpeta Users porque es el único con esas dos letras:
cd Us[TAB]

# Crea directorio <prueba>:
mkdir prueba

# Elimina directorio <prueba>:
rmdir prueba

# Crea directorio <proyecto1>:
mkdir proyecto1

# Cambia directorio a <proyecto1>:
cd proyecto1

# Crea un archivo vacío con el nombre <texto1.md>:
touch texto1.md

# Copia el archivo <texto1.md> a otro archivo nuevo de nombre <texto1-copia.md>:
cp texto1.md texto1-copia.md

# Renombra (mueve) el archivo <texto1-copia.md> al archivo <README.md>:
mv texto1-copia.md README.md

# Borra el archivo README.md: ¡¡¡¡MUCHO CUIDADO CON ESTE COMANDO PORQUE NO SE PUEDE RECUPERA LO ELIMINADO!!!!:
rm README.md

# Creo un archivo vacío con el nombre <README.md>:
touch README.md

# Cambio directorio a la carpeta actual:
cd .

# Cambio directorio a la carpeta anterior a la actual:
cd ..

# Ahora abro el archivo <README.md> con el Explorador de Windows y escribo el siguiente texto: 'Este es un mensaje'. Guardo el archivo.

# El comando 'cat' (conCATenate) imprime en pantalla el contenido del archivo <README.md>:
cat README.md

# Muestra el historial de comandos introducidos:
history

# Ejecuta el número de comando 32 del historial:
!32

# El comando echo repite el argumento 'Este es un mensaje creado desde la terminal' y redirecciona dicha salida con el operador '>' al archivo archivo <README.md> que si no lo encuentra entonces lo crea:
echo 'Este es un mensaje creado desde la terminal' > README.md

# Imprime en pantalla el contenido del archivo <README.md>:
cat README.md

# El comando echo repite el argumento 'Este es un segundo mensaje' y redirecciona dicha salida de forma agregada con el operador '>>' al archivo archivo <README.md> que si no lo encuentra entonces lo crea:
echo 'Este es un segundo mensaje' >> README.md

# Imprime en pantalla el contenido del archivo <README.md>:
cat README.md

# Tanto start o en su defecto explorer abren el archivo indicado con la aplicación por defecto:
start libro.pdf

explorer libro.pdf
```

### Resumen de funciones abordadas por los comandos vistos

* navegar por la información: `cd`
* mostrar información: `pwd`, `ls`, `cat`, `clear`, `echo`
* crear información: `mkdir`, `touch`, `cp`, `mv`, `>`
* agregar información: `>>`
* eliminar información: `rmdir`, `rm`

### Algunos atajos

CTRL + A: envía cursor al principio de la línea

CTRL + E: envía cursor al final de la línea

ALT + B: envía el cursor al principio de la palabra anterior

ALT + F: envía el cursor al principio de la palabra posterior

## Referencias

[GNU Bash Manuals](https://www.gnu.org/software/bash/manual/)

[Bash Reference Manual v5.2 (.pdf)](https://www.gnu.org/software/bash/manual/bash.pdf)

[Learn Shell](https://www.learnshell.org/)

[Linux journey](https://linuxjourney.com/)

[Linux journey - Gthub repository](https://github.com/cindyq/linuxjourney)
