import React, { Component } from 'react'

import styled from "styled-components";

export default class Header extends Component {
    render() {
        return (
            <Menu>
                <h1>INTERAKT | Challenge</h1>
            </Menu>
        )
    }
}

export const Menu = styled.header`
  background-color: #fafafa;
  color: #23314e;
  padding: 15px 30px;
  box-shadow: 2px 5px 10px #627179;
`;
