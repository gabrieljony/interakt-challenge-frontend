import React, { Component } from 'react'

import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { Icon } from 'antd';

export default class Sidebar extends Component {
    render() {
        return (
            <Navigation>
                <ul>
                    <li>
                        <NavLink to="/"><Icon type="home" theme="filled" /></NavLink>
                    </li>
                    <li>
                    <NavLink to="/delivery"><Icon type="file" theme="filled" /></NavLink>
                    </li>
                    <li>
                    <NavLink to="/products"><Icon type="golden" theme="filled" /></NavLink>
                    </li>
                </ul>
            </Navigation>
        )
    }
}

export const Navigation = styled.nav`
  background-color: #001132;
  color: #ffffff;

  ul {
    li {
      :hover,
      :active {
        background-color: #1d4bc2;
      }
      a {
        display: flex;
        justify-content: center;
        padding: 15px;
      }
    }
  }
`;
