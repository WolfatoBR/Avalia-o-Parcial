const { PrismaClient }  = require('@prisma/client')
const prisma = new PrismaClient()

const createCurso = async ({titulo, descricao, categoriaId, cargaHoraria}) =>{
    const curso = await prisma.curso.create({
        data:{
            titulo,
            descricao,
            categoriaId,
            cargaHoraria
        }
    })
    return{
        id: curso.id,
        titulo: curso.titulo,
        descricao: curso.descricao,
        cargaHoraria: curso.cargaHoraria
    }
}

const listCurso = async () => {
    return await prisma.curso.findMany({include:{categoria: true}})
}

const editCurso = async (id,data) =>{
    return await prisma.curso.update({
        where: {id: parseInt(id)},
        data,
    })
}

const deleteCurso = async (id) => {
    return await prisma.curso.delete({
      where: {id: parseInt(id)},  
    })
}


module.exports = {createCurso, listCurso, editCurso, deleteCurso}