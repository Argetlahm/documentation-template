fetch("/data").then(response => response.json())
.then(itemNames => {
    itemNames.forEach(itemName => {
        const img = document.createElement("img")
        img.src = `photos/${itemName}`;
        const photoArea = document.getElementsByClassName("photo-area")[0]
        photoArea.appendChild(img)
        console.log("hmmm")
    });
}).catch((error) => {
    console.log("Error:", error)
});



// notes: perbaiki layout (css kacau balau)