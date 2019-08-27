# [Product Delivery](https://interakt-challenge-frontend.herokuapp.com/)

Front-end challenge for job vacancy at [INTERAKT](https://www.interakt.com.br/) company using reactjs and graphql(apollo client).

The application to be applied addresses changes in the industry and is about two simple data types (CRUDs): Deliveries and Products.
Each delivery must be made of a product and an animal that is talent specific.

Link Challenge [click here](https://github.com/LucasBSC/INTERAKT-Challenges/blob/master/01-challenge-frontend.md)

## Tech Stack

-   [Javascript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript) ES6/2015
-   [React](https://pt-br.reactjs.org/) 16.9.0
-   [Webpack](https://webpack.js.org/) 4.39.1
-   [Graphql](https://graphql.org/) 14.4.2
-   [Apollo-client](https://www.apollographql.com/docs/react/) 2.6.4
-   [Styled-Components](https://www.styled-components.com/) 4.3.2
-   [Antd](https://ant.design/docs/react/introduce) 3.21.4

## Installing / Getting started

Clone repository:

```shell
$ git clone https://github.com/gabrieljony/interakt-challenge-frontend.git
$ cd interakt-challenge-frontend/
```

Install dependencies:

```shell
$ yarn install
```

## Development environment - http://localhost:8080/

```shell
$ yarn run dev
```

## Production environment

```shell
$ yarn run prod
```

### build scripts

-   `dev` - create dev build (unoptimized, fast build time)
-   `prod` - create production build (optimized, slow build time)
-   `start` - start production server (runs automatically on prod-stage site)

## ATTENTION

Check if the node version is compatible with your machine:

```shell
$ node --version
```

package.json

```shell
"engines": {
        "node": "10.16.1"
    },
```

## Template the Challenge

![Home](./prototype/Home.png)

![Delivery](./prototype/Delivery.png)

![Products](./prototype/Products.png)
