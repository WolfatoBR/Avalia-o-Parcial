function abrirModalExcluir(id) {
    const modal = document.getElementById('modalConfirmarExclusao');
    document.getElementById('cursoIdParaExcluir').value = id;
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

function criarLinhaCurso(curso) {
    return `
        <tr>
            <td>${curso.id}</td>
            <td>${curso.titulo}</td>
            <td>${curso.categoria.titulo}</td>
            <td>${curso.cargaHoraria}</td>
            <td>
                <a href="#" data-id="${modulo.id}" class="btn-editar-modulo">Editar</a> | 
                <a href="#" data-id="${modulo.id}" class="btn-remover-modulo">Remover</a>
            </td>
        </tr>
    `;
}


async function carregarCategoria(selectElement){
    try{
        const response = await fetch('http://127.0.0.1:3000/api/categoria');
        const categorias = await response.json();
        preencherSelect(selectElement,cursos, 'Selecione uma categoria');
    }catch (err){
        console.error('Erro ao carregar categorias: ', err)
    }
}

async function carregarCursos(tabela) {
    try {
        const response = await fetch('http://127.0.0.1:3000/api/cursos');
        const cursos = await response.json();
        tabela.innerHTML = cursos.map(criarLinhaCurso).join('');
    } catch (err) {
        console.error('Erro ao carregar cursos:', err);
    }
}

async function buscarCursoPorId(id) {
    const response = await fetch(`http://127.0.0.1:3000/api/cursos/${id}`);
    return await response.json();
}

function preencherModalEdicao(curso) {
    const categoriaSelect = document.getElementById('categoriaCurso');
    const editarCategoriaSelect = document.getElementById('editarCategoriaCurso');

    document.getElementById('editarCursoId').value = curso.id;
    document.getElementById('editarNomeCurso').value = curso.titulo;
    editarCategoriaSelect.innerHTML = categoriaSelect.innerHTML;
    editarCategoriaSelect.value = curso.categoria.id;

    abrirModal('modalEditarCurso');
}