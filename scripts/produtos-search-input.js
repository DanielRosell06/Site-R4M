document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const produtoItems = document.querySelectorAll('.produto-item');
    const categorias = document.querySelectorAll('.categoria');
    const produtoNaoEncontrado = document.querySelector('.produto-nao-encontrado');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let contagem = 0;

        if (searchTerm === '') {
            // Mostrar todos os produtos e categorias se a pesquisa estiver vazia
            produtoItems.forEach(item => {
                item.style.display = 'flex';
            });
            categorias.forEach(categoria => {
                categoria.style.display = 'block';
            });
            produtoNaoEncontrado.style.display = 'none';
            return;
        }

        // Para cada categoria, verificar se há produtos correspondentes
        categorias.forEach(categoria => {
            const categoriaProdutos = categoria.querySelectorAll('.produto-item');
            let temProdutosVisiveis = false;

            categoriaProdutos.forEach(item => {
                const titulo = item.querySelector('h3').textContent.toLowerCase();
                const descricao = item.querySelector('p').textContent.toLowerCase();

                if (titulo.includes(searchTerm) || descricao.includes(searchTerm)) {
                    item.style.display = 'flex';
                    temProdutosVisiveis = true;
                    contagem++;
                } else {
                    item.style.display = 'none';
                }
            });

            // Mostrar ou ocultar a categoria inteira
            categoria.style.display = temProdutosVisiveis ? 'block' : 'none';
        });

        // Mostrar mensagem de "nenhum produto encontrado" se nenhum produto corresponder
        produtoNaoEncontrado.style.display = contagem === 0 ? 'block' : 'none';
    }

    // Eventos de pesquisa
    searchInput.addEventListener('input', performSearch);
    searchButton.addEventListener('click', performSearch);

    // Evento de pressionar Enter no campo de pesquisa
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});
