const result = document.querySelector(".birthday__checker__result");
const button = document.querySelector(".birthday__checker__search");
const input = document.querySelector(".birthday__checker__year");

button.addEventListener("click", check);

function check(e) {
    e.preventDefault();
    const value = input.value;
    if ((value % 4 == 0 || value % 400 == 0) && value % 100 != 0) {
        result.textContent = "Ви народилися у високосний рік!";
        result.style.color = "#039900";
    } else {
        result.textContent = "Ви народилися у не високосний рік!";
        result.style.color = "#b40000ff";
    }
}
