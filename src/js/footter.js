const email = document.getElementById("emailInput");
const sendBtn = document.getElementById("sendBtn");
const modal = document.getElementById("subscribeModal");
const closeSpan = document.getElementById("closeModalBtn");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
sendBtn.addEventListener("click", () => {
  const value = email.value.trim();

  if (value === "") {
    alert("Будь ласка, введіть email");
    return;
  }

  if (!isValidEmail(value)) {
    alert("Будь ласка, введіть коректну email-адресу");
    return;
  }
  modal.style.display = "flex";
  email.value = "";
});

closeSpan.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});