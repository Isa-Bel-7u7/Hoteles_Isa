document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Datos de habitaciones (ejemplo)
    const rooms = [
        {
            id: 1,
            name: 'Suite Imperial',
            description: 'Una experiencia de lujo incomparable con vistas panorámicas',
            price: 850,
            image: 'path/to/imperial-suite.jpg',
            amenities: ['Terraza Privada', 'Sala de Estar', 'Baño de Mármol', 'Vista al Mar'],
            maxGuests: 2
        },
        {
            id: 2,
            name: 'Suite Royal',
            description: 'Elegancia clásica con acabados contemporáneos',
            price: 650,
            image: 'path/to/royal-suite.jpg',
            amenities: ['Balcón Privado', 'Área de Trabajo', 'Vestidor', 'Mini Bar'],
            maxGuests: 3
        },
        {
            id: 3,
            name: 'Suite Presidencial',
            description: 'El epítome del lujo y la privacidad',
            price: 1200,
            image: 'path/to/presidential-suite.jpg',
            amenities: ['Jacuzzi Privado', 'Sala de Reuniones', 'Mayordomo 24/7', 'Helipuerto'],
            maxGuests: 4
        }
    ];

    // Referencias DOM
    const searchForm = document.getElementById('searchForm');
    const roomsGrid = document.getElementById('roomsGrid');
    const modal = document.getElementById('reservationModal');
    const reservationForm = document.getElementById('reservationForm');
    const closeModal = document.querySelector('.close-modal');

    // Establecer fecha mínima para check-in (hoy)
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkIn').min = today;

    // Actualizar fecha mínima de check-out basada en check-in
    document.getElementById('checkIn').addEventListener('change', function(e) {
        const checkOut = document.getElementById('checkOut');
        checkOut.min = e.target.value;
    });

    // Manejar búsqueda de habitaciones
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Añadir clase de carga
        roomsGrid.classList.add('loading');

        // Simular carga de datos
        setTimeout(() => {
            displayRooms(rooms);
            roomsGrid.classList.remove('loading');
        }, 1000);
    });

    // Mostrar habitaciones
    function displayRooms(rooms) {
        roomsGrid.innerHTML = '';
        
        rooms.forEach((room, index) => {
            const roomElement = document.createElement('div');
            roomElement.className = 'room-card';
            roomElement.setAttribute('data-aos', 'fade-up');
            roomElement.setAttribute('data-aos-delay', `${index * 100}`);
            
            roomElement.innerHTML = `
                <div class="room-image">
                    <img src="${room.image}" alt="${room.name}">
                </div>
                <div class="room-details">
                    <h3 class="room-type">${room.name}</h3>
                    <p class="room-description">${room.description}</p>
                    <div class="room-features">
                        ${room.amenities.join(' • ')}
                    </div>
                    <div class="room-price">
                        €${room.price}<span>/noche</span>
                    </div>
                    <button class="book-now" data-room-id="${room.id}">
                        Reservar Ahora
                    </button>
                </div>
            `;
            
            roomsGrid.appendChild(roomElement);
        });
    }

    // Manejar clicks en botones de reserva
    roomsGrid.addEventListener('click', function(e) {
        if (e.target.classList.contains('book-now')) {
            const roomId = e.target.dataset.roomId;
            const room = rooms.find(r => r.id == roomId);
            openReservationModal(room);
        }
    });

    // Abrir modal de reserva
    function openReservationModal(room) {
        const checkIn = document.getElementById('checkIn').value;
        const checkOut = document.getElementById('checkOut').value;
        
        document.getElementById('selectedRoom').textContent = room.name;
        document.getElementById('selectedDates').textContent = `${checkIn} - ${checkOut}`;
        document.getElementById('totalAmount').textContent = `€${room.price}/noche`;
        
        modal.classList.add('active');
    }

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Click fuera del modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Manejar envío de formulario de reserva
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí iría la lógica de procesamiento de la reserva
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Reservación confirmada. Gracias por elegir The Gilded Manor.';
        
        this.innerHTML = '';
        this.appendChild(successMessage);
        
        setTimeout(() => {
            modal.classList.remove('active');
            this.reset();
        }, 3000);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    // Ensure images are visible when loaded
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Existing code...
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Handle image visibility when loaded
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });

        // Handle image load error
        img.addEventListener('error', function() {
            this.src = 'path/to/default-image.jpg'; // Provide a fallback image path
        });
    });

    // Simulate data for rooms (example)
    const rooms = [
        {
            id: 1,
            name: 'Suite Imperial',
            description: 'Una experiencia de lujo incomparable con vistas panorámicas',
            price: 850,
            image: 'imagenes/Capell-Bangkok-Riverfront-01.jpg', // Verify this path
            amenities: ['Terraza Privada', 'Sala de Estar', 'Baño de Mármol', 'Vista al Mar'],
            maxGuests: 2
        },
        {
            id: 2,
            name: 'Suite Royal',
            description: 'Elegancia clásica con acabados contemporáneos',
            price: 650,
            image: 'imagenes/Capell-Bangkok-Riverfront-01.jpg', // Verify this path
            amenities: ['Balcón Privado', 'Área de Trabajo', 'Vestidor', 'Mini Bar'],
            maxGuests: 3
        },
        {
            id: 3,
            name: 'Suite Presidencial',
            description: 'El epítome del lujo y la privacidad',
            price: 1200,
            image: 'imagenes/Capell-Bangkok-Riverfront-01.jpg', // Verify this path
            amenities: ['Jacuzzi Privado', 'Sala de Reuniones', 'Mayordomo 24/7', 'Helipuerto'],
            maxGuests: 4
        }
    ];

    // Existing code...
});
