function toggleSidebar() {
    sidebar = document.getElementsByClassName("l-sidebar")[0];
    opaqueOverlay = document.getElementsByClassName("opaque-overlay")[0];
    if (!sidebar.classList.contains("is-responsive")) {
        console.log("sidebar off");
        sidebar.classList.add("is-responsive");
        opaqueOverlay.style.display = "none";
    } else {
        console.log("sidebar on");
        sidebar.classList.remove("is-responsive");
        opaqueOverlay.style.display = "block";
    }
}