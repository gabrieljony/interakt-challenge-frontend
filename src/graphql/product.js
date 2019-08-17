import { gql } from 'graphql-boost'

/*
* Lista dos Produtos
*/
export const listProduct = gql`
query product{
  product {
    created_at
      id
      description
      price
      updated_at
  }
}`;
