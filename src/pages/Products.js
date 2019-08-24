import React, { Component } from 'react'
import styled from "styled-components";
import ProductsList from "./ProductsList";
import { Mutation } from '@apollo/react-components';
import { insertProduct, listProduct } from '../graphql/product';

export default class Products extends Component {
    render() {
        let description;
        let price;
        return (
            <Container>
                <h1>Produtos</h1>
                <ProductsBox>
                    <Mutation
                        mutation={insertProduct}
                        refetchQueries={() => [
                            { query: listProduct }
                          ]}>
                        {(insert_product, { data }) => (
                            <>
                                <form
                                    onSubmit={e => {
                                        e.preventDefault();
                                        insert_product({
                                            variables: {
                                                description: description.value,
                                                price: price.value
                                            }
                                        });
                                        description.value = '';
                                        price.value = '';
                                    }}
                                  >
                                    <section>
                                        <div>
                                            <h3>Descrição:</h3>
                                            <input
                                                ref={node => { description = node; }}
                                                type="text"
                                                placeholder="Digite a descrição do produto..."
                                                />
                                        </div>
                                        <div>
                                            <h3>Preço:</h3>
                                            <input
                                                ref={node => { price = node; }}
                                                type="text"
                                                placeholder="Ex: R$ 99,99"
                                            />
                                        </div>
                                    </section>
                                    <button type="submit">Salvar</button>
                                </form>
                            </>
                        )}
                    </Mutation>
                    <ListBox>
                        <h2>Lista de Produtos</h2>
                        <ProductsList/>
                    </ListBox>
                </ProductsBox>
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
`;
export const ProductsBox = styled.div`
    padding: 40px 0;
    display: flex;
    flex-direction:column;
    align-items:center;
    form {
    width: 50%;

        section {
            display: flex;
            justify-content: space-between;
            color: #444;
            input {
                margin: 10px 0;
                padding: 0 10px;
                height: 35px;
                background: #fff;
                border: 1px solid #444;
                border-radius: 5px;
                font-size: 14px;
            }
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
    }
    @media(max-width: 768px){
        form{

        width: 100%;
        }
    }
    @media(max-width: 480px){
        section {
            flex-direction: column;
            align-items:flex-start;
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
    section {
        text-align:center;
        margin: 15px;
    }
    @media(max-width: 768px){
        width: 100%;
    }
`;
