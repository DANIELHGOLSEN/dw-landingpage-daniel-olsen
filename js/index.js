// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:

// header

let header = document.querySelector(".header")

let createHeaderDiv = document.createElement("div")
createHeaderDiv.classList.add("headerDiv")

let createMenu = document.createElement("img")
createMenu.setAttribute("src", "https://placehold.co/32x32")
createMenu.setAttribute("alt", "Menu")
createMenu.classList.add("headerMenu")

createHeaderDiv.append(createMenu)

let createIcon = document.createElement("img");
createIcon.setAttribute("src", "assets/cube_1.svg");
createIcon.setAttribute("alt", "BIGCAT");
createIcon.classList.add("headerIcon")

header.append(createIcon, createHeaderDiv);


// Hero
let elementHero = document.querySelector(".hero")

let createHeroImg = document.createElement("img")
createHeroImg.setAttribute("src", hero.image)
createHeroImg.setAttribute("alt", "Hero")
createHeroImg.classList.add("heroImg")

let createHeroDiv = document.createElement("div")
createHeroDiv.classList.add("heroDiv")

let createH1 = document.createElement("h1")
createH1.textContent = hero.headline

let createHeroP = document.createElement("p")
createHeroP.textContent = hero.copy

let createHeroBtn = document.createElement("a")
let createHeroBtnP = document.createElement("p")
createHeroBtnP.textContent = "Explore"
let createHeroBtnIcon = document.createElement("img")
createHeroBtnIcon.setAttribute("src", hero.icon)
createHeroBtnIcon.setAttribute("alt", "Button globe icon")
createHeroBtn.classList.add("heroBtn")

createHeroBtn.append(createHeroBtnIcon, createHeroBtnP)

createHeroDiv.append(createH1, createHeroP, createHeroBtn)

elementHero.append(createHeroDiv, createHeroImg)