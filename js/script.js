document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animations on Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Preloader
    window.onload = function() {
        document.body.classList.remove('loading');
        document.querySelector('.preloader').style.display = 'none';
    };

    // Cambio de idioma
    const translations = {
        en: {
            hero: {
                welcome: 'Welcome to',
                tagline: 'A legacy of elegance since 1892',
                explore: 'Discover Suites',
                history: 'Our History'
            },
            nav: {
                history: 'History',
                gallery: 'Gallery',
                services: 'Services',
                reservations: 'Reservations',
                cards: 'Cards',
                contact: 'Contact'
            },
            sections: {
                legacy: 'Our Legacy',
                excellence: 'A History of Excellence',
                experiences: 'Unique Experiences',
                unforgettable: 'Unforgettable Moments',
                events: 'Special Events',
                memorable: 'Memorable Celebrations',
                contact: 'Contact Us',
                stay_in_touch: 'Stay in Touch'
            }
        },
        es: {
            hero: {
                welcome: 'Bienvenido a',
                tagline: 'Un legado de elegancia desde 1892',
                explore: 'Descubrir Suites',
                history: 'Nuestra Historia'
            },
            nav: {
                history: 'Historia',
                gallery: 'Galería',
                services: 'Servicios',
                reservations: 'Reservaciones',
                cards: 'Tarjetas',
                contact: 'Contacto'
            },
            sections: {
                legacy: 'Nuestro Legado',
                excellence: 'Una Historia de Excelencia',
                experiences: 'Experiencias Únicas',
                unforgettable: 'Momentos Inolvidables',
                events: 'Eventos Especiales',
                memorable: 'Celebraciones Memorables',
                contact: 'Contáctanos',
                stay_in_touch: 'Mantente en Contacto'
            }
        },
        fr: {
            hero: {
                welcome: 'Bienvenue à',
                tagline: 'Un héritage d\'élégance depuis 1892',
                explore: 'Découvrir Suites',
                history: 'Notre Histoire'
            },
            nav: {
                history: 'Histoire',
                gallery: 'Galerie',
                services: 'Services',
                reservations: 'Réservations',
                cards: 'Cartes',
                contact: 'Contact'
            },
            sections: {
                legacy: 'Notre Héritage',
                excellence: 'Une Histoire d\'Excellence',
                experiences: 'Expériences Uniques',
                unforgettable: 'Moments Inoubliables',
                events: 'Événements Spéciaux',
                memorable: 'Célébrations Mémorables',
                contact: 'Contactez Nous',
                stay_in_touch: 'Restez en Contact'
            }
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const keys = el.dataset.translate.split('.');
            let translation = translations[lang];
            keys.forEach(key => {
                translation = translation[key];
            });
            el.textContent = translation;
        });
    }

    document.getElementById('languageSelect').addEventListener('change', function() {
        changeLanguage(this.value);
    });

    // Menú móvil
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        mobileMenuToggle.classList.toggle('open');
    });

    // Inicializar Swiper (para carrusel de eventos)
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animations on Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Preloader
    window.onload = function() {
        document.body.classList.remove('loading');
        document.querySelector('.preloader').style.display = 'none';
    };

    // Cambio de idioma
    const translations = {
        en: {
            hero: {
                welcome: 'Welcome to',
                tagline: 'A legacy of elegance since 1892',
                explore: 'Discover Suites',
                history: 'Our History'
            },
            nav: {
                history: 'History',
                gallery: 'Gallery',
                services: 'Services',
                reservations: 'Reservations',
                cards: 'Cards',
                contact: 'Contact'
            },
            sections: {
                legacy: 'Our Legacy',
                excellence: 'A History of Excellence',
                experiences: 'Unique Experiences',
                unforgettable: 'Unforgettable Moments',
                events: 'Special Events',
                memorable: 'Memorable Celebrations',
                contact: 'Contact Us',
                stay_in_touch: 'Stay in Touch'
            },
            form: {
                name: 'Name:',
                email: 'Email:',
                message: 'Message:',
                send_message: 'Send Message'
            }
        },
        es: {
            hero: {
                welcome: 'Bienvenido a',
                tagline: 'Un legado de elegancia desde 1892',
                explore: 'Descubrir Suites',
                history: 'Nuestra Historia'
            },
            nav: {
                history: 'Historia',
                gallery: 'Galería',
                services: 'Servicios',
                reservations: 'Reservaciones',
                cards: 'Tarjetas',
                contact: 'Contacto'
            },
            sections: {
                legacy: 'Nuestro Legado',
                excellence: 'Una Historia de Excelencia',
                experiences: 'Experiencias Únicas',
                unforgettable: 'Momentos Inolvidables',
                events: 'Eventos Especiales',
                memorable: 'Celebraciones Memorables',
                contact: 'Contáctanos',
                stay_in_touch: 'Mantente en Contacto'
            },
            form: {
                name: 'Nombre:',
                email: 'Email:',
                message: 'Mensaje:',
                send_message: 'Enviar Mensaje'
            }
        },
        fr: {
            hero: {
                welcome: 'Bienvenue à',
                tagline: 'Un héritage d\'élégance depuis 1892',
                explore: 'Découvrir Suites',
                history: 'Notre Histoire'
            },
            nav: {
                history: 'Histoire',
                gallery: 'Galerie',
                services: 'Services',
                reservations: 'Réservations',
                cards: 'Cartes',
                contact: 'Contact'
            },
            sections: {
                legacy: 'Notre Héritage',
                excellence: 'Une Histoire d\'Excellence',
                experiences: 'Expériences Uniques',
                unforgettable: 'Moments Inoubliables',
                events: 'Événements Spéciaux',
                memorable: 'Célébrations Mémorables',
                contact: 'Contactez Nous',
                stay_in_touch: 'Restez en Contact'
            },
            form: {
                name: 'Nom:',
                email: 'Email:',
                message: 'Message:',
                send_message: 'Envoyer le Message'
            }
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const keys = el.dataset.translate.split('.');
            let translation = translations[lang];
            keys.forEach(key => {
                translation = translation[key];
            });
            el.textContent = translation;
        });
    }

    document.getElementById('languageSelect').addEventListener('change', function() {
        changeLanguage(this.value);
    });

    // Menú móvil
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        mobileMenuToggle.classList.toggle('open');
    });

    // Inicializar Swiper (para carrusel de eventos)
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animations on Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Preloader
    window.onload = function() {
        document.body.classList.remove('loading');
        document.querySelector('.preloader').style.display = 'none';
    };

    // Cambio de idioma
    const translations = {
        en: {
            hero: {
                welcome: 'Welcome to',
                tagline: 'A legacy of elegance since 1892',
                explore: 'Discover Suites',
                history: 'Our History'
            },
            nav: {
                history: 'History',
                gallery: 'Gallery',
                services: 'Services',
                reservations: 'Reservations',
                cards: 'Cards',
                contact: 'Contact'
            },
            sections: {
                legacy: 'Our Legacy',
                excellence: 'A History of Excellence',
                experiences: 'Unique Experiences',
                unforgettable: 'Unforgettable Moments',
                events: 'Special Events',
                memorable: 'Memorable Celebrations',
                contact: 'Contact Us',
                stay_in_touch: 'Stay in Touch'
            }
        },
        es: {
            hero: {
                welcome: 'Bienvenido a',
                tagline: 'Un legado de elegancia desde 1892',
                explore: 'Descubrir Suites',
                history: 'Nuestra Historia'
            },
            nav: {
                history: 'Historia',
                gallery: 'Galería',
                services: 'Servicios',
                reservations: 'Reservaciones',
                cards: 'Tarjetas',
                contact: 'Contacto'
            },
            sections: {
                legacy: 'Nuestro Legado',
                excellence: 'Una Historia de Excelencia',
                experiences: 'Experiencias Únicas',
                unforgettable: 'Momentos Inolvidables',
                events: 'Eventos Especiales',
                memorable: 'Celebraciones Memorables',
                contact: 'Contáctanos',
                stay_in_touch: 'Mantente en Contacto'
            }
        },
        fr: {
            hero: {
                welcome: 'Bienvenue à',
                tagline: 'Un héritage d\'élégance depuis 1892',
                explore: 'Découvrir Suites',
                history: 'Notre Histoire'
            },
            nav: {
                history: 'Histoire',
                gallery: 'Galerie',
                services: 'Services',
                reservations: 'Réservations',
                cards: 'Cartes',
                contact: 'Contact'
            },
            sections: {
                legacy: 'Notre Héritage',
                excellence: 'Une Histoire d\'Excellence',
                experiences: 'Expériences Uniques',
                unforgettable: 'Moments Inoubliables',
                events: 'Événements Spéciaux',
                memorable: 'Célébrations Mémorables',
                contact: 'Contactez Nous',
                stay_in_touch: 'Restez en Contact'
            }
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const keys = el.dataset.translate.split('.');
            let translation = translations[lang];
            keys.forEach(key => {
                translation = translation[key];
            });
            el.textContent = translation;
        });
    }

    document.getElementById('languageSelect').addEventListener('change', function() {
        changeLanguage(this.value);
    });

    // Menú móvil
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        mobileMenuToggle.classList.toggle('open');
    });

    // Inicializar Swiper (para carrusel de eventos)
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // Funcionalidad para el formulario de comentarios
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const comment = event.target.comment.value;

        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;
        commentsList.appendChild(commentElement);

        commentForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });
});