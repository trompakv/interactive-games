const computerNum = Math.floor(Math.random() * 10) + 1;

const inputBox = document.getElementById("enterNum");

const result = document.createElement("p");
document.body.appendChild(result);


function checkGuess() {
const userGuess = Number(inputBox.value);

if (isNaN(userGuess)) {
    result.textContent = `недійсний вхід`;
    result.style.color = 'yellow';
} else if (userGuess === computerNum) {
    result.textContent = `Вітаю, ви вгадали число! ${computerNum}`;
    result.style.color = 'green';
} else if (userGuess < computerNum) {
    result.textContent = `Ні, число більше. Спробуйте ще раз.`;
    result.style.color = 'orange';
} else {
    result.textContent = `Ні, число менше. Спробуйте ще раз.`;
    result.style.color = 'orange';
}
}

const onInputBoxKeydown = function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }}
    
inputBox.addEventListener('keydown', onInputBoxKeydown)