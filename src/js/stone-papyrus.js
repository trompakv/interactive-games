// Clean single implementation for stone-scissors-paper
document.addEventListener("DOMContentLoaded", () => {
  const choices = Array.from(document.querySelectorAll(".choice"));
  const resultEl = document.querySelector(".result");
  const revealBtn = document.querySelector(".reveal-btn");
  const revealValue = document.querySelector(".reveal-value");
  const userScoreEl = document.getElementById("userScore");
  const compScoreEl = document.getElementById("compScore");

  const names = { stone: "Камінь", scissors: "Ножиці", paper: "Папір" };

  let lastComp = null;
  let scores = {
    user: Number(userScoreEl?.textContent || 0),
    comp: Number(compScoreEl?.textContent || 0),
  };

  function rnd() {
    return ["stone", "scissors", "paper"][Math.floor(Math.random() * 3)];
  }

  function decide(user, comp) {
    if (user === comp) return "draw";
    if (
      (user === "stone" && comp === "scissors") ||
      (user === "scissors" && comp === "paper") ||
      (user === "paper" && comp === "stone")
    )
      return "win";
    return "lose";
  }

  function updateScores() {
    if (userScoreEl) userScoreEl.textContent = scores.user;
    if (compScoreEl) compScoreEl.textContent = scores.comp;
  }

  function setResult(outcome) {
    if (!resultEl) return;
    resultEl.classList.remove("win", "lose", "draw");
    resultEl.classList.add(outcome);
    if (outcome === "win") resultEl.textContent = "Ви виграли раунд!";
    else if (outcome === "lose") resultEl.textContent = "Комп’ютер виграв раунд!";
    else resultEl.textContent = "Нічия"; 
  }

  function clearReveal() {
    if (revealBtn) revealBtn.classList.remove("revealed");
    if (revealValue) revealValue.textContent = "---";
  }

  function clearSelection() {
    choices.forEach((c) => c.classList.remove("selected"));
  }

  choices.forEach((btn) =>
    btn.addEventListener("click", () => {
      const userChoice = btn.dataset.choice;
      if (!userChoice) return;

      clearSelection();
      btn.classList.add("selected");

      // avoid draws: re-roll computer choice until it's different from userChoice
      let compChoice = rnd();
      while (compChoice === userChoice) {
        compChoice = rnd();
      }
      lastComp = compChoice;

      const outcome = decide(userChoice, compChoice);
      if (outcome === "win") scores.user += 1;
      if (outcome === "lose") scores.comp += 1;

      setResult(outcome);
      updateScores();
      clearReveal();
    })
  );

  if (revealBtn) {
    revealBtn.addEventListener("click", () => {
      if (!lastComp) {
        // nothing chosen yet — show placeholder briefly
        revealBtn.classList.add("revealed");
        revealValue.textContent = "---";
        setTimeout(() => revealBtn.classList.remove("revealed"), 700);
        return;
      }

      const isRevealed = revealBtn.classList.toggle("revealed");
      revealValue.textContent = isRevealed ? names[lastComp] : "---";
    });
  }

  // init
  updateScores();
  clearReveal();
});
