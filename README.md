# Avalia-o-Parcial
Construir uma plataforma EAD para ministração de cursos EAD.

## Passo a passo pro Banco rodar Bonitin!

Instalar as dependencias (node)

```bash
 npm init -y
 npm install express
 npm install mysql2
 npm install -D nodemon
```

Instalar as dependencias (prisma)

```bash
- Instalação e Inicialização

 npm install prisma --save-dev
 npm install prisma @prisma/client
 npx prisma init
```

Apos editar o 'schema.prisma' e o arquivo '.env'.

1. Aplique o modelo ao banco
- npx prisma db push

2. Para ver os dados do Banco
- npx prisma db pull

3. Gere o client prisma
- npx prisma generate

4. Teste com o script test.js

5. Na pasta que foi feito todo o processo, utilize o 'npx prisma studio'