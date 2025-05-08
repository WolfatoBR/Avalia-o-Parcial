const moduloService = require('../services/moduloServices')

exports.createModulo = async(req, res) =>{
    try{
        const modulo = await moduloService.createModulo(req.body)
        res.status(201).json(modulo)
    }
    catch(err){
        console.error('Erro detalhado ao criar modulo:', err)
        res.status(400).json({error: 'Erro ao criar modulo'})
    }
}

exports.listModulo = async(req,res) =>{
    try{
        const modulo = await moduloService.listModulo()
        res.json(modulo)
    }
    catch(err){
        res.status(500).json({error: 'Erro ao listar modulos'})
    }
}

exports.editModulo = async(req,res) =>{
    const { id } = req.params
    try{
        const modulo = await moduloService.editModulo(id, req.body);
        res.json(modulo)
    }
    catch(err){
        res.status(400).json({error: 'Erro ao editar modulo'})
    }
}

exports.deleteModulo = async(req,res) =>{
    const {id} = req.params
    try{
        await moduloService.deleteModulo(id);
        res.json({message: 'Modulo excluido com sucesso'})
    }
    catch(err){
        console.error('Erro detalhado ao deletar modulo:', err)
        res.status(400).json({error: 'Erro ao deletar modulo'})
    }
}