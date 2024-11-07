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
const footer = document.querySelector("footer");

// Create and delete hamburger function
function manageHamburger() {
    const isHamburger = document.querySelector(".hamburger");
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (!isHamburger) {
            const hamburger = document.createElement("div");
            hamburger.classList.add("hamburger");

            const btn = document.createElement("button");
            btn.classList.add("hamburgerbtn");

            for (let i = 0; i < 2; i++) {
                const span = document.createElement("span");
                btn.appendChild(span);
            }

            hamburger.appendChild(btn);
            menu.classList.add("hide");
            header_contact.classList.add("hide");
            hamburger.appendChild(menu);
            top_left.appendChild(hamburger);

            // Event listener for button
            btn.addEventListener("click", () => {
                menu.classList.toggle("hide");
                header_contact.classList.toggle("hide");
                if (menu.classList.contains('hide')) {
                    body.style.backgroundColor = "";
                    topheader.style.background = "";
                    main.classList.remove("hide");
                    language.classList.remove("hide");
                    hamburger.classList.remove("open"); 
                    hero_section.classList.remove("hide");
                    footer.classList.remove("hide");
                    
                } else {
                    body.style.backgroundColor = 'rgb(22, 36, 36)';
                    topheader.style.backgroundColor = 'rgb(22, 36, 36)';
                    main.classList.add("hide");
                    language.classList.add("hide");
                    hamburger.classList.add("open"); 
                    hero_section.classList.add("hide");
                    footer.classList.add("hide");
                }
            });
        }
    } else {
        if (isHamburger) {
            isHamburger.remove();
            menu.classList.remove("hide");
            top_left.appendChild(menu);
        }
    }
}

// Change logo function
function changeLogo() {
    const logos_image = document.getElementById("logos_image");
    if (window.matchMedia("(max-width: 800px)").matches) {
        logos_image.setAttribute('src', 'SolanaLOGO.png');
        header_pics.classList.add("hide");
    } else {
        logos_image.setAttribute('src', 'solana_website_logo.png');
        header_pics.classList.remove("hide");
        body.style.backgroundColor = "";
        topheader.style.background = "";
    }
}

// Function to run when resizing or initially loading the page
function setupResponsiveElements() {
    manageHamburger();
    changeLogo();
}

// Event listeners for dynamic resizing
window.addEventListener("resize", setupResponsiveElements);
setupResponsiveElements();






