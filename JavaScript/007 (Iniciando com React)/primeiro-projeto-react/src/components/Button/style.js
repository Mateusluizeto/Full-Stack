import styled from "styled-components";

// Botão estilizado com styled-components
export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 50px;

    /*
    Se a prop isBack for true:
    - fundo transparente
    - borda branca
    */
    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border: ${props => props.isBack ? '1px solid #ffffff' : 'none'};
    border-radius: 14px;

    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    /* Pseudo-classes */
    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`;
