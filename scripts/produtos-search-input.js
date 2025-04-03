document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const produtoItems = document.querySelectorAll('.produto-item');
    const categorias = document.querySelectorAll('.categoria');
    const produtoNaoEncontrado = document.querySelector('.produto-nao-encontrado');

    // Função com parâmetro padrão adicionado
    function performSearch(searchType = 0) {
        let searchTerm;
        if (searchType === 1) {
            searchTerm = "";
            searchInput.value = ''; // Limpa o campo de pesquisa
        } else {
            searchTerm = searchInput.value.toLowerCase().trim();
        }
        
        let contagem = 0;

        if (searchTerm === '') {
            // Mostrar todos os produtos e categorias
            produtoItems.forEach(item => item.style.display = 'flex');
            categorias.forEach(categoria => categoria.style.display = 'block');
            produtoNaoEncontrado.style.display = 'none';
            return;
        }

        // Filtragem de produtos
        categorias.forEach(categoria => {
            const categoriaProdutos = categoria.querySelectorAll('.produto-item');
            let temProdutosVisiveis = false;

            categoriaProdutos.forEach(item => {
                const titulo = item.querySelector('h3').textContent.toLowerCase();
                const descricao = item.querySelector('p').textContent.toLowerCase();
                const match = titulo.includes(searchTerm) || descricao.includes(searchTerm);
                
                item.style.display = match ? 'flex' : 'none';
                if (match) {
                    temProdutosVisiveis = true;
                    contagem++;
                }
            });

            categoria.style.display = temProdutosVisiveis ? 'block' : 'none';
        });

        produtoNaoEncontrado.style.display = contagem === 0 ? 'block' : 'none';
    }

    // Eventos de pesquisa corrigidos
    searchInput.addEventListener('input', () => performSearch(0));
    searchButton.addEventListener('click', () => performSearch(0));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch(0);
    });

    // Slider com verificações de segurança
    const slider = document.querySelector('.mais-vendidos-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slideElement = document.querySelector('.produto-slide');

    if (!slider || !prevBtn || !nextBtn || !slideElement) return;

    const slideWidth = slideElement.offsetWidth + 
        parseInt(getComputedStyle(slideElement).marginRight);

    function scrollSlider(direction) {
        const scrollAmount = slideWidth * 3;
        slider.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    }

    nextBtn.addEventListener('click', () => scrollSlider('next'));
    prevBtn.addEventListener('click', () => scrollSlider('prev'));

    // Interação com produtos
    const verProdutoBtns = document.querySelectorAll('.ver-produto-btn');
    
    verProdutoBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch(1);
    
            const produtoNome = this.closest('.produto-card-mv')
                .querySelector('h3').textContent;
    
            const produtoCorrespondente = Array.from(
                document.querySelectorAll('.produto-item h3'))
                .find(h3 => h3.textContent === produtoNome);
    
            if (produtoCorrespondente) {
                produtoCorrespondente.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
    
                const produtoItem = produtoCorrespondente.closest('.produto-item');
                produtoItem.classList.add('produto-destacado');
    
                setTimeout(() => {
                    produtoItem.classList.remove('produto-destacado');
                }, 2000);
    
                // Modificação crítica aqui
                const detalhesBtn = produtoItem.querySelector('.detalhes-btn');
                if (detalhesBtn) {
                    detalhesBtn.click();
                }
            }
        });
    });

    // Controle do slider por arraste
    let isDragging = false;
    let startX, scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
    });

    const handleDragEnd = () => {
        isDragging = false;
        slider.style.cursor = 'grab';
    };

    slider.addEventListener('mouseleave', handleDragEnd);
    slider.addEventListener('mouseup', handleDragEnd);

    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });

    // Inicialização final
    slider.style.cursor = 'grab';
});