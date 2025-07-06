async function fetchTop10Products() {
    try {
        const response = await fetch('http://localhost:3000/api/public-route?tipo=top10');
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

    const Data = await fetchTop10Products();

    if (!ElementTop10) {
        console.error('Elemento com id "Top10" não encontrado no DOM.');
        return;
    }

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
        // Corrige o tratamento da descrição
        if (Array.isArray(produto.descricao)) {
            p.textContent = produto.descricao[0];
        } else {
            try {
                const descArr = JSON.parse(produto.descricao);
                p.textContent = Array.isArray(descArr) ? descArr[0] : produto.descricao;
            } catch {
                p.textContent = produto.descricao;
            }
        }

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