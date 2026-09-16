# Álbumes — Especificación funcional

> Estado: Funcional

## Propósito

Ofrecer una vista temática que complementa el Timeline sin reemplazarlo.

## Fuente de datos

Los álbumes se derivan de manera determinista desde el campo `album` de cada entrada de `content/data/gallery.json`. No existe duplicación de recuerdos ni metadatos de portada independientes.

## Rutas

- `/albums`: muestra las colecciones disponibles.
- `/albums/[slug]`: muestra el Timeline y visor de una colección.

## Comportamientos

- La portada corresponde al recuerdo más reciente del álbum.
- El orden se determina por fecha descendente.
- Un álbum sin recuerdos no se renderiza.
- La vista de detalle reutiliza el visor ya existente.
