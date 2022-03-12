window.addEventListener("load", (event) => {
    createIntersectionObserver();
}, false);

function createIntersectionObserver() {
    let options = {
        root: null,
        rootMagin: "20px",
        threshold: "0"
    };
    const observer = new IntersectionObserver(handleIntersection);

    // All elements that are to be animated must have the animated class as a hook for JS.
    animatedElements = document.querySelectorAll(".animated");
    animatedElements.forEach(elem => {
        observer.observe(elem);
    })
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("animated")
            entry.target.classList.add("animate")
        }
    });
}