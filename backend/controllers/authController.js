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

const login = async(req,res) => {
    try{
        const {email, senha} = req.body
        const { user, token }= await authService.loginUser({email, senha})
        res.status(200).json({message: 'Login realizado com sucesso', user, token})
    } catch (error){
        res.status(401).json({error: error.message})
    }
}

module.exports = { register, login } 