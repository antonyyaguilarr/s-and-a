# Guía de contenido

S&A mantiene el contenido separado de la interfaz. Para agregar recuerdos sin cambiar componentes, utiliza los archivos de `content/data/`.

## Álbumes

No se editan en un archivo separado. Agrega el campo `album` a un recuerdo de `gallery.json`; el sitio crea la colección, ordena sus recuerdos por fecha y usa el más reciente como portada.

## Mensajes

En `messages.json`, cada entrada debe tener:

```json
{
  "id": "2026-08-10-carta",
  "title": "Un título",
  "body": "El texto de la carta.",
  "date": "2026-08-10",
  "tags": ["#carta"]
}
```

## Nuestra historia

En `story.json`, cada evento debe tener:

```json
{
  "id": "2026-08-10-momento",
  "title": "Un momento importante",
  "description": "Una explicación breve.",
  "date": "2026-08-10",
  "location": "Opcional"
}
```

Las entradas inválidas se omiten en pantalla para preservar la estabilidad del sitio. Antes de publicar, ejecuta `npm run lint` y `npm run build`.
