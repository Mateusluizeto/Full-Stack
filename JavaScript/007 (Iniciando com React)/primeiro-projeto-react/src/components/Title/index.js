import React from "react";
import { H1 } from "./styles";

// PROPS => PROPRIEDADES

// Componente de título reutilizável
function Title({children}) {
    return <H1>{children}</H1>
}

export default Title