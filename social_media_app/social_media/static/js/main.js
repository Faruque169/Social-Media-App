document.addEventListener("DOMContentLoaded", function () {
    // Auto-hide Django messages after 3 seconds
    let messages = document.querySelectorAll(".message");
    messages.forEach((msg) => {
        setTimeout(() => {
            msg.style.opacity = "0";
            setTimeout(() => msg.remove(), 500);
        }, 3000);
    });

    // Toggle navbar menu (if needed for responsive design)
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Confirm before deleting a post
    let deleteLinks = document.querySelectorAll(".delete-post");
    deleteLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            if (!confirm("Are you sure you want to delete this post?")) {
                event.preventDefault();
            }
        });
    });
});
