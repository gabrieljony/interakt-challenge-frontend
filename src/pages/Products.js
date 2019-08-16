import React, { Component } from 'react'

import styled from "styled-components";

export default class Products extends Component {
    render() {
        return (
            <Container>
                <h1>Produtos</h1>
            </Container>
        )
    }
}

export const Container = styled.div`
    width: 100%
    h1 {
        font-size: 200%;
        padding-bottom: 10px;
        border-bottom:solid 1px;
    }
`;
