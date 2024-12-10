// gallery.js

document.addEventListener('DOMContentLoaded', function() {
    // Estado global de la galería
    const galleryState = {
        currentFilter: 'all',
        items: [],
        currentImageIndex: 0,
        isLoading: false,
        page: 1,
        perPage: 12
    };

    // Elementos del DOM
    const elements = {
        galleryGrid: document.querySelector('.gallery-grid'),
        filterContainer: document.querySelector('.filter-container'),
        modal: document.querySelector('.gallery-modal'),
        modalContent: document.querySelector('.modal-content'),
        loadingIndicator: document.querySelector('.loading-indicator'),
        prevButton: document.querySelector('.prev-btn'),
        nextButton: document.querySelector('.next-btn')
    };

    // Datos de la galería (simulados - en producción vendrían de una API)
    const galleryData = [
        {
            id: 1,
            title: 'Suite Presidencial',
            category: 'suites',
            description: 'Nuestra suite más exclusiva con vistas panorámicas',
            image: 'assets/images/gallery/presidential-suite.jpg',
            details: {
                size: '400 m²',
                view: 'Vista al mar',
                amenities: ['Jacuzzi privado', 'Mayordomo 24/7', 'Terraza privada'],
                price: '$5,000/noche'
            }
        },
        // Añade más items aquí
    ];

    // Inicialización de la galería
    function initGallery() {
        loadGalleryItems();
        setupFilters();
        setupEventListeners();
        initializeAOS();
    }

    // Cargar items de la galería
    function loadGalleryItems() {
        galleryState.isLoading = true;
        showLoadingIndicator();

        // Simular carga de datos
        setTimeout(() => {
            galleryState.items = galleryData;
            renderGalleryItems(galleryData);
            hideLoadingIndicator();
            galleryState.isLoading = false;
        }, 1000);
    }

    // Renderizar items de la galería
    function renderGalleryItems(items) {
        elements.galleryGrid.innerHTML = '';
        
        items.forEach((item, index) => {
            const galleryItem = createGalleryItem(item, index);
            elements.galleryGrid.appendChild(galleryItem);
        });

        // Iniciar animaciones
        animateGalleryItems();
    }

    // Crear elemento de galería
    function createGalleryItem(item, index) {
        const itemElement = document.createElement('div');
        itemElement.className = 'gallery-item';
        itemElement.setAttribute('data-aos', 'fade-up');
        itemElement.setAttribute('data-aos-delay', `${index * 100}`);

        itemElement.innerHTML = `
            <div class="gallery-image-wrapper">
                <img class="gallery-image" src="${item.image}" alt="${item.title}">
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <button class="view-details-btn" data-item-id="${item.id}">Ver Detalles</button>
                </div>
            </div>
        `;

        return itemElement;
    }

    // Configurar filtros
    function setupFilters() {
        const categories = ['all', ...new Set(galleryData.map(item => item.category))];
        
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = `filter-btn ${category === 'all' ? 'active' : ''}`;
            button.textContent = capitalizeFirstLetter(category);
            button.dataset.category = category;
            elements.filterContainer.appendChild(button);
        });
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Filtrado
        elements.filterContainer.addEventListener('click', handleFilterClick);

        // Modal
        elements.galleryGrid.addEventListener('click', handleItemClick);
        elements.modal.addEventListener('click', handleModalClick);

        // Navegación
        elements.prevButton.addEventListener('click', showPreviousImage);
        elements.nextButton.addEventListener('click', showNextImage);

        // Scroll infinito
        window.addEventListener('scroll', handleScroll);

        // Teclas
        document.addEventListener('keydown', handleKeyPress);
    }

    // Manejadores de eventos
    function handleFilterClick(e) {
        if (!e.target.classList.contains('filter-btn')) return;

        const category = e.target.dataset.category;
        updateActiveFilter(e.target);
        filterGalleryItems(category);
    }

    function handleItemClick(e) {
        const detailsBtn = e.target.closest('.view-details-btn');
        if (!detailsBtn) return;

        const itemId = parseInt(detailsBtn.dataset.itemId);
        const item = galleryState.items.find(item => item.id === itemId);
        if (item) {
            galleryState.currentImageIndex = galleryState.items.indexOf(item);
            showModal(item);
        }
    }

    function handleModalClick(e) {
        if (e.target.classList.contains('close-modal') || e.target === elements.modal) {
            closeModal();
        }
    }

    function handleKeyPress(e) {
        if (!elements.modal.style.display === 'block') return;

        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                showPreviousImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    }

    function handleScroll() {
        if (galleryState.isLoading) return;

        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            loadMoreItems();
        }
    }

    // Funciones de filtrado
    function filterGalleryItems(category) {
        galleryState.currentFilter = category;
        const filteredItems = category === 'all' 
            ? galleryState.items 
            : galleryState.items.filter(item => item.category === category);
        
        renderGalleryItems(filteredItems);
    }

    function updateActiveFilter(clickedFilter) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        clickedFilter.classList.add('active');
    }

    // Funciones del modal
    function showModal(item) {
        elements.modalContent.innerHTML = createModalContent(item);
        elements.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        updateNavigationButtons();
    }

    function closeModal() {
        elements.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function createModalContent(item) {
        return `
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2>${item.title}</h2>
            </div>
            <div class="modal-body">
                <div class="modal-image-container">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="modal-details">
                    <h3>Detalles</h3>
                    <p>${item.description}</p>
                    <div class="modal-features">
                        <div class="feature">
                            <strong>Tamaño:</strong> ${item.details.size}
                        </div>
                        <div class="feature">
                            <strong>Vista:</strong> ${item.details.view}
                        </div>
                        <div class="feature">
                            <strong>Precio:</strong> ${item.details.price}
                        </div>
                    </div>
                    <div class="amenities">
                        <h4>Amenidades:</h4>
                        <ul>
                            ${item.details.amenities.map(amenity => `<li>${amenity}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // Navegación del modal
    function showPreviousImage() {
        if (galleryState.currentImageIndex > 0) {
            galleryState.currentImageIndex--;
            updateModalImage();
        }
    }

    function showNextImage() {
        if (galleryState.currentImageIndex < galleryState.items.length - 1) {
            galleryState.currentImageIndex++;
            updateModalImage();
        }
    }

    function updateModalImage() {
        const currentItem = galleryState.items[galleryState.currentImageIndex];
        showModal(currentItem);
    }

    function updateNavigationButtons() {
        elements.prevButton.style.display = galleryState.currentImageIndex > 0 ? 'block' : 'none';
        elements.nextButton.style.display = 
            galleryState.currentImageIndex < galleryState.items.length - 1 ? 'block' : 'none';
    }

    // Funciones de carga
    function showLoadingIndicator() {
        elements.loadingIndicator.style.display = 'block';
    }

    function hideLoadingIndicator() {
        elements.loadingIndicator.style.display = 'none';
    }

    function loadMoreItems() {
        galleryState.page++;
        loadGalleryItems();
    }

    // Animaciones
    function initializeAOS() {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    function animateGalleryItems() {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 100}ms`;
        });
    }

    // Utilidades
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Lazy loading de imágenes
    function setupLazyLoading() {
        const images = document.querySelectorAll('.gallery-image');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Exportar galería
    function exportGalleryData() {
        const data = galleryState.items.map(item => ({
            title: item.title,
            category: item.category,
            description: item.description
        }));

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'gallery-data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Iniciar la galería
    initGallery();
});
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.querySelector('.gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const viewButtons = document.querySelectorAll('.view-btn');

    // Filtrado de elementos de la galería
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterItems(filter);
            setActiveButton(filterButtons, button);
        });
    });

    // Cambio de vista de la galería
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.classList.contains('grid-view') ? 'grid' : 'list';
            changeView(view);
            setActiveButton(viewButtons, button);
        });
    });

    function filterItems(filter) {
        const items = galleryGrid.querySelectorAll('.gallery-item');
        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function changeView(view) {
        if (view === 'grid') {
            galleryGrid.classList.add('grid-view');
            galleryGrid.classList.remove('list-view');
        } else {
            galleryGrid.classList.add('list-view');
            galleryGrid.classList.remove('grid-view');
        }
    }

    function setActiveButton(buttons, activeButton) {
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
});