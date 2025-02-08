document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded");

    // Image Modal Functionality
    const images = document.querySelectorAll(".art-grid img");
    images.forEach(img => {
        img.addEventListener("click", function() {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="Artwork">
                </div>
            `;
            document.body.appendChild(modal);

            modal.querySelector(".close").addEventListener("click", function() {
                modal.remove();
            });
        });
    });

    // Mobile Menu Toggle
    const nav = document.querySelector("nav ul");
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    document.querySelector("nav").prepend(menuToggle);

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("active");
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const section = document.querySelector(this.getAttribute("href"));
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});