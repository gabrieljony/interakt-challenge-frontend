import React, { Component } from 'react'
import styled from "styled-components";
import { Icon } from 'antd';
import {listProduct} from 'gql/product'

class Products extends Component {
    renderTodoList = () => (
        <div>
            <ul>
        { this.props.todos.product.map(todo =>
            console.log(todo)
                <li>
                    <h2>1</h2>
                </li>
                <li>
                    <h3>Produto 1</h3>
                    <span>R$ 90,00</span>
                </li>
                <li>
                    <Icon type="edit" theme="filled" />
                <Icon type="delete" theme="filled" />
                </li>
        )}
            </ul>
        </div>
      )
    render() {
        const { todos } = this.props;
        return (
            <Container>
                <h1>Produtos</h1>
                <article>
                    <form>
                        <section>
                            <div>
                                <h3>Descrição:</h3>
                                <input type="text" placeholder="Digite a descrição do produto"/>
                            </div>
                            <div>
                                <h3>Preço:</h3>
                                <input type="text" placeholder="Ex: R$ 99,99"/>
                            </div>
                        </section>
                        <button type="button">Salvar</button>
                    </form>
                    <ListBox>
                        <h2>Lista de Produtos</h2>
                        { todos.loading ? <p>Carregando...</p> : this.renderTodoList() }
                    </ListBox>
                </article>
            </Container>
        )
    }
}

export const Container = styled.div`
    width: 100%;
    h1 {
        font-size: 200%;
        padding-bottom: 10px;
        border-bottom:solid 1px;
    }
    article {
        padding: 40px;
        display: flex;
        flex-direction:column;
        align-items:center;

        form {
            width: 50%;
            
            section {
                display: flex;
                justify-content: space-between;
                color: #444;
                input {
                    margin: 10px 0;
                    padding: 0 10px;
                    height: 35px;
                    background: #fff;
                    border: 1px solid #444;
                    border-radius: 5px;
                    font-size: 14px;
                }
            }

            button {
                margin: 10px 0;
                width: 100%;
                height: 55px;
                background: #478c02;
                color: #fff;
                border: 0;
                font-size: 20px;
                font-weight: bold;
                border-radius: 5px;
                &:hover {
                    background: #315F02;
                }
            }
        }

        
    }
`;

export const ListBox = styled.div`
        display:flex;
        flex-direction:column;
        justify-content: flex-start;
        width: 50%;
        border:solid 1px;
        h2{
            padding: 15px 30px;
        }

        ul {
            padding: 15px 30px;
            align-items:center;
            display:flex;
            justify-content: space-between;
            i{
                padding: 0 10px
            }

        }
`;

export const listProduct = gql`
  query product($limit: Int){
    product(limite: $limit) {
        description
        id
        price
    }
  }`;

  export default compose( 
      graphql(listProduct, { name: 'todos' }),
  )(Products);