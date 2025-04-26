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
 npx prisma init
```

Apos editar o 'schema.prisma' e o arquivo '.env'.

1. Aplique o modelo ao banco
- npx prisma db push
2. Gere o client prisma
- npx prisma generate

3. Teste com o script test.js

4. Na pasta que foi feito todo o processo, utilize o 'npx prisma studio'