import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const STRIPE_API_KEY_TEST = "pk_test_OYSwXOmUEJLnvMkoCktnbESY00hR7YrcUs"

const IndexPage = () => {
  // REMEMBER: window is not available in server side rendering (SSR)
  const stripe = (typeof window !== `undefined`) ? window.Stripe(STRIPE_API_KEY_TEST) : undefined
  try {
    stripe.redirectToCheckout({
      items: [
        {
          sku: "sku_GdihsjWhbSPkXb",
          quantity: 1,
        }
      ],
      successUrl: 'http://localhost:8000',
      cancelUrl: 'http://localhost:8000',
    })
  } catch (e) {
    console.error('Whoops.', e)
  }

  return (
    <Layout>
      <SEO title='Home' />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to='/page-2/'>Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
