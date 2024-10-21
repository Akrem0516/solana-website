
    const languageButton = document.querySelector('.languagebtn');
    const elementsToTranslate = document.querySelectorAll('[data-lang-fr], [data-lang-ar]');
    const bodyelement = document.querySelector("body");

    let currentLang = 'fr'; // Default language
    bodyelement.dir = "";

    languageButton.addEventListener('click', () => {
        // Toggle rtl 
        if(bodyelement.dir === ""){
            bodyelement.dir = "rtl";
        }else{
            bodyelement.dir = "";
        }
        // Toggle language
        currentLang = currentLang === 'fr' ? 'ar' : 'fr';

        // Update text content based on the selected language
        elementsToTranslate.forEach(element => {
            const langText = element.getAttribute(`data-lang-${currentLang}`);
            if (langText) {
                element.textContent = langText;
            }
        });

        // Update language button text
        languageButton.textContent = currentLang === 'fr' ? 'ع' : 'FR';
    });


   

    
