const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt')
const jwt =  require('jsonwebtoken')
require ('dotenv').config()

const prisma = new PrismaClient();

const registerUser = async({nome,email,senha, tipo}) => {
    const usuarioExistente = await prisma.usuario.findUnique({where: {email} })
    if (usuarioExistente){
        throw new Error ('Email já cadastrado!')
    }

const hashedSenha = await bcrypt.hash(senha,10)

const usuario = await prisma.usuario.create({
    data: {
        nome,
        email,
        senha: hashedSenha,
        tipo,
        planoId: 1, // Definindo o plano padrão como 1
    }
})

return { id: usuario.id, nome: usuario.nome, tipo: usuario.tipo, planoId: usuario.planoId}
}

const loginUser = async({email, senha}) => {
    const usuario = await prisma.usuario.findUnique({where: { email } })
    if (!usuario)  throw new Error ('Usuario nao encontrado')
        
    const senhaCompare = await bcrypt.compare(senha, usuario.senha)
    if (!senhaCompare) throw new Error('Senha incorreta')
    
    const token = jwt.sign(
    {
        userId: usuario.id,
        email: usuario.email,
        tipo: usuario.tipo   
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