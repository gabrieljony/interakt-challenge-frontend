import React, { Component } from 'react'

import styled from "styled-components";

import { Icon } from 'antd';

export default class Header extends Component {
    render() {
        return (
            <Menu>
                <h1>INTERAKT | Challenge</h1>
                <Icon type="user" theme="outlined" />
            </Menu>
        )
    }
}

export const Menu = styled.header`
  background-color: #fafafa;
  color: #23314e;
  padding: 15px 30px;
  font-size: 120%;
  box-shadow: 2px 5px 10px #627179;
  display: flex;
  justify-content: space-between;
`;
