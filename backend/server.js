const express = require('express') // Importando o Express
const app = express() // Criando uma instância do Express
const authRoutes = require ('./routes/authRoutes') // Importando as rotas de autenticação
const moduloRoutes = require('./routes/moduloRoutes')
const cors = require('cors') // Importando o CORS
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


app.use(cors()) // Usando o middleware CORS para permitir requisições de diferentes origens
app.use(express.json()) // Middleware para analisar o corpo das requisições em JSON
app.use('/api/auth', authRoutes) // Usando as rotas de autenticação
app.use('/modulos', moduloRoutes )

app.use(express.urlencoded({ extended: true })) // Middleware para analisar o corpo das requisições URL-encoded

const PORT = process.env.PORT || 3000 // Definindo a porta do servidor

app.listen(PORT, async () =>{ // Iniciando o servidor
    console.log(`Servidor rodando na porta ${PORT}`) // Iniciando o servidor e exibindo a porta no console
    await prisma.$connect()}) 