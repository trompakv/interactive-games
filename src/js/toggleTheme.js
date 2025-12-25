const root = document.documentElement;
const button = document.getElementById("changeThemeButton");

button.addEventListener("click", toggleTheme);

function toggleTheme() {
    const isDark = root.getAttribute("data-theme") === "dark";
    root.setAttribute("data-theme", isDark ? "light" : "dark");
    button.setAttribute("data-theme", isDark ? "light" : "dark");
}
