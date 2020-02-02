import React, { useState } from "react"
import Layout from "../components/layout"

export const STRIPE_API_KEY_TEST = "pk_test_OYSwXOmUEJLnvMkoCktnbESY00hR7YrcUs"
export const STRIPE_REDIRECT_URL_SUCCESS = "http://localhost:8000/success"
export const STRIPE_REDIRECT_URL_CANCEL = "http://localhost:8000/cancel"

// TODO: Product is hard-coded to our example T-shirt.
const Product = () => {
  const [sku, setSku] = useState("")

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
    <Layout>
      <div>
        <article>
          <img
            src='https://picsum.photos/340/400'
            alt="A sample t-shirt that doesn't exist and will never ship."
          />
          <h3>Sample T-Shirt</h3>

          <select defaultValue={sku} onChange={e => setSku(e.target.value)}>
            <option value='sku_GerD9TIXnWbbqc'>Small</option>
            <option value='sku_GerDdIN6LB5hdR'>Medium</option>
            <option value='sku_GerDERk6FoMzg3'>Large</option>
          </select>
          <button onClick={() => placeOrder()}>Buy Me</button>
        </article>
      </div>
    </Layout>
  )
}

export default Product
