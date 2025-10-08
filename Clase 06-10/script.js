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

const celdas= document.getElementsByClassName("celda")
let estado=[]
let jugador1= "X"
let jugador2= "O"
let jugador_actual= jugador1
for (let i=0; i<celdas.length; i++){
    console.log(i)
    celdas[i].onclick=function(ev){
        console.log(i)
        if (estado[i])return
        ev.target.innerText= jugador_actual
        estado[i] = jugador_actual
        if (jugador_actual===jugador2){
            jugador_actual=jugador1
        } else {
            jugador_actual=jugador2
        }
    }
    estado.push(null)
}


