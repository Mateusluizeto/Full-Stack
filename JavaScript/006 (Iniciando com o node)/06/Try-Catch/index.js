const express = require('express')
const app = express()
const uuid = require('uuid')
const port = 3000

app.use(express.json())

const users = []

const checkUserId = (request, response, next) => {
    const {id} = request.params
    const index = users.findIndex(user => user.id === id)

    if(index < 0){
        return response.status(404).json({message: 'User not found'})
    }

    request.userIndex = index
    request.userId = id

    next()
}

app.get('/users', (request, response) => {
    return response.json(users)
})

/*
    Tratamento de erros (TRY CATCH)
*/

app.post('/users', (request, response) => {
    try{
        const {name, age} = request.body

        if(age < 18) throw new Error() // Criando um erro na minha aplicação (Se quando eu for criar o usuário ele tiver menos de 18 anos, retorna o código presente no catch)

        const user = {id: uuid.v4(), name, age}
        users.push(user)
        return response.status(201).json(user)
    } catch(error) {
        return response.status(400).json({error: 'Internal server error'}) // retorna esse código caso tenha um erro na aplicação
    }
})

app.put('/users/:id', checkUserId, (request, response) => {
    const {name, age} = request.body
    const index = request.userIndex 
    const id = request.userId
    const updatedUser = {id, name, age}
    users[index] = updatedUser
    return response.json(updatedUser)
})

app.delete('/users/:id', checkUserId, (request, response) => {
    const index = request.userIndex
    users.splice(index, 1)
    return response.status(204).json()
})

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`) 
})