const { PrismaClient }  = require('@prisma/client')
const prisma = new PrismaClient()

const createModulo = async ({cursoId, titulo, ordem}) => {
    const modulo = await prisma.modulo.create({
        data:{
            cursoId: parseInt(cursoId),
            titulo,
            ordem
        },
        include:{
            curso: true
        }
    })
    return modulo;
}

const listModulo = async () => {
    return await prisma.modulo.findMany({include:{curso: true}})
}

const editModulo = async (id, data) => {
    const {titulo, cursoId} = data;
    
    return await prisma.modulo.update({
        where: {id: parseInt(id)},
        data:{
            titulo,
            curso:{
                connect:{id:parseInt(cursoId)}
            }
        },
        include:{
            curso:true
        }
    })
}

const deleteModulo = async(id) =>{
    return await prisma.modulo.delete({
        where: {id:parseInt(id)},
    })
}

const getModuloById = async(id) =>{
    return await prisma.modulo.findUnique({
        where: {id: parseInt(id)},
        include:{curso: true}
    })
}

module.exports = {createModulo, listModulo, editModulo, deleteModulo, getModuloById}

