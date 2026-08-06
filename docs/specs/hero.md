# Hero — Especificación Funcional

> Estado: Diseño

---

# Objetivo

El Hero representa el primer contacto del usuario con S&A.

No tiene como objetivo mostrar información.

Tiene como objetivo provocar una emoción.

Durante los primeros segundos el usuario debe sentir que está entrando en un lugar especial.

---

# Filosofía

El Hero debe sentirse como la pantalla inicial de una aplicación creada por Apple.

No significa copiar Apple.

Significa adoptar sus principios.

Mucho espacio.

Movimiento delicado.

Tipografía protagonista.

Fotografía protagonista.

Interfaz silenciosa.

---

# Primera impresión

Cuando la página carga.

El usuario debe percibir.

Calma.

Elegancia.

Calidad.

Cercanía.

Nostalgia.

Nunca saturación.

Nunca ruido.

Nunca sensación de red social.

---

# Layout

El Hero ocupa aproximadamente el 90% de la altura de la ventana.

Debe respirar.

No debe llenarse de elementos.

La composición es vertical.

```
Header

↓

Título

↓

Subtítulo

↓

Pequeña descripción

↓

Indicador de scroll
```

---

# Título

Texto.

```
S&A
```

Debe ser el elemento más importante de toda la pantalla.

Peso.

Bold.

Tamaño muy grande.

Mucho espacio alrededor.

---

# Subtítulo

Una frase corta.

Ejemplo.

```
Cada recuerdo tiene su lugar.
```

El subtítulo nunca debe competir con el título.

---

# Descripción

Máximo dos líneas.

Debe explicar la esencia del proyecto.

Nunca más de tres líneas.

---

# Indicador de Scroll

Debe invitar a descubrir el resto de la página.

No debe resultar invasivo.

Puede utilizar:

- una flecha
- un pequeño texto
- una animación muy sutil

---

# Fondo

El fondo nunca debe competir con el contenido.

Opciones válidas.

- Color sólido.
- Gradiente extremadamente suave.
- Blur muy ligero.
- Fotografía desenfocada.

Nunca utilizar imágenes con demasiado detalle.

---

# Animaciones

Todas las animaciones deben ejecutarse una sola vez al cargar.

No deben repetirse.

---

## Orden

Header.

↓

Título.

↓

Subtítulo.

↓

Descripción.

↓

Scroll Indicator.

---

## Duraciones

Header.

300 ms.

Título.

600 ms.

Subtítulo.

650 ms.

Descripción.

700 ms.

Scroll.

900 ms.

---

## Tipo

Fade.

Translate.

Opacity.

Nunca Bounce.

Nunca Elastic.

Nunca efectos exagerados.

---

# Responsive

Desktop.

Experiencia principal.

Tablet.

Mantener composición.

Mobile.

Reducir tamaños.

Nunca cambiar completamente el diseño.

---

# Accesibilidad

El Hero debe ser completamente navegable mediante teclado.

Todo texto debe mantener contraste suficiente.

---

# Rendimiento

No cargar imágenes enormes.

No ejecutar animaciones innecesarias.

Evitar re-renderizados.

---

# Pendientes

- Animación palabra por palabra.
- Fondo con profundidad.
- Mejor transición al Timeline.
- Scroll suave.
- Motion refinado.
- Ajuste de espaciados.

---

# Criterios de aceptación

El Hero estará terminado cuando.

- La carga resulte elegante.
- El movimiento sea completamente fluido.
- La jerarquía visual sea clara.
- Invite a seguir explorando.
- Se sienta como una aplicación premium.