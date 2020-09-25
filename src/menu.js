document.getElementById("menu-colap").addEventListener("click", menuToggle);
document.getElementById("close").addEventListener("click", menuToggle);

export function menuToggle() {
    var element = document.getElementById("colp");
    element.classList.toggle("view");
}
