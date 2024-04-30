# Documentación del Archivo Store

El archivo `store.js` proporciona la configuración centralizada del almacén de datos de Redux para la aplicación.

## Propósito y Función

- **Configuración del Almacén de Datos**: Este archivo es fundamental para configurar el almacén de datos centralizado de Redux en la aplicación, donde se guarda y administra el estado global.

- **Gestión del Estado**: Centraliza el estado de la aplicación, permitiendo un acceso y modificación sencillos desde cualquier componente.

## Reductores

- Los reductores manejan cómo cambia el estado de la aplicación en respuesta a acciones enviadas al almacén. Cada reductor está asociado con una parte específica del estado global.

## Redux Toolkit

- Utiliza Redux Toolkit para simplificar la configuración del almacén de datos Redux y reducir el boilerplate.

## Middleware

- Configura middleware personalizados para manejar solicitudes a servicios externos, como la API de la tienda y la API de autenticación de usuario.

## Redux Toolkit Query

- Utiliza Redux Toolkit Query para la gestión eficiente de solicitudes a servicios externos, simplificando la integración de solicitudes de red con el almacenamiento de datos Redux.

## Listeners de API

- Configura listeners para vincular automáticamente las acciones creadas por Redux Toolkit Query con el almacén de Redux, asegurando la coherencia en la actualización del estado de la aplicación.

## Exportación del Almacén

- Exporta el almacén de datos configurado para que esté disponible para su uso en toda la aplicación, permitiendo a los componentes acceder al estado global de Redux y despachar acciones para modificar dicho estado.

En resumen, el archivo `store.js` es esencial para configurar y gestionar el estado global de la aplicación utilizando Redux, Redux Toolkit y Redux Toolkit Query, proporcionando una manera centralizada y eficiente de manejar el estado y las interacciones con servicios externos.
