
# Lugares APP

Es una aplicación donde puedes visualizar diferentes lugares por categoría. En la cual puedes guardar tus lugares favoritos, además como extra podes elegir hasta 3 categorías para poder ver en el Home que es la galería principal.

## Descripción
La aplicación presenta 4 secciones principales:

**Home**

Es una galería de imagenes donde vas a poder visualizar algunas de las principales catergorías y además tienes la posibilidad de que se muestren en primer lugar tus categorías favoritas.

**Lugares**

En esta seccion vas a poder ver todas las categorías, acceder a ellas y ver todos los lugares por categoría. Donde vas a poder guardar todos tus lugares favoritos, y luego verlas en la sección de Favoritos.

**Favoritos**

En esta sección puedes visualizar una lista de todos los lugares que has guardado como favoritos.

**Perfil**

Es una de las secciones más completas ya que cuenta con diversas areas de connfiguración. En esta, puedes agregar una foto de perfil, cerrar sesión, seleccionar un tema (oscuro ó claro), y ademas es el lugar donde puedes elegir tus categorías favoritas! 
Las que selecciones aquí se reflejaran como las primeras categoría en el Home, las cuales se identifican con una estrella

# Area técnica

En cuanto a la estructura de la aplicación, trate de ser lo más organizado posible y reutilizar componentes comunes con la posibilidad de customizarlos en determinados casos.

El proyecto se encuentra bien dividido por areas de uso/utilidad:

* Componentes por una parte, la cual internamente tambíen se encuentra por secciones para identicar rapidamente a que area de uso pertenece. También hago uso de layout para manejar de  manera global los estilos de las pantallas
* Pantallas (views): por secciones
* Redux: Logica de negocio centralizado en diferentes partes siguiendo las práctias de la documnetación (store, services, features)
* Utilidades: para validaciones y otras utilidades utilizadas a lo largo de la aplicación separadas por "Módulos" (clases).
* Uso de customHooks para no tener toda la lógica dentro de los componentes, ademas para reutilizar en caso de ser necesario.

