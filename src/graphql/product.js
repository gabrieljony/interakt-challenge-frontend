import { gql } from 'apollo-boost';

/*
* Lista dos Produtos
*/
export const listProduct = gql`
    query product {
        product(order_by:{
            created_at: desc
          }) {
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
* Inserir Entregas
*/
export const insertDelivery = gql`
mutation insert_delivery(
        $address: String!,
        $description: String!
        $carrier_id: uuid!
        $lat: numeric!
        $lng: numeric!
        $date: timestamptz!
    ){
        insert_delivery(
            objects:{
                address: $address
                description: $description
                carrier_id: $carrier_id
                lat: $lat
                lng: $lng
                date: $date
            }
        ){
            affected_rows
            returning{
                address
                carrier_id
                created_at
                description
                id
                lat
                lng
                status
                updated_at
            }
        }
    }
`;

/*
* Deletar Produto
*/
export const deleteProduct = gql`
    mutation delete_product(
            $id: uuid!
        ){
            delete_product(
            where: {
                id: {
                        _eq: $id
                    }
                }
            ){
            affected_rows
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
