import React, { Component } from 'react'

import styled from "styled-components";

import { Icon } from 'antd';

export default class Products extends Component {
    render() {
        return (
            <Container>
                <h1>Produtos</h1>
                <article>
                    <section>
                        <div>
                            <h3>Descrição:</h3>
                            <input type="text" placeholder="Digite a descrição do produto"/>
                        </div>
                        <div>
                            <h3>Preço:</h3>
                            <input type="text" placeholder="Ex: R$ 99,99"/>
                        </div>
                    </section>
                    <button type="button">Salvar</button>
                    <ListBox>
                        <h2>Lista de Produtos</h2>
                        <ul>
                            <li>
                                <h2>1</h2>
                            </li>
                            <li>
                                <h3>Produto 1</h3>
                                <span>R$ 90,00</span>
                            </li>
                            <li>
                                <Icon type="edit" theme="filled" />
                            <Icon type="delete" theme="filled" />
                            </li>
                        </ul>
                    </ListBox>
                </article>
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
    article {
        padding: 40px;
        display: flex;
        flex-direction:column;
        align-items:center;
        section {
            width: 50%;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
        }
        button {
            width: 50%;
            margin-bottom: 20px;
        }
    }
`;

export const ListBox = styled.div`
        display:flex;
        flex-direction:column;
        justify-content: flex-start;
        width: 50%;
        border:solid 1px;
        h2{
            padding: 15px 30px;
        }

        ul {
            padding: 15px 30px;
            align-items:center;
            display:flex;
            justify-content: space-between;
            i{
                padding: 0 10px
            }

        }
`;
