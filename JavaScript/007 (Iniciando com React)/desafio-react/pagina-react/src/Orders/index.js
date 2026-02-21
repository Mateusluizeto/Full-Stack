import React, {useState ,useEffect } from "react";
import { Image, Orders, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import burgerImage from '../assets/burgerImage(1).png'

import axios from "axios";

// Importando os componentes
import Container from "../components/Container";
import Title from "../components/Title";

import Trash from "../assets/trash.png"

function Order() {
  
  const [orders, setOrders] = useState([])

  useEffect(() =>{
    async function showOrders() {
      const {data} = await axios.get("http://localhost:3001/orders")
      setOrders(data)
    }

    showOrders()
  }, [])
  
  
  async function descartItems(userId){
    await axios.delete(`http://localhost:3001/orders/${userId}`)
    
    const newOrders = orders.filter(order => order.id !== userId)
    setOrders(newOrders)
  }
  
  const navigate = useNavigate()
  function goBackPage(){
    navigate('/')
  }

 return(
  <Container>
    <Image src={burgerImage}/>
    <Title>Pedidos</Title>
    <ul>
      {orders.map((order) => (
        <Orders key={order.id}>
          <span>{order.order}</span>
          <button onClick={() => descartItems(order.id)}><img src={Trash}/></button>
          <p>{order.name}</p>
        </Orders>
      ))}
    </ul>

    <Button onClick={goBackPage}>Voltar</Button>
  </Container>
 )
}

export default Order;
