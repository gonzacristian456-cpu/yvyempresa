// Botón principal
function hacerPedido() {
    window.location.href = '#contacto';
}

// Enviar pedido por WhatsApp
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const pedido = document.getElementById('pedido').value;

    if (nombre === '' || pedido === '') {
        alert('Por favor completá todos los campos');
        return;
    }

    const numero = '3764219326'; // NÚMERO

    const mensaje = `Hola YVY 🧉%0A
Mi nombre es: ${nombre}%0A
Quiero pedir: ${pedido}`;

    const url = `https://wa.me/${numero}?text=${mensaje}`;

    window.open(url, '_blank');
}

// Efecto de aparición al hacer scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Estado inicial
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = '0.6s ease';
});
