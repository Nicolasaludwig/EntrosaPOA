document.addEventListener('DOMContentLoaded', () => {
    // Simula o tempo de carregamento de dados (ex: API ou rede)
    setTimeout(() => {
        const skeletons = document.querySelectorAll('.skeleton');
        
        skeletons.forEach(el => {
            // Remove a classe skeleton para revelar o conteúdo
            el.classList.remove('skeleton');
            
            // Adiciona um Fade In suave (opcional, usando animacoes.js)
            el.style.opacity = 0;
            setTimeout(() => {
                el.style.transition = 'opacity 0.5s ease-in';
                el.style.opacity = 1;
            }, 50);
        });
    }, 2500); // Fica em ghost loading por 2.5 segundos

    // Adiciona efeito de bounce no botão de filtro ao passar o mouse (após carregar)
    const filterBtn = document.querySelector('.filter-btn');
    if(filterBtn) {
        filterBtn.addEventListener('mouseenter', () => {
            if(!filterBtn.classList.contains('skeleton')) {
                bounce(filterBtn);
            }
        });
    }
});