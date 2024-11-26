INTRUCCIONES DEL EJERCICIO

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
