# GuideUV - Landing Page Interactiva para Aprender uv

**GuideUV** es un proyecto diseñado para explicar de manera sencilla y visual cómo funciona **uv**, el gestor de paquetes de Python escrito en Rust. Esta landing page interactiva está construida con **Angular 21** y sirve como proyecto de aprendizaje para dominar las últimas tecnologías del ecosistema Angular.

## Propósito del Proyecto

El objetivo principal de este proyecto es crear una experiencia educativa atractiva que permita a los desarrolladores comprender los conceptos fundamentales de uv sin necesidad de leer documentación extensa. A través de una interfaz interactiva y navegación intuitiva, los usuarios pueden explorar las características principales de uv de manera práctica.

## Características Principales

La landing page ofrece una serie de características pensadas para facilitar el aprendizaje. La navegación interactiva permite moverte entre diferentes secciones que explican cada aspecto de uv de forma progresiva. El contenido visual utiliza diagramas y ejemplos de código que facilitan la comprensión de conceptos complejos. Además, el diseño responsivo garantiza una experiencia óptima en cualquier dispositivo, ya sea escritorio, tablet o móvil.

## Tecnologías Utilizadas

Este proyecto utiliza un conjunto de tecnologías modernas que representan las mejores prácticas del desarrollo web actual. Angular 21 proporciona el framework base con su arquitectura de componentes standalone, eliminando la necesidad de módulos tradicionales. Los signals de Angular permiten una gestión reactiva del estado de manera eficiente y declarativa. El sistema de routing incorporado facilita la navegación entre las diferentes secciones de contenido. Finalmente, SCSS con BEM proporciona un sistema de estilos escalable y mantenible.

## Estructura del Proyecto

El proyecto sigue una arquitectura organizada que facilita el desarrollo y mantenimiento. La estructura principal se divide en carpetas que agrupan componentes, servicios y recursos compartidos.

En la carpeta `src/app/` se encuentran los componentes principales de la aplicación. El componente `app/` contiene la raíz de la aplicación y define las rutas principales. La carpeta `navbar/` incluye el componente de navegación que aparece en todas las páginas. Dentro de `features/` se organizan los componentes específicos de cada sección de la landing page, mientras que `shared/` contiene componentes reutilizables como botones, tarjetas y elementos de diseño. Los servicios en `core/services/` gestionan la lógica de negocio y el estado compartido de la aplicación.

## Requisitos Previos

Antes de comenzar a desarrollar en este proyecto, necesitas tener instalado Node.js en tu sistema. Se recomienda utilizar la versión LTS más reciente para garantizar compatibilidad. También necesitas npm o algún gestor de paquetes compatible. Aunque no es estrictamente necesario, tener familiaridad con conceptos básicos de Angular te ayudará a entender mejor la estructura del proyecto.

## Instalación y Configuración

Para comenzar a trabajar con el proyecto, primero debes clonar el repositorio en tu máquina local. Luego, instala las dependencias necesarias utilizando el gestor de paquetes de tu preferencia. Una vez completada la instalación, puedes iniciar el servidor de desarrollo para ver la aplicación en acción.

El primer paso consiste en instalar las dependencias del proyecto. Ejecuta el siguiente comando en la terminal desde la raíz del proyecto:

```bash
npm install
```

Este comando descargará e instalará todas las dependencias necesarias definidas en el archivo `package.json`, incluyendo Angular CLI y las bibliotecas del framework.

## Comandos de Desarrollo

El proyecto proporciona varios comandos útiles para el desarrollo diario. Cada comando está diseñado para выполнять una tarea específica y facilitar el flujo de trabajo.

Para iniciar el servidor de desarrollo y ver la aplicación en tiempo real, utiliza el comando `npm start` o `ng serve`. Este comando compila la aplicación y levanta un servidor local en `http://localhost:4200`. La aplicación se recargará automáticamente cada vez que modifiques los archivos fuente, permitiéndote ver los cambios de forma inmediata.

Si necesitas construir la aplicación para producción, ejecuta `npm run build`. Este comando genera una versión optimizada de la aplicación en la carpeta `dist/`, lista para ser desplegada en un servidor web. El proceso de construcción incluye minificación y optimización de los archivos para mejorar el rendimiento.

Para ejecutar las pruebas unitarias, utiliza `npm test`. Este comando ejecuta Vitest, el runner de pruebas configurado en el proyecto, y muestra los resultados de los tests en la terminal.

## Aprendiendo con Este Proyecto

Este proyecto está diseñado como un ejercicio de aprendizaje para practicar las siguientes habilidades de Angular. Los componentes standalone eliminan la necesidad de NgModules, permitiendo una arquitectura más simple y declarativa. Los signals proporcionan una forma moderna de gestionar el estado reactivo, reemplazando gradualmente el uso de RxJS para casos simples. El routing lazy loading mejora el rendimiento inicial de la aplicación al cargar las rutas bajo demanda. Finalmente, el sistema de control de flujo `@if` y `@for` ofrece una sintaxis más limpia que las directivas estructurales tradicionales.

## Contribución

Si deseas contribuir al proyecto, puedes hacerlo de varias maneras. Si encuentras un error, por favor abre un issue en el repositorio describiendo el problema y cómo reproducirlo. Si tienes una mejora o característica nueva, puedes hacer un fork del repositorio, crear una rama con tus cambios y enviar un pull request. También puedes mejorar la documentación existente o traducir el contenido a otros idiomas.

## Recursos Adicionales

Para profundizar en las tecnologías utilizadas en este proyecto, existen diversos recursos disponibles. La documentación oficial de Angular proporciona información detallada sobre todos los conceptos y APIs del framework. El sitio de uv ofrece información completa sobre el gestor de paquetes de Python. Angular Signals explica en detalle el sistema de señales reactivas. Finalmente, las guías de estilo de Angular proporcionan mejores prácticas para escribir código limpio y mantenible.

## Licencia

Este proyecto está disponible bajo la licencia MIT. Esto significa que puedes usarlo, modificarlo y distribuirlo libremente, incluso para propósitos comerciales, siempre que incluyas la licencia original en tus distribuciones.

---

*Este proyecto fue creado con Angular CLI versión 21.2.9.*