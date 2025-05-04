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