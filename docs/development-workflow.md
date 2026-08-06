# Flujo Oficial de Desarrollo

> Este documento define el proceso oficial para desarrollar S&A. Todo cambio, sin importar su tamaño, debe seguir este flujo de trabajo.

---

# Filosofía

La velocidad nunca tiene prioridad sobre la calidad.

Cada cambio debe mejorar el proyecto.

Nunca simplemente agregar código.

El objetivo es construir un producto que pueda mantenerse durante muchos años.

---

# Ciclo de Desarrollo

Toda funcionalidad debe seguir exactamente este orden.

```
Idea

↓

Especificación

↓

Diseño

↓

Arquitectura

↓

Implementación

↓

Pruebas

↓

Documentación

↓

Commit

↓

Push
```

No deben saltarse pasos.

---

# Antes de escribir código

Antes de crear una nueva funcionalidad deben responderse estas preguntas.

## ¿Cuál es el problema?

Definir claramente el objetivo.

---

## ¿Ya existe algo parecido?

Buscar componentes reutilizables.

Evitar duplicación.

---

## ¿Qué archivos cambiarán?

Pensar primero.

Modificar después.

---

## ¿La solución escala?

Pensar en el futuro.

No únicamente en el caso actual.

---

# Diseño

Antes de implementar una interfaz.

Debe verificarse:

- Consistencia.
- Espaciado.
- Tipografía.
- Motion.
- Responsive.
- Accesibilidad.

Todo debe respetar el Design System.

---

# Componentes

Antes de crear uno nuevo.

Buscar si ya existe uno parecido.

Si existe.

Reutilizar.

Si no.

Crear uno nuevo siguiendo las convenciones.

---

# Convenciones

Cada componente debe:

- Tener una única responsabilidad.
- Estar completamente tipado.
- Ser reutilizable cuando tenga sentido.
- Tener nombres claros.

Nunca crear componentes gigantes.

---

# Organización

No escribir lógica dentro de la interfaz cuando pueda extraerse.

Preferir.

```
UI

↓

Hooks

↓

Lib

↓

Datos
```

No mezclar responsabilidades.

---

# Estados

Los componentes deben contemplar.

- Loading
- Empty
- Error
- Success

Nunca asumir que siempre existen datos.

---

# Animaciones

Toda animación debe responder una pregunta.

¿Por qué existe?

Si no mejora la experiencia.

No debe existir.

---

# Código

Preferencias.

- Código simple.
- Funciones pequeñas.
- Componentes pequeños.
- Nombres descriptivos.

Evitar soluciones ingeniosas.

Priorizar legibilidad.

---

# Rendimiento

Antes de terminar una funcionalidad revisar.

- Renderizados innecesarios.
- Memoización.
- Lazy Loading.
- Bundle Size.
- Imágenes.
- Videos.

---

# Accesibilidad

Comprobar.

- Navegación por teclado.
- Focus visible.
- Contraste.
- Etiquetas.
- Lectores de pantalla.

---

# Documentación

Toda modificación importante debe actualizar.

- architecture.md
- features.md
- changelog.md
- roadmap.md
- decisions.md

La documentación forma parte del producto.

---

# Commits

Cada commit debe representar una única mejora lógica.

Ejemplos.

```
feat: add immersive media viewer

feat: implement albums page

refactor: simplify gallery architecture

fix: correct timeline grouping

docs: update design system
```

Evitar commits como.

```
update

changes

fix

cosas

final
```

---

# Pull Requests

Aunque actualmente el proyecto tenga un único desarrollador.

Todo cambio debería poder responder.

¿Qué cambia?

¿Por qué?

¿Qué archivos toca?

¿Qué impacto tiene?

---

# Revisión

Antes de finalizar revisar.

□ Compila.

□ No rompe funcionalidades.

□ Sigue el Design System.

□ Sigue la Arquitectura.

□ Está documentado.

□ El código es legible.

□ No hay duplicación.

□ No existen TODO sin contexto.

---

# Regla Final

Si una mejora hace el código más complejo sin mejorar significativamente la experiencia.

No debe implementarse.

La simplicidad siempre gana.