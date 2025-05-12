const moduloServices = require('../services/moduloServices')

exports.createModulo = async(req, res) =>{
    try{
        const modulo = await moduloServices.createModulo(req.body)
        res.status(201).json(modulo)
    }
    catch(err){
        console.error('Erro detalhado ao criar modulo:', err)
        res.status(400).json({error: 'Erro ao criar modulo'})
    }
}

exports.listModulo = async(req,res) =>{
    try{
        const modulo = await moduloServices.listModulo()
        res.json(modulo)
    }
    catch(err){
        console.error('Erro detalhado ao listar modulos:', err)
        res.status(500).json({error: 'Erro ao listar modulos'})
    }
}

exports.editModulo = async(req,res) =>{
    const { id } = req.params
    try{
        const modulo = await moduloServices.editModulo(id, req.body);
        res.json(modulo)
    }
    catch(err){
        console.error('Erro detalhado ao editar modulo: ', err)
        res.status(400).json({error: 'Erro ao editar modulo'})
    }
}

exports.deleteModulo = async(req,res) =>{
    const {id} = req.params
    try{
        await moduloServices.deleteModulo(id);
        res.json({message: 'Modulo excluido com sucesso'})
    }
    catch(err){
        console.error('Erro detalhado ao deletar modulo:', err)
        res.status(400).json({error: 'Erro ao deletar modulo'})
    }
}
exports.getModuloById = async (req,res) => {
    const { id } = req.params
    try{
        const modulo = await moduloServices.getModuloById(parseInt(id))
        if(!modulo){
            return res.status(404).json({error: 'Modulo nao encontrado'})
        }
        res.json(modulo);
    } catch(err){
        console.error('Erro detalhado ao buscar modulo por ID:', err)
        res.status(500).json({error: 'Erro ao buscar modulo'})
    }
};