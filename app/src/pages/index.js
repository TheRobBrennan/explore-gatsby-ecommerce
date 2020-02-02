import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const STRIPE_API_KEY_TEST = "pk_test_OYSwXOmUEJLnvMkoCktnbESY00hR7YrcUs"

const IndexPage = () => {
  const placeOrder = sku => {
    // REMEMBER: window is not available in server side rendering (SSR)
    const stripe =
      typeof window !== `undefined`
        ? window.Stripe(STRIPE_API_KEY_TEST)
        : undefined
    try {
      stripe.redirectToCheckout({
        items: [
          {
            sku,
            quantity: 1,
          },
        ],
        successUrl: "http://localhost:8000/success",
        cancelUrl: "http://localhost:8000/cancel",
      })
    } catch (e) {
      console.error("Whoops.", e)
    }
  }

  return (
    <Layout>
      <SEO title='Home' />
      <h1>My store</h1>
      <div>
        <article>
          <img
            src='https://picsum.photos/340/400'
            alt="A sample t-shirt that doesn't exist and will never ship."
          />
          <h3>Sample T-Shirt</h3>
          <button onClick={() => placeOrder("sku_GdihsjWhbSPkXb")}>
            Buy Me
          </button>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
