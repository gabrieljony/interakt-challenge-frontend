import React, { Component, Fragment } from 'react';
import styled from "styled-components";
import { Icon, Spin, Alert } from 'antd';
import { listDelivery } from '../graphql/product';
import { Query } from 'react-apollo';
import { format } from 'date-fns';


export default class DeliveryList extends Component {
    render() {
        return (
            <Fragment>
                <Query query={ listDelivery }>
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
                    { data.delivery.map(resp =>(
                            <List key={ resp.id }>
                                <li>
                                    <h4>1</h4>
                                </li>
                                <li>
                                    <h3>{ resp.address }</h3>
                                    <span>{ format(new Date(resp.date), "dd/MM/yyyy") }</span>
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
    h4 {
        background-color: #1d4bc2;
        color: #fff;
        border-radius: 5px;
        padding: 10px 15px;
    }
    i {
        padding: 0 10px
    }
`;


