# Evaluador de Lectura IA - Pro 🧠

Este es un sistema de evaluación interactivo basado en la web que permite cargar cuestionarios personalizados mediante archivos JSON. La aplicación genera una evaluación aleatoria de 20 preguntas, califica en tiempo real y proporciona retroalimentación visual detallada al finalizar.

## ✨ Características

- **Carga Dinámica**: Sube cualquier archivo JSON con formato de preguntas y respuestas.
- **Selección Aleatoria**: Utiliza el algoritmo Fisher-Yates para barajar preguntas y opciones, asegurando que cada intento sea único.
- **Feedback Visual Inmediato**: 
  - Marcado de respuestas correctas (verde) e incorrectas (rojo).
  - Resaltado de la opción correcta si el usuario falla.
  - Sidebar con indicadores de progreso que cambian de color según el acierto/error.
- **Diseño Responsivo**: Interfaz moderna y adaptable a dispositivos móviles utilizando CSS Flexbox y Grid.
- **Seguridad de Datos**: Procesamiento local mediante JavaScript (FileReader API), los datos no salen de tu navegador.

## 🚀 Instalación y Uso

No requiere servidores ni bases de datos. Al ser un proyecto "Frontend-Only", puedes ejecutarlo localmente:

1. **Clona el repositorio**:
   ```bash
   git clone [https://github.com/TU_USUARIO/tu-repositorio.git](https://github.com/TU_USUARIO/tu-repositorio.git)

``[
  {
    "tema": "Historia",
    "pregunta": "¿En qué año se descubrió América?",
    "opciones": ["1492", "1500", "1485", "1510"],
    "correcta": "1492"
  },
  {
    "tema": "Tecnología",
    "pregunta": "¿Qué significa GPG?",
    "opciones": ["GNU Privacy Guard", "General Personal Guide", "Global Private Gate"],
    "correcta": "GNU Privacy Guard"
  }
]``