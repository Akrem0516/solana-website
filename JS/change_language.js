
    const languageButton = document.querySelector('.languagebtn');
    const elementsToTranslate = document.querySelectorAll('[data-lang-fr], [data-lang-ar]');

    let currentLang = 'fr'; // Default language

    languageButton.addEventListener('click', () => {
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

