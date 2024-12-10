document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Referencias DOM
    const reserveButtons = document.querySelectorAll('.reserve-button');
    const contactButton = document.querySelector('.contact-button');
    const modal = document.querySelector('.service-modal');
    const closeModal = document.querySelector('.close-modal');
    const serviceForm = document.getElementById('serviceForm');
    const serviceNameInput = document.getElementById('serviceName');
    const serviceDateInput = document.getElementById('serviceDate');

    // Configurar fecha mínima (hoy)
    const today = new Date().toISOString().split('T')[0];
    serviceDateInput.min = today;

    // Manejador para botones de reserva
    reserveButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const serviceName = this.closest('.service-content').querySelector('h2').textContent;
            openModal(serviceName);
        });
    });

    // Manejador para botón de contacto
    contactButton.addEventListener('click', function() {
        openModal('Consulta Personalizada');
    });

    // Función para abrir el modal
    function openModal(serviceName) {
        serviceNameInput.value = serviceName;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Añadir clase active después de un pequeño delay para la animación
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }

    // Función para cerrar el modal
    function closeModalFunction() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
        serviceForm.reset();
    }

    // Event listeners para cerrar el modal
    closeModal.addEventListener('click', closeModalFunction);
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // Escape key para cerrar el modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunction();
        }
    });

    // Manejar envío del formulario
    serviceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Recopilar datos del formulario
        const formData = {
            service: serviceNameInput.value,
            date: serviceDateInput.value,
            time: document.getElementById('serviceTime').value,
            guests: document.getElementById('guests').value,
            requests: document.getElementById('specialRequests').value
        };

        // Aquí normalmente enviarías los datos al servidor
        // Por ahora, mostraremos un mensaje de éxito
        showSuccessMessage();
    });

    // Función para mostrar mensaje de éxito
    function showSuccessMessage() {
        const form = serviceForm;
        const originalContent = form.innerHTML;

        // Reemplazar el formulario con el mensaje de éxito
        form.innerHTML = `
            <div class="success-message">
                <h3>¡Reserva Confirmada!</h3>
                <p>Gracias por elegir nuestros servicios. En breve recibirá un correo de confirmación.</p>
            </div>
        `;

        // Cerrar el modal después de 3 segundos
        setTimeout(() => {
            closeModalFunction();
            // Restaurar el formulario original
            form.innerHTML = originalContent;
        }, 3000);
    }

    // Efectos de parallax para imágenes de fondo
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.services-hero, .contact-section');

        parallaxElements.forEach(element => {
            const limit = element.offsetTop + element.offsetHeight;
            if (scrolled > element.offsetTop && scrolled <= limit) {
                element.style.backgroundPositionY = (scrolled - element.offsetTop) * 0.5 + 'px';
            }
        });
    });

    // Animación suave para los service-items al hacer hover
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Validación de formulario mejorada
    const inputs = serviceForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
            e.preventDefault();
            this.classList.add('error');
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
            }
        });
    });

    // Animación de carga para imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Función para manejar el redimensionamiento de la ventana
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            AOS.refresh();
        }, 250);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    const cart = [];

    // Handle form submission
    serviceForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const formData = {
            service: serviceNameInput.value,
            date: serviceDateInput.value,
            time: document.getElementById('serviceTime').value,
            guests: document.getElementById('guests').value,
            requests: document.getElementById('specialRequests').value
        };

        // Add reservation to cart
        cart.push(formData);

        // Show success message
        showSuccessMessage();
    });

    // Function to show success message
    function showSuccessMessage() {
        const form = serviceForm;
        const originalContent = form.innerHTML;

        // Replace the form with the success message
        form.innerHTML = `
            <div class="success-message">
                <h3>¡Reserva Confirmada!</h3>
                <p>Gracias por elegir nuestros servicios. En breve recibirá un correo de confirmación.</p>
            </div>
        `;

        // Close the modal after 3 seconds
        setTimeout(() => {
            closeModalFunction();
            // Restore the original form
            form.innerHTML = originalContent;
        }, 3000);
    }

    // Existing code...
});