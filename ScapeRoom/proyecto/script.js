

const escenas = [
    {//0
        imagen: "img/entrada.png",
        texto: "Te encuentras en la calle, frente a la entrada de una cueva oscura. El aire que sale del interior es frío y extraño. Parece que algo se mueve dentro… ¿Te atreves a entrar?",
        triggers: [
            { top: 43, left: 44, width: 13, height: 32, next: 1 }
        ]
    },

    {//1
        imagen: "img/escena2puertas.png",
        texto: "Has entrado en la cueva. La luz del exterior desaparece poco a poco y todo se vuelve más silencioso. Solo escuchas gotas de agua cayendo desde el techo. Frente a ti hay unas escaleras que bajan a la oscuridad.",
        triggers: [
            { top: 18, left: 76, width: 8, height: 20, next: 2 },
            { top: 38, left: 30, width: 6, height: 12, next: 3 }
        ]
    },

    {//2
        imagen: "img/pokemon_oscuro.png",
        texto: "Llegas a una sala completamente oscura. De repente, dos Pokémon aparecen ante ti. Uno parece amistoso… pero otro tiene una mirada peligrosa.",
        triggers: [
            { top: 180, left: 200, width: 100, height: 100, next: 4 },
            { top: 180, left: 500, width: 100, height: 100, next: 7 }]
    },

    {//3
        imagen: "img/mewtwo.png",
        texto: "Un fuerte temblor sacude la cueva. De entre las sombras aparece un Pokémon legendario. Su poder bloquea la salida. ¡Captúralo!",
        triggers: [
            { top: 70, left: 56, width: 15, height: 25, next: 10 }
        ]
    },

    {//4
        imagen: "img/pokemon_luz.png",
        texto: "Camino derecho — FIN",
        triggers: [
            { top: 220, left: 300, width: 80, height: 80, next: 5 }
        ]
    },

    {//5
        imagen: "img/seVeSalida1.png",
        texto: "Camino derecho — FIN",
        triggers: [
            { top: 220, left: 300, width: 80, height: 80, next: 6 }
        ]
    },

    {//6
        imagen: "img/salida.png",
        texto: "Camino derecho — FIN",
        triggers: []
    },

    {//7
        imagen: "img/dedoChari.png",
        texto: "Camino derecho — FIN",
        triggers: [
            { top: 220, left: 300, width: 80, height: 80, next: 8 }
        ]
    },

    {//8
        imagen: "img/fuego1.png",
        texto: "Camino derecho — FIN",
        triggers: [
            { top: 220, left: 300, width: 80, height: 80, next: 9 }
        ]
    },

    {//9
        imagen: "img/muerte.png",
        texto: "Camino derecho — FIN",
        triggers: [
            { top: 220, left: 300, width: 80, height: 80, next: 0 }
        ]
    },

    {//10
        imagen: "img/captura.png",
        texto: "Has capturado al Pokémon que custodiaba la salido. ¡Ahora vuelve a ser visible!",
        triggers: [
            { top: 65, left: 45, width: 15, height: 25, next: 6 }
        ]
    }

    
];



let escenaActual = 0;

const imagen = document.getElementById("imagenEscena");
const texto = document.getElementById("textoEscena");
const contTriggers = document.getElementById("triggers");
const fade = document.getElementById("fade");



function cambiarEscenaConFade(indice) {
    fade.style.opacity = 1;

    setTimeout(() => {
        escenaActual = indice;
        cargarEscena();
        fade.style.opacity = 0;
    }, 500);
}



function cargarEscena() {
    const escena = escenas[escenaActual];

    
    imagen.src = escena.imagen;
    texto.textContent = escena.texto;

    
    contTriggers.innerHTML = "";

    
    escena.triggers.forEach(t => {
        const div = document.createElement("div");
        div.className = "trigger";

        div.style.top = t.top + "%";
        div.style.left = t.left + "%";
        div.style.width = t.width + "%";
        div.style.height = t.height + "%";

        div.addEventListener("click", () => {
            cambiarEscenaConFade(t.next);
        });

        contTriggers.appendChild(div);
    });
}



cargarEscena();