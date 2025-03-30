// Arquivo: scripts/produtos-detalhes.js

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de detalhes
    const detailButtons = document.querySelectorAll('.detalhes-btn');
    
    // Adiciona evento de clique para cada botão
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            // Obtém o item de produto pai
            const produtoItem = this.closest('.produto-item');
            
            // Verifica se já existe uma seção de detalhes
            let detalhesSection = produtoItem.querySelector('.produto-detalhes');
            
            // Se os detalhes já existem, alterna sua visibilidade
            if (detalhesSection) {
                const isVisible = detalhesSection.style.display !== 'none';
                
                // Alterna a visibilidade
                detalhesSection.style.display = isVisible ? 'none' : 'block';
                
                // Alterna o ícone do botão
                const icon = this.querySelector('i');
                icon.className = isVisible ? 'fa fa-chevron-down' : 'fa fa-chevron-up';
                
                // Alterna o texto do botão
                this.innerHTML = isVisible ? 
                    'Ver detalhes <i class="fa fa-chevron-down"></i>' : 
                    'Ocultar detalhes <i class="fa fa-chevron-up"></i>';
            } else {
                // Cria a seção de detalhes se não existir
                detalhesSection = document.createElement('div');
                detalhesSection.className = 'produto-detalhes';
                
                // Obtém o nome do produto para personalizar os detalhes
                const nomeProduto = produtoItem.querySelector('h3').textContent;
                
                // Adiciona conteúdo de detalhes baseado no nome do produto
                detalhesSection.innerHTML = gerarDetalhesContent(nomeProduto);
                
                // Adiciona a seção ao item do produto
                produtoItem.appendChild(detalhesSection);
                
                // Atualiza o texto e ícone do botão
                this.innerHTML = 'Ocultar detalhes <i class="fa fa-chevron-up"></i>';
            }
        });
    });
    
    // Função para gerar o conteúdo de detalhes baseado no nome do produto
    function gerarDetalhesContent(nomeProduto) {
        // Mapa de detalhes por produto
        const detalhesMap = {
            // Sebos
            'Sebo Amarelo': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Tipo: Sebo para polimento inicial</li>
                            <li>Composição: Sebo animal refinado com aditivos</li>
                            <li>Apresentação: Barras de 1kg</li>
                            <li>Indicado para: Metais ferrosos</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Aplicar diretamente no disco de polimento em rotação moderada. Indicado para desbaste inicial e remoção de marcas profundas.</p>
                        <button class="solicitar-btn">Solicitar Orçamento</button>
                    </div>
                </div>
            `,
            'Sebo Composto': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Tipo: Sebo composto para alto rendimento</li>
                            <li>Composição: Mistura especial de sebos com abrasivos</li>
                            <li>Apresentação: Barras de 500g e 1kg</li>
                            <li>Indicado para: Uso industrial em linha de produção</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Ideal para uso em máquinas automáticas. Aplicar com pressão constante para maior produtividade.</p>
                        <button class="solicitar-btn">Solicitar Orçamento</button>
                    </div>
                </div>
            `,
            
            // Padrão para outros produtos
            'default': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Nome: ${nomeProduto}</li>
                            <li>Categoria: Produtos para polimento profissional</li>
                            <li>Embalagem: Consultar disponibilidade</li>
                            <li>Aplicação: Industrial e profissional</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Informações Adicionais</h4>
                        <p>Para informações detalhadas sobre o produto ${nomeProduto}, entre em contato com nossa equipe de vendas.</p>
                        <button  class="solicitar-btn">Solicitar Orçamento</button>
                    </div>
                </div>
            `
        };
        
        // Retorna os detalhes específicos ou o padrão se não existir
        return detalhesMap[nomeProduto] || detalhesMap['default'];
    }
    
    // Delegação de eventos para botões de orçamento que serão criados dinamicamente
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('solicitar-btn')) {
            e.preventDefault();
            
            // Redireciona para a página de contato
            window.location.href = 'contato.html';
        }
    });
});