# Funcionalidades

> Este documento describe todas las funcionalidades actuales y futuras de S&A. No se centra en la implementación técnica, sino en el comportamiento esperado de cada módulo, su propósito y su evolución.

---

# Filosofía

S&A no es una aplicación con muchas funcionalidades.

Es una aplicación con pocas funcionalidades, pero extremadamente cuidadas.

Cada módulo debe sentirse terminado.

Cada interacción debe transmitir calidad.

Nunca agregar funcionalidades únicamente por tener más opciones.

---

# Home

## Estado

🟡 En desarrollo

---

## Objetivo

La Home representa la puerta de entrada al proyecto.

Debe transmitir desde el primer segundo la identidad de S&A.

No debe parecer una galería.

No debe parecer una red social.

Debe sentirse como el comienzo de una historia.

---

## Componentes

Actualmente.

- Header
- Hero
- Timeline

En el futuro.

- Hero cinematográfico
- Últimos recuerdos
- Últimos mensajes
- Accesos rápidos
- Indicador de scroll

---

## Prioridad

⭐⭐⭐⭐⭐

---

# Hero

## Estado

🟡 Pendiente de rediseño

---

## Objetivo

Crear una primera impresión memorable.

Debe ocupar gran parte del viewport.

No mostrar demasiada información.

Debe invitar al usuario a comenzar el recorrido.

---

## Contenido esperado

Título.

Subtítulo.

Pequeña descripción.

Animaciones.

Scroll indicator.

---

## Inspiración

Apple.

Minimalismo.

Espacios amplios.

Movimiento extremadamente suave.

---

## Pendientes

- Animación palabra por palabra.
- Entrada cinematográfica.
- Fondo con profundidad.
- Mejor transición hacia Timeline.

---

# Timeline

## Estado

🟢 Funcional

---

## Objetivo

Representar todos los recuerdos ordenados cronológicamente.

El Timeline es el corazón del proyecto.

Toda la navegación gira alrededor de él.

---

## Organización

Año

↓

Mes

↓

Día

↓

Recuerdos

---

## Características actuales

- Agrupación por año.
- Agrupación por mes.
- Agrupación por día.
- Renderizado cronológico.
- Masonry Layout.

---

## Mejoras futuras

- Sticky Month.
- Aparición progresiva.
- Mejor ritmo visual.
- Scroll más elegante.
- Mejor separación entre grupos.

---

# MediaCard

## Estado

🟡 Funcional

---

## Objetivo

Mostrar un único recuerdo.

Puede representar:

- Imagen.
- Video.

---

## Información

Actualmente.

Miniatura.

Fecha.

Descripción.

En el futuro.

Indicadores de video.

Mejor hover.

Animaciones.

Carga progresiva.

---

# Viewer

## Estado

🟡 Funcional

---

## Objetivo

Permitir visualizar fotografías y videos sin distracciones.

Debe sentirse como una aplicación nativa.

---

## Funciones actuales

- Fullscreen.
- Navegación.
- Zoom.
- Descarga.
- Miniaturas.

---

## Funciones futuras

- Shared Transition.
- Swipe.
- Mejor zoom.
- Panel de información.
- Mejor rendimiento.
- Animaciones Apple-like.

---

## Prioridad

⭐⭐⭐⭐⭐

---

# Álbumes

## Estado

⚪ No iniciado

---

## Objetivo

Permitir explorar recuerdos agrupados por tema.

Los álbumes no reemplazan el Timeline.

Representan una segunda forma de navegación.

---

## Información

Cada álbum tendrá.

Portada.

Descripción.

Cantidad de recuerdos.

Fecha.

---

## Vista

La vista del álbum debe sentirse igual de premium que la galería principal.

---

# Mensajes

## Estado

⚪ No iniciado

---

## Objetivo

Guardar poemas, cartas y mensajes.

No son publicaciones.

Son recuerdos escritos.

---

## Experiencia

Debe parecer una colección de cartas personales.

Mucho espacio.

Tipografía protagonista.

Animaciones suaves.

---

## Información

Cada mensaje contendrá.

Título.

Contenido.

Fecha.

Etiquetas.

---

# Nuestra Historia

## Estado

⚪ Idea aprobada

---

## Objetivo

Mostrar acontecimientos importantes de la relación.

No utilizar fotografías obligatoriamente.

Representar momentos importantes.

---

## Ejemplo

Nos conocimos.

Primer viaje.

Primera celebración.

Aniversarios.

---

# Administración

## Estado

⚪ No iniciado

---

## Objetivo

Permitir administrar todo el contenido desde una interfaz moderna.

---

## Funciones

Subir imágenes.

Subir videos.

Eliminar contenido.

Editar contenido.

Crear álbumes.

Escribir mensajes.

---

## Interacciones

Drag & Drop.

Vista previa.

Publicación.

Edición.

---

# GitHub API

## Estado

⚪ No iniciado

---

## Objetivo

Automatizar completamente la publicación del contenido.

---

## Responsabilidades

Subir archivos.

Actualizar JSON.

Eliminar archivos.

Crear estructura de carpetas.

Sin intervención manual.

---

# Organización del contenido

## Estado

🟡 Temporal

Actualmente.

gallery.json

---

En el futuro.

content/

gallery/

Año/

Mes/

Día/

Archivos

metadata.json

↓

gallery.generated.json

---

# Rendimiento

## Estado

Pendiente

---

## Futuro

Lazy Loading.

Blur Placeholder.

Optimización de imágenes.

Virtualización.

Precarga inteligente.

---

# Calidad

Todas las funcionalidades del proyecto deben cumplir los siguientes criterios.

- Elegancia.
- Consistencia.
- Accesibilidad.
- Rendimiento.
- Escalabilidad.
- Mantenibilidad.

Ninguna funcionalidad debe aprobarse únicamente porque funciona.

Debe sentirse terminada.

---

# Estado del documento

Cada nueva funcionalidad deberá documentarse aquí antes de considerarse finalizada.