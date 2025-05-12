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
        preencherSelect(selectElement,categorias, 'Selecione uma categoria');
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

document.addEventListener('DOMContentLoaded',() => {
    const cursosList = document.getElementById('cursos_list');
    const categoriaCursoSelect = document.getElementById('categoriaCurso');

    carregarCategoria(categoriaCursoSelect)
    carregarCursos(cursosList)

    document.getElementById('botaoCriarCurso').addEventListener('click', () => abrirModal('modalCriarCurso'));
    document.getElementById('fecharModal').addEventListener('click', () => fecharModal('modalCriarCurso'));
    document.getElementById('fecharModalEditar').addEventListener('click', () => fecharModal('modalEditarCurso'));

    window.addEventListener('click', (e) => {
        const modais = ['modalCriarCurso', 'modalEditarCurso', 'modalConfirmarExclusao'];
        modais.forEach(id =>{
            const modal = document.getElementById(id)
            if (e.target === modal) modal.style.display = 'none'
        })
    })

    document.getElementById('formCriarCurso').addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = document.getElementById('nomeCurso').value;
        const categoriaId = parseInt(categoriaCursoSelect.value);

        try{
            const response = await fetch('http://127.0.0.1:3000/api/cursos', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    titulo: nome, 
                    descricao,
                    cargaHoraria,
                    categoriaId
                })
            })
            await response.json();
            fecharModal('modalCriarCurso')
        } catch (err){
            console.error('Erro ao criar módulo:',err)
        }
    });
    
    document.getElementById('formEditarCurso').addEventListener('submit', async (e) => {
        e.preventDefault();

        const id = document.getElementById('editarCursoId').value;
        const titulo = document.getElementById('editarNomeCurso').value;
        const categoriaId = parseInt(document.getElementById('editarCategoriaCurso').value);
        const descricao = document.getElementById('descricaoCurso')

        try{
            await fetch(`http://127.0.0.1:3000/api/cursos/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    titulo, 
                    categoriaId, 
                    cargaHoraria, 
                    descricao})
            });
            fecharModal('modalEditarCurso');
            carregarCursos(cursosList);
        }catch (err) {
            console.error('Erro ao editar curso:', err);
        }
    });

    document.getElementById('cancelarExclusao').addEventListener('click', () => fecharModal('modalConfirmarExclusao'));

    document.getElementById('confirmarExclusao').addEventListener('click', async () => {
        const id = document.getElementById('cursoIdParaExcluir').value;
        try {
            await fetch(`http://127.0.0.1:3000/api/modulos/${id}`, { method: 'DELETE' });
            fecharModal('modalConfirmarExclusao');
            carregarCursos(cursosList)
        } catch (err){
            console.error('Erro ao excluir curso:', err);
        }
    })
    cursosList.addEventListener('click', async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        
        if (!id) return;

        if(e.target.classList.contains('btn-editar-curso')){
            try{
                const curso = await buscarCursoPorId(id);
                preencherModalEdicao(curso)
            }catch (err) {
                console.error('Erro ao buscar curso para editar:', err);
            }
        }
        if (e.target.classList.contains('btn-remover-curso')){
            abrirModalExcluir(id);
        }
    })
})