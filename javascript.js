const grid = document.querySelector("#grid")
const btn = document.querySelector("button")
btn.addEventListener('click',(x)=>{
    let quantia = parseInt(prompt())
    grid.textContent = ''
    createDiv(grid,quantia)
})

createDiv(grid,16)

function createDiv(grid, quantia){
    let quadrado = quantia*quantia
    for (let index = 0; index < quadrado; index++) {
        const div = document.createElement('div')
        div.setAttribute('class','bloco')
        div.addEventListener("mouseenter",(x)=>{
            x.target.style.backgroundColor = "blue"
        })
        grid.appendChild(div)
    }
    
}