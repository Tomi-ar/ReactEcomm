# Buenas Birras e-commerce con React!
En esta página podrás encontrar una selección de cervezas artesanales de las mejores cervecerías de la región!

# BUILD WITH

    ReactJS
    JavaScript
    Node
    NPM
    Webpack
    Firebase 
    SweetAlert2
    CurrencyFormat
    HTML
    CSS
    BOOTSTRAP

# HOME
El home carga una lista de productos usando Firebase como base de datos. El navbar esta compuesto del logo del site que lleva hacia la página inicial en cualquier momento.
Tenemos un link de Productores que agrupa cada uno de los productores disponibles hoy en el site. Cada uno lleva a la lista de productos de cada uno de ellos.
Tenemos un link de FAQs que todavía está en construcción.
Por úlitmo, una imagen del carrito para poder visualizar (en un futuro) los productos del mismo.

# PRODUCTORES
Cada uno de estos está hecho haciendo un filtro del listado de productos inicial, de acuerdo al nombre seleccionado (tomado usando useParams)

# DETALLES DEL PRODUCTORES
También se puede acceder al detalle de cada producto en una página nueva donde se pueden agregar varias unidades del mismo producto al carrito!

# CARRITO
Si no hay productos se introdujo un link para volver al home y seleccionar productos.
A medida que se agregan productos se notifica al usuario usando alertas (sweetalert2). Cada producto se agrega abajo del anterior y se puede moficiar la cantidad dese ahí mismo. A la derecha se muestra el subtotal, descuentos y total a pagar. En caso de seleccionar más de 6 unidades de algun item se proporciona un descuento del 15%.
Clickeando en Finalizar se abre la ultima parte de intereacción con el usuario para cargar el formulario de carga de datos.

# CHECKOUT
Se capturan los datos del cliente y se proporciona el ID de la orden creada en Firebase - guardamos nombre, apellido, email, telefono, forma de pago y detalles de los productos (items y valor total).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
