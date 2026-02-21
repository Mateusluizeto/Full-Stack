const express = require('express')
const uuid = require('uuid')
const port = 3001
const app = express()

const orders = []

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/orders' ,(request, response) => {
    response.status(200).json(orders)
})

app.post('/orders', (request, response) => {
    const {order, name} = request.body
    const newOrder = { id: uuid.v4() ,order, name}
    response.status(201).json(newOrder)
    orders.push(newOrder)
})

app.delete('/orders/:id', (request, response) => {
    const {id} = request.params
    const index = orders.findIndex(order => order.id == id)
    if(index < 0) {
        response.status(404).json("message: Order not found")
        return
    }

    orders.splice(index, 1)
    response.status(200).json("message: Order successfully deleted")
})

app.listen(port, () =>{
    console.log('Server in port 3001')
})