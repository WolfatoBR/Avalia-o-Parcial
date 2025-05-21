const cursoService = require('../services/cursoService')

exports.createCurso = async(req,res) => {
    try{
        const curso = await cursoService.createCurso(req.body)
        res.status(201).json(curso)
    } catch(err){
        console.log('Erro detalhado ao criar curso: ', err)
        res.status(400).json({error: 'Erro ao criar curso'})
    }
}

exports.listCurso = async (req,res) =>{
    try{
        const curso = await cursoService.listCurso()
        res.json(curso)
    }
    catch (err){
        console.error('Erro detalhado ao listar cursos: ', err)
        res.status(500).json({error: 'Erro ao listar cursos'})
    }
}

exports.editCurso = async (req,res) => {
    const { id } = req.params
    try{
        const curso = await cursoService.editCurso(id, req.body);
        res.json(curso)
    }
    catch(err){
        console.error('Erro detalhado ao editar curso: ', err)
        res.status(400).json({error: 'Erro ao editar curso'})
    }
}

exports.deleteCurso = async (req,res) => {
    const { id } = req.params
    try{
        await cursoService.deleteCurso(id)
        res.json({message: 'Curso excluido com sucesso'})
    }
    catch(err){
        console.error('Erro detalhado ao deletar curso:', err)
        res.status(400).json({error: 'Erro ao deletar curso'})
    }
}