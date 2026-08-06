# Arquitectura del Proyecto

> Este documento describe la arquitectura oficial de S&A. Su objetivo es mantener una estructura consistente, escalable y fácil de entender tanto para desarrolladores como para agentes de IA.

---

# Filosofía

La arquitectura de S&A sigue cinco principios fundamentales.

1.

Simplicidad.

2.

Escalabilidad.

3.

Reutilización.

4.

Consistencia.

5.

Responsabilidad única.

Ningún archivo debe existir sin una razón clara.

Ningún componente debe asumir responsabilidades que pertenecen a otro.

---

# Stack Tecnológico

Framework

- Next.js (App Router)

Lenguaje

- TypeScript

Estilos

- TailwindCSS

Animaciones

- Framer Motion

Despliegue

- GitHub Pages

Repositorio

- GitHub

---

# Estructura General

La estructura del proyecto debe mantenerse organizada por responsabilidades.

```text
app/
components/
content/
docs/
lib/
public/
styles/
types/
```

Cada carpeta tiene un propósito específico.

---

# app/

Contiene las rutas de Next.js.

Aquí únicamente deben existir:

- páginas
- layouts
- templates
- loading
- metadata

No colocar lógica de negocio compleja.

No colocar componentes reutilizables.

---

# components/

Todos los componentes reutilizables viven aquí.

Nunca crear componentes directamente dentro de app salvo que sean exclusivos de una única página.

---

## Organización

```text
components/

gallery/
viewer/
layout/
ui/
shared/
admin/
messages/
albums/
```

Las carpetas pueden crecer en el futuro.

No crear carpetas nuevas sin una razón clara.

---

# gallery/

Componentes relacionados con la galería.

Ejemplos.

Timeline

MediaCard

MonthGroup

DayGroup

Grid

MediaInfo

GalleryHeader

Toda lógica visual relacionada con fotografías pertenece aquí.

---

# viewer/

Todo el visor fullscreen.

Ejemplos.

Viewer

Toolbar

ThumbnailStrip

ZoomControls

InfoPanel

NavigationButtons

GestureLayer

Este módulo evolucionará hasta convertirse prácticamente en una pequeña aplicación independiente.

---

# layout/

Componentes de estructura.

Ejemplos.

Header

Footer

Container

Section

Sidebar

No colocar aquí componentes específicos de una funcionalidad.

---

# ui/

Componentes completamente reutilizables.

Ejemplos.

Button

IconButton

GlassPanel

Typography

Badge

Input

Textarea

Dialog

Modal

Tooltip

Estos componentes nunca deben depender de la galería.

---

# shared/

Componentes utilizados por varios módulos.

Ejemplos.

EmptyState

Loading

ErrorBoundary

FadeIn

AnimatedSection

Divider

---

# admin/

Todo el panel de administración.

No mezclar con la aplicación pública.

---

# messages/

Componentes exclusivos de la sección de mensajes.

---

# albums/

Componentes exclusivos de los álbumes.

---

# content/

Aquí vive únicamente el contenido.

Nunca colocar componentes React.

Ejemplo actual.

```text
content/

data/

gallery.json
```

En el futuro.

```text
content/

gallery/

2026/

08/

15/

foto.jpg

video.mp4

metadata.json
```

---

# public/

Todos los recursos públicos.

Ejemplos.

```text
public/

media/
icons/
images/
fonts/
```

---

# lib/

Funciones reutilizables.

No colocar componentes.

Ejemplos.

gallery.ts

dates.ts

animations.ts

github.ts

images.ts

utils.ts

---

# styles/

Toda la configuración visual.

Ejemplo.

```text
styles/

tokens.css

utilities.css

globals.css

animations.css
```

No escribir estilos repetidos.

---

# types/

Todos los tipos compartidos.

Nunca declarar interfaces grandes dentro de componentes si pueden reutilizarse.

---

# Flujo de Datos

Actualmente.

```text
gallery.json

↓

lib/gallery.ts

↓

Timeline

↓

MediaCard

↓

Viewer
```

En el futuro.

```text
GitHub API

↓

Automatización

↓

Metadata

↓

gallery.generated.json

↓

Aplicación
```

---

# Flujo de Renderizado

Home

↓

Timeline

↓

MonthGroup

↓

DayGroup

↓

MediaCard

↓

Viewer

Cada componente debe tener una única responsabilidad.

---

# Principios

Siempre.

- Componentes pequeños.

- Alta reutilización.

- Bajo acoplamiento.

- Alta cohesión.

- Responsabilidad única.

---

# Convenciones

Componentes.

PascalCase

Ejemplo.

MediaCard.tsx

Funciones.

camelCase

Ejemplo.

groupMediaByMonth()

Constantes.

UPPER_CASE únicamente cuando sean constantes globales.

---

# Imports

Orden recomendado.

1.

React.

2.

Librerías.

3.

Componentes.

4.

Hooks.

5.

Lib.

6.

Tipos.

7.

CSS.

Mantener consistencia en todos los archivos.

---

# Dependencias

Antes de instalar una nueva dependencia preguntar.

¿Realmente es necesaria?

Siempre preferir soluciones nativas.

No aumentar el tamaño del proyecto innecesariamente.

---

# Escalabilidad

Toda nueva funcionalidad debe poder agregarse sin modificar la arquitectura existente.

La arquitectura debe crecer mediante nuevos módulos.

No mediante archivos gigantes.

---

# Calidad

El objetivo de esta arquitectura no es únicamente organizar archivos.

Busca facilitar:

- mantenimiento
- escalabilidad
- pruebas
- reutilización
- colaboración
- comprensión

Una arquitectura limpia reduce errores futuros y acelera el desarrollo.

---

# Estado del documento

Este documento deberá actualizarse cada vez que la estructura del proyecto cambie de forma significativa.