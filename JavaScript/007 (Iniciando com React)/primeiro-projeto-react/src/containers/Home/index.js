  import React, { useState, useRef } from "react"; // Importando os react hooks que vamos utilizar
  import { useHistory } from "react-router-dom"; // Biblioteca que vai auxiliar na transição de páginas
  import axios from "axios"; // importando uma biblioteca que serve para enviar requisições ao backend e receber respostas
  import People from "../../assets/people.svg" // Importação de imagem
  import Arrow from "../../assets/arrowRight.svg" // Importação de imagem

  import  H1  from "../../components/Title";
  
  import ContainerItems from "../../components/ContainerItems";

  import Button from "../../components/Button"

  import {Container, Image, InputLabel, Input} from "./styles" // Importando os elementos criados no style

  // JSX

  const Home = () => {
    //Aplicação de código JS

    const [users, setUsers] = useState([]) // REACT HOOK (O valor inicial é um array, que esta dentro dos parênteses)
    const inputName = useRef() // Armazena o conteúdo do input que tiver ref = {inputName}
    const inputAge = useRef() // Armazena o conteúdo do input que tiver ref = {inputAge}

    const history = useHistory() // Armazena as ferramentas disponiveis no useHistory
    
    // REACT HOOKS => FERRAMENTAS AUXILIARES
    
    async function addNewUser(){
      const {data: newUser} = await axios.post("http://localhost:3001/users", {name: inputName.current.value, age: inputAge.current.value}) // await indica que a aplicação so vai continuar quando essa função for 100% carregada
      setUsers([...users, newUser]) // coloca as informações já existente no ESTADO (...users) e adciona a nova informação (newUser)
      
      history.push("/usuarios") // Quando a função é executada somos direcionado para a págiina http://localhost:3000/usuarios

    }

    // ESTADO => Variável (Variável normal: Não renderiza a página dnv quando o valor é alterado / Estado: Renderiza quando o valor e alterado)

    //Aplicação de elementos HTML
    return (
    <Container>
      <Image alt="logo-imagem" src={People}/> {/*Posso adcionar elementos JS quando estão dentro de chaves, nesse caso é a variável People*/}
        <ContainerItems>
          <H1>Olá!</H1>

          <InputLabel>Nome:</InputLabel>
          <Input ref = {inputName} placeholder="Nome"/> {/*ref que armazena o valor do input na variável inputName*/}

          <InputLabel>Idade:</InputLabel>
          <Input ref = {inputAge} placeholder="Idade"/> {/*ref que armazena o valor do input na variável inputAge*/}

          <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow}/></Button>

        </ContainerItems>
    </Container>
  )
  }

  export default Home