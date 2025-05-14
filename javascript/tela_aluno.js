document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const modal = document.getElementById('videoModal');
    const fecharModal = document.querySelector('.fechar-modal');
    const videoIframe = document.querySelector('.video-iframe');
    const videoItems = document.querySelectorAll('.video-item');
    const progressFill = document.querySelector('.progress-fill');
    const progressPercent = document.querySelector('.progress-percent');
    const progressBar = document.querySelector('.progress-bar'); // Adicione esta linha
    const resetProgressBtn = document.getElementById('resetProgressBtn'); // Adicione esta linha

    // Variáveis de estado
    let watchedVideos = JSON.parse(localStorage.getItem('watchedVideos')) || [];
    let currentProgress = parseInt(localStorage.getItem('progress')) || 0;
    const totalVideos = videoItems.length;

    // Inicializa a barra de progresso
    updateProgressBar();

    // Marca vídeos assistidos (versão simplificada)
    videoItems.forEach(item => {
        const videoId = item.getAttribute('data-video-id');
        if (watchedVideos.includes(videoId)) {
            item.classList.add('watched');
        }
    });

    // Função para resetar o progresso
    function resetProgress() {
        // Remove os dados do localStorage
        localStorage.removeItem('watchedVideos');
        localStorage.removeItem('progress');
        
        // Reseta as variáveis de estado
        watchedVideos = [];
        currentProgress = 0;
        
        // Atualiza a barra de progresso visualmente
        progressBar.setAttribute('aria-valuenow', 0);
        updateProgressBar();
        
        // Remove a classe 'watched' de todos os vídeos
        videoItems.forEach(item => {
            item.classList.remove('watched');
        });
        
        // Feedback visual (opcional)
        alert('Progresso resetado com sucesso!');
        
        // Atualiza o texto da barra de progresso
        progressPercent.textContent = '0%';
    }

    // Evento do botão de reset
    resetProgressBtn.addEventListener('click', resetProgress);

    // Função para abrir o modal com o vídeo específico
    function abrirModal(videoId) {
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        if (!watchedVideos.includes(videoId)) {
            watchedVideos.push(videoId);
            localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));
            
            const videoItem = document.querySelector(`.video-item[data-video-id="${videoId}"]`);
            if (videoItem) {
                videoItem.classList.add('watched');
            }
            
            currentProgress = Math.min(100, Math.round((watchedVideos.length / totalVideos) * 100));
            localStorage.setItem('progress', currentProgress);
            updateProgressBar();
        }
    }

    // Função para fechar o modal
    function fecharModalVideo() {
        videoIframe.src = '';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Atualiza a barra de progresso
    function updateProgressBar() {
        progressFill.style.width = `${currentProgress}%`;
        progressPercent.textContent = `${currentProgress}%`;
        progressBar.setAttribute('aria-valuenow', currentProgress);

        if (currentProgress < 30) {
            progressFill.style.background = 'linear-gradient(90deg, var(--primary-color), var(--error))';
        } else if (currentProgress < 70) {
            progressFill.style.background = 'linear-gradient(90deg, var(--primary-color), var(--warning))';
        } else {
            progressFill.style.background = 'linear-gradient(90deg, var(--primary-color), var(--success))';
        }
    }

    // Eventos dos vídeos
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

    // Eventos do modal
    fecharModal.addEventListener('click', fecharModalVideo);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            fecharModalVideo();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            fecharModalVideo();
        }
    });

    // Vídeo em destaque
    function showFeaturedVideo() {
        const firstVideo = document.querySelector('.video-item');
        if (!firstVideo) return;
        
        const videoId = firstVideo.getAttribute('data-video-id');
        const videoHighlightContainer = document.querySelector('.video-highlight-container');

    }
    showFeaturedVideo();
});