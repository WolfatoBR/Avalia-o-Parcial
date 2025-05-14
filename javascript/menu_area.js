document.addEventListener('DOMContentLoaded', function () {
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
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('cursoInput');
    const container = document.querySelector('.dvpsq_curso');
    const cursosExemplo = [
        "Administração",
        "Engenharia Civil",
        "Medicina",
        "Direito",
        "Ciência da Computação",
        "Psicologia",
        "Arquitetura",
        "Enfermagem"
    ];

    let cursoAtual = 0;
    let charAtual = 0;
    let estaApagando = false;
    let timeoutId;

    function typeWriter() {
        const textoAtual = cursosExemplo[cursoAtual];

        container.classList.add('typing');

        if (!estaApagando) {
            input.placeholder = textoAtual.substring(0, charAtual + 1);
            charAtual++;

            if (charAtual === textoAtual.length) {
                estaApagando = true;
                timeoutId = setTimeout(typeWriter, 1500); // Pausa maior no texto completo
                return;
            }
        } else {
            input.placeholder = textoAtual.substring(0, charAtual - 1);
            charAtual--;

            if (charAtual === 0) {
                estaApagando = false;
                cursoAtual = (cursoAtual + 1) % cursosExemplo.length;
            }
        }

        timeoutId = setTimeout(typeWriter, estaApagando ? 50 : 100);
    }

    // Controles de foco
    input.addEventListener('focus', () => {
        clearTimeout(timeoutId);
        container.classList.remove('typing');
        input.placeholder = "Digite o nome do curso";
    });

    input.addEventListener('blur', () => {
        if (input.value === "") {
            cursoAtual = 0;
            charAtual = 0;
            estaApagando = false;
            setTimeout(typeWriter, 1000);
        }
    });

    // Inicia o efeito
    setTimeout(typeWriter, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video-item');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    const indicadores = document.querySelectorAll('.indicador');
    let currentIndex = 0;
    let isAnimating = false;

    function showVideo(index, direction = 'next') {
        if (isAnimating) return;
        isAnimating = true;

        const currentVideo = document.querySelector('.video-item.ativo');
        const nextVideo = videos[index];

        // Configura direção da animação
        nextVideo.classList.add(direction === 'next' ? 'proximo' : 'voltar');

        // Remove classes de animação
        currentVideo.classList.remove('proximo', 'voltar');
        nextVideo.classList.remove('proximo', 'voltar');

        // Inicia animação
        currentVideo.classList.add('saindo');
        nextVideo.classList.add('ativo');

        // Atualiza indicadores
        indicadores.forEach(ind => ind.classList.remove('ativo'));
        indicadores[index].classList.add('ativo');

        // Finaliza animação
        setTimeout(() => {
            currentVideo.classList.remove('ativo', 'saindo');
            isAnimating = false;
        }, 600);

        currentIndex = index;
    }

    function nextVideo() {
        const newIndex = (currentIndex + 1) % videos.length;
        showVideo(newIndex, 'next');
    }

    function prevVideo() {
        const newIndex = (currentIndex - 1 + videos.length) % videos.length;
        showVideo(newIndex, 'prev');
    }

    btnProximo.addEventListener('click', nextVideo);
    btnAnterior.addEventListener('click', prevVideo);

    indicadores.forEach(indicador => {
        indicador.addEventListener('click', function () {
            const newIndex = parseInt(this.getAttribute('data-index'));
            const direction = newIndex > currentIndex ? 'next' : 'prev';
            showVideo(newIndex, direction);
        });
    });
});