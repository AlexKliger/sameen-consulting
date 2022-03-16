function toggleSidebar() {
    sidebar = document.getElementsByClassName("l-sidebar")[0].getElementsByTagName("header")[0];
    opaqueOverlay = document.getElementsByClassName("opaque-overlay")[0];
    if (!sidebar.classList.contains("is-responsive")) {
        sidebar.classList.add("is-responsive");
        opaqueOverlay.style.display = "none";
    } else {
        sidebar.classList.remove("is-responsive");
        opaqueOverlay.style.display = "block";
    }
}