import React, { Component } from 'react'
import styled from "styled-components";
import { Input, Select, DatePicker } from 'antd';
import DeliveryList from "./DeliveryList";

const { Option } = Select;
const { TextArea } = Input;
export default class Delivery extends Component {
    render() {
        return (
            <Container>
                <h1>Entregas</h1>
                <Main>
                    <article>
                        <section>
                            <h3>Local:</h3>
                            <Input placeholder="Digite o local da entrega a ser realizada" />
                        </section>
                        <section>
                            <div>
                                <section>

                            <h3>Entregador:</h3>
                            <Select placeholder="Selecione o entregador">
                                <Option value="lu">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                            </Select>
                                </section>
                                <section>

                            <h3>Data:</h3>
                            <DatePicker/>
                                </section>
                            </div>
                        </section>
                        <section>
                            <h3>Produtos:</h3>
                            <Select placeholder="Selecione os produtos para essa entrega">
                                <Option value="lu">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                            </Select>
                        </section>
                        <section>
                            <h3>Descrição:</h3>
                            <TextArea rows={4} placeholder="Escreva observações sobre a entrega a ser feita"/>
                        </section>
                        <section>
                            <button type="button">Salvar</button>
                        </section>
                    </article>
                    <ListBox>
                        <h2>Entregas</h2>
                        <DeliveryList/>
                    </ListBox>
                </Main>
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
        width: 30%;
    }
    section {
        padding: 10px 0;
        div{
            display:flex;
            justify-content:space-between;
            width: 100%;
            margin-right:10px;
            section {
                width: 100%;
            }
        }
    }
    h3 {
        padding: 5px 0;
    }
    button {
            margin: 10px 0;
            width: 100%;
            height: 55px;
            background: #478c02;
            color: #fff;
            border: 0;
            font-size: 20px;
            font-weight: bold;
            border-radius: 5px;
            &:hover {
                background: #315F02;
            }
        }
    @media(max-width: 768px){
        article {
            width: 100%;
        }
    }
`;

export const Main = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 40px 0;

    @media(max-width: 768px){
        flex-direction: column;
    }

`;
export const ListBox = styled.div`
        width:30%;
        border: solid 1px;
        h2{
            padding: 15px 30px;
        }

        @media(max-width: 768px){
        width: 100%;
        }

`;
