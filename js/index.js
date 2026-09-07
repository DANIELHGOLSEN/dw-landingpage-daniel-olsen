// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:

// header

let header = document.querySelector(".header")

let createHeaderDiv = createElement("div")
let createMenu = createElement("img")
createMenu.setAttribute("src", "https://placehold.co/32x32")
createMenu.setAttribute("alt", "Menu")
createHeaderDiv.append(createMenu)

let createIcon = document.createElement("img");
createIcon.setAttribute("src", "assets/cube_1.svg");
createIcon.setAttribute("alt", "BIGCAT");

header.append(createIcon, createHeaderDiv);
