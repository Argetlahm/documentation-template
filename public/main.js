fetch("/itemNames").then(response => response.json())
.then(itemNames => {
    itemNames.forEach(itemName => {
        const img = document.createElement("img")
        img.src = `photos/${itemName}`;
        const photoArea = document.getElementsByClassName("photo-area")[0]
        photoArea.appendChild(img)
    });
});