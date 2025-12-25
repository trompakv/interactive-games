const footballBox = document.querySelector("#football")
console.log(footballBox)

const containerElement = document.createElement("div")
containerElement.classList.add("container");
console.log(containerElement)

footballBox.appendChild(containerElement)
console.log(footballBox)

const footBall = document.createElement("h2")
footBall.textContent = "Футбол"
containerElement.appendChild(footBall)
console.log(footballBox)
footBall.classList.add("section-title")
console.log(footBall)

const field = document.createElement("div")
console.log(footballBox)
field.classList.add("field")
console.log(field)
containerElement.appendChild(field)
console.log(footballBox)

const ball = document.createElement("div")
ball.classList.add("ball")
console.log(ball)
field.appendChild(ball)
console.log(field)

field.addEventListener("click", movingBall)
function movingBall(event){
console.log(event)
ball.style.left = `${event.offsetX}px`
ball.style.top = `${event.offsetY}px`

}
