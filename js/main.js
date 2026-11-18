
document.addEventListener("DOMContentLoaded", () => {

    // MOBILE NAVIGATION

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Open and close the mobile menu
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

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


    // JOURNEY - SHOW MORE / SHOW LESS

    const showMoreButtons = document.querySelectorAll(".show-more-btn");

    showMoreButtons.forEach(button => {

        button.addEventListener("click", () => {


            const timelineContent = button.closest(".timeline-content");
            const moreContent = timelineContent.querySelector(".timeline-more");

            const isExpanded = button.getAttribute("aria-expanded") === "true";

            moreContent.hidden = isExpanded;

            button.setAttribute("aria-expanded", String(!isExpanded));

            button.textContent = isExpanded ? "Show more" : "Show less";
        });

    });


    // Scroll-triggered animations - Journey Section

    const timelineItems = document.querySelectorAll(".timeline-item");

    if ("IntersectionObserver" in window) {

        // Enable the initial hidden state
        document.documentElement.classList.add("reveal-enabled");

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    // Stop observing once the item appears
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        // Observe every timeline milestone
        timelineItems.forEach(item => {
            observer.observe(item);
        });

    }

    // Family card flip interaction
    const familyCards = document.querySelectorAll(".family-card");

    familyCards.forEach((card) => {
        card.addEventListener("click", () => {
            const isFlipped = card.classList.toggle("is-flipped");

            card.setAttribute("aria-pressed", isFlipped);
        });
    });

    // HOBBIES - IMAGE LIGHTBOX

    const hobbyCards = document.querySelectorAll(".hobby-card");

    const hobbyLightbox = document.getElementById("hobbyLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxDescription = document.getElementById("lightboxDescription");
    const lightboxClose = document.querySelector(".lightbox-close");

    // Open the lightbox when a hobby card is clicked
    hobbyCards.forEach((card) => {

        card.addEventListener("click", () => {

            const image = card.querySelector(".hobby-image");

            // Get content from the selected card
            const title = card.dataset.title;
            const description = card.dataset.description;

            // Update the lightbox content
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightboxTitle.textContent = title;
            lightboxDescription.textContent = description;

            // Display the modal
            hobbyLightbox.showModal();

        });

    });


    // Close using the close button
    lightboxClose.addEventListener("click", () => {
        hobbyLightbox.close();
    });


    // Close when clicking outside the modal content
    hobbyLightbox.addEventListener("click", (event) => {

        if (event.target === hobbyLightbox) {
            hobbyLightbox.close();
        }

    });


    // Escape key closes the dialog natively
    // The browser handles this automatically for <dialog>

    // Footer: Dynamic copyright year
    const copyrightYear = document.getElementById("copyrightYear");

    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }


    // Footer: Back to top
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
