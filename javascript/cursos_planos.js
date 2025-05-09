//Para chamar o MENU SUPERIOR
fetch('/html/menu_sup.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('.chama-menu').innerHTML = html;
    });
//Para chamar o MENU SUPERIOR