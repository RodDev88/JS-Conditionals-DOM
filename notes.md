INTRUCCIONES DEL EJERCICIO

1-Estructura inicial en HTML:

-Crea un botón "Revisar" que permita verificar si las condiciones se cumplen.
-Crea un botón "Enviar" deshabilitado por defecto.
-Agrega dos checkboxes que representen las opciones.
-Agrega un contenedor (div) para mostrar mensajes al usuario.

2-Funcionalidad con JavaScript:

-Cuando se presione el botón "Revisar":
   -Verifica si al menos un checkbox está marcado.
   -Muestra un mensaje dinámico en el contenedor (div).
   -Si se cumplen las condiciones, habilita el botón "Enviar".
   -Si no, asegúrate de que el botón "Enviar" siga deshabilitado.

APRENIZAJES DEL EJERCICIO

LABEL E INPUTS

Los elementos `<label>` son opcionales, y puedes trabajar directamente con los `<input>` si no necesitas etiquetas visuales para ellos.

Sin embargo, los `<label>` tienen algunas ventajas en términos de accesibilidad y experiencia de usuario:

### **Ventajas de usar `<label>`:**

1. **Accesibilidad:**

   - Asociar un `<label>` con un `<input>` permite que los lectores de pantalla describan el propósito del campo.
   - Puedes hacer esto usando el atributo `for` en el `<label>` y el `id` correspondiente en el `<input>`:
     ```html
     <label for="checkbox1">Opción 1</label>
     <input type="checkbox" id="checkbox1" />
     ```

2. **Área clicable más grande:**

   - Cuando usas `<label>` asociado, puedes hacer clic tanto en el texto como en el checkbox.

3. **Mejor legibilidad del código:**
   - Proporciona una descripción clara de qué representa cada `<input>`.

---
