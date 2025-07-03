let mylead = []
const inputEl = document.getElementById("input")
const i = document.getElementById("inpu")
const j =document.getElementById("ul-el")
const w = document.getElementById("inp")
const tab = document.getElementById("tab")


let k=JSON.parse(localStorage.getItem("liens"))

if (k){
    mylead = k
    render(mylead)
}

w.addEventListener("dblclick",function(){
    localStorage.clear()
    mylead = []
    render(mylead)  
})
 

tab.addEventListener("click",function(){

 chrome.tabs.query({active : true, currentWindow :true}, function(tabs) {
  mylead.push(tabs[0].url)
  localStorage.setItem("myleads", JSON.stringify(mylead))
  render(mylead)
    })
})


i.addEventListener("click" ,function () {

mylead.push(inputEl.value)
inputEl.value = " "

localStorage.setItem("liens", JSON.stringify(mylead))


render(mylead)

console.log(localStorage.getItem("liens"))
})

function render(lead){
let listItems = " "

for(let i=0;i<lead.length;i++){
    
    listItems +=`
    <li>
    <a target='_blank' href='${lead[i]}'>
        ${lead[i]}
    </a>
    </li> 
    `
}

j.innerHTML = listItems
}
