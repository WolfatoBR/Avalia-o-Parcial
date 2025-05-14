document.addEventListener('DOMContentLoaded', function () {
    // Elementos do DOM
    const modal = document.getElementById('videoModal');
    const fecharModal = document.querySelector('.fechar-modal');
    const videoIframe = document.getElementById('youtube-player');
    const videoItems = document.querySelectorAll('.video-item');
    const progressFill = document.querySelector('.progress-fill');
    const progressPercent = document.querySelector('.progress-percent');
    const progressBar = document.querySelector('.progress-bar');
    const resetProgressBtn = document.getElementById('resetProgressBtn');
    const markAsWatchedBtn = document.getElementById('markAsWatchedBtn');
    const videoHighlightContainer = document.querySelector('.video-highlight-container');
    const caixa = document.querySelector('.dropdown-content');
    const popUp = document.querySelector('.dialog-content');

    

    // Variáveis de estado
    let watchedVideos = JSON.parse(localStorage.getItem('watchedVideos')) || [];
    let currentProgress = parseInt(localStorage.getItem('progress')) || 0;
    const totalVideos = videoItems.length;
    let youtubePlayer = null;
    let currentVideoId = null;

    // Inicialização
    init();

    function init() {
        updateProgressBar();
        markWatchedVideos();
        setupEventListeners();
        showFeaturedVideo();
    }

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

            botaoAssistir.addEventListener('click', function (e) {
                e.stopPropagation();
                const videoId = item.getAttribute('data-video-id');
                openVideoModal(videoId);
            });

            item.addEventListener('click', function () {
                const videoId = item.getAttribute('data-video-id');
                openVideoModal(videoId);
            });
        });

        // Eventos do modal
        fecharModal.addEventListener('click', closeVideoModal);
        markAsWatchedBtn.addEventListener('click', markCurrentVideoAsWatched);

        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeVideoModal();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeVideoModal();
            }
        });
    }

    function loadYouTubeAPI() {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }

    function openVideoModal(videoId) {
        currentVideoId = videoId;
        const videoItem = document.querySelector(`.video-item[data-video-id="${videoId}"]`);
        const isAlreadyWatched = watchedVideos.includes(videoId);

        // Configura o iframe
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Configura o botão "Marcar como Visto"
        updateMarkAsWatchedButton(isAlreadyWatched);

        // Inicializa o player do YouTube
        loadYouTubeAPI();

        // Configura a função global que a API do YouTube vai chamar
        window.onYouTubeIframeAPIReady = function () {
            youtubePlayer = new YT.Player('youtube-player', {
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        };
    }

    function onPlayerReady(event) {
        event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        // Quando o vídeo termina (código 0)
        if (event.data === YT.PlayerState.ENDED) {
            const videoId = event.target.getVideoUrl().split('v=')[1].split('&')[0];
            markVideoAsWatched(videoId);
        }
    }

    function updateMarkAsWatchedButton(isAlreadyWatched) {
        if (isAlreadyWatched) {
            markAsWatchedBtn.classList.add('disabled');
            markAsWatchedBtn.innerHTML = '<span class="material-symbols-outlined">check</span> <span class="nome_botao-marcar">Já marcado como visto</span>';
            markAsWatchedBtn.onclick = null;
        } else {
            markAsWatchedBtn.classList.remove('disabled');
            markAsWatchedBtn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> <span class="nome_botao-marcar">Marcar como Visto</span>';
        }
    }

    function markCurrentVideoAsWatched() {
        if (currentVideoId && !watchedVideos.includes(currentVideoId)) {
            markVideoAsWatched(currentVideoId);
            updateMarkAsWatchedButton(true);
        }
    }

    function markVideoAsWatched(videoId) {
        if (!watchedVideos.includes(videoId)) {
            watchedVideos.push(videoId);
            localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));

            const videoItem = document.querySelector(`.video-item[data-video-id="${videoId}"]`);
            if (videoItem) {
                videoItem.classList.add('watched');
            }

            updateGlobalProgress();
        }
    }

    function updateGlobalProgress() {
        currentProgress = Math.min(100, Math.round((watchedVideos.length / totalVideos) * 100));
        localStorage.setItem('progress', currentProgress);
        updateProgressBar();
    }

    function closeVideoModal() {
        if (youtubePlayer) {
            try {
                youtubePlayer.stopVideo();
            } catch (e) {
                console.log("Erro ao parar vídeo:", e);
            }
        }

        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        videoIframe.src = '';
        currentVideoId = null;
    }

    function resetProgress() {
        if (confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
            localStorage.removeItem('watchedVideos');
            localStorage.removeItem('progress');
            watchedVideos = [];
            currentProgress = 0;

            videoItems.forEach(item => {
                item.classList.remove('watched');
            });

            updateProgressBar();
            updateMarkAsWatchedButton(false);

            // Mostra a notificação
            showNotification('Progresso resetado com sucesso!', 'success');
        }
    }

    function showNotification(message, type) {
        const notification = document.getElementById('notification');
        const icon = notification.querySelector('.notification-icon');
        const text = notification.querySelector('.notification-text');

        // Configura conforme o tipo
        if (type === 'success') {
            notification.style.backgroundColor = 'var(--success)';
            icon.textContent = 'check_circle';
        } else if (type === 'error') {
            notification.style.backgroundColor = 'var(--error)';
            icon.textContent = 'error';
        } else {
            notification.style.backgroundColor = 'var(--primary-color)';
            icon.textContent = 'info';
        }

        text.textContent = message;

        // Mostra a notificação
        notification.classList.remove('notification-hidden');
        notification.classList.add('notification-visible');

        // Esconde após 3 segundos
        setTimeout(() => {
            notification.classList.remove('notification-visible');
            notification.classList.add('notification-hidden');
        }, 3000);
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
        const videoTitle = firstVideo.querySelector('.video-title').textContent;

    }
});