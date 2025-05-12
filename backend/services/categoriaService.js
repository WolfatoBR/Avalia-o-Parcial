const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createCategoria = async (nome) => {
    const categoria = await prisma.categoria.create({
        data:{nome}
    })
    return{
        nome: categoria.nome
    }
}

const listCategoria = async () =>{
    return await prisma.categoria.findMany()
}

const editCategoria = async (id, data) =>{
    return await prisma.categoria.update({
        where:{id: parseInt(id)},
        data
    })
}

const deleteCategoria = async(id) => {
    return await prisma.categoria.delete({
        where: {id: parseInt(id)}
    })
}

const getCategoriaById = async (id) => {
    return await prisma.categoria.findUnique({
        where: {id: parseInt(id)},
    })
}

module.exports = {createCategoria, listCategoria, editCategoria, deleteCategoria, getCategoriaById}