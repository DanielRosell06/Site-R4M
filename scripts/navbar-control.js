// JavaScript ajustado
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('topo');
    const heroHeight = document.getElementById('banner').offsetHeight;
    
    // Adiciona classe quando passar 20px do topo
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Ajuste inicial
window.dispatchEvent(new Event('scroll'));