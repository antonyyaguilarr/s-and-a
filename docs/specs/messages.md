# Mensajes — Especificación funcional

> Estado: Base funcional

## Propósito

Guardar cartas, poemas y mensajes como recuerdos independientes de la galería.

## Fuente de datos

`content/data/messages.json` contiene una lista de objetos con `id`, `title`, `body`, `date` y `tags`.

## Ruta

`/mensajes` presenta los mensajes en forma de cartas. Cuando no hay contenido, muestra un estado vacío cuidadoso en lugar de texto de ejemplo personal.
