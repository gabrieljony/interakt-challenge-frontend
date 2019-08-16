import gql from 'graphql-tag'

/*
* Lista de Produtos buscado pelo parametro uuid
*/
export const listProduct = gql`
  query product_by_pk($id: uuid!){
    product_by_pk(uuid: $id) {
        created_at
        description
        id
        price
        updated_at
    }
  }`;