import React, { Component, Fragment } from 'react';
import styled from "styled-components";
import { Icon } from 'antd';
import { listProduct } from '../graphql/product';
import { Query } from 'react-apollo';

export default class ProductsList extends Component {
    render() {
        return (
            <Fragment>
                <Query query={ listProduct }>
                {({ data, loading, error }) => {
                if (loading) return <p>Carregando...</p>;
                if (error) return <div>Error</div>;
                return (
                    <div>
                        { data.product.map(resp =>(
                            <List key={ resp.id }>
                                <li>
                                    <h2>1</h2>
                                </li>
                                <li>
                                    <h3>{ resp.description }</h3>
                                    <span>{ resp.price }</span>
                                </li>
                                <li>
                                    <Icon type="edit" theme="filled" />
                                    <Icon type="delete" theme="filled" />
                                </li>
                            </List>
                        )) }
                    </div>
                    );
                }}
                </Query>
            </Fragment>
        )
    }
}

export const List = styled.ul`
    padding: 15px 30px;
    align-items:center;
    display:flex;
    justify-content: space-between;
    i{
        padding: 0 10px
    }
`;


