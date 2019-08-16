import React, { Component, Fragment } from "react";
import GlobalStyled from "../styles/global";
import Header from "./Header";
import Sidebar from "./Sidebar";

import styled from "styled-components";

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Container>
                    <aside>
                        <Sidebar/>
                    </aside>
                    <main>
                        {this.props.children}
                    </main>
                </Container>
                <GlobalStyled />
            </Fragment>
        );
    }
}

export default App;

export const Container = styled.div`
  display: flex;
  aside {
    width: 5%;
  }
  main {
      width: 95%;
      padding: 40px;
  }
`;
