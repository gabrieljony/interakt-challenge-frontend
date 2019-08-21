import { gql } from 'apollo-boost';

/*
* Lista dos Produtos
*/
export const listProduct = gql`
    query product {
        product {
            created_at
            id
            description
            price
            updated_at
        }
    }
`;

/*
* Lista de Produtos ordenada por ordem alfabética
*/
export const listProductAsc = gql`
    query product {
        product(order_by:{
            description: asc
          }){
            created_at
            id
            description
            price
            updated_at
        }
    }
`;

/*
* Inserir Produto
*/
export const insertProduct = gql`
    mutation insert_product($id: String!, $description: String!, $price: String!){
        insert_product(uuid: $id, descricao: $description, preco: $price){
            affected_rows
            returning{
                created_at
                description
                id
                price
                updated_at
            }
        }
    }
`;

/*
* Lista de Trasnportadora ordenada por ordem alfabética
*/
export const listCarrierAsc = gql`
    query carrier{
        carrier(order_by:{
            name: asc
          }){
            created_at
            id
            name
            updated_at
          }
    }
`;
