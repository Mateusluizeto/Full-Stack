import styled from 'styled-components'; // Importando a biblioteca ue vamos utilizar para configurar o css
import Background from '../../assets/background.svg' // Importando a imagem de fundo

export const Container = styled.div ` // Criando o elemento container já estilizado
    background: url("${Background}"); // Aplicando a imagem de fundo
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img `
    margin-top: 30px;
`

export const User = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    margin-top: 20px;

    width: 342px;
    height: 58px;

    border: none;
    outline: none;
    
    p{ // Posso estilizar o p dessa forma pois ele esta dentro do User
        font-size: 24px;
        line-height: 28px;

        color: #FFFFFF;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`