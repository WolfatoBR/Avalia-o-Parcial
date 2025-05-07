document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menuItens = document.querySelector('.menu-itens');
    menuItens.classList.toggle('ativo');
    
    // Alterna ícone do botão
    const icon = this.querySelector('i');
    if (menuItens.classList.contains('ativo')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.submenu-trigger').forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.closest('.has-submenu');
        parent.classList.toggle('active');
        
        // Fecha outros submenus abertos
        document.querySelectorAll('.has-submenu').forEach(item => {
            if (item !== parent) {
                item.classList.remove('active');
            }
        });
    });
});

// Fecha o submenu ao clicar fora
document.addEventListener('click', function(e) {
    if (!e.target.closest('.has-submenu')) {
        document.querySelectorAll('.has-submenu').forEach(item => {
            item.classList.remove('active');
        });
    }
});

document.querySelector('.floating-button').addEventListener('mouseenter', function() {
    this.style.animation = 'none'; // Pausa a animação de pulso
    setTimeout(() => {
        this.style.animation = 'pulse 3s infinite';
    }, 500);
});

// Efeito de clique
document.querySelector('.floating-button').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Efeito visual de clique
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
        window.location.href = 'https://wa.me/5571900000000';
    }, 200);
});