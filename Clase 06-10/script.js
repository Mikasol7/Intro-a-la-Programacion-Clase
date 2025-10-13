// const span = document.getElementById("span")
// const button = document.getElementById("button")
// const input = document.getElementById("input")

// span.innerText="Lo que sea"
// button.onclick= function(){
//     span.innerText="Que apretas"
//     // span.classList.add("verde")
//     // span.classList.remove("rojo")
//     span.classList.toggle("azul") 
// }
// input.onchange=(ev)=>{
//     // console.log(ev)
//     // console.log(ev.target.value)
//     span.innetText="HOLA"
// }
// input.onkeydown=(ev)=>{
//     console.log(ev)
//     console.log(ev.target.value)
//     span.innetText="HOLAa"
// }

const celdas = document.getElementsByClassName("celda")
let estado = []
let jugador1 = "X"
let jugador2 = "O"
let jugador_actual = jugador1
const currentplayer = document.getElementById("currentplayer")

const combinaciones_Ganadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let hayGanador = false

for (let i = 0; i < celdas.length; i++) {
    console.log(i)
    celdas[i].onclick = function (ev) {
        console.log(i)
        if (estado[i]) return
        ev.target.innerText = jugador_actual
        estado[i] = jugador_actual
    
        hayGanador = combinaciones_Ganadoras.map((item) => {
            return estado[item[0]] === estado[item[1]] && estado[item[1]] === estado[item[2]] && estado[item[0]]!==null
            }).some((item)=>item)
        
            if (hayGanador){
                alert(`GANÓ EL JUGADOR ${jugador_actual}`)
                return
            }

        if (jugador_actual === jugador2) {
            jugador_actual = jugador1
        } else {
            jugador_actual = jugador2
        }
        currentplayer.innerText = `JUGADOR ACTUAL: ${jugador_actual}`
    }
    estado.push(null)
}


