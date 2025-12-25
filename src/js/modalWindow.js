window.addEventListener("load", () => {
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content");
    const closeBtn = modal.querySelector(".close");
    const input = modal.querySelector(".name-input");
    const saveBtn = modal.querySelector(".save-btn");

    setTimeout(() => {
        modal.style.display = "flex";
    }, 3000);

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    saveBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.getElementById("username").textContent = input.value;
    });

    modalContent.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
