# Uso de la Carpeta de Servicios en Redux Toolkit

La carpeta de servicios en Redux Toolkit se utiliza para organizar la lógica relacionada con la comunicación con servicios externos, como APIs REST o WebSocket. 

## Propósito

- **Separación de Responsabilidades**: Permite separar la lógica relacionada con la comunicación con servicios externos del resto de la lógica de la aplicación, mejorando la legibilidad y mantenibilidad del código.

- **Abstracción de la Lógica de Red**: Los servicios encapsulan la lógica de red necesaria para comunicarse con servicios externos, facilitando su reutilización y mantenimiento en toda la aplicación.

- **Centralización de la Lógica de Comunicación**: Al colocar la lógica de comunicación con servicios externos en una carpeta dedicada, se centraliza y organiza esta funcionalidad, lo que facilita su búsqueda y comprensión.

- **Integración con Redux Toolkit Query**: La carpeta de servicios es un lugar natural para integrar y configurar las funciones de Redux Toolkit Query, que simplifica la gestión de solicitudes a servicios externos en una aplicación Redux.

En resumen, la carpeta de servicios en Redux Toolkit se utiliza para organizar y encapsular la lógica de comunicación con servicios externos, lo que facilita la gestión, reutilización y mantenimiento de esta funcionalidad en la aplicación.