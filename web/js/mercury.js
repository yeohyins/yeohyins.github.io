document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('background-section');

    section.addEventListener('mouseenter', () => {
        section.style.backgroundImage = "url(img/mercury-internal.png)"; // Change to hover background image
    });

    section.addEventListener('mouseleave', () => {
        section.style.backgroundImage = "url(img/mercury-background.png)"; // Revert to default background image
    });
});