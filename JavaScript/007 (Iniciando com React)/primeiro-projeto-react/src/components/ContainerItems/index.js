import React from "react";

// Importa o container estilizado com um apelido
import { ContainerItems as Container } from "./styles";

/*
children → elementos internos
isBlur   → controla se aplica efeito de blur
*/
function ContainerItems({ children, isBlur }) {
    return (
        <Container isBlur={isBlur}>
            {children}
        </Container>
    );
}

export default ContainerItems;
