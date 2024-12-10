document.addEventListener('DOMContentLoaded', function() {
    // Referencias DOM
    const cartItems = document.querySelector('.cart-items');
    const cartItemTemplate = document.getElementById('cart-item-template');
    const checkoutButton = document.querySelector('.checkout-button');
    const continueShoppingButton = document.querySelector('.continue-shopping');
    const checkoutModal = document.querySelector('.checkout-modal');
    const confirmationModal = document.querySelector('.confirmation-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const checkoutForm = document.getElementById('checkout-form');
    const closeConfirmationButton = document.querySelector('.close-confirmation');

    // Datos de ejemplo (simula una base de datos)
    const sampleItems = [
        {
            id: 1,
            name: 'Suite Presidencial',
            category: 'Alojamiento',
            image: 'path/to/suite-image.jpg',
            price: 550.00,
            originalPrice: 650.00
        },
        {
            id: 2,
            name: 'Spa Premium',
            category: 'Servicios',
            image: 'path/to/spa-image.jpg',
            price: 180.00,
            originalPrice: 200.00
        }
    ];

    // Cargar items de ejemplo
    loadCartItems(sampleItems);

    // Función para cargar items en el carrito
    function loadCartItems(items) {
        cartItems.innerHTML = '';
        items.forEach(item => {
            const cartItem = createCartItem(item);
            cartItems.appendChild(cartItem);
        });
        updateTotals();
    }

    // Crear elemento del carrito
    function createCartItem(item) {
        const template = cartItemTemplate.content.cloneNode(true);
        const cartItem = template.querySelector('.cart-item');

        cartItem.dataset.id = item.id;
        const imgElement = cartItem.querySelector('.item-image img');
        imgElement.src = item.image;
        imgElement.alt = item.name;

        // Handle image load error
        imgElement.addEventListener('error', function() {
            imgElement.src = 'path/to/default-image.jpg'; // Provide a fallback image path
        });

        cartItem.querySelector('.item-name').textContent = item.name;
        cartItem.querySelector('.item-category').textContent = item.category;
        cartItem.querySelector('.price').textContent = `€${item.price.toFixed(2)}`;
        
        if (item.originalPrice) {
            cartItem.querySelector('.original-price').textContent = `€${item.originalPrice.toFixed(2)}`;
        }

        // Configurar fecha mínima (hoy)
        const dateInput = cartItem.querySelector('.item-date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;

        // Event listeners para el item
        setupCartItemListeners(cartItem);

        return cartItem;
    }

    // Configurar event listeners para items del carrito
    function setupCartItemListeners(cartItem) {
        const quantityInput = cartItem.querySelector('.quantity-input');
        const minusBtn = cartItem.querySelector('.minus');
        const plusBtn = cartItem.querySelector('.plus');
        const removeBtn = cartItem.querySelector('.remove-item');

        minusBtn.addEventListener('click', () => updateQuantity(quantityInput, -1));
        plusBtn.addEventListener('click', () => updateQuantity(quantityInput, 1));
        quantityInput.addEventListener('change', () => validateQuantity(quantityInput));
        removeBtn.addEventListener('click', () => removeCartItem(cartItem));
    }

    // Actualizar cantidad
    function updateQuantity(input, change) {
        let newValue = parseInt(input.value) + change;
        if (newValue >= 1 && newValue <= 10) {
            input.value = newValue;
            updateTotals();
        }
    }

    // Validar cantidad
    function validateQuantity(input) {
        let value = parseInt(input.value);
        if (isNaN(value) || value < 1) {
            input.value = 1;
        } else if (value > 10) {
            input.value = 10;
        }
        updateTotals();
    }

    // Remover item del carrito
    function removeCartItem(item) {
        item.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            item.remove();
            updateTotals();
            checkEmptyCart();
        }, 300);
    }

    // Verificar si el carrito está vacío
    function checkEmptyCart() {
        if (cartItems.children.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <p>Su carrito está vacío</p>
                    <button class="continue-shopping">Continuar Comprando</button>
                </div>
            `;
        }
    }

    // Actualizar totales
    function updateTotals() {
        let subtotal = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.replace('€', ''));
            const quantity = parseInt(item.querySelector('.quantity-input').value);
            subtotal += price * quantity;
        });

        const tax = subtotal * 0.21;
        const total = subtotal + tax;

        document.querySelector('.subtotal').textContent = `€${subtotal.toFixed(2)}`;
        document.querySelector('.tax').textContent = `€${tax.toFixed(2)}`;
        document.querySelector('.total-amount').textContent = `€${total.toFixed(2)}`;
        document.querySelector('.modal-total').textContent = `€${total.toFixed(2)}`;
    }

    // Event Listeners para botones principales
    checkoutButton.addEventListener('click', () => {
        checkoutModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    continueShoppingButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Cerrar modales
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            checkoutModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    });

    closeConfirmationButton.addEventListener('click', () => {
        confirmationModal.style.display = 'none';
        document.body.style.overflow = '';
        window.location.href = 'index.html';
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            checkoutModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Manejar envío del formulario de checkout
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Simular procesamiento de pago
            processPayment();
        }
    });

    // Validar formulario
    function validateForm() {
        let isValid = true;
        const required = checkoutForm.querySelectorAll('[required]');
        
        required.forEach(field => {
            if (!field.value) {
                markAsError(field);
                isValid = false;
            } else {
                removeError(field);
            }
        });

        // Validar número de tarjeta
        const cardNumber = document.getElementById('card-number');
        if (cardNumber.value && !validateCardNumber(cardNumber.value)) {
            markAsError(cardNumber);
            isValid = false;
        }

        return isValid;
    }

    // Validar número de tarjeta (implementación básica)
    function validateCardNumber(number) {
        return number.replace(/\s/g, '').length === 16;
    }

    // Marcar campo como error
    function markAsError(field) {
        field.classList.add('error');
        if (!field.nextElementSibling?.classList.contains('error-message')) {
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = 'Este campo es requerido';
            field.parentNode.insertBefore(errorMessage, field.nextSibling);
        }
    }

    // Remover error
    function removeError(field) {
        field.classList.remove('error');
        const errorMessage = field.nextElementSibling;
        if (errorMessage?.classList.contains('error-message')) {
            errorMessage.remove();
        }
    }

    // Procesar pago
    function processPayment() {
        checkoutModal.style.display = 'none';
        confirmationModal.style.display = 'block';
        
        // Limpiar carrito
        cartItems.innerHTML = '';
        updateTotals();
    }

    // Formateo de campos
    const cardNumberInput = document.getElementById('card-number');
    const expiryInput = document.getElementById('expiry');
    const cvvInput = document.getElementById('cvv');

    // Formatear número de tarjeta
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '');
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{4})/g, '$1 ').trim();
        e.target.value = value.substring(0, 19);
    });

    // Formatear fecha de expiración
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value.substring(0, 5);
    });

    // Formatear CVV
    cvvInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
    });

    // Animaciones para los items del carrito
    function animateCartChanges() {
        document.querySelectorAll('.cart-item').forEach((item, index) => {
            item.style.animation = 'none';
            item.offsetHeight; // Trigger reflow
            item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        });
    }

    // Inicializar animaciones
    animateCartChanges();
});