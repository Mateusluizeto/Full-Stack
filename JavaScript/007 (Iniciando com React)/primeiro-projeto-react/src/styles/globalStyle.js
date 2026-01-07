import styled, { createGlobalStyle } from "styled-components"; // Sempre que formos criar um estilo global devemos importar o createGlobalStyle

const globalStyle = createGlobalStyle `
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`

export default globalStyle