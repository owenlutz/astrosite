document.addEventListener("DOMContentLoaded", () => {
    const currentPathname = window.location.pathname;
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");
    const blogLink = document.querySelector(".blogLink");
    const projLink = document.querySelector(".projLink");

    let activeLink = null;

    navLinks.forEach((link) => {
        const linkPathname = new URL(link.href).pathname;

        if (linkPathname === currentPathname) {
            link.classList.add("current");
            activeLink = link;
        }
    });

    if (currentPathname.includes("/posts/")) {
        blogLink.classList.add("current");
        activeLink = blogLink;
    }
    else if (currentPathname.includes("/project/")) {
        projLink.classList.add("current");
        activeLink = projLink;
    }

    // Click the visible/current link to open or close the menu.
    activeLink?.addEventListener("click", (event) => {
        if (window.innerWidth <= 768) {
            event.preventDefault();
            nav.classList.toggle("is-open");
        }
    });

    // Click anywhere outside the navigation to close it.
    document.addEventListener("click", (event) => {
        if (
            window.innerWidth <= 768 &&
            !nav.contains(event.target)
        ) {
            nav.classList.remove("is-open");
        }
    });
});