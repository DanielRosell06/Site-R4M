// JavaScript ajustado
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('topo');
    const menuBtn = document.querySelector('.menu-btn');
    
    // Adiciona classe quando passar 20px do topo
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
        menuBtn.classList.add('black-nav-button');
        
    } else {
        navbar.classList.remove('scrolled');
        menuBtn.classList.remove('black-nav-button');
    }
});

// Ajuste inicial
window.dispatchEvent(new Event('scroll'));