import React from "react";

// Importa o botão estilizado e renomeia para ContainerButton
import { Button as ContainerButton } from "./style";

/*
children → conteúdo que fica dentro do botão
...rest  → todas as outras props (onClick, isBack, etc.)
*/
function Button({ children, ...rest }) {
    // Passa todas as props para o botão estilizado
    return  <ContainerButton {...rest}> {children} </ContainerButton>
}

export default Button;

