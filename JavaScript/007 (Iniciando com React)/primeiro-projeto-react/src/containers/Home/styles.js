import styled from 'styled-components'; // Importando a biblioteca ue vamos utilizar para configurar o css
import Background from '../../assets/background1.svg' // Importando a imagem de fundo

export const Container = styled.div ` // Criando o elemento container já estilizado
    background: url("${Background}"); // Aplicando a imagem de fundo
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
`;

export const Image = styled.img `
    margin-top: 30px;
`

export const InputLabel = styled.p `
    letter-spacing: -0.408px;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #eeeeee;

    margin-left: 25px;
`

export const Input = styled.input `
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;

    border: none;
    outline: none;

    color: #FFFFFF;
    font-size: 20px;
    line-height: 28px;
`
