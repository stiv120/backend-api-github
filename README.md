## API Repositorios de GitHub

Aplicación hecha en node.js que consume la api de GitHub para mostrar los 10 repositorios más populares del usuario "google".

## Instalación

1. Primero clonamos el repositorio:
```sh
git clone https://github.com/stiv120/backend-api-github
```
2. accedemos al directorio en la ruta en que lo descarguemos:
```sh
cd backend-api-github
```
3. luego instalamos las dependencias mediante el siguiente comando:
```sh
npm install
```

### Iniciar aplicación

Para correr la aplicación, debemos ejecutar el siguiente comando:
```sh
node src/server.js
```
Ejecutará la aplicación en modo de desarrollo. Accede mediante este enlace http://localhost:3000/repositories para visualizar la aplicación.

### Pruebas

Ejecutamos el siguiente comando:
```sh
npm test
```
Ejecuta el observador de pruebas en modo interactivo.