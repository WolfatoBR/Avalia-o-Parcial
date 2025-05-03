document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const tempoTransicao = 3000; // ALTERE AQUI o valor em milissegundos
    
    function showSlide() {
        slides.forEach(slide => slide.classList.remove('ativo'));
        slides[currentSlide].classList.add('ativo');
        currentSlide = (currentSlide + 1) % slides.length;
    }
    
    showSlide();
    setInterval(showSlide, tempoTransicao); // Usa a variável definida acima
});