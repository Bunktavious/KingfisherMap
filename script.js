// script.js
function panToSection(imageSrc, offsetX, offsetY) {
    const frame = document.getElementById('frame');
    const largeImage = document.getElementById('largeImage');

    // Change the image source to switch layers
    largeImage.src = imageSrc;

    // Wait for the image to load before setting the position
    largeImage.onload = () => {
        // Calculate the new position
        largeImage.style.left = offsetX + 'px';
        largeImage.style.top = offsetY + 'px';
    };
}
