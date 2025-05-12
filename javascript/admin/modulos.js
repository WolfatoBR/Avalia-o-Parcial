function abrirModalExcluir(id) {
    const modal = document.getElementById('modalConfirmarExclusao');
    document.getElementById('moduloIdParaExcluir').value = id;
    modal.style.display = 'block';
}

function fecharModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function abrirModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function preencherSelect(select, options, placeholder = 'Selecione uma opção') {
    select.innerHTML = `<option value="">${placeholder}</option>`;
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.id;
        option.textContent = opt.titulo;
        select.appendChild(option);
    });
}

function criarLinhaModulo(modulo) {
    return `
        <tr>
            <td>${modulo.id}</td>
            <td>${modulo.titulo}</td>
            <td>${modulo.curso.titulo}</td>
            <td>
                <a href="#" data-id="${modulo.id}" class="btn-editar-modulo">Editar</a> | 
                <a href="#" data-id="${modulo.id}" class="btn-remover-modulo">Remover</a>
            </td>
        </tr>
    `;
}

async function carregarCursos(selectElement) {
    try {
        const response = await fetch('http://127.0.0.1:3000/api/cursos');
        const cursos = await response.json();
        preencherSelect(selectElement, cursos, 'Selecione um curso');
    } catch (err) {
        console.error('Erro ao carregar cursos:', err);
    }
}

async function carregarModulos(tabela) {
    try {
        const response = await fetch('http://127.0.0.1:3000/api/modulos');
        const modulos = await response.json();
        tabela.innerHTML = modulos.map(criarLinhaModulo).join('');
    } catch (err) {
        console.error('Erro ao carregar módulos:', err);
    }
}

async function buscarModuloPorId(id) {
    const response = await fetch(`http://127.0.0.1:3000/api/modulos/${id}`);
    return await response.json();
}

function preencherModalEdicao(modulo) {
    const cursoSelect = document.getElementById('cursoModulo');
    const editarCursoSelect = document.getElementById('editarCursoModulo');
 
    document.getElementById('editarModuloId').value = modulo.id;
    document.getElementById('editarNomeModulo').value = modulo.titulo;
    editarCursoSelect.innerHTML = cursoSelect.innerHTML;
    editarCursoSelect.value = modulo.curso.id;

    abrirModal('modalEditarModulo');
}

document.addEventListener('DOMContentLoaded', () => {
    const modulosList = document.getElementById('modulos_list');
    const cursoModuloSelect = document.getElementById('cursoModulo');

    carregarCursos(cursoModuloSelect);
    carregarModulos(modulosList);

    document.getElementById('botaoCriarModulo').addEventListener('click', () => abrirModal('modalCriarModulo'));
    document.getElementById('fecharModal').addEventListener('click', () => fecharModal('modalCriarModulo'));
    document.getElementById('fecharModalEditar').addEventListener('click', () => fecharModal('modalEditarModulo'));

    window.addEventListener('click', (e) => {
        const modais = ['modalCriarModulo', 'modalEditarModulo', 'modalConfirmarExclusao'];
        modais.forEach(id => {
            const modal = document.getElementById(id);
            if (e.target === modal) modal.style.display = 'none';
        });
    });

    document.getElementById('formCriarModulo').addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = document.getElementById('nomeModulo').value;
        const cursoId = parseInt(cursoModuloSelect.value);

        try {
            const response = await fetch('http://127.0.0.1:3000/api/modulos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo: nome, cursoId, ordem: 1 })
            });
            await response.json();
            fecharModal('modalCriarModulo');
            carregarModulos(modulosList);
        } catch (err) {
            console.error('Erro ao criar módulo:', err);
        }
    });

    document.getElementById('formEditarModulo').addEventListener('submit', async (e) => {
        e.preventDefault();

        const id = document.getElementById('editarModuloId').value;
        const titulo = document.getElementById('editarNomeModulo').value;
        const cursoId = parseInt(document.getElementById('editarCursoModulo').value);

        try {
            await fetch(`http://127.0.0.1:3000/api/modulos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo, cursoId })
            });
            fecharModal('modalEditarModulo');
            carregarModulos(modulosList);
        } catch (err) {
            console.error('Erro ao editar módulo:', err);
        }
    });

    document.getElementById('cancelarExclusao').addEventListener('click', () => fecharModal('modalConfirmarExclusao'));

    document.getElementById('confirmarExclusao').addEventListener('click', async () => {
        const id = document.getElementById('moduloIdParaExcluir').value;
        try {
            await fetch(`http://127.0.0.1:3000/api/modulos/${id}`, { method: 'DELETE' });
            fecharModal('modalConfirmarExclusao');
            carregarModulos(modulosList);
        } catch (err) {
            console.error('Erro ao excluir módulo:', err);
        }
    });

    modulosList.addEventListener('click', async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        if (!id) return;

        if (e.target.classList.contains('btn-editar-modulo')) {
            try {
                const modulo = await buscarModuloPorId(id);
                preencherModalEdicao(modulo);
            } catch (err) {
                console.error('Erro ao buscar módulo para editar:', err);
            }
        }

        if (e.target.classList.contains('btn-remover-modulo')) {
            abrirModalExcluir(id);
        }
    });
});
