import React, { Component } from 'react'
import styled from "styled-components";

export default class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Painel de Entregas</h1>
                <div>
                    <h2>Acompanhamento de Entregas</h2>
                    <List>
                        <li>
                            <h4>1</h4>
                        </li>
                        <li>
                            <h3>ll</h3>
                            <span>algo</span>
                        </li>
                        <li>
                         <strong>Pendente</strong>
                        </li>
                    </List>
                </div>

            </Container>
        )
    }
}

export const Container = styled.div`
    width: 100%;
    h1 {
        font-size: 200%;
        padding-bottom: 10px;
        border-bottom:solid 1px;
    }
    div {
        margin: 40px 0;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h2 {
            font-size: 150%;
        }
    }
`;

export const List = styled.ul`
    margin: 40px 0;
    padding: 20px;
    display:flex;
    align-items:center;
    justify-content: space-around;
    border: solid 1px;
    width: 50%;
    h4 {
        background-color: #1d4bc2;
        color: #fff;
        border-radius: 5px;
        padding: 10px 15px;
    }
    strong {
        padding: 5px 15px;
        color: #000;
        background-color: #a8abb1;
        border-radius: 5px;
    }
    @media(max-width: 768px){
            width: 100%;
    }
`;
