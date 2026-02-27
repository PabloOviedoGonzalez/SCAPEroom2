

const escenas = [
    {//0
        imagen: "img/entrada.png",
        texto: "Estás en la habitación. Busca algo sospechoso.",
        triggers: [
            { top: 220, left: 300, width: 80, height: 80, next: 1 }
        ]
    },

    {//1
        imagen: "img/escena2puertas.png",
        texto: "Has encontrado dos caminos. ¿Cuál eliges?",
        triggers: [
            { top: 180, left: 200, width: 100, height: 100, next: 2 },
            { top: 180, left: 500, width: 100, height: 100, next: 3 }
        ]
    },

    {//2
        imagen: "img/pokemon_oscuro.png",
        texto: "Que pokemon me ayudará?",
        triggers: [
            { top: 180, left: 200, width: 100, height: 100, next: 4 },
            { top: 180, left: 500, width: 100, height: 100, next: 7 }]
    },

    {//3
        imagen: "img/mewtwo.png",
        texto: "Camino derecho — FIN",
        triggers: [
            { top: 220, left: 300, width: 80, height: 80, next: 10 }
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
        texto: "Camino derecho — FIN",
        triggers: [
            { top: 220, left: 300, width: 80, height: 80, next: 6 }
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

        div.style.top = t.top + "px";
        div.style.left = t.left + "px";
        div.style.width = t.width + "px";
        div.style.height = t.height + "px";

        div.addEventListener("click", () => {
            cambiarEscenaConFade(t.next);
        });

        contTriggers.appendChild(div);
    });
}



cargarEscena();