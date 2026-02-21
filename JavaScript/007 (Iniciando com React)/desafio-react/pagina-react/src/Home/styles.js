import React from "react";
import styled from "styled-components";

export const Image = styled.img `
    height: 354px;
    width: 342px;
`

export const ContainerItems = styled.div `
    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.label `
    font-weight: 700;
    font-size: 15px;
    letter-spacing: -0.41px;
    color: #EEEEEE;
    margin-left: 15px;
`

export const Input = styled.input `
    box-shadow: 0px 4px 4px 0px #00000040;
    width: 342px;
    height: 58px;
    border-radius: 14px;
    background-color: #47474C;
    border: none;
    font-weight: 300;
    font-size: 18px;
    color: #FFFFFF;
    padding-left: 15px;
    margin-bottom: 42px;


`
export const Button = styled.button `   
    height: 68px;
    background-color: #D93856;
    font-family: Roboto;
    font-weight: 900;
    font-size: 17px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    transition: .3s;

    &:hover{
        background-color: #91273b;
    }
`

