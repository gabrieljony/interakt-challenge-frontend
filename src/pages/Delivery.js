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



function disabledDate(current) {
    return current <= moment().endOf('day');
}
export default class Delivery extends Component {

    // Define Constructor
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            place_formatted: '',
            place_id: '',
            place_location: '',
            place_lat: '',
            place_lng: '',
          };

    }

    onChange(date, dateString) {

        // console.log(dateString);
        // console.log(date);

        // console.log(date.toISOString());

        date = date.toISOString();

      }

    componentDidMount(){


          // initialize the autocomplete functionality using the #pac-input input box
          let inputNode = document.getElementById('pac-input');
          let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

          autoComplete.addListener('place_changed', () => {
            let place = autoComplete.getPlace();
            let location = place.geometry.location;
            let lat = place.geometry.location.lat();
            let lng = place.geometry.location.lng();
            // console.log(location);
            // console.log(lat);


            this.setState({
              place_formatted: place.formatted_address.toString(),
              place_id: place.place_id,
              place_location: location.toString(),
              place_lat: lat,
              place_lng: lng,
            });

            // bring the selected place in view on the map

            marker.setPlace({
              placeId: place.place_id,
              location: location,
            });
          });
    }


    render() {
        let address;
        let description;
        let carrier_id;
        let lat;
        let lng;
        let date;
        // console.log(this.state.place_location);
        // console.log(this.state.place_lat);
        // console.log(this.state.place_lng);
         console.log(this.state.date);
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
                                            address: address,
                                            description: description.value,
                                            carrier_id: carrier_id.value,
                                            lat: lat,
                                            lng: lng,
                                            date: date
                                        }
                                    });
                                    address = this.state.place_formatted;
                                    description.value = '';
                                    carrier_id.value = this.carrier_id.value;
                                    lat.value = this.state.place_lat;
                                    lng.value = this.state.place_lng;
                                    date = this.state.date;
                                }}
                            >
                                <section>
                                    <h3>Local:</h3>
                                    <Input
                                        id='pac-input'
                                        type='text'
                                        placeholder='Digite o local da entrega a ser realizada' />
                                        <p>Endereço: {this.state.place_formatted}</p>
                                        {/* <p>Location: {this.state.place_location}</p> */}
                                        <p>lat: {this.state.place_lat}</p>
                                        <p>lng: {this.state.place_lng}</p>
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
                                                onChange={this.onChange}
                                                disabledDate={disabledDate}
                                                format={dateFormatList}
                                                />

                                        </section>
                                    </div>
                                </section>
                                <Query query={ listProductAsc }>
                                            {({ data, loading, error }) => {
                                            // console.log(data)
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
