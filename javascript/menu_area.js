
document.addEventListener('DOMContentLoaded', function() {
    const carousel = new bootstrap.Carousel(document.getElementById('autoCarousel'), {
        interval: 5000, // Muda a cada 5 segundos
        wrap: true, // Volta ao primeiro slide após o último
        pause: 'hover' // Pausa quando o mouse está sobre o carrossel
    });
    
    // Opcional: Pausar/continuar ao clicar
    const carouselElement = document.getElementById('autoCarousel');
    let isPlaying = true;
    
    carouselElement.addEventListener('click', function() {
        if (isPlaying) {
            carousel.pause();
            isPlaying = false;
        } else {
            carousel.cycle();
            isPlaying = true;
        }
    });
});
