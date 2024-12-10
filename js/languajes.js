// Sistema Multilenguaje
class LanguageManager {
    constructor() {
        this.currentLang = 'es';
        this.translations = {
            es: {
                welcome: "Bienvenido a The Gilded Manor",
                slogan: "Donde la tradición se encuentra con la opulencia",
                booking: "Reservar Ahora",
                gallery: "Galería",
                services: "Servicios",
                contact: "Contacto",
                rooms: "Habitaciones",
                // Añade más traducciones según necesites
            },
            en: {
                welcome: "Welcome to The Gilded Manor",
                slogan: "Where tradition meets opulence",
                booking: "Book Now",
                gallery: "Gallery",
                services: "Services",
                contact: "Contact",
                rooms: "Rooms",
                // Añade más traducciones según necesites
            },
            fr: {
                welcome: "Bienvenue à The Gilded Manor",
                slogan: "Là où la tradition rencontre l'opulence",
                booking: "Réserver",
                gallery: "Galerie",
                services: "Services",
                contact: "Contact",
                rooms: "Chambres",
                // Añade más traducciones según necesites
            }
        };

        this.initLanguageSelector();
    }

    initLanguageSelector() {
        const selector = document.querySelector('.language-selector');
        if (selector) {
            selector.addEventListener('click', () => {
                document.querySelector('.language-list').classList.toggle('show');
            });

            document.querySelectorAll('.language-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    const lang = e.currentTarget.dataset.lang;
                    this.changeLanguage(lang);
                });
            });

            // Cerrar el selector cuando se hace clic fuera
            document.addEventListener('click', (e) => {
                if (!selector.contains(e.target)) {
                    document.querySelector('.language-list').classList.remove('show');
                }
            });
        }
    }

    changeLanguage(lang) {
        document.body.classList.add('translating');
        this.currentLang = lang;

        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (this.translations[lang][key]) {
                element.textContent = this.translations[lang][key];
            }
        });

        setTimeout(() => {
            document.body.classList.remove('translating');
        }, 300);

        // Actualizar el botón del selector
        const button = document.querySelector('.language-button');
        button.innerHTML = `
            <img src="assets/flags/${lang}.svg" alt="${lang}" class="language-icon">
            <span>${lang.toUpperCase()}</span>
        `;

        document.querySelector('.language-list').classList.remove('show');
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    const gallery = new GalleryManager();
    const language = new LanguageManager();
});