const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt')
const jwt =  require('jsonwebtoken')
require ('dotenv').config()

const prisma = new PrismaClient();

const registerUser = async({nome,email,senha, tipo}) => {
    const usuarioExistente = await prisma.user.findUnique({where: {email} })
    if (usuarioExistente){
        throw new Error ('Email já cadastrado!')
    }

const hashedSenha = await bcrypt.hash(senha,10)

const usuario = await prisma.user.create({
    data: {
        nome,
        email,
        senha: hashedSenha,
        tipo: 'ALUNO'
    }
})

return { id: usuario.id, nome: usuario.nome, tipo: usuario.tipo}
}

const loginUser = async({email, senha}) => {
    const usuario = await prisma.user.findUnique({where: { email } })
    if (!user)  throw new Error ('Usuario nao encontrado')
        
    const senhaCompare = await bcrypt.compare(senha, usuario.senha)
    if (!senhaCompare) throw new Error('Senha incorreta')
    
    const token = jwt.sign(
    {
        userId: usuario.id,
        email: usuario.email        
    },
    process.env.JWT_SECRET,
    {expiresIn: '2h'}
    )    


    return {
        user:{
            id: usuario.id, 
            nome: usuario.nome, 
            email: usuario.email, 
            tipo: usuario.tipo},
        token
    }
}
module.exports = { registerUser, loginUser}