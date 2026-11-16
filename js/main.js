
// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile menu
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    // Update accessibility state
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Close menu when Escape is pressed
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});
