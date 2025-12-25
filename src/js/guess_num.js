let computerNum = Math.floor(Math.random() * 10) + 1;

const inputBox = document.querySelector(".guess_num__number");
const btn = document.querySelector(".guess_num__search");

const result = document.querySelector(".guess_num__result");

function checkGuess() {
    const userGuess = Number(inputBox.value);

    if (isNaN(userGuess)) {
        result.textContent = `недійсний вхід`;
        result.style.color = "yellow";
    } else if (userGuess === computerNum) {
        result.textContent = `Вітаю, ви вгадали число! ${computerNum}`;
        result.style.color = "green";

        computerNum = Math.floor(Math.random() * 10) + 1;
    } else if (userGuess < computerNum) {
        result.textContent = `Ні, число більше. Спробуйте ще раз.`;
        result.style.color = "orange";
    } else {
        result.textContent = `Ні, число менше. Спробуйте ще раз.`;
        result.style.color = "orange";
    }
}

const onInputBoxKeydown = function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
};

inputBox.addEventListener("keydown", onInputBoxKeydown);
btn.addEventListener("click", checkGuess);
