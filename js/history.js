document.addEventListener('DOMContentLoaded', function() {
    const timelineContainer = document.querySelector('.timeline-container');
    
    const historyData = [
        {
            year: 1920,
            date: '1920-03-15',
            title: 'Fundación de The Gilded Manor',
            category: 'milestone',
            description: 'El visionario arquitecto Alexander Montgomery inició la construcción de lo que se convertiría en uno de los hoteles más emblemáticos.',
            image: 'assets/images/history/foundation.jpg',
            importance: 'high'
        },
        {
            year: 1922,
            date: '1922-12-01',
            title: 'Gran Inauguración',
            category: 'event',
            description: 'Apertura oficial con la presencia de distinguidas personalidades de la época dorada.',
            image: 'assets/images/history/opening.jpg',
            importance: 'high'
        },
        // Añade más eventos históricos aquí
    ];

    function renderTimeline(data) {
        timelineContainer.innerHTML = '';

        data.forEach((item, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${item.importance} ${index % 2 === 0 ? 'left' : 'right'}`;
            
            timelineItem.innerHTML = `
                <div class="timeline-content" data-aos="fade-${index % 2 === 0 ? 'right' : 'left'}">
                    <div class="timeline-date">${formatDate(item.date)}</div>
                    <div class="timeline-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="category-tag ${item.category}">${capitalizeFirstLetter(item.category)}</span>
                </div>
            `;

            timelineContainer.appendChild(timelineItem);
        });

        AOS.refresh();
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderTimeline(historyData);
});
document.addEventListener('DOMContentLoaded', function() {
    const timelineContainer = document.querySelector('.timeline-container');
    
    const historyData = [
        {
            year: 1920,
            date: '1920-03-15',
            title: 'Fundación de The Gilded Manor',
            category: 'milestone',
            description: 'El visionario arquitecto Alexander Montgomery inició la construcción de lo que se convertiría en uno de los hoteles más emblemáticos.',
            image: 'imagenes/history.webp',
            importance: 'high'
        },
        {
            year: 1922,
            date: '1922-12-01',
            title: 'Gran Inauguración',
            category: 'event',
            description: 'Apertura oficial con la presencia de distinguidas personalidades de la época dorada.',
            image: 'assets/images/history/opening.jpg',
            importance: 'high'
        },
        // Añade más eventos históricos aquí
    ];

    function renderTimeline(data) {
        timelineContainer.innerHTML = '';

        data.forEach((item, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${item.importance} ${index % 2 === 0 ? 'left' : 'right'}`;
            
            timelineItem.innerHTML = `
                <div class="timeline-content" data-aos="fade-${index % 2 === 0 ? 'right' : 'left'}">
                    <div class="timeline-date">${formatDate(item.date)}</div>
                    <div class="timeline-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="category-tag ${item.category}">${capitalizeFirstLetter(item.category)}</span>
                </div>
            `;

            timelineContainer.appendChild(timelineItem);
        });

        AOS.refresh();
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderTimeline(historyData);
    AOS.init();
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineContainer = document.querySelector('.timeline-container');

    const historyData = [
        {
            year: 1892,
            date: '1892-01-01',
            title: 'Los Cimientos',
            category: 'milestone',
            description: 'El visionario arquitecto Edward Blackwood diseña The Gilded Manor como una obra maestra de la arquitectura victoriana.',
            image: 'imagenes/history.webp',
            importance: 'high'
        },
        {
            year: 1920,
            date: '1920-01-01',
            title: 'La Era Dorada',
            category: 'event',
            description: 'Durante los años 20, The Gilded Manor se convierte en el epicentro de la alta sociedad y el glamour.',
            image: 'https://scontent.cdninstagram.com/v/t51.29350-15/468745245_861594399194952_2999650398668791802_n.jpg?stp=dst-jpg_e35_s480x480_tt6&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=PigNChyxBBEQ7kNvgGJ1D2l&_nc_gid=bfbabf70976f46798351679badc77b92&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AYCr9qMykg1Z7g55PYKl4bXRGATESWPHCfD4aHTocJN3Hw&oe=675BE251&_nc_sid=cc8940',
            importance: 'high'
        },
        {
            year: 1950,
            date: '1950-01-01',
            title: 'Renovación y Modernización',
            category: 'event',
            description: 'Una cuidadosa renovación preserva la elegancia histórica mientras incorpora comodidades modernas.',
            image: 'https://capellahotels.com/assets/img/site_images/bangkok/Capella-Bangkok-Top-01.jpg',
            importance: 'high'
        },
        {
            year: 1985,
            date: '1985-01-01',
            title: 'Expansión Global',
            category: 'event',
            description: 'The Gilded Manor establece su reputación internacional como símbolo de lujo y exclusividad.',
            image: 'https://capellahotels.com/assets/img/site_images/global/Capella-Awards-big-01.jpg',
            importance: 'high'
        },
        {
            year: 'Presente',
            date: '2023-01-01',
            title: 'Legado Contemporáneo',
            category: 'event',
            description: 'Hoy, The Gilded Manor continúa su tradición de excelencia, fusionando historia y lujo moderno.',
            image: 'https://capellahotels.com/assets/img/site_images/hanoi/Capella-Hanoi-Stay-3-Pay-2-tn.jpg',
            importance: 'high'
        }
    ];

    function renderTimeline(data) {
        timelineContainer.innerHTML = '';

        data.forEach((item, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${item.importance} ${index % 2 === 0 ? 'left' : 'right'}`;

            timelineItem.innerHTML = `
                <div class="timeline-content" data-aos="fade-${index % 2 === 0 ? 'right' : 'left'}">
                    <div class="timeline-date">${formatDate(item.date)}</div>
                    <div class="timeline-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="category-tag ${item.category}">${capitalizeFirstLetter(item.category)}</span>
                </div>
            `;

            timelineContainer.appendChild(timelineItem);
        });

        AOS.refresh();
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderTimeline(historyData);
    AOS.init();
});