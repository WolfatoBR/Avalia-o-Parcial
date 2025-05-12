const categoriaService = require('../services/categoriaService')


exports.createCategoria = async (req,res) =>{
    try{
        const categoria = await categoriaService.createCategoria(req.body)
        res.status(201).json(categoria)
    }catch (err){
        console.error('Erro detalhado ao criar categoria:', err)
        res.status(400).json({error: 'Erro ao criar categoria'})
    }
}

exports.listCategoria = async (req,res) => {
    try{
        const categoria = await categoriaService.listCategoria()
        res.json(categoria)
    }catch (err){
        console.error('Erro detalhado ao listar categoria:', err)
        res.status(500).json({error:'Erro ao listar categorias'})
    }
}

exports.editCategoria = async(req,res) => {
    const { id } = req.params
    try{
        const categoria = await categoriaService.editCategoria(id, req.body);
        res.json(categoria)
    }
    catch(err){
        console.error('Erro detalhado ao editar categoria: ', err)
        res.status(400).json({error: 'Erro ao editar categoria'})
    }
}

exports.deleteCategoria = async (req,res) => {
    const {id} = req.params
    try{
        await categoriaService.deleteCategoria(id);
        res.json({message: 'Categoria excluida com sucesso'})
    }
    catch(err){
        console.error('Erro detalhado ao deletar categoria: ',err)
        res.status(400).json({error: 'Erro ao deletar categoria'})
    }
}

exports.getCategoriaById = async(req,res) => {
    const { id } = req.params
    try{
        const categoria = await categoriaService.getCategoriaById(parseInt(id))
        if(!categoria){
            return res.status(404).json({error: 'Categoria nao encontrada'})
        }
        res.json(categoria)
    } catch(err){
        console.error('Erro detalhado ao buscar categoria por ID: ', err)
        res.status(500).json({error: 'Erro ao buscar categoria'})
    }
}