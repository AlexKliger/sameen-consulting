window.addEventListener("load", (event) => {
    createIntersectionObserver();
}, false);

function createIntersectionObserver() {
    let options = {
        root: null,
        rootMagin: "0px",
        threshold: "25%"
    };
    const observer = new IntersectionObserver(handleIntersection);

    // Observe icon cards.
    iconCards = document.querySelectorAll(".icon-card");
    iconCards.forEach(target => {
        observer.observe(target);
    });
    // Observe all p elements.
    listOfP = document.querySelectorAll("p");
    listOfP.forEach(p => {
        observer.observe(p);
    });

    sidebar = document.querySelector(".sidebar");
    observer.observe(sidebar);
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            element = entry.target;
            // Element comes into view, so add respective animation classes.
            if (element.classList.contains("icon-card")) {
                element.classList.add("animation-slide-from-right");
            } else if (element.classList.contains("sidebar")) {
                element.classList.add("animation-slide-from-left")
            } else if (element.nodeName == "P") {
                element.classList.add("animation-slide-from-bottom");
            }
        }
    });
}