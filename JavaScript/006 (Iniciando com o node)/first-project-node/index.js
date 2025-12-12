// Importa o framework Express para criar o servidor
const express = require('express')

// Cria uma instância do Express (o aplicativo)
const app = express()

// Importa a biblioteca UUID para gerar IDs únicos
const uuid = require('uuid')

// Define a porta onde o servidor vai rodar
const port = 3000

// MIDDLEWARE GLOBAL: Converte o corpo das requisições JSON em objetos JavaScript
// Sem isso, request.body seria undefined
app.use(express.json())

// Array que simula um banco de dados (armazena os usuários em memória)
const users = []

// ========== MIDDLEWARE PERSONALIZADO ==========
// Valida se o usuário existe antes de executar as rotas PUT e DELETE
const checkUserId = (request, response, next) => {
    // Extrai o parâmetro 'id' da URL (ex: /users/123 → id = "123")
    const {id} = request.params

    // Busca a posição (índice) do usuário no array
    // findIndex retorna -1 se não encontrar
    const index = users.findIndex(user => user.id === id)

    // Se o índice for -1, significa que o usuário não existe
    if(index < 0){
        // Retorna erro 404 (Not Found) e para a execução
        // O 'return' aqui impede que next() seja chamado
        return response.status(404).json({message: 'User not found'})
    }

    // Se o usuário existe, adiciona o índice ao objeto request
    // Isso permite que as rotas usem esse dado sem precisar buscar novamente
    request.userIndex = index
    
    // Também adiciona o ID ao request para facilitar o uso nas rotas
    request.userId = id

    // Chama next() para passar o controle para a próxima função (a rota final)
    next()
}

// ========== ROTA GET - Lista todos os usuários ==========
// Não usa middleware pois não precisa validar nenhum ID específico
app.get('/users', (request, response) => {
    // Retorna o array completo de usuários em formato JSON
    return response.json(users)
})

// ========== ROTA POST - Cria um novo usuário ==========
// Não usa middleware pois está criando um novo usuário (não precisa validar ID existente)
app.post('/users', (request, response) => {
    // Extrai name e age do corpo da requisição
    const {name, age} = request.body
    
    // Cria um objeto usuário com ID único gerado pelo uuid
    const user = {id: uuid.v4() , name, age,}
    
    // Adiciona o novo usuário ao array
    users.push(user)
    
    // Retorna status 201 (Created) e o usuário criado
    return response.status(201).json(user)
})

// ========== ROTA PUT - Atualiza um usuário existente ==========
// USA O MIDDLEWARE: checkUserId é executado ANTES desta função
app.put('/users/:id', checkUserId, (request, response) => {
    // Extrai os novos dados do corpo da requisição
    const {name, age} = request.body
    
    // Pega o índice que o middleware preparou
    // Não precisa buscar novamente!
    const index = request.userIndex 
    
    // Pega o ID que o middleware preparou
    const id = request.userId

    // Cria o objeto com os dados atualizados
    const updatedUser = {id, name, age}

    // Substitui o usuário antigo pelo atualizado na posição correta
    users[index] = updatedUser

    // Retorna o usuário atualizado
    return response.json(updatedUser)
})

// ========== ROTA DELETE - Remove um usuário ==========
// USA O MIDDLEWARE: checkUserId valida se o usuário existe antes de deletar
app.delete('/users/:id', checkUserId, (request, response) => {
    // Pega o índice que o middleware preparou
    const index = request.userIndex

    // Remove 1 elemento do array na posição 'index'
    // splice(posição, quantos elementos remover)
    users.splice(index, 1)

    // Retorna status 204 (No Content) - sucesso sem conteúdo na resposta
    // Por isso o json() está vazio (poderia até remover o .json())
    return response.status(204).json()
})

// Inicia o servidor na porta definida  
app.listen(port, () => {
    // Exibe mensagem no console quando o servidor estiver rodando
    console.log(`🚀 Server started on port ${port}`) 
})











/*
    - Query params => meusite.com/users?nome+rodolfo&age=28 // FILTROS
    - Route params => /users/2      // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body => {"name":"Rodolfo", "age":}

    - GET           => Buscar informação no back-end
    - POST          => Criar informação no back-end
    - PUT / PATCH   => Alterar/Atualizar informações no back-end
    - DELETE        => Deletar informação no back-end

    - Middleware => INTERCEPTADOR => Tem o poder de parar ou alterar dados da requisição
*/