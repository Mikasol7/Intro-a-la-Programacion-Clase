const rojo= document.getElementById ("rojo")

const azul= document.getElementById ("azul")

const verde= document.getElementById ("verde")

const div= document.getElementById ("midiv")

let rojoValue= 0

function colorearDiv () {
    div.style.backgroundColor= `rgb(${rojoValue},100,100)`

}

rojo.onchange= (ev)=>{
    rojoValue= ev.target.value
    colorearDiv ()
}