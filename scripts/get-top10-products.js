async function fetchTop10Products() {
    try {
        const response = await fetch('https://sistema-r4-m.vercel.app/api/public-route?tipo=top10');
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
    const ElementTop10 = document.getElementById("Top10");

    if (!ElementTop10) {
        console.error('Elemento com id "Top10" não encontrado no DOM.');
        return;
    }

    // Criar e estilizar o indicador de carregamento
    const loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'loading-indicator';
    loadingIndicator.innerHTML = '<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';
    loadingIndicator.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100px; /* Garante que o indicador apareça mesmo se o ElementTop10 estiver vazio */
        color: #f97316; /* orange-500 */
        font-size: 90px; /* Alterado de 2em para 24px */
        font-weight: bold;
    `;

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes dot-animation {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
        }
        #loading-indicator .dot:nth-child(1) { animation: dot-animation 1.5s infinite; }
        #loading-indicator .dot:nth-child(2) { animation: dot-animation 1.5s infinite 0.5s; }
        #loading-indicator .dot:nth-child(3) { animation: dot-animation 1.5s infinite 1s; }
    `;
    document.head.appendChild(style);

    ElementTop10.appendChild(loadingIndicator);

    const Data = await fetchTop10Products();

    // Remover o indicador de carregamento após o retorno do fetch
    loadingIndicator.remove();

    if (!Array.isArray(Data)) {
        console.error('Dados inválidos recebidos para os produtos.');
        return;
    }

    for (let i = 0; i < Data.length; i++) {
        const produto = Data[i];
        const slide = document.createElement('div');
        slide.className = 'produto-slide';

        const card = document.createElement('div');
        card.className = 'produto-card-mv';

        const badge = document.createElement('div');
        badge.className = 'badge';
        badge.textContent = `TOP ${produto.ranking_top}`;

        const img = document.createElement('img');
        img.src = produto.imagem || '/images/default.png';
        img.alt = produto.titulo;

        const h3 = document.createElement('h3');
        h3.textContent = produto.titulo;

        const p = document.createElement('p');
        p.textContent = produto.subTitulo;

        const btn = document.createElement('a');
        btn.href = `#`;
        btn.className = 'ver-produto-btn';
        btn.textContent = 'Ver detalhes';

        card.appendChild(badge);
        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(btn);

        slide.appendChild(card);
        ElementTop10.appendChild(slide);
    }
});