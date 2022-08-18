body = document.getElementById("body");
toggleBtns = document.getElementsByClassName("btn-toggle-header")
for (let toggleBtn of toggleBtns) {
    toggleBtn.addEventListener("click", toggleHeader);
}
header.addEventListener("click", toggleHeader);

function toggleHeader() {
    if (body.classList.contains("header-hidden")) {
        body.classList.remove("header-hidden");
    } else {
        body.classList.add("header-hidden");
    }
}