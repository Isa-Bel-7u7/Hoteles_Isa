// chat.js y animations.js combinados

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const minimizeChat = document.getElementById('minimizeChat');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    // Estado del chat
    let isOpen = false;
    let isTyping = false;

    // Funciones de control del chat
    function toggleChat() {
        isOpen = !isOpen;
        chatWindow.classList.toggle('active');
        if (isOpen) {
            chatButton.style.display = 'none';
        } else {
            chatButton.style.display = 'flex';
        }
    }

    // Event Listeners
    chatButton.addEventListener('click', toggleChat);
    minimizeChat.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);

    // Enviar mensaje
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage('user', message);
            chatInput.value = '';
            showTypingIndicator();
            // Simular respuesta del agente
            setTimeout(() => {
                hideTypingIndicator();
                addMessage('agent', 'Gracias por su mensaje. Un agente se pondrá en contacto con usted pronto.');
            }, 2000);
        }
    }

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Funciones de mensajes
    function addMessage(type, content) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        messageDiv.textContent = content;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Indicador de escritura
    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.classList.add('typing-indicator');
        indicator.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        chatMessages.appendChild(indicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function hideTypingIndicator() {
        const indicator = chatMessages.querySelector('.typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    // Animaciones adicionales
    function addPulseAnimation() {
        chatButton.classList.add('new-message');
        setTimeout(() => {
            chatButton.classList.remove('new-message');
        }, 3000);
    }

    // Simular mensaje nuevo cada 30 segundos si el chat está cerrado
    setInterval(() => {
        if (!isOpen) {
            addPulseAnimation();
        }
    }, 30000);
});