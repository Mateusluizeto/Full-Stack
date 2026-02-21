import React, {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import {ContainerItems, Image, InputLabel, Input, Button } from "./styles";
import burgerImage from '../assets/burgerImage.png'

// Importando os componentes
import Container from "../components/Container";
import Title from "../components/Title";

import axios from "axios";

function Home() {
  const order = useRef()
  const name = useRef()
  const navigate = useNavigate()

  const [orders, setOrders] = useState([])

  async function sendOrder(){
    const {data: NewOrder} = await axios.post("http://localhost:3001/orders", {order: order.current.value, name: name.current.value})
    setOrders([...orders, NewOrder])
    console.log(orders)
    goNextPage()
 

  }

  function goNextPage(){
    navigate('/orders')
  }


 return(
  <Container>
    <Image src={burgerImage}/>
    <Title>Faça seu pedido!</Title>
    <ContainerItems>
      <InputLabel>Pedido</InputLabel>
      <Input placeholder="1 Coca-Cola, 1 X-Salada" ref={order}/>
      <InputLabel>Nome do cliente</InputLabel>
      <Input placeholder="Steve Jobs" ref={name}/>
      <Button onClick={sendOrder}>Novo Pedido</Button>
    </ContainerItems>
  </Container>
 )
}

export default Home;
