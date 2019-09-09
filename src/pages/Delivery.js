import React, { Component } from 'react'
import styled from "styled-components";
import { Input, Select, DatePicker, Spin, Alert } from 'antd';
import DeliveryList from "./DeliveryList";
import { listCarrierAsc, listProductAsc, insertDelivery, listDelivery } from '../graphql/product';
import { Query, Mutation } from 'react-apollo';
import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

function onChange(date, dateString) {
    console.log(dateString);
  }

function disabledDate(current) {
    return current <= moment().endOf('day');
}
export default class Delivery extends Component {

    // Define Constructor
    constructor(props) {
        super(props);

    }


    render() {
        let address;
        let description;
        let carrier_id;
        let lat;
        let lng;
        let date;
        return (
            <Container>
                <h1>Entregas</h1>
                <Main>
                <Mutation
                        mutation={insertDelivery}
                        refetchQueries={() => [
                            { query: listDelivery }
                          ]}>
                        {(insert_delivery, { data }) => (
                            <>
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    insert_delivery({
                                        variables: {
                                            address: address.value,
                                            description: description.value,
                                            carrier_id: carrier_id.value,
                                            lat: lat.value,
                                            lng: lng.value,
                                            date: date.value
                                        }
                                    });
                                    address.value = '';
                                    description.value = '';
                                    carrier_id.value = '';
                                    lat.value = '';
                                    lng.value = '';
                                    date.value = '';
                                }}
                            >
                                <section>
                                    <h3>Local:</h3>
                                    <Input
                                        ref={node => { address = node; }}
                                        placeholder="Digite o local da entrega a ser realizada" />
                                </section>
                                <section>
                                    <div>
                                        <Query query={ listCarrierAsc }>
                                            {({ data, loading, error }) => {
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
                                                        <Option ref={ carrier_id = resp.id } value={ resp.name } key={ resp.id }>{ resp.name }</Option>
                                                        )) }
                                                    </Select>
                                                </section>
                                            );
                                        }}
                                        </Query>

                                        <section>
                                            <h3>Data:</h3>
                                            <DatePicker
                                                placeholder="Selecione a data"
                                                onChange={onChange}
                                                disabledDate={disabledDate}
                                                format={dateFormatList}
                                                />
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
                                    <TextArea
                                    ref={node => { description = node; }}
                                    rows={4} placeholder="Escreva observações sobre a entrega a ser feita"/>
                                </section>
                                <section>
                                    <button type="submit">Salvar</button>
                                </section>
                            </form>
                            </>
                            )}
                    </Mutation>
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
