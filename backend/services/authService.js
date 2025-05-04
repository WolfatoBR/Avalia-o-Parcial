const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt')

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

module.exports = { registroUsuario }