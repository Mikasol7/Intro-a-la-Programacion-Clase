const obtener= document.getElementById ("obtener")
const tareas= document.getElementById ("tareas")

function crearTarjeta (title, completed) {
    const div= document.createElement("div")
    div.classList.add("card")
    div.innerHTML=`<span>${title}</span> <span>${completed ?"SI":"NO"}</span>`
    return div
}

fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
  .then((response) => response.json())
  .then((json) => {
    json.forEach(element => {
        const card= crearTarjeta (element.title, element.completed)
        tareas.appendChild (card)
    });
  });
