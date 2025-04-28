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