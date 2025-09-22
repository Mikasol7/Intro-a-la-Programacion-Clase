const submit =document.getElementById("submit")
console.log(submit.target)
const input =document.getElementById("input")
console.log(input.target)
submit.onclick =(e) =>{
    console.log(input.value)
    e.preventDefault()
}