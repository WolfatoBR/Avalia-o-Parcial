document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const modal = document.getElementById('videoModal');
    const fecharModal = document.querySelector('.fechar-modal');
    const videoIframe = document.querySelector('.video-iframe');
    const videoItems = document.querySelectorAll('.video-item');
    const progressFill = document.querySelector('.progress-fill');
    const progressPercent = document.querySelector('.progress-percent');
    
    // Variáveis de estado
    let watchedVideos = JSON.parse(localStorage.getItem('watchedVideos')) || [];
    let currentProgress = parseInt(localStorage.getItem('progress')) || 0;
    const totalVideos = document.querySelectorAll('.video-item').length;
    
    // Inicializa a barra de progresso
    updateProgressBar();
    
    // Marca vídeos assistidos
    watchedVideos.forEach(videoId => {
        const videoItem = document.querySelector(`.video-item[data-video-id="${videoId}"]`);
        if (videoItem) {
            videoItem.classList.add('watched');
        }
    });
    
    // Função para abrir o modal com o vídeo específico
    function abrirModal(videoId) {
        // Configura a URL do vídeo com autoplay e controles
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1`;
        
        // Exibe o modal
        modal.style.display = 'block';
        
        // Desabilita o scroll da página
        document.body.style.overflow = 'hidden';
        
        // Marca como assistido quando o modal é aberto
        if (!watchedVideos.includes(videoId)) {
            watchedVideos.push(videoId);
            localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));
            
            const videoItem = document.querySelector(`.video-item[data-video-id="${videoId}"]`);
            if (videoItem) {
                videoItem.classList.add('watched');
            }
            
            // Atualiza o progresso
            currentProgress = Math.min(100, Math.round((watchedVideos.length / totalVideos) * 100));
            localStorage.setItem('progress', currentProgress);
            updateProgressBar();
        }
    }
    
    // Função para fechar o modal
    function fecharModalVideo() {
        // Pausa o vídeo
        videoIframe.src = '';
        
        // Esconde o modal
        modal.style.display = 'none';
        
        // Habilita o scroll da página
        document.body.style.overflow = 'auto';
    }
    
    // Atualiza a barra de progresso
    function updateProgressBar() {
        progressFill.style.width = `${currentProgress}%`;
        progressPercent.textContent = `${currentProgress}%`;
        
        // Altera a cor com base no progresso
        if (currentProgress < 30) {
            progressFill.style.background = 'linear-gradient(90deg, var(--primary-color), var(--error))';
        } else if (currentProgress < 70) {
            progressFill.style.background = 'linear-gradient(90deg, var(--primary-color), var(--warning))';
        } else {
            progressFill.style.background = 'linear-gradient(90deg, var(--primary-color), var(--success))';
        }
    }
    
    // Adiciona eventos de clique a todos os itens de vídeo
    videoItems.forEach(item => {
        const botaoAssistir = item.querySelector('.botao-assistir');
        
        botaoAssistir.addEventListener('click', function(e) {
            e.stopPropagation();
            const videoId = item.getAttribute('data-video-id');
            abrirModal(videoId);
        });
        
        item.addEventListener('click', function() {
            const videoId = item.getAttribute('data-video-id');
            abrirModal(videoId);
        });
    });
    
    // Evento para fechar o modal ao clicar no X
    fecharModal.addEventListener('click', fecharModalVideo);
    
    // Evento para fechar o modal ao clicar fora do conteúdo
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            fecharModalVideo();
        }
    });
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            fecharModalVideo();
        }
    });
    
    // Exibe o primeiro vídeo como destaque (opcional)
    function showFeaturedVideo() {
        const firstVideoId = document.querySelector('.video-item').getAttribute('data-video-id');
        const videoHighlightContainer = document.querySelector('.video-highlight-container');
        
        videoHighlightContainer.innerHTML = `
            <div class="featured-video">
                <h2>Destaque: Aula Inicial</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/${firstVideoId}?rel=0&modestbranding=1" 
                            frameborder="0" allowfullscreen></iframe>
                </div>
                <button class="watch-button" onclick="document.querySelector('.video-item').click()">
                    <span class="material-symbols-outlined">play_circle</span>
                    Assistir Aula Completa
                </button>
            </div>
        `;
    }
    
    // Chama a função para exibir o vídeo em destaque
    showFeaturedVideo();
});