import React, { Component } from 'react';
import styled from "styled-components";
import { Icon } from 'antd';
// import { listProduct } from '../graphql/product';

import { gql } from 'apollo-boost';
import { graphql } from "react-apollo";

class ProductsList extends Component {
    render() {
        console.log(this.props);
        return (
            <List>
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
            </List>
        )
    }
}

const listProduct = gql`
    query product {
        product {
            created_at
            id
            description
            price
            updated_at
        }
    }
`;

export default graphql(listProduct, {name: "todos"})(ProductsList)


export const List = styled.ul`
    padding: 15px 30px;
    align-items:center;
    display:flex;
    justify-content: space-between;
    i{
        padding: 0 10px
    }
`;


