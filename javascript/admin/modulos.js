document.addEventListener('DOMContentLoaded', function () {
    const botaoCriarModulo = document.getElementById('botaoCriarModulo');
    const modalCriarModulo = document.getElementById('modalCriarModulo');
    const fecharModal = document.getElementById('fecharModal');
    const formCriarModulo = document.getElementById('formCriarModulo');
    const modulosList = document.getElementById('modulos_list');
    const cursoModuloSelect = document.getElementById('cursoModulo');
    const fecharModalEditar = document.getElementById('fecharModalEditar');
    
    fecharModalEditar.addEventListener('click', () => {
        const modalEditarModulo = document.getElementById('modalEditarModulo');
        modalEditarModulo.style.display = 'none';
    });

    botaoCriarModulo.addEventListener('click', function () {
        modalCriarModulo.style.display = 'block';
    });

    fecharModal.addEventListener('click', function () {
        modalCriarModulo.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modalCriarModulo) {
            modalCriarModulo.style.display = 'none';
        }
    });

    formCriarModulo.addEventListener('submit', function (e) {
        e.preventDefault();

        const nomeModulo = document.getElementById('nomeModulo').value;
        const cursoModulo = document.getElementById('cursoModulo').value;

        const novoModulo = {
            titulo: nomeModulo,
            cursoId: parseInt(cursoModulo),
            ordem: 1
        };

        fetch('http://127.0.0.1:3000/api/modulos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoModulo)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Dados recebidos:', data);
            adicionarModuloNaLista(data);
            modalCriarModulo.style.display = 'none';
        })
        .catch(error => {
            console.error('Erro ao criar módulo:', error);
        });
    });

    function adicionarModuloNaLista(modulo) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${modulo.id}</td>
            <td>${modulo.titulo}</td>
            <td>${modulo.curso.titulo}</td>
            <td>
                <a href="#" data-id= "${modulo.id}" class ="btn-editar-modulo">Editar</a> | 
                <a href="/admin/modulos/${modulo.id}/remover">Remover</a>
            </td>
        `;
        modulosList.appendChild(tr);
    }

    async function loadModulos() {
        const tabelaBody = document.getElementById('modulos_list');
        try {
            const response = await fetch('http://127.0.0.1:3000/api/modulos');
            const modulos = await response.json();

            tabelaBody.innerHTML = '';

            modulos.forEach(modulo => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${modulo.id}</td>
                    <td>${modulo.titulo}</td>
                    <td>${modulo.curso.titulo}</td>
                    <td>
                        <a href="#" data-id= "${modulo.id}" class ="btn-editar-modulo">Editar</a> | 
                        <a href="/admin/modulos/${modulo.id}/remover">Remover</a>
                    </td>
                `;
                tabelaBody.appendChild(linha);
            });
        } catch (err) {
            console.error('Erro ao carregar os módulos:', err);
        }
        tabelaBody.addEventListener('click', async(e) => {
            if(e.target.classList.contains('btn-editar-modulo')){
                e.preventDefault();
                const id = e.target.getAttribute('data-id')

                try{
                    const res = await fetch(`http://127.0.0.1:3000/api/modulos/${id}`);
                    const modulo = await res.json()
                    abrirModalEditar(modulo)
                } catch(err){
                    console.error('Erro ao buscar modulo para editar: ', err)
                }
            }
        })
    }

    async function loadCursos() {
        try { 
            const response = await fetch('http://127.0.0.1:3000/api/cursos');
            const cursos = await response.json();
            
            cursoModuloSelect.innerHTML = '';

            const optionEmpty = document.createElement('option');
            optionEmpty.value = '';
            optionEmpty.textContent = 'Selecione um curso';
            cursoModuloSelect.appendChild(optionEmpty);

            cursos.forEach(curso => {
                const option = document.createElement('option');
                option.value = curso.id;
                option.textContent = curso.titulo;
                cursoModuloSelect.appendChild(option);
            });
        } catch (err) {
            console.error('Erro ao carregar os cursos:', err);
        }
    }
    function abrirModalEditar(modulo){
        const modalEditarModulo = document.getElementById('modalEditarModulo');
        const editarCursoModulo = document.getElementById('editarCursoModulo');
        const cursoModuloSelect = document.getElementById('cursoModulo');
    
        document.getElementById('editarModuloId').value = modulo.id;
        document.getElementById('editarNomeModulo').value = modulo.titulo;
    
        editarCursoModulo.innerHTML = cursoModuloSelect.innerHTML;
        editarCursoModulo.value = modulo.curso.id;
    
        modalEditarModulo.style.display = 'block';
    }
    
    window.addEventListener('click', function (event){
        const modalEditarModulo = document.getElementById('modalEditarModulo');
        if (event.target === modalEditarModulo){
            modalEditarModulo.style.display = 'none';
        }
    });
    
    const formEditarModulo = document.getElementById('formEditarModulo');
    formEditarModulo.addEventListener('submit', async(e) => {
        e.preventDefault();
    
        const id = document.getElementById('editarModuloId').value;
        const titulo = document.getElementById('editarNomeModulo').value;
        const cursoId = parseInt(document.getElementById('editarCursoModulo').value);
    
        try{
            const response = await fetch(`http://127.0.0.1:3000/api/modulos/${id}`, {
                method: 'PUT',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({titulo,cursoId})
            });
    
            const updated = await response.json();
            
            const modalEditarModulo = document.getElementById('modalEditarModulo');
            modalEditarModulo.style.display = 'none';
            loadModulos();
            
        } catch(err){
            console.error('Erro ao editar modulo: ', err);
        }
    });
    

    window.onload = function() {
        loadCursos();
        loadModulos();
    };
});

