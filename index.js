// import { readdir } from "node:fs/promises"
const fs = require("fs")
const express = require('express');
const app = express();

app.use(express.static("public")); // serve files from the public directory
app.get("/itemNames", (req, res) => {
    const folderPath = "photos"
    const itemNames = fs.readdirSync(folderPath)
    res.json(itemNames) 
})

app.listen(3000, () => console.log("server 3000"))
// export module itemNames

// for (let i = 0; i < itemNames.length; i++) {
//     const element = itemNames[i];
//     let photoArea = document.getElementsByClassName("photo-area")[0]
//     const imgElem = document.createElement("img")
//     imgElem.setAttribute("src", "photos/" + element)
//     console.log(imgElem.getAttribute("src"))
//     imgElem.setAttribute("alt", element)
//     photoArea.appendChild(imgElem)
// }

// touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status