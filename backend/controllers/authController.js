const authService = require('../services/authService')

const register = async (req, res) => {
    try {
        const {nome, email, senha, tipo} = req.body
        const user = await authService.registerUser({nome, email, senha, tipo})
        res.status(201).json({message: 'Usuario cadastrado com sucesso', user})
    } catch (error){
        res.status(400).json({error: error.message})
    }

}

module.exports = { register }