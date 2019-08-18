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
  main {
      padding: 40px;
  }
  @media(min-width: 769px){
    main {
        width:100%;
    }
  }
  @media(max-width: 768px){
    flex-direction: column;
  }
`;
