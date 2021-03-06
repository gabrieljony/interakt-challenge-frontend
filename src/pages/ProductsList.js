import React, { Component, Fragment } from 'react';
import styled from "styled-components";
import { Icon, Spin, Alert } from 'antd';
import { listProduct, deleteProduct } from '../graphql/product';
import { Query, Mutation } from 'react-apollo';


export default class ProductsList extends Component {
    render() {
        return (
            <Fragment>
                <Query query={ listProduct }>
                {({ data, loading, error }) => {
                if (loading) return <section><Spin size="large" /></section>;
                if (error) return <section><Alert
                message="Error"
                description="A conexão falhou. Favor aguardar normalização."
                type="error"
                showIcon
              /></section>;
                return (
                    <div>
                        { data.product.map(resp =>(
                            <List key={ resp.id }>
                                <li>
                                    <h4>1</h4>
                                </li>
                                <li>
                                    <h3>{ resp.description }</h3>
                                    <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resp.price.replace("$", "").replace(",", "").replace(",", "").replace(",", ""))}</span>
                                </li>
                                <li>
                                    <Icon type="edit" theme="filled" />
                                    <Mutation
                                        mutation={ deleteProduct }
                                        variables={ {id: resp.id } }
                                        refetchQueries={() => [
                                            { query: listProduct }
                                          ]}
                                    >
                                        {(delete_product, { loading, error }) => (
                                            <Icon type="delete" theme="filled" onClick={() => delete_product({ variables: { id: resp.id } })} />
                                        )}
                                    </Mutation>
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
    display:flex;
    align-items:center;
    justify-content: space-between;
    h4 {
        background-color: #1d4bc2;
        color: #fff;
        border-radius: 5px;
        padding: 10px 15px;
    }
    h3 {
        margin-bottom: 5px;
    }
    i {
        padding: 5px 10px;
        svg {
            :hover,
            :active {
            color: #1d4bc2;
        }
      }
    }
`;


