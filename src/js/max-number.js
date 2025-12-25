const maxNumberBox = document.querySelector("#max-number")
console.log(maxNumberBox)
const containerElement = document.createElement("div")
//console.dir(containerElement)
containerElement.classList.add("container")
console.log(containerElement)

maxNumberBox.appendChild(containerElement)
console.log(maxNumberBox)


const resultNumber = document.createElement("h2")
resultNumber.textContent = "Введіть 3 числа"
containerElement.appendChild(resultNumber)
console.log(maxNumberBox)
resultNumber.classList.add("section-title")
console.log(resultNumber)

const containerElementTwo = document.createElement("div")
console.log(containerElementTwo)

const inputList = document.createElement("ul")
containerElement.appendChild(inputList)
console.log(maxNumberBox)

const resultText = document.createElement("p")
resultText.textContent = "Найбільше число, яке ви ввели - (число)"
containerElement.appendChild(resultText)
console.log(maxNumberBox)
resultText.classList.add("section-title")
console.log(resultText)

let inputElement = []
let inputValue = []
let maxNumber = 0
for(let i = 0;i < 3; i += 1){
inputElement[i] = document.createElement("li")
inputList.appendChild(inputElement[i])

inputValue[i] = document.createElement("input")
inputValue[i].type = "number"
inputValue[i].placeholder = "Введіть число"

inputElement[i].appendChild(inputValue[i])

inputValue[i].addEventListener("change", (event)=>{
     maxNumber = Math.max(maxNumber,event.target.value)
    resultText.textContent = "Найбільше число, яке ви ввели - " + String(maxNumber)

})
}