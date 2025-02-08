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
});
