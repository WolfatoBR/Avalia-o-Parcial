const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('✅ Prisma Client conectado com sucesso!')
    const result = await prisma.$queryRaw`SELECT 1+1 AS result`
    console.log('✅ Teste SQL:', result)
  } catch (error) {
    console.error('❌ Erro:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()