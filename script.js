let preguntasSeleccionadas = [];

function shuffle(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

document.getElementById('file-input').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const data = JSON.parse(event.target.result);
            iniciarQuiz(data);
        } catch (err) {
            alert("Error al leer el JSON. Verifica el formato.");
        }
    };
    reader.readAsText(e.target.files[0]);
});

function iniciarQuiz(data) {
    document.getElementById('welcome-msg').classList.add('hidden');
    document.getElementById('display-tema').classList.remove('hidden');
    document.getElementById('quiz-area').classList.remove('hidden');

    const mazo = shuffle([...data]);
    preguntasSeleccionadas = mazo.slice(0, 20);

    const tema = preguntasSeleccionadas[0].tema || "General";
    document.getElementById('nombre-tema-header').textContent = tema;
    document.getElementById('tema-titulo').textContent = tema;

    renderizarPreguntas();
    crearIndicadores();
}

function crearIndicadores() {
    const cont = document.getElementById('indicador-progreso');
    cont.innerHTML = '';
    preguntasSeleccionadas.forEach((_, i) => {
        const div = document.createElement('div');
        div.className = 'progreso-bolita';
        div.id = `bolita-${i}`;
        div.textContent = i + 1;
        cont.appendChild(div);
    });
}

function renderizarPreguntas() {
    const container = document.getElementById('preguntas-container');
    container.innerHTML = '';

    preguntasSeleccionadas.forEach((p, index) => {
        const div = document.createElement('div');
        div.className = 'card-pregunta';

        const h3 = document.createElement('h3');
        h3.textContent = `${index + 1}. ${p.pregunta}`;
        div.appendChild(h3);

        const grid = document.createElement('div');
        grid.className = 'opciones-grid';

        const opcionesMezcladas = shuffle([...p.opciones]);

        opcionesMezcladas.forEach((opt, i) => {
            const letra = String.fromCharCode(65 + i);
            const label = document.createElement('label');
            label.className = 'opcion-item';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `pregunta-${index}`;
            input.value = opt;
            input.onchange = () => {
                document.getElementById(`bolita-${index}`).classList.add('respondida');
            };

            const span = document.createElement('span');
            span.textContent = `${letra}) ${opt}`;

            label.appendChild(input);
            label.appendChild(span);
            grid.appendChild(label);
        });

        div.appendChild(grid);
        container.appendChild(div);
    });
}

function calcularResultado() {
    let puntaje = 0;

    preguntasSeleccionadas.forEach((p, index) => {
        const opciones = document.getElementsByName(`pregunta-${index}`);
        const bolita = document.getElementById(`bolita-${index}`);
        let respondidaCorrectamente = false;

        opciones.forEach(radio => {
            const label = radio.closest('.opcion-item');
            
            if (radio.checked) {
                if (radio.value === p.correcta) {
                    label.classList.add('correcta');
                    respondidaCorrectamente = true;
                } else {
                    label.classList.add('incorrecta');
                }
            }

            // Resaltar visualmente cuál era la correcta
            if (radio.value === p.correcta) {
                label.classList.add('es-la-correcta');
            }

            radio.disabled = true; // Bloquear para que no cambien respuestas
        });

        // Actualizar colores del sidebar
        bolita.classList.remove('respondida');
        if (respondidaCorrectamente) {
            bolita.classList.add('bolita-exito');
            puntaje++;
        } else {
            bolita.classList.add('bolita-error');
        }
    });

    alert(`Evaluación finalizada.\nResultado: ${puntaje} / ${preguntasSeleccionadas.length}`);
    
    // Cambiar botones
    document.getElementById('btn-finalizar').classList.add('hidden');
    document.getElementById('btn-reiniciar').classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}