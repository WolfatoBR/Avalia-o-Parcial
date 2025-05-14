document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const modal = document.getElementById('videoModal');
    const fecharModal = document.querySelector('.fechar-modal');
    const videoIframe = document.querySelector('.video-iframe');
    const videoItems = document.querySelectorAll('.video-item');
    const progressFill = document.querySelector('.progress-fill');
    const progressPercent = document.querySelector('.progress-percent');
    const progressBar = document.querySelector('.progress-bar');
    const resetProgressBtn = document.getElementById('resetProgressBtn');

    // Variáveis de estado
    let watchedVideos = JSON.parse(localStorage.getItem('watchedVideos')) || [];
    let currentProgress = parseInt(localStorage.getItem('progress')) || 0;
    const totalVideos = videoItems.length;
    let youtubePlayer;

    // Inicialização
    updateProgressBar();
    markWatchedVideos();
    setupEventListeners();
    loadYouTubeAPI();
    showFeaturedVideo();

    function markWatchedVideos() {
        videoItems.forEach(item => {
            const videoId = item.getAttribute('data-video-id');
            if (watchedVideos.includes(videoId)) {
                item.classList.add('watched');
            }
        });
    }

    function setupEventListeners() {
        // Botão de reset
        resetProgressBtn.addEventListener('click', resetProgress);

        // Eventos dos vídeos
        videoItems.forEach(item => {
            const botaoAssistir = item.querySelector('.botao-assistir');

            botaoAssistir.addEventListener('click', function(e) {
                e.stopPropagation();
                const videoId = item.getAttribute('data-video-id');
                openVideoModal(videoId);
            });

            item.addEventListener('click', function() {
                const videoId = item.getAttribute('data-video-id');
                openVideoModal(videoId);
            });
        });

        // Eventos do modal
        fecharModal.addEventListener('click', closeVideoModal);
        
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeVideoModal();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeVideoModal();
            }
        });
    }

    function loadYouTubeAPI() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    function onYouTubeIframeAPIReady() {
        // Função chamada quando a API do YouTube está pronta
    }

    function openVideoModal(videoId) {
        const videoItem = document.querySelector(`.video-item[data-video-id="${videoId}"]`);
        
        // Configura o iframe
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Inicializa o player do YouTube
        youtubePlayer = new YT.Player(videoIframe, {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

        function onPlayerReady(event) {
            event.target.playVideo();
        }

        function onPlayerStateChange(event) {
            // Quando o vídeo termina (código 0)
            if (event.data === YT.PlayerState.ENDED) {
                if (!watchedVideos.includes(videoId)) {
                    markVideoAsWatched(videoId, videoItem);
                }
            }
        }
    }

    function markVideoAsWatched(videoId, videoItem) {
        watchedVideos.push(videoId);
        localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));
        
        if (videoItem) {
            videoItem.classList.add('watched');
        }
        
        currentProgress = Math.min(100, Math.round((watchedVideos.length / totalVideos) * 100));
        localStorage.setItem('progress', currentProgress);
        updateProgressBar();
    }

    function closeVideoModal() {
        if (youtubePlayer) {
            youtubePlayer.stopVideo();
        }
        videoIframe.src = '';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function resetProgress() {
        localStorage.removeItem('watchedVideos');
        localStorage.removeItem('progress');
        watchedVideos = [];
        currentProgress = 0;
        progressBar.setAttribute('aria-valuenow', 0);
        updateProgressBar();
        
        videoItems.forEach(item => {
            item.classList.remove('watched');
        });
        
        progressPercent.textContent = '0%';
    }

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

    function showFeaturedVideo() {
        const firstVideo = document.querySelector('.video-item');
        if (!firstVideo) return;
        
        const videoId = firstVideo.getAttribute('data-video-id');
        const videoHighlightContainer = document.querySelector('.video-highlight-container');
    }
});