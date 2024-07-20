function panToSection(imageSrc, offsetX, offsetY, tableId) {
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

    // Hide all tables
    const tables = document.querySelectorAll('.info-table');
    tables.forEach(table => {
        table.style.display = 'none';
    });

    // Show the selected table
    const selectedTable = document.getElementById(tableId);
    if (selectedTable) {
        selectedTable.style.display = 'table';
    }
}
