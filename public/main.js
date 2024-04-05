fetch("/data").then(response => response.json())
.then(itemNames => {
    itemNames.forEach(itemName => {
        const img = document.createElement("img")
        img.src = `photos/${itemName}`;
        setAllAttributes(img, [["alt", itemName], ["width", 175], ["height", 175]])
        const photoArea = document.getElementsByClassName("photo-area")[0]
        photoArea.appendChild(img)
    });
}).catch((error) => {
    console.log("Error:", error)
});

// fungsi ini menambahkan multiple atribut ke 1 elemen sekaligus
function setAllAttributes(elem, props) {
    props.forEach(attrName => {
        elem.setAttribute(attrName[0], attrName[1])
    })
}

// notes: perbaiki layout (css kacau balau)