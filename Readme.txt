Guia para levantar el sitio web:

Se necesita instalar:
 	- Node js: https://nodejs.org/en/download/

Al clonar el repositorio dirigirse a la rama main, abrir el repositorio (se sugiere utilizar vscode).
Se debe dirigir a la carpeta Backend y crear un archivo llamado ".env" en este se debe escribir la siguiente linea de codigo:
BASE_DE_DATOS=mongodb+srv://RoberCaneteh:Rober1999_@cluster0.gfnnv8w.mongodb.net/test
Esto se hace ya que por politicas de github no es recomendable subir este archivo por su sensibilidad.
Luego de tener el archivo .env, con ctr + ñ se abre una terminal, en esta se escribe "cd Backend" enter  y dentro escribir "npm install",
con esto se instalarán todas las librerias necesarias declaradas en el archivo package.json.
Al finalizar la instalación se escribe "npm run serve" si todo esta correcto en la consola dirá Conexión correcta, por lo que el servidor
para backend está listo.

Este proceso se repite con el servidor para frontend.

Ctr + ñ para abrir en una nueva terminal, se escribe "cd Frontend" enter y luego escribir "npm install".
Cuando termine escribir "npm run serve" y el servidor que mostrará las vistas estará corriendo en el localhost por el puerto que muestra en consola.

Felicidades ya esta listo el setup para el sistema web.


Utilidades:
	-https://trello.com/invite/aperradogs/77c52270feb87b6f05cf1178d46084a9
	-https://github.com/BenjaminGonzalezF/Aperradogs