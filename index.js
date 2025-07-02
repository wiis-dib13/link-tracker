let mylead = []
const inputEl = document.getElementById("input")
const i = document.getElementById("inpu")
const j =document.getElementById("ul-el")
const w = document.getElementById("inp")

let k=JSON.parse(localStorage.getItem("liens"))

if (k){
    mylead = k
    render()
}

w.addEventListener("dblclick",function(){
    localStorage.clear()
    mylead = []
    render()  
})

i.addEventListener("click" ,function () {

mylead.push(inputEl.value)
inputEl.value = " "

localStorage.setItem("liens", JSON.stringify(mylead))


render()

console.log(localStorage.getItem("liens"))
})

function render(){
let listItems = " "

for(let i=0;i<mylead.length;i++){
    
    listItems +=`
    <li>
    <a target='_blank' href='${mylead[i]}'>
        ${mylead[i]}
    </a>
    </li> 
    `
}

j.innerHTML = listItems
}