// Arquivo: scripts/produtos-detalhes.js

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões de detalhes
    const detailButtons = document.querySelectorAll('.detalhes-btn');

    // Adiciona evento de clique para cada botão
    detailButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            // Obtém o item de produto pai
            const produtoItem = this.closest('.produto-item');

            if (produtoItem.classList.contains('detalhes-amostra')) {
                //Retira a classe de amostra se já estiver aplicada
                produtoItem.classList.remove('detalhes-amostra');
            } else {
                // Adiciona a classe de amostra para destacar o produto
                produtoItem.classList.add('detalhes-amostra');
            }

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
        const detalhesMap = {
            // ===== LINHA LUSTRO E BRILHO =====
            'Polibril DS77 (Branca)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 1.020.0</li>
                            <li>Tipo: Massa úmida sólida</li>
                            <li>Composição: Formulação de alta aderência</li>
                            <li>Aplicação: Alumínio e similares</li>
                            <li>Característica: Médio poder de corte</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Aplicar em disco de polimento com rotação constante para acabamento uniforme.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Polipol Premium (Verde)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 5.009.0</li>
                            <li>Tipo: Massa úmida premium</li>
                            <li>Composição: Materiais nobres</li>
                            <li>Aplicação: Inox e alumínio</li>
                            <li>Característica: Corte preciso e brilho intenso</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Utilizar em superfícies metálicas com disco de média abrasividade.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Luspol 510 (Azul)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 4.004.1</li>
                            <li>Tipo: Massa seca sólida</li>
                            <li>Composição: Abrasivos concentrados</li>
                            <li>Aplicação: Alumínio</li>
                            <li>Característica: Brilho profundo</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Polir em movimentos circulares com pressão moderada.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Luspol 9100 (Branca)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 1.018.1</li>
                            <li>Tipo: Massa seca nobre</li>
                            <li>Composição: Material premium</li>
                            <li>Aplicação: Inox/alumínio</li>
                            <li>Característica: Acabamento espelhado</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Aplicar em discos de alta rotação para acabamento profissional.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Inoxbril Plus (Rosa)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 1.030.1</li>
                            <li>Tipo: Massa sólida especial</li>
                            <li>Composição: Formulação para inox</li>
                            <li>Aplicação: Aço inoxidável</li>
                            <li>Característica: Resistência à oxidação</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Polir com disco macio para evitar riscos.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Lustronox (Branca)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 1.019.0</li>
                            <li>Tipo: Massa úmida versátil</li>
                            <li>Composição: Abrasivos balanceados</li>
                            <li>Aplicação: Metais diversos</li>
                            <li>Característica: Durabilidade prolongada</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Ideal para uso contínuo em linhas de produção.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Luspol 9001 (Branca)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 1.009.1</li>
                            <li>Tipo: Massa úmida profissional</li>
                            <li>Composição: Formulação para inox 304</li>
                            <li>Aplicação: Indústria alimentícia</li>
                            <li>Característica: Atende normas sanitárias</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Utilizar com disco não contaminante.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Verde 50/10 (Verde)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 5.010.1</li>
                            <li>Tipo: Massa seca versátil</li>
                            <li>Composição: Abrasivos controlados</li>
                            <li>Aplicação: Metais em geral</li>
                            <li>Característica: Lustro uniforme</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Aplicar em movimentos lineares para acabamento espelhado.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Azul 40/10 (Azul)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 5.011.1</li>
                            <li>Tipo: Massa seca técnica</li>
                            <li>Composição: Partículas ultrafinas</li>
                            <li>Aplicação: Acabamento final</li>
                            <li>Característica: Zero riscos</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Polir com disco de baixa rotação.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Polipol Bril Max (Branca)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 1.012.1</li>
                            <li>Tipo: Massa intermediária</li>
                            <li>Composição: Adaptável úmido/seco</li>
                            <li>Aplicação: Metais não ferrosos</li>
                            <li>Característica: Multiuso</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Alternar entre aplicação úmida e seca conforme necessidade.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Vermelha High Gloss': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 3.002.1</li>
                            <li>Tipo: Massa seca especial</li>
                            <li>Composição: Abrasivos de alta densidade</li>
                            <li>Aplicação: Alumínio, bronze, latão</li>
                            <li>Característica: Lustro imediato</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Utilizar com disco de feltro para acabamento espelhado.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Luspol 9150 (Azul)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 4.018.1</li>
                            <li>Tipo: Massa seca nobre</li>
                            <li>Composição: Material premium</li>
                            <li>Aplicação: Inox e alumínio</li>
                            <li>Característica: Brilho profissional</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Aplicar em duas etapas para acabamento perfeito.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Power Max (Rosa)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 8.003.1</li>
                            <li>Tipo: Massa intermediária</li>
                            <li>Composição: Formulação reforçada</li>
                            <li>Aplicação: Metais pesados</li>
                            <li>Característica: Alto rendimento</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Ideal para uso intensivo em máquinas automáticas.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Luspol 8100 (Branca)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 1.013.1</li>
                            <li>Tipo: Massa seca técnica</li>
                            <li>Composição: Abrasivos especiais</li>
                            <li>Aplicação: Alumínio e zamak</li>
                            <li>Característica: Precisão dimensional</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Polir com disco de precisão para peças complexas.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Luspol 8001 (Branca)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 1.011.1</li>
                            <li>Tipo: Massa úmida especial</li>
                            <li>Composição: Aditivos lubrificantes</li>
                            <li>Aplicação: Alumínio</li>
                            <li>Característica: Redução de calor</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Aplicar generosamente para evitar superaquecimento.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Big Lustro (Cinza)': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 3.003.1</li>
                            <li>Tipo: Massa seca industrial</li>
                            <li>Composição: Abrasivos de alto impacto</li>
                            <li>Aplicação: Metais ferrosos</li>
                            <li>Característica: Desbaste rápido</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Utilizar em máquinas de alta potência com disco reforçado.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,

            // ===== LINHA SEBOS =====
            'Sebo Amarelo': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 2.001.2</li>
                            <li>Tipo: Sebo animal tradicional</li>
                            <li>Composição: 100% natural</li>
                            <li>Aplicação: Desbaste inicial</li>
                            <li>Característica: Baixo custo</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Aplicar diretamente no disco em camadas generosas.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,
            'Sebo SP': `
                <div class="detalhes-grid">
                    <div class="detalhes-col">
                        <h4>Especificações Técnicas</h4>
                        <ul>
                            <li>Código: 2.003.2</li>
                            <li>Tipo: Sebo composto</li>
                            <li>Composição: Mistura de graxas</li>
                            <li>Aplicação: Lubrificação intensiva</li>
                            <li>Característica: Alta durabilidade</li>
                        </ul>
                    </div>
                    <div class="detalhes-col">
                        <h4>Modo de Uso</h4>
                        <p>Ideal para peças com geometria complexa.</p>
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `,

            'Sebo Brasil (Puro)': `
            <div class="detalhes-grid">
                <div class="detalhes-col">
                    <h4>Especificações Técnicas</h4>
                    <ul>
                        <li>Código: 2.004.2</li>
                        <li>Tipo: Sebo puro premium</li>
                        <li>Composição: Sem aditivos</li>
                        <li>Aplicação: Polimento final</li>
                        <li>Característica: Brilho intenso</li>
                    </ul>
                </div>
                <div class="detalhes-col">
                    <h4>Modo de Uso</h4>
                    <p>Aplicar em disco de feltro para acabamento perfeito.</p>
                    <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                </div>
            </div>
            `,

            // ===== LINHA CORTE E DESBASTE =====
            'Polipower (Preta)': `
        <div class="detalhes-grid">
            <div class="detalhes-col">
                <h4>Especificações Técnicas</h4>
                <ul>
                    <li>Código: 7.000.3</li>
                    <li>Tipo: Massa de corte intensivo</li>
                    <li>Composição: Abrasivos cerâmicos</li>
                    <li>Aplicação: Metais ferrosos/não ferrosos</li>
                    <li>Característica: Alta velocidade de remoção</li>
                </ul>
            </div>
            <div class="detalhes-col">
                <h4>Modo de Uso</h4>
                <p>Utilizar em rotações acima de 3000 RPM para máximo desempenho.</p>
                <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
            </div>
        </div>
    `,
            'Nova G (Marrom)': `
        <div class="detalhes-grid">
            <div class="detalhes-col">
                <h4>Especificações Técnicas</h4>
                <ul>
                    <li>Código: 7.005.3</li>
                    <li>Tipo: Massa versátil</li>
                    <li>Composição: Óxido de alumínio</li>
                    <li>Aplicação: Desbaste geral</li>
                    <li>Característica: Durabilidade prolongada</li>
                </ul>
            </div>
            <div class="detalhes-col">
                <h4>Modo de Uso</h4>
                <p>Adequado para uso úmido ou seco conforme necessidade.</p>
                <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
            </div>
        </div>
    `,
            'Cortepol 01 (Marrom)': `
        <div class="detalhes-grid">
            <div class="detalhes-col">
                <h4>Especificações Técnicas</h4>
                <ul>
                    <li>Código: 7.008.3</li>
                    <li>Tipo: Massa de alta precisão</li>
                    <li>Composição: Carbeto de silício</li>
                    <li>Aplicação: Metais duros</li>
                    <li>Característica: Acabamento uniforme</li>
                </ul>
            </div>
            <div class="detalhes-col">
                <h4>Modo de Uso</h4>
                <p>Ideal para acabamento final em superfícies críticas.</p>
                <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
            </div>
        </div>
    `,

            // ===== LINHA LÍQUIDOS =====
            'Liquipol Z300 (Branca)': `
        <div class="detalhes-grid">
            <div class="detalhes-col">
                <h4>Especificações Técnicas</h4>
                <ul>
                    <li>Código: 1.019.4</li>
                    <li>Tipo: Líquido de alta viscosidade</li>
                    <li>Composição: Emulsão abrasiva</li>
                    <li>Aplicação: Corte e brilho simultâneos</li>
                    <li>Embalagem: Caixa 20kg</li>
                </ul>
            </div>
            <div class="detalhes-col">
                <h4>Modo de Uso</h4>
                <p>Aplicar com pincel diretamente na peça antes do polimento.</p>
                <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
            </div>
        </div>
    `,
            'Luspol DS07 (Branca)': `
        <div class="detalhes-grid">
            <div class="detalhes-col">
                <h4>Especificações Técnicas</h4>
                <ul>
                    <li>Código: 4.002.4</li>
                    <li>Tipo: Líquido para injetoras</li>
                    <li>Composição: Formulação de baixa viscosidade</li>
                    <li>Aplicação: Polimento automatizado</li>
                    <li>Vazão recomendada: 50ml/min</li>
                </ul>
            </div>
            <div class="detalhes-col">
                <h4>Modo de Uso</h4>
                <p>Utilizar em sistemas de aplicação pneumática.</p>
                <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
            </div>
        </div>
    `,

            // ===== DISCOS =====
            'Disco Plissado Branco 400m': `
        <div class="detalhes-grid">
            <div class="detalhes-col">
                <h4>Especificações Técnicas</h4>
                <ul>
                    <li>Tipo: Disco plissado algodão</li>
                    <li>Diâmetro: 400mm</li>
                    <li>Camadas: 24</li>
                    <li>Aplicação: Polimento final</li>
                    <li>Velocidade máxima: 4500 RPM</li>
                </ul>
            </div>
            <div class="detalhes-col">
                <h4>Modo de Uso</h4>
                <p>Acionar em máquinas com eixo de 25mm.</p>
                <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
            </div>
        </div>
    `,
            'Disco Ventilado Rosa 500m': `
        <div class="detalhes-grid">
            <div class="detalhes-col">
                <h4>Especificações Técnicas</h4>
                <ul>
                    <li>Tipo: Disco ventilado reforçado</li>
                    <li>Diâmetro: 500mm</li>
                    <li>Abas: 14</li>
                    <li>Aplicação: Desbaste pesado</li>
                    <li>Resistência: Classe industrial</li>
                </ul>
            </div>
            <div class="detalhes-col">
                <h4>Modo de Uso</h4>
                <p>Utilizar com proteção térmica em operações contínuas.</p>
                <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
            </div>
        </div>
    `,

            // ===== PRODUTOS ESPECIAIS =====
            'Pó de Esmeril (#80 a #600)': `
        <div class="detalhes-grid">
            <div class="detalhes-col">
                <h4>Especificações Técnicas</h4>
                <ul>
                    <li>Tipo: Abrasivo em pó</li>
                    <li>Granulometria: #80 a #600</li>
                    <li>Composição: Óxido de alumínio</li>
                    <li>Aplicação: Lapidação técnica</li>
                    <li>Embalagem: Sacos 25kg</li>
                </ul>
            </div>
            <div class="detalhes-col">
                <h4>Modo de Uso</h4>
                <p>Misturar com óleo ou água conforme especificação técnica.</p>
                <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
            </div>
        </div>
    `,

            // ===== DISCOS ONDULADOS =====
            'Disco Ondulado 3 Folhas 37 Gomos': `
        <div class="detalhes-grid">
            <div class="detalhes-col">
                <h4>Especificações Técnicas</h4>
                <ul>
                    <li>Tipo: Disco de corte pesado</li>
                    <li>Diâmetro: 350mm</li>
                    <li>Folhas: 3</li>
                    <li>Gomos: 37</li>
                    <li>Material: Fibra vulcanizada</li>
                </ul>
            </div>
            <div class="detalhes-col">
                <h4>Modo de Uso</h4>
                <p>Utilizar em esmeris de bancada com proteção facial.</p>
                <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
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
                        <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
                    </div>
                </div>
            `
        };

        // Retorna os detalhes específicos ou o padrão se não existir
        return detalhesMap[nomeProduto] || detalhesMap['default'];
    }

    // Delegação de eventos para botões de orçamento que serão criados dinamicamente
    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('solicitar-btn')) {
            e.preventDefault();

            // Redireciona para a página de contato
            window.location.href = 'contato.html';
        }
    });
});