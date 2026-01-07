import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; // Permite que a gente navegue entre páginas
import axios from "axios"; // importando uma biblioteca que serve para enviar requisições ao backend e receber respostas
import Avatar from "../../assets/avatar.svg" // Importação de imagem
import Arrow from "../../assets/ArrowLeft.svg" // Importação de imagem
import Trash from "../../assets/trash.svg" // Importação de imagem

import H1 from '../../components/Title'

import ContainerItems from "../../components/ContainerItems";

import Button from "../../components/Button";

import { Container, Image, User } from "./styles" // Importando os elementos criados no style

// JSX
const Users = () => {
  //Aplicação de código JS

  const [users, setUsers] = useState([]) // REACT HOOK (O valor inicial é um array, que esta dentro dos parênteses)

  // REACT HOOKS => FERRAMENTAS AUXILIARES
  // ESTADO => Variável (Variável normal: Não renderiza a página dnv quando o valor é alterado / Estado: Renderiza quando o valor e alterado)

  const history = useHistory() // Guarda as funcionalidades do useHistory

  useEffect(() => { // Criamos uma função dentro da função useEffect para ser possível usar o async await
    async function fetchUsers() {
      const { data: existingUsers } = await axios.get("http://localhost:3001/users") // recupera todos os usuários já existentes
      setUsers(existingUsers) // Coloca os dados ja existentes dentro do meu array
    }

    fetchUsers()
  }, [])


  // REACT HOOK => UseEffect (Efeito Colateral)
  // É chamado assim que minha aplicação inicia
  // Também é chamada sempre que meu estado sofrer uma alteração

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`) // Mando o elemento para a rota de delete (deletar do backend)

    /*Deletar do front end  */
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }


  function goBackPage() {
    history.push("/") // Sempre que essa função for executada ele vai voltar para a página principal
  }

  //Aplicação de elementos HTML
  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => ( // Percorre o array "users" e cria um <User> para cada usuário
            <User key={user.id}> {/* key: identificador único obrigatório para listas no React */}
              <p>{user.name}</p> {/* Exibe o nome do usuário */}
              <p>{user.age}</p> {/* Exibe a idade do usuário */}
              <button onClick={() => deleteUser(user.id)}> {/* Arrow function necessária para passar o user.id - sem ela executaria imediatamente */}
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItems>
    </Container>
  )
}

export default Users