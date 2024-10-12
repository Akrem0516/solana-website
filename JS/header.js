const top_left = document.querySelector(".top_left");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const topheader = document.querySelector(".top");
const logo = document.querySelector(".logo");
const language = document.querySelector(".language");
const header_contact = document.querySelector(".header_contact");
const main = document.querySelector("main");
const hero_section = document.querySelector(".hero_section");
const header_pics = document.querySelector(".header_pics");


// Create and delete hamburger function
function createdeleteHamburger(x, y, existingHamburger3) {
    if (x.matches && !existingHamburger3) { // If media query matches
        const hamburger = document.createElement("div");
        hamburger.classList.add("hamburger");
        
        const btn = document.createElement("button"); // Create button for hamburger
        btn.classList.add("hamburgerbtn");
        
        for (let i = 0; i < 2; i++) { // Create three spans for hamburger bars
            const span = document.createElement("span");
            btn.appendChild(span);
        }
        
        hamburger.appendChild(btn);
        menu.classList.add("hide");
        hamburger.appendChild(menu);
        top_left.appendChild(hamburger);

        // Add event listener for button
        btn.addEventListener("click", () => {
            menu.classList.toggle("hide");  // This will toggle the class on and off
            if (menu.classList.contains('hide')) { // change the body and top colors
                body.style.backgroundColor = "";
                topheader.style.background = "";
                main.classList.remove("hide");
                language.classList.remove("hide");
                hamburger.classList.remove("open"); 
                hero_section.classList.remove("hide");
            } else {
                body.style.backgroundColor = 'rgb(22, 36, 36)';
                topheader.style.backgroundColor = 'rgb(22, 36, 36)';
                main.classList.add("hide");
                language.classList.add("hide");
                hamburger.classList.add("open"); 
                hero_section.classList.add("hide");
            }
        });
        
    } else if (y.matches && existingHamburger3) {
        existingHamburger3.remove();
        menu.classList.remove("hide");
        top_left.appendChild(menu);
    }
}






// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 800px)");
var y = window.matchMedia("(min-width: 800px)");

// Call listener function at run time
createdeleteHamburger(x, y, document.querySelector(".hamburger"));

// Attach listener function on state changes
x.addEventListener("change", () => {
    const existingHamburger2 = document.querySelector(".hamburger");
    createdeleteHamburger(x, y, existingHamburger2);
});





const langbtn = document.querySelector(".languagebtn");
const langbtn1 = document.querySelector(".languagebtn1");
const langbtn2 = document.querySelector(".languagebtn2");
const langbtn3 = document.querySelector(".languagebtn3");
const langs = document.querySelector(".languages");



// open and close language selector
function openclose(a, b, c) {
    a.addEventListener("click", () => {
        b.classList.toggle("hide");
        c.classList.toggle("hide");
    });
}

openclose(langbtn, langbtn, langs);
openclose(langbtn1, langs, langbtn);
openclose(langbtn2, langs, langbtn);
openclose(langbtn3, langs, langbtn);

// change the language
function LanguageChanger(a, b) {
    a.addEventListener("click", () => {
        b.textContent = a.textContent;
    });
}

LanguageChanger(langbtn1, langbtn);
LanguageChanger(langbtn2, langbtn);
LanguageChanger(langbtn3, langbtn);




//change the logo when changing the width
const logos_image = document.getElementById("logos_image");
function changelogo(x) {
    if (x.matches) { // If media query matches
      logos_image.setAttribute('src','SolanaLOGO.png');
      header_contact.classList.add("hide");
      header_pics.classList.add("hide");
    } else {
      logos_image.setAttribute('src','solana_website_logo.png');
      header_contact.classList.remove("hide");
      header_pics.classList.remove("hide");
      body.style.backgroundColor = "";
      topheader.style.background = "";
    }
  }

// Call function at a run time
changelogo(x);


// Call the function when changing the width
x.addEventListener("change", function() {
    changelogo(x);
});