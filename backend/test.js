/*
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Teste de criação de Plano
  const plano = await prisma.plano.create({
    data: {
      nome: "Premium",
      descricao: "Plano com todos os recursos"
    }
  })
  console.log('Plano criado:', plano)

  // Teste de criação de Usuário
  const usuario = await prisma.usuario.create({
    data: {
      nome: "João Silva",
      email: "joao@exemplo.com",
      senha: "senha123",
      tipo: "ALUNO",
      planoId: plano.id
    }
  })
  console.log('Usuário criado:', usuario)

  // Teste de criação de Categoria
  const categoria = await prisma.categoria.create({
    data: {
      nome: "Programação"
    }
  })
  console.log('Categoria criada:', categoria)

  // Teste de criação de Curso
  const curso = await prisma.curso.create({
    data: {
      titulo: "Introdução ao Prisma",
      descricao: "Aprenda Prisma do zero",
      categoriaId: categoria.id,
      cargaHoraria: 20
    }
  })
  console.log('Curso criado:', curso)

  // Teste de criação de Turma
  const turma = await prisma.turma.create({
    data: {
      nome: "Turma 2023",
      cursoId: curso.id,
      professorId: usuario.id
    }
  })
  console.log('Turma criada:', turma)

  // Teste de relacionamento Aluno-Turma
  const alunoTurma = await prisma.alunoTurma.create({
    data: {
      alunoId: usuario.id,
      turmaId: turma.id
    }
  })
  console.log('Aluno matriculado:', alunoTurma)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) */

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()
    
    async function main() {
      // 1. Criar Plano (funciona porque tem @updatedAt)
      const plano = await prisma.plano.create({
        data: {
          nome: "Premium",
          descricao: "Plano com todos os recursos"
        }
      })
      console.log('Plano criado:', plano)
    
      // 2. Criar Usuário
      const usuario = await prisma.usuario.create({
        data: {
          nome: "João Silva",
          email: "joao@exemplo.com",  // Lembre: email é @unique
          senha: "senha123",
          tipo: "ALUNO",  // Ou usuario_tipo.ALUNO se estiver usando enum
          planoId: plano.id,
          dataCadastro: new Date()  // Campo obrigatório no seu modelo
        }
      })
      console.log('Usuário criado:', usuario)
    
      // 3. Criar Categoria (corrigindo updatedAt)
      const categoria = await prisma.categoria.create({
        data: {
          nome: "Programação",
          createdAt: new Date(),
          updatedAt: new Date()  // Obrigatório no seu modelo
        }
      })
      console.log('Categoria criada:', categoria)
    
      // 4. Criar Curso
      const curso = await prisma.curso.create({
        data: {
          titulo: "Introdução ao Prisma",
          descricao: "Aprenda Prisma do zero",
          categoriaId: categoria.id,
          cargaHoraria: 20
        }
      })
      console.log('Curso criado:', curso)
    
      // 5. Criar Turma
      const turma = await prisma.turma.create({
        data: {
          nome: "Turma 2023",
          cursoId: curso.id,
          professorId: usuario.id
        }
      })
      console.log('Turma criada:', turma)
    
      // 6. Matricular Aluno (usando nome exato do modelo)
      const matricula = await prisma.alunoturma.create({  // Note: alunoturma em minúsculo
        data: {
          alunoId: usuario.id,
          turmaId: turma.id
        }
      })
      console.log('Matrícula realizada:', matricula)
    }
    
    main()
      .catch(e => {
        console.error(e.message)  // Mensagem mais clara
        process.exit(1)
      })
      .finally(async () => {
        await prisma.$disconnect()
      })