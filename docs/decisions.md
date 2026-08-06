# Decisiones del Proyecto

> Este documento registra todas las decisiones importantes tomadas durante el desarrollo de S&A. No describe únicamente qué se hizo, sino también el razonamiento detrás de cada elección. Antes de modificar la arquitectura, el diseño o la experiencia de usuario, este documento debe consultarse.

---

# Filosofía General

## DG-001 — S&A no es una red social

### Estado

Aprobado

### Decisión

S&A nunca será una red social.

### Razón

El objetivo del proyecto es preservar recuerdos, no generar interacción.

No existirán métricas sociales que distraigan del contenido.

### Consecuencias

No habrá:

- Likes
- Comentarios
- Compartidos
- Seguidores
- Perfiles públicos

---

## DG-002 — La fotografía siempre es el protagonista

### Estado

Aprobado

### Decisión

Toda la interfaz debe construirse alrededor de las fotografías.

### Razón

Las fotografías representan el contenido principal.

Todo lo demás existe únicamente para acompañarlas.

### Consecuencias

Se evitarán:

- Tarjetas pesadas
- Sombras exageradas
- Colores llamativos
- Fondos con demasiado contraste
- Decoración innecesaria

---

## DG-003 — Inspiración en Apple, no copia

### Estado

Aprobado

### Decisión

La referencia principal será Apple Photos e iCloud Photos.

### Razón

Nos interesa su filosofía de diseño, no replicar su interfaz.

### Consecuencias

Podemos inspirarnos en:

- Ritmo visual
- Espaciado
- Animaciones
- Jerarquía
- Minimalismo

No debemos copiar:

- Layouts exactos
- Iconografía propietaria
- Interfaces idénticas

---

# Diseño

## DS-001 — Color principal

### Estado

Aprobado

### Decisión

El color principal será vinotinto.

### Razón

Es el color favorito de la destinataria del proyecto.

Debe utilizarse como color de identidad y no como elemento dominante.

---

## DS-002 — Tipografía

### Estado

Aprobado

### Decisión

Toda la aplicación utilizará la fuente Outfit.

### Razón

Su estilo moderno, limpio y versátil encaja con la estética del proyecto.

No se introducirán nuevas familias tipográficas salvo que exista una justificación muy fuerte.

---

## DS-003 — Mucho espacio en blanco

### Estado

Aprobado

### Decisión

La interfaz priorizará espacios amplios y una composición relajada.

### Razón

El espacio negativo ayuda a que las fotografías respiren y mejora la percepción de calidad.

---

## DS-004 — Animaciones discretas

### Estado

Aprobado

### Decisión

Todas las animaciones deberán ser suaves, lentas y naturales.

### Razón

El movimiento debe acompañar al usuario sin llamar la atención.

Se evitarán rebotes, efectos elásticos o movimientos exagerados.

---

# Contenido

## CT-001 — Una publicación equivale a un recuerdo

### Estado

Aprobado

### Decisión

Cada publicación representa un único recuerdo.

Puede contener:

- Una fotografía
- Un video

Acompañados por:

- Descripción
- Hashtags
- Fecha
- Álbum

---

## CT-002 — Los mensajes son independientes

### Estado

Aprobado

### Decisión

Los mensajes vivirán en una sección separada de la galería.

### Razón

No queremos mezclar fotografías con textos largos.

Los mensajes representan cartas personales y deben tener su propio espacio.

---

## CT-003 — Los álbumes complementan el Timeline

### Estado

Aprobado

### Decisión

Los álbumes no reemplazan la vista cronológica.

### Razón

La historia principal del proyecto siempre será el Timeline.

Los álbumes son una forma alternativa de explorar el contenido.

---

# Administración

## AD-001 — Un único administrador

### Estado

Aprobado

### Decisión

Solo existirá un administrador.

### Razón

El proyecto está pensado para uso personal.

No tiene sentido implementar múltiples usuarios, permisos o roles.

---

## AD-002 — Panel visual

### Estado

Aprobado

### Decisión

El panel de administración debe sentirse como una aplicación moderna y agradable de usar.

### Razón

Administrar recuerdos también forma parte de la experiencia.

No se utilizarán formularios largos o interfaces técnicas cuando puedan reemplazarse por interacciones visuales.

---

## AD-003 — Drag & Drop

### Estado

Aprobado

### Decisión

La carga de fotografías y videos se realizará mediante arrastrar y soltar.

### Razón

Reduce la fricción y simplifica el proceso de publicación.

---

# Funcionalidades descartadas

## DC-001 — Favoritos

### Estado

Descartado

### Razón

Todas las fotografías son importantes.

No existe necesidad de marcarlas como favoritas.

---

## DC-002 — Música

### Estado

Descartado

### Razón

La música puede resultar invasiva y distraer de los recuerdos.

La experiencia debe ser silenciosa.

---

## DC-003 — Comentarios

### Estado

Descartado

### Razón

S&A no busca interacción social.

---

## DC-004 — Likes

### Estado

Descartado

### Razón

No aportan valor al propósito del proyecto.

---

## DC-005 — Perfiles de usuario

### Estado

Descartado

### Razón

Solo existe un administrador y una visitante.

No se implementarán perfiles públicos.

---

# Desarrollo

## DV-001 — Documentación viva

### Estado

Aprobado

### Decisión

La documentación forma parte del proyecto.

### Razón

El código y la documentación deben evolucionar juntos.

Cada funcionalidad nueva deberá reflejarse en la documentación correspondiente.

---

## DV-002 — Cambios incrementales

### Estado

Aprobado

### Decisión

Nunca realizar refactorizaciones masivas sin necesidad.

### Razón

Los cambios pequeños son más fáciles de revisar, probar y mantener.

---

# Estado del documento

Este documento crecerá junto con el proyecto.

Cada decisión relevante deberá registrarse aquí antes de convertirse en una convención permanente.