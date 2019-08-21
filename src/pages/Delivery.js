import React, { Component } from 'react'
import styled from "styled-components";
import { Input, Select, DatePicker, Spin, Alert } from 'antd';
import DeliveryList from "./DeliveryList";
import { listCarrierAsc, listProductAsc } from '../graphql/product';
import { Query } from 'react-apollo';

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
                                <Query query={ listCarrierAsc }>
                                    {({ data, loading, error }) => {
                                    console.log(data)
                                    if (loading) return <section><Spin size="large" /></section>;
                                    if (error) return <section><Alert
                                    message="Error"
                                    description="A conexão falhou. Favor aguardar normalização."
                                    type="error"
                                    showIcon
                                /></section>;
                                    return (
                                        <section>
                                            <h3>Entregador:</h3>
                                            <Select placeholder="Selecione o entregador">
                                            { data.carrier.map(resp =>(
                                                <Option value={ resp.name } key={ resp.id }>{ resp.name }</Option>
                                                )) }
                                            </Select>
                                        </section>
                                    );
                                }}
                                </Query>

                                <section>
                                    <h3>Data:</h3>
                                    <DatePicker/>
                                </section>
                            </div>
                        </section>
                        <Query query={ listProductAsc }>
                                    {({ data, loading, error }) => {
                                    console.log(data)
                                    if (loading) return <section><Spin size="large" /></section>;
                                    if (error) return <section><Alert
                                    message="Error"
                                    description="A conexão falhou. Favor aguardar normalização."
                                    type="error"
                                    showIcon
                                /></section>;
                                    return (
                                <section>
                                    <h3>Produtos:</h3>
                                    <Select placeholder="Selecione os produtos para essa entrega">
                                        { data.product.map(resp =>(
                                            <Option value={ resp.description } key={ resp.id }>{ resp.description }</Option>
                                        )) }
                                    </Select>
                                </section>
                                );
                            }}
                        </Query>
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
