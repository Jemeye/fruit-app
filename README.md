# Fruit App

## Descripción
El proyecto es una aplicación web que ofrece la posibilidad de explorar una variedad de frutas y sus detalles nutricionales. Además, consta de un sistema de autenticación que permite a los usuarios iniciar sesión y acceder a una lista completa de frutas disponibles.

## Páginas
- Página de Inicio (Home): Aquí se encuentra una lista completa de frutas. Esta lista solo se mostrará si se ha iniciado sesión previamente. En caso contrario, será redirigido automáticamente a la página de inicio de sesión.
- Página de Inicio de Sesión (Login): En esta sección, se tendrá el acceso al formulario de inicio de sesión, en dónde se ingresaran las credenciales para acceder a la lista de frutas y disfrutar de todas las funcionalidades del sitio.

## Funcionalidades
- Inciar sesión y cerrar sesión: la aplicación le permite al usuario iniciar sesión mediante el formulario de login, y cerrar sesión dándole click al botón de salir ubicado en el header.
- Ver listado de frutas: la aplicación web le permite al usaurio visualizar una lista de frutas.
- Ver información detallada de una fruta: la aplicación web le permite al usuario visualizar la informacion detalalda de una fruta, información que mostrada en un modal.
- Buscar frutas: la aplicación web incluye un buscador que le permite al usuario buscar frutas por nombre y familia.

## API
- Se implementó una simulación de una API REST utilizando Mock y Postman para proporcionar datos sobre frutas. La dirección URL utilizada para realizar la solicitud HTTP fue: https://2c3d4167-aaff-4fdf-ac62-6956081d0f21.mock.pstmn.io/fruits.
- Esta API simulada devuelve datos estructurados sobre diferentes frutas, incluyendo detalles como el nombre de la fruta, su familia botánica, su orden taxonómico, su género y sus valores nutricionales.

## Instalación
- Para ejecutar el proyecto usar el comando npm run dev, después del npm install.

## Uso
- Para comenzar, se debe iniciar sesión con la dirección de correo electrónico. Aunque se verifica que el correo tenga el formato adecuado, no se requiere una autenticación de usuario específica, por lo que se puede usar cualquier dirección de correo electrónico y contraseña.
- La información de inicio de sesión se almacena localmente en el navegador, por medio del LocalStorage, y se elimina automáticamente al cerrar la sesión.
- Una vez iniciada la sesión, podrás explorar la lista completa de frutas disponibles.
- Es posible dar clic en cualquier fruta de la lista para acceder a información detallada sobre ella. Esto mostrará datos relevantes, como el nombre de la fruta, su familia, orden y género, así como información nutricional.
- Es posible usar la función de búsqueda para encontrar una fruta específica. Ingresando el nombre de la fruta en el campo de búsqueda la aplicación filtrará automáticamente la lista para mostrar coincidencias.
