// <div class="categoria">
// <h2 class="categoria-titulo"> </h2>
// <div class="produtos-container">
//     <div class="produtos-lista">
//     <div class="produto-item detalhes-amostra">
//         <div class="produto-head">
//         <div class="produto-info">
//             <h3>Polibril D577 (Branca)</h3>
//             <p>Massa sólida para polimento em alumínio.</p>
//         </div>
//         <a href="#" class="detalhes-btn">Ver detalhes
//             <i class="fa fa-chevron-down"></i>
//         </a>
//         </div>
//         <div class="detalhes-grid">
//         <div class="detalhes-col">
//             <h4>Especificações técnicas</h4>
//             <ul>
//             <li>
//                 <b>Código:</b> 1.020.0
//             </li>
//             <li>
//                 <b>Tipo:</b> Massa úmida sólida
//             </li>
//             <li>
//                 <b>Composição:</b> Formulação de alta aderência
//             </li>
//             <li>
//                 <b>Aplicação:</b> Alumínio e similares
//             </li>
//             <li>
//                 <b>Característica:</b> Médio poder de corte
//             </li>
//             </ul>
//         </div>
//         <div class="detalhes-col">
//             <h4>Modo de Uso</h4>
//             <p>Aplicar em disco de polimento com rotação constante para acabamento uniforme. </p>
//             <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
//         </div>
//         </div>
//         <div class="produto-detalhes" style="display: none;">
//         <div class="detalhes-grid">
//             <div class="detalhes-col">
//             <h4>Especificações Técnicas</h4>
//             <ul></ul>
//             </div>
//             <div class="detalhes-col">
//             <h4>Modo de Uso</h4>
//             <p>Aplicar em disco de polimento com rotação constante para acabamento uniforme.</p>
//             <a href="contato.html" class="solicitar-btn">Solicitar Orçamento</a>
//             </div>
//         </div>
//         </div>
//     </div>
//     </div>
// </div>
// </div>


async function fetchCategorias() {
    try {
        const response = await fetch('http://localhost:3000/api/public-route?tipo=categorias');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar os top 10 produtos:', error);
        return null;
    }
}


document.addEventListener('DOMContentLoaded', async () => {
    const Data = await fetchCategorias();
    console.log(Data)
    const categoriasElement = document.getElementById("categorias-produtos")

    for (let i = 1; i < Data.length; i++) {
        const divCategoria = document.createElement('div')
        divCategoria.className = 'categoria'

        const h2TituloCategoria = document.createElement('h2')
        h2TituloCategoria.className = 'categoria-titulo'
        h2TituloCategoria.textContent = Data[i].titulo
        divCategoria.append(h2TituloCategoria)

        const divContainerProdutos = document.createElement('div')
        divContainerProdutos.className = 'produtos-container'
        divCategoria.append(divContainerProdutos)

        const divListaProdutos = document.createElement('div')
        divListaProdutos.className = 'produtos-lista'
        divContainerProdutos.append(divListaProdutos)

        for (let j = 0; j < Data[i].produtos.length; j++) {
            const divProduto = document.createElement('div')
            divProduto.className = 'produto-item'
            divListaProdutos.append(divProduto)

            const divHeadProduto = document.createElement('div')
            divHeadProduto.className = 'produto-head'
            divProduto.append(divHeadProduto)

            const divInfoProduto = document.createElement('div')
            divInfoProduto.className = 'produto-info'
            divHeadProduto.append(divInfoProduto)

            const h2TituloProduto = document.createElement('h3')
            h2TituloProduto.textContent = Data[i].produtos[j].titulo
            divInfoProduto.append(h2TituloProduto)

            // const pSubtituloProduto = document.createElement('p')            NÃO TEM SUBTITULO NO SISTEMA
            // pSubtituloProduto.textContent = Data[i].produtos[j].titulo
            // divInfoProduto.append(pSubtituloProduto)

            const divDetalhesProduto = document.createElement('div')
            divDetalhesProduto.className = 'produto-detalhes'
            divProduto.append(divDetalhesProduto)
            divDetalhesProduto.style.display = 'none';

            const detalhesBtn = document.createElement('a');
            detalhesBtn.href = "#";
            detalhesBtn.className = "detalhes-btn";
            detalhesBtn.innerHTML = 'Ver detalhes <i class="fa fa-chevron-down"></i>';
            divHeadProduto.append(detalhesBtn);
            detalhesBtn.addEventListener('click', function (e) {
                e.preventDefault();
                divProduto.classList.toggle('detalhes-amostra');
                divDetalhesProduto.style.display = divDetalhesProduto.style.display === 'block' ? 'none' : 'block';
            });

            const detalhesGrid = document.createElement('div')
            detalhesGrid.className = 'detalhes-grid'
            divDetalhesProduto.append(detalhesGrid)

            const detalhesGridColFirst = document.createElement('div')
            detalhesGridColFirst.className = 'detalhes-col'
            detalhesGrid.append(detalhesGridColFirst)

            const h4EspecificacoesTecnicas = document.createElement('h4')
            h4EspecificacoesTecnicas.textContent = "Especificações Técnicas"
            detalhesGridColFirst.append(h4EspecificacoesTecnicas)

            const ulListaEspecificacoes = document.createElement('ul')
            detalhesGridColFirst.append(ulListaEspecificacoes)

            const descricoes = JSON.parse(Data[i].produtos[j].descricao)
            for (let k = 0; k < descricoes.length; k++) {
                const liEspecificacao = document.createElement('li')
                liEspecificacao.textContent = descricoes[k]
                ulListaEspecificacoes.append(liEspecificacao)
            }

            const detalhesGridColSecond = document.createElement('div')
            detalhesGridColSecond.className = 'detalhes-col'
            detalhesGrid.append(detalhesGridColSecond)

            const h4ModoDeUso = document.createElement('h4')
            h4ModoDeUso.textContent = "Modo de Uso"
            detalhesGridColSecond.append(h4ModoDeUso)

            const pModoDeUso = document.createElement('h4')
            pModoDeUso.textContent = Data[i].produtos[j].descricao.modo_de_uso
            detalhesGridColSecond.append(pModoDeUso)

            const solicitarBtn = document.createElement('a');
            solicitarBtn.href = "contato.html";
            solicitarBtn.className = "solicitar-btn";
            solicitarBtn.textContent = "Solicitar Orçamento";
            detalhesGridColSecond.append(solicitarBtn);
        }

        categoriasElement.append(divCategoria)
    }


})
