window.addEventListener("load", (event) => {
    createIntersectionObserver();
}, false);

function createIntersectionObserver() {
    let optionsAnim = {
        root: null,
        rootMagin: "20px",
        threshold: "0"
    };
    const animObserver = new IntersectionObserver(handleIntersection);

    // All elements that are to be animated must have the animated class as a hook for JS.
    animatedElements = document.querySelectorAll(".animated");
    animatedElements.forEach(elem => {
        animObserver.observe(elem);
    })

    // Observe main section elements to correctly highlight nav links.
    let optionsSection = {
        root: null,
        rootMagin: "0px",
        threshold: .2
    };
    const sectionObserver = new IntersectionObserver(handleIntersection2, optionsSection);
    var mainSections = document.querySelectorAll(".main-section")
    mainSections.forEach(elem => {
        sectionObserver.observe(elem);
    })
}

function handleIntersection(entries, animObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("animated")
            entry.target.classList.add("animate")
        }
    });
}

function handleIntersection2(entries, sectionObserver) {
    var navLinks = document.getElementsByClassName("nav-primary")[0].getElementsByTagName("a")
    var services = navLinks[0];
    var about = navLinks[1];
    var contact = navLinks[2];
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            section = entry.target;
            if (section.id == "services") {
                if (!section.classList.contains("is-active")) {
                    clearActive(navLinks);
                    services.classList.add("is-active");
                }
            } else if (entry.target.id == "about") {
                if (!section.classList.contains("is-active")) {
                    clearActive(navLinks);
                    about.classList.add("is-active");
                }
            } else if (entry.target.id == "contact") {
                if (!section.classList.contains("is-active")) {
                    clearActive(navLinks);
                    contact.classList.add("is-active");
                }
            }
        }
    })
}

function clearActive(navLinks) {
    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("is-active");
    }
}