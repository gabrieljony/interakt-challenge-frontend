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
    mutation insert_product(
            $description: String!,
            $price: money!
        ){
        insert_product(
            objects: {
                    description: $description,
                    price: $price
                }
            ){
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

/*
* Lista de Entregas
*/
export const listDelivery = gql`
    query delivery{
        delivery{
            address
            carrier_id
            created_at
            date
            description
            id
            lat
            lng
            status
            updated_at
        }
    }
`;
