document.addEventListener("DOMContentLoaded", function() {
    console.log("Gallery Page Loaded");

    const images = document.querySelectorAll(".gallery-grid img");

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

            modal.addEventListener("click", function(event) {
                if (event.target === modal) {
                    modal.remove();
                }
            });
        });
    });

    // Adjust Go Back Button on Mobile
    function adjustBackButton() {
        const backButton = document.querySelector(".back-home");
        if (window.innerWidth <= 768) {
            backButton.style.position = "relative";
            backButton.style.display = "block";
            backButton.style.textAlign = "center";
            backButton.style.margin = "10px auto";
        } else {
            backButton.style.position = "absolute";
            backButton.style.left = "10px";
            backButton.style.top = "10px";
        }
    }

    adjustBackButton();
    window.addEventListener("resize", adjustBackButton);

    // Dripping Effect Animation for Header
    const header = document.querySelector("header");
    for (let i = 0; i < 10; i++) {
        let drop = document.createElement("div");
        drop.classList.add("drip");
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        drop.style.width = "10px";
        drop.style.height = "15px";
        drop.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
        drop.style.position = "absolute";
        drop.style.top = "0";
        drop.style.borderRadius = "50%";
        drop.style.animation = "drip-animation 2s infinite linear";
        header.appendChild(drop);
    }
});
