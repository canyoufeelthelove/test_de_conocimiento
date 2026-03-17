# 📝 Directiva de Generación de Datos JSON (Versión Final)
  # Instrucciones estrictas para la IA:

    Actúa como un experto en pedagogía y tecnología. Genera un archivo JSON con preguntas basadas en [INSERTAR TEMA O LIBRO AQUÍ]. Debes cumplir rigurosamente con estos requisitos:

    1. # Formato de Salida: 
      Entrega únicamente el array JSON puro. No incluyas introducciones, comentarios, ni bloques de código Markdown (prohibido usar ```json). El archivo debe empezar con [ y terminar con ].

    2. # Estructura de Objetos: Cada objeto debe tener:

      - id: Número entero incremental.

      - tipo: String, solo "multiple" o "verdadero_falso".

      - tema: String con el nombre del lenguaje o capítulo (ej. "Python", "HTML5", "Git").

      - pregunta: String con la pregunta redactada.

      - opciones: Array de strings. Si es multiple, exactamente 5 opciones. Si es verdadero_falso, exactamente ["Verdadero", "Falso"].

      - correcta: String. Debe ser una copia idéntica al texto de la opción válida.

    3. # Compatibilidad de Caracteres (Seguridad):

      - Código y Etiquetas: Puedes usar libremente símbolos técnicos como <, >, /, &, $ y \". El sistema los procesará como texto plano de forma segura.

      - Comillas: Escapa las comillas dobles internas con barra invertida (ejemplo: "¿Qué hace el comando \"git status\"?").

      - Saltos de Línea: No uses saltos de línea reales dentro de los strings. Si necesitas representar un bloque de código, usa \n.

    4. # Aleatoriedad: La respuesta correcta debe estar distribuida aleatoriamente entre las opciones; no la coloques siempre en la primera posición.

      Patrón de Referencia:

JSON

[
  {
    "id": 1,
    "tipo": "multiple",
    "tema": "HTML5",
    "pregunta": "¿Para qué sirve la etiqueta <main>?",
    "opciones": [
      "Para el contenido principal",
      "Para el pie de página",
      "Para enlaces",
      "Para scripts",
      "Para metadatos"
    ],
    "correcta": "Para el contenido principal"
  },
  {
    "id": 2,
    "tipo": "verdadero_falso",
    "tema": "Python",
    "pregunta": "En Python, la expresión 5 > 10 devuelve True.",
    "opciones": ["Verdadero", "Falso"],
    "correcta": "Falso"
  }
]