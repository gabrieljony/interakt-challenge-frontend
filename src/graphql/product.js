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
