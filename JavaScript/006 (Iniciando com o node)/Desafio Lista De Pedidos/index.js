const express = require('express')
const app = express()
const uuid = require('uuid')
const port = 3001

const orders = []

app.use(express.json())

app.get('/order', (request, response) => {
    return response.json(orders)
})

app.post('/order', (request, response) => {
    const {order, clientName, price} = request.body
    orders.push({id: uuid.v4(), order, clientName, price, status: "Em preparação"})
    const newOrder = {order, clientName, price}
    response.status(201).json(newOrder)
})

app.put('/order/:id', (request, response) => {
    const {id} = request.params
    const {order, clientName, price} = request.body

    const index = orders.findIndex(orders => id == orders.id)

    if(index < 0){
        response.status(404).json({error: 'Order not found'})
    }

    const updatedOrder = {id, order, clientName, price, status: "Em preparação"}

    orders[index] = updatedOrder
    response.json(updatedOrder)
    console.log(index)
})

app.get('/order/:id', (request, response) => {
    const {id} = request.params
    const index = orders.findIndex(orders => id == orders.id)

    if(index < 0){
        response.status(404).json({error: 'Order not found'})
    }

    response.json(orders[index])
})

app.patch('/order/:id', (request, response) => {
    const {id} = request.params
    const index = orders.findIndex(orders => id == orders.id)

    if(index < 0){
        response.status(404).json({error: 'Order not found'})
    }

    orders[index].status = 'Pronto'
    response.json(orders[index])
})

app.delete('/order/:id', (request, response) => {
    const {id} = request.params
    const index = orders.findIndex(orders => id == orders.id)

    if(index < 0){
        response.status(404).json({error: 'Order not found'})
    }

    orders.splice(index, 1)
    response.json({message: 'order successfully deleted'})
})

app.listen(port, () => {
    console.log(`Server in port ${port}`)
})
