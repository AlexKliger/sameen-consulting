window.onscroll = function() {updateNav()};
scrollTop = document.documentElement.scrollTop;
// Get the top of each section header's bounding rectangle and subtract by scrollTop.
// Need to add by scrollTop to fix refresh bug. Tops of rectangles are defined relative
// to scrollTop when page refreshes.
var servicesTop = document.getElementById("services").getBoundingClientRect().top + scrollTop;
var aboutTop = document.getElementById("about").getBoundingClientRect().top + scrollTop;
var contactTop = document.getElementById("contact").getBoundingClientRect().top + scrollTop;
// Get nav links.
var navLinks = document.getElementsByClassName("nav-list")[0].getElementsByTagName("a")
var services = navLinks[0];
var about = navLinks[1];
var contact = navLinks[2];

function updateNav() {
    // Get nav links.
    var navLinks = document.getElementsByClassName("nav-list")[0].getElementsByTagName("a")
    var services = navLinks[0];
    var about = navLinks[1];
    var contact = navLinks[2];

    scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= servicesTop && scrollTop < aboutTop) {
        // Scrolling from top of services to top of about section.
        if (!services.classList.contains("is-active")) {
            clearActive(navLinks);
            services.classList.add("is-active");
        }
    } else if (scrollTop >= aboutTop && scrollTop < contactTop) {
        // Scrolling from about section to top of contact section.
        if (!about.classList.contains("is-active")) {
            clearActive(navLinks);
            about.classList.add("is-active");
        }
    } else if (scrollTop >= contactTop) {
        // Scrolling from contact section to bottom of content.
        if (!contact.classList.contains("is-active")) {
            clearActive(navLinks);
            contact.classList.add("is-active");
        }
    }
}

function clearActive(navLinks) {
    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("is-active");
    }
}

updateNav();