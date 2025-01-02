document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('background-section');

    // Array of background images to switch between
    const images = [
        'img/mercury-background.png',
        'img/mercury-internal.png'
    ];

    let currentImageIndex = 0;  // Track the current image

    // Function to change background image
    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;  // Loop through the images array
        section.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    }

    // Change background image every 3 seconds
    setInterval(changeBackgroundImage, 3000);
});