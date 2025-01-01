document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section'); // Target the <section> element
    const [firstDiv, secondDiv] = section.children; // Destructure to get the child <div> elements

    section.addEventListener('mouseenter', () => {
        secondDiv.style.opacity = 1; // Show the second background on hover
        secondDiv.style.zIndex = 2; // Bring it to the front
    });

    section.addEventListener('mouseleave', () => {
        secondDiv.style.opacity = 0; // Hide the second background
        secondDiv.style.zIndex = 0; // Send it to the back
    });
});