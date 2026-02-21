import React from "react";
import {ContainerStyles} from './styles'

function Container({children}){
    return (<ContainerStyles>{children}</ContainerStyles>)
}

export default Container
