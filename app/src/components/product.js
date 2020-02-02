import React, { useState } from "react"

export const STRIPE_API_KEY_TEST = "pk_test_OYSwXOmUEJLnvMkoCktnbESY00hR7YrcUs" // Publishable key from the Stripe Dashboard > Developers > API keys
export const STRIPE_REDIRECT_URL_SUCCESS = "http://localhost:8000/success"
export const STRIPE_REDIRECT_URL_CANCEL = "http://localhost:8000/cancel"

const Product = ({ skus, product }) => {
  const DEFAULT_SKU = skus[0].node.id || ""
  const [sku, setSku] = useState(DEFAULT_SKU)

  const placeOrder = () => {
    try {
      // REMEMBER: window is not available in server side rendering (SSR)
      const stripe =
        typeof window !== `undefined`
          ? window.Stripe(STRIPE_API_KEY_TEST)
          : undefined

      stripe.redirectToCheckout({
        items: [
          {
            sku,
            quantity: 1,
          },
        ],
        successUrl: STRIPE_REDIRECT_URL_SUCCESS,
        cancelUrl: STRIPE_REDIRECT_URL_CANCEL,
      })
    } catch (e) {
      console.error("Whoops.", e)
    }
  }

  return (
    <article>
      {/* TODO: Replace the placeholder image with a product image */}
      <img
        src='https://picsum.photos/340/400'
        alt="A sample item that doesn't exist and will never ship."
      />
      <h3>{product.name}</h3>

      <select defaultValue={sku} onChange={e => setSku(e.target.value)}>
        {skus.map(edge => {
          const skuFromEdge = edge.node.id
          const nameForSkuFromEdge = edge.node.attributes.name

          return (
            <option key={skuFromEdge} value={skuFromEdge}>
              {nameForSkuFromEdge}
            </option>
          )
        })}
      </select>
      <button onClick={() => placeOrder()}>Buy Me</button>
    </article>
  )
}

export default Product
