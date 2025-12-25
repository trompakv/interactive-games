const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

let gameStarted = false;
let gameOver = false;

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(() => {
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(() => {
    if (!gameStarted || gameOver) return;

    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    );

    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        gameOver = true;
        cactus.style.animationPlayState = "paused";
        alert("Game Over");
    }
}, 10);

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        if (!gameStarted) {
            gameStarted = true;
            cactus.style.animationPlayState = "running";
        }
        jump();
    }
});