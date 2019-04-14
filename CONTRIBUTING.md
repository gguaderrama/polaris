# Como contribuir

Load WebPage es un proyecto desarrollado en lenguaje `JS` usando la libreria `React` e implementando la arquitectura `Flux`

## Desarrollo controlado

Todo el flujo de trabajo sucede directamente en `Gitlab`. Tanto a los miembros del equipo central como los colaboradores externos se le asignan tareas con ramas especificas para cada una de ellas. Una ves concluida la tarea deben solicitar `pull requests` de la rama donde trabajaron hacia la rama `develop`.

## Organización de las ramas

La rama base del proyecto es `develop` sobre la cual se derivan las demas ramas relacionadas a las tareas asignadas.

La rama productiva es `master` esta contendra siempre la misma versión que se encuentra desplegada en producción.

La rama `hotfix` es para cambios mínimos de prioridad alta y bajo impacto.

## Flujo de trabajo Git

* Antes de empezar a trabajar debes de hacer `pull` de la rama develop para obtener los cambios mas recientes y disminuir los conflictos al integrar cambios.
```
$ git pull origin develop
```

* posteriormente al finalizar la tareo o tener avances significativos debes de agregar tus cambios al repositorio
```bash
$ git add .
$ git commit -m "mensaje descriptivo de las actividades realizadas"
$ git push
```

## Estructura de directorio
```bash
├── src
│   ├── actions
│   │   ├── index.jsx
│   │   └── modulo.jsx
│   ├── assets
│   ├── components
│   │   └── modulo
│   │       ├── index.jsx
│   │       └── componente.jsx
│   ├── containers
│   │   └── modulo.jsx
│   ├── middleware
│   ├── reducers
│   │   ├── index.jsx
│   │   └── modulo.jsx
│   ├── routes
│   ├── styles
│   ├── App.jsx
│   └── index.ejs
├── .babelrc
├── .dockerignore
├── .gitignore
├── .gitlab-ci.yml
├── CHANGELOG.md
├── CONTRIBUTING.md
├── Dockerfile
├── deploy.py
├── deployment.yml
├── package.json
├── README.md
└── webpack.config.js
```
## Guía de estilo

1. General
    * Los archivos tienen que ser nombrados en minúsculas utilizando la forma `underscore`.
    * Las variables tienen que ser nombradas utilizando la forma `camelCase`.
    * Los métodos tienen que ser nombrados utilizando `camelCase`.
    * Las clases tienen que ser nombrados utilizando la forma `PascalCase`.
    * Las constantes, de haberlas, tienen que ser nombradas en `UPPER_CASE` con guión bajo como separador.
    * Evita nombres de una sola letra. Sé descriptivo con tus nombres.
    * No uses `;`
    * No uses prefijos ni sufijos de guiones bajo.
    * El nombre del archivo base debe corresponder exactamente con el nombre de su export por defecto.

2. Comentarios
    * Usa `/** ... */` para comentarios de múltiples líneas. Incluye una descripción, especificación de tipos y valores para todos los parámetros y valores de retorno.
    * Usa `//` para comentarios de una sola línea. Ubica los comentarios de una sola línea encima del sujeto comentado. Deja una línea en blanco antes del comentario.

3. Espacios en blanco
    * Usa indentaciones blandas (sin TAB) establecidas en cuatro espacios.
    * Deja un espacio antes de la llave de apertura.
    * Deja una línea en blanco al final del archivo.
    * Usa indentación cuando uses métodos largos con 'chaining'.

4. Expresiones
    * Usa `===` y `!==` en vez de `==` y `!=` respectivamente.
    * Usa atajos.
        - Strings son evaluados como false si es una cadena de texto vacía '', de otro modo son true.
        - Numbers son evaluados como false si +0, -0, o NaN, de otro modo true.
        - Null es evaluado como false
        - Undefined es evaluado como false
        - Objects son evaluados como true


