import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Product from "./product"

const PRODUCTS_QUERY = graphql`
  query AllProducts {
    allStripeSku {
      edges {
        node {
          id
          attributes {
            name
          }
          product {
            name
            id
          }
          price
        }
      }
    }
    allStripeProduct {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={PRODUCTS_QUERY}
      render={({ allStripeSku, allStripeProduct }) => {
        return allStripeProduct.edges.map(product => {
          // Find skus that are available for this product
          const skus = allStripeSku.edges.filter(
            sku => sku.node.product.id === product.node.id
          )

          return (
            <Product
              key={product.node.id}
              skus={skus}
              product={product.node}
            />
          )
        })
      }}
    />
  )
}

export default Products
