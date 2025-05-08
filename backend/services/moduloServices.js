const { PrismaClient }  = require('@prisma/client')
const prisma = new PrismaClient()

const createModulo = async ({id, cursoId, titulo, ordem}) => {
    const modulo = await prisma.modulo.create({
        data:{
            cursoId,
            titulo,
            ordem
        }
    })
    return{
        id: modulo.id,
        cursoId: modulo.cursoId,
        titulo: modulo.titulo
    }
}

const listModulo = async () => {
    return await prisma.modulo.findMany({include:{curso: true}})
}

const editModulo = async (id, data) => {
    return await prisma.modulo.update({
        where: {id: parseInt(id)},
        data,
    })
}

const deleteModulo = async(id) =>{
    return await prisma.modulo.delete({
        where: {id:parseInt(id)},
    })
}

module.exports = {createModulo, listModulo, editModulo, deleteModulo}

