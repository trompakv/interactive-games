window.addEventListener("load", () => {
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content");
    const closeBtn = modal.querySelector(".close");

    setTimeout(() => {
        modal.style.display = "flex";
    }, 3000);

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modalContent.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
