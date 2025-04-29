document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    let overlay;
    
    // Criar overlay para quando o menu estiver aberto
    function createOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
        
        // Fechar menu ao clicar no overlay
        overlay.addEventListener('click', toggleMenu);
    }
    
    // Remover overlay quando menu for fechado
    function removeOverlay() {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }
    
    // Toggle para abrir/fechar o menu
    function toggleMenu() {
        if (menu.classList.contains('menu-open')) {
            menu.classList.remove('menu-open');
            if (window.scrollY > 20) {
                menuBtn.classList.add('black-nav-button');
            }
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            removeOverlay();
            // Permitir rolagem no body
            document.body.style.overflow = '';
        } else {
            menu.classList.add('menu-open');
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            if (window.scrollY > 20) {
                menuBtn.classList.remove('black-nav-button');
            }
            createOverlay();
            // Impedir rolagem no body quando menu estiver aberto
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Event listeners
    menuBtn.addEventListener('click', toggleMenu);
    
    // Fechar menu ao clicar em um link do menu (para navegação)
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });
    
    // Fechar menu se a tela for redimensionada para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && menu.classList.contains('menu-open')) {
            toggleMenu();
        }
    });
});