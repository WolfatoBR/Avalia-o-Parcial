const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function testCRUD() {
  // CREATE
  const newPlano = await prisma.plano.create({
    data: {
      nome: "Teste",
      descricao: "Plano de teste"
    }
  })
  console.log('Plano criado:', newPlano)

  // READ
  const planos = await prisma.plano.findMany()
  console.log('Planos existentes:', planos)

  // UPDATE
  const updatedPlano = await prisma.plano.update({
    where: { id: newPlano.id },
    data: { descricao: "Descrição atualizada" }
  })
  console.log('Plano atualizado:', updatedPlano)

  // DELETE
  const deletedPlano = await prisma.plano.delete({
    where: { id: newPlano.id }
  })
  console.log('Plano removido:', deletedPlano)
}

testCRUD()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())