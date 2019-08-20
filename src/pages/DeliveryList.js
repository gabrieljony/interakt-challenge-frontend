import React, { Component, Fragment } from 'react';
import styled from "styled-components";
import { Icon } from 'antd';

export default class DeliveryList extends Component {
    render() {
        return (
            <Fragment>

                    <div>

                            <List >
                                <li>
                                    <h4>1</h4>
                                </li>
                                <li>
                                    <h3>ff</h3>
                                    <span></span>
                                </li>
                                <li>
                                    <Icon type="edit" theme="filled" />
                                    <Icon type="delete" theme="filled" />
                                </li>
                            </List>

                    </div>

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


