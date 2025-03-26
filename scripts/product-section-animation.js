document.addEventListener('DOMContentLoaded', () => {
    const tracks = document.querySelectorAll('.product-track');
    const speeds = [0.4, 0.5, 0.6, 0.7]; // Velocidades aumentadas
    const directions = [1, -1, 1, -1];

    tracks.forEach((track, index) => {
        const originalLine = track.querySelector('.product-line:first-child');
        const emptyLines = track.querySelectorAll('.product-line:not(:first-child)');

        // Clonar conteúdo 5 vezes para garantir preenchimento
        emptyLines.forEach(line => {
            line.innerHTML = originalLine.innerHTML.repeat(2);
        });

        const lines = track.querySelectorAll('.product-line');
        let animationId;
        let progress;
        const speed = speeds[index];
        const direction = directions[index];
        const gap = parseInt(window.getComputedStyle(originalLine).gap);
        const itemWidth = originalLine.children[0].offsetWidth + gap;
        const totalWidth = (itemWidth * originalLine.children.length) * 2; // Largura total considerando clones

        
        if (direction === 1) {
            progress = -totalWidth;
        }else{progress = 0}

        // Posicionamento inicial corrigido
        lines.forEach((line, i) => {
            line.style.transform = `translateX(${direction === 1 ?
                (i * totalWidth / 2) :
                (-i * totalWidth / 2)}px)`;
        });

        const animate = () => {
            progress += speed * direction;

            // Reset suave da posição
            if (direction === 1 && progress >= 0) {
                progress = progress = -totalWidth;
            }
            else if (direction === -1 && progress <= -totalWidth / 2) {
                progress = 0;
            }

            // Aplicar transformação com offset
            lines.forEach(line => {
                const offset = (progress % totalWidth);

                line.style.transform = `translateX(${offset}px)`;
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        // Controles de hover otimizados
        track.addEventListener('mouseenter', () => {
            cancelAnimationFrame(animationId);
        });

        track.addEventListener('mouseleave', () => {
            animate();
        });
    });
});