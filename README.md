# Proyecto ALPACAGAMES

## Introducción/Resumen

ALPACAGAMES es una aplicación web que funciona como una tienda en línea de videojuegos. Permite a los usuarios navegar por un catálogo de juegos, ver detalles de cada juego y simular una experiencia de compra. Los usuarios registrados pueden gestionar sus perfiles. La aplicación está construida con Node.js y Express.js, y los datos se almacenan en archivos JSON.

## Características

*   **Autenticación de Usuarios:**
    *   Registro de usuarios con subida de avatar.
    *   Inicio y cierre de sesión de usuarios.
    *   Gestión de sesiones (incluyendo una cookie para "Recordarme").
    *   Visualización del perfil de usuario.
*   **Gestión de Productos:**
    *   Listado de todos los juegos disponibles.
    *   Vista detallada de cada juego.
    *   Creación de nuevas entradas de juegos, incluyendo subida de imágenes.
    *   Edición de detalles de juegos existentes.
    *   Eliminación de juegos del catálogo.
*   **Simulación de Compra:**
    *   Página de tienda dedicada para cada producto.
*   **Manejo de Imágenes:**
    *   Subida de imágenes de portada para productos.
    *   Subida de avatares de usuario durante el registro.
*   **Almacenamiento de Datos:**
    *   La información de productos y los datos de usuarios se almacenan en archivos JSON locales.

## Tecnologías Utilizadas

*   **Núcleo (Core):**
    *   Node.js (Entorno de ejecución)
    *   Express.js (Framework para aplicaciones web)
*   **Motor de Plantillas (Templating Engine):**
    *   EJS (Plantillas de JavaScript incrustado)
*   **Middleware y Bibliotecas (Middleware & Libraries):**
    *   `cookie-parser` (Análisis de cookies)
    *   `express-session` (Gestión de sesiones)
    *   `method-override` (Sobrescritura de métodos HTTP para formularios)
    *   `multer` (Manejo de subida de archivos para imágenes de productos y avatares de usuarios)
    *   `bcryptjs` (Hashing de contraseñas para autenticación de usuarios)
    *   `express-validator` (Validación de entradas para formularios como inicio de sesión y registro)
*   **Almacenamiento de Datos (Data Storage):**
    *   JSON (Archivos JSON planos para almacenar datos de productos y usuarios)

## Estructura del Proyecto

*   `ALPACAGAMES/`: Directorio raíz del proyecto Alpaca Games.
    *   `public/`: Contiene todos los activos estáticos accesibles directamente por el navegador del cliente.
        *   `css/`: Hojas de estilo para la aplicación.
        *   `img/`: Archivos de imágenes, incluyendo imágenes de productos y avatares de usuarios (dentro de `img/avatars/`).
    *   `src/`: Contiene el código fuente principal de la aplicación.
        *   `app.js`: Punto de entrada principal. Inicializa Express, configura middleware, motor de vistas y routers principales.
        *   `controllers/`: Maneja la lógica de negocio para las solicitudes y prepara respuestas (ej., `mainController.js`, `productsController.js`, `usersController.js`).
        *   `data/`: Almacena datos en archivos JSON (`products.json`, `users.json`).
        *   `middlewares/`: Middleware personalizado para tareas como subida de imágenes, gestión de sesiones y validación.
        *   `routes/`: Define las rutas URL y las mapea a funciones de controlador (ej., `main.js`, `products.js`, `users.js`).
        *   `views/`: Archivos de plantilla EJS para generar HTML. Incluye los subdirectorios `partials/`, `products/` y `users/`.
*   `README.md`: El archivo que se está generando (documentación del proyecto).
*   `package.json`: Define metadatos del proyecto, dependencias y scripts.
*   `package-lock.json`: Registra las versiones exactas de las dependencias.

## Configuración e Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone <repository_url>
    cd ALPACAGAMES
    ```
    *(Reemplazar `<repository_url>` con la URL real de tu repositorio)*

2.  **Instalar dependencias:**
    Navega al directorio `ALPACAGAMES` si aún no lo has hecho. Luego, instala los paquetes de Node.js requeridos:
    ```bash
    npm install
    ```

3.  **Ejecutar la aplicación:**
    Una vez instaladas las dependencias, puedes iniciar el servidor usando:
    ```bash
    npm start
    ```
    Esto típicamente iniciará la aplicación en `http://localhost:3000`.

4.  **Modo de Desarrollo (Opcional):**
    Para desarrollo, puedes usar `nodemon` para reinicios automáticos del servidor cuando se detectan cambios en los archivos:
    ```bash
    npm run dev
    ```

La aplicación utiliza archivos JSON (`products.json` y `users.json` en `ALPACAGAMES/src/data/`) para el almacenamiento de datos en su configuración actual y estos archivos están incluidos en el repositorio.

## Uso/Endpoints

Las rutas y middleware de la aplicación están definidos para manejar diversas funcionalidades, desde servir páginas hasta procesar envíos de formularios.

### Middleware Global (aplicado en `app.js`)

Los siguientes middleware se aplican globalmente a todas o la mayoría de las solicitudes:

*   `express.json()`: Analiza las solicitudes entrantes con payloads JSON.
*   `express.urlencoded({ extended: false })`: Analiza las solicitudes entrantes con payloads codificados en URL.
*   `method-override('_method')`: Permite el uso de verbos HTTP como PUT o DELETE en lugares donde el cliente no lo soporta (ej., formularios HTML).
*   `cookie-parser`: Analiza el encabezado `Cookie` y puebla `req.cookies`.
*   `express-session`: Gestiona las sesiones de usuario. La configuración incluye un secreto, y ajustes para `resave` y `saveUninitialized`.
*   `userLogged` (middleware personalizado): Verifica si un usuario ha iniciado sesión (basado en datos de sesión o una cookie "recordarme") y hace que el estado de inicio de sesión del usuario y su información básica estén disponibles para todas las vistas (plantillas EJS) a través de `res.locals.isLogged` y `res.locals.userLogged`.

### Rutas Principales (`ALPACAGAMES/src/routes/main.js` - montadas en `/`)

Estas rutas son manejadas principalmente por `mainController.js`.

*   `GET /`: Sirve la página de inicio.
    *   Controlador: `mainController.home`
*   `GET /register`: Sirve la página de registro de usuarios.
    *   Controlador: `mainController.register`
*   *Nota: La ruta `GET /login` en `main.js` está comentada.*

### Rutas de Productos (`ALPACAGAMES/src/routes/products.js` - montadas en `/products`)

Estas rutas son manejadas por `productsController.js` y gestionan el catálogo de productos.

*   `GET /`: Lista todos los productos disponibles.
    *   Controlador: `productsController.listProducts`
*   `GET /create`: Muestra el formulario para crear un nuevo producto.
    *   Controlador: `productsController.create`
*   `POST /create`: Maneja el envío del formulario de nuevo producto.
    *   Controlador: `productsController.store`
    *   Middleware: `upload.single('images')` (de `productImage.js`).
*   `GET /:id`: Muestra los detalles de un producto específico.
    *   Controlador: `productsController.productsDetail`
*   `GET /:id/edit`: Muestra el formulario para editar un producto existente.
    *   Controlador: `productsController.edit`
*   `PUT /:id/edit`: Maneja el envío del formulario de edición de producto.
    *   Controlador: `productsController.update`
*   `DELETE /delete/:id`: Elimina un producto específico.
    *   Controlador: `productsController.destroy`
*   `GET /:id/shop`: Muestra una página de tienda simulada para un producto específico.
    *   Controlador: `productsController.shop`
*   *Nota: `GET /login` (que mapea a `usersController.login`) también está presente aquí.*

### Rutas de Usuarios (`ALPACAGAMES/src/routes/users.js` - montadas en `/users`)

Estas rutas son manejadas por `usersController.js` y gestionan la autenticación y los perfiles de usuario.

*   `GET /login`: Muestra la página de inicio de sesión de usuario.
    *   Controlador: `usersController.login`
    *   Middleware: `areYouLogged` (de `question.js`), `validations.login` (de `validation.js`).
*   `POST /login`: Maneja el envío del formulario de inicio de sesión.
    *   Controlador: `usersController.processLogin`
*   `GET /register`: Muestra la página de registro de usuario.
    *   Controlador: `usersController.register`
    *   Middleware: `areYouLogged` (de `question.js`).
*   `POST /register`: Maneja el envío del formulario de registro.
    *   Controlador: `usersController.processRegister`
    *   Middleware: `uploadFile.single('avatar')` (de `registerImage.js`), `validations.register` (de `validation.js`).
*   `GET /logout`: Cierra la sesión del usuario.
    *   Controlador: `usersController.logout`
    *   Middleware: `areNotYouLogged` (de `otherQuestion.js` - con nota sobre posible error tipográfico o su propósito).
*   `GET /perfil`: Muestra la página de perfil de usuario.
    *   Controlador: `usersController.perfil`
    *   Middleware: `areNotYouLogged` (de `otherQuestion.js`).

## Modelos de Datos

La aplicación se basa en archivos JSON para almacenar datos. Los modelos de datos principales son para productos y usuarios.

### Modelo de Datos de Productos (`ALPACAGAMES/src/data/products.json`)

Este archivo contiene un array de objetos de producto. Cada objeto representa un videojuego disponible en la tienda y tiene la siguiente estructura:

*   `id` (Number): Identificador único para el producto.
*   `name` (String): Nombre del juego.
*   `description` (String): Descripción detallada del juego.
*   `platforms` (Array de Strings o String): La(s) plataforma(s) en las que el juego está disponible (ej., `["PC", "PlayStation 5", "Xbox Series X"]`). *Nota: Puede ser un array o una cadena única.*
*   `genre` (String): El género del juego.
*   `releaseDate` (String): La fecha de lanzamiento del juego.
*   `price` (Number): El precio del juego.
*   `images` (String): Nombre de archivo de la imagen de portada del producto (almacenada en `ALPACAGAMES/public/img/`).
*   `systemReq` (Object): Requisitos del sistema.
    *   `os` (String): Sistema operativo.
    *   `storage` (String): Espacio de almacenamiento.
*   `downloadSize` (Number): Tamaño de descarga en GB.

### Modelo de Datos de Usuarios (`ALPACAGAMES/src/data/users.json`)

Este archivo contiene un array de objetos de usuario. Cada objeto representa un usuario registrado y tiene la siguiente estructura:

*   `id` (Number): Identificador único para el usuario.
*   `name` (String): Nombre del usuario.
*   `lastName` (String): Apellido del usuario.
*   `displayName` (String): Nombre de usuario elegido.
*   `email` (String): Dirección de correo electrónico (para login).
*   `password` (String): Contraseña hasheada (con `bcryptjs`).
*   `birthDate` (String): Fecha de nacimiento.
*   `country` (String): País de residencia.
*   `admin` (Boolean): Indicador de privilegios administrativos.
*   `avatar` (String): Nombre de archivo del avatar (almacenado en `ALPACAGAMES/public/img/avatars/`).
