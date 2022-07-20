import * as React from "react"
import Layout from "../components/layout"
import SubscriptionsHeader from "../components/headers/subscriptionsHero"
import { Link } from "gatsby"

export default function Index() {
  return (
    <Layout>
    <SubscriptionsHeader />
    <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <div style={{display: `flex`, justifyContent: `center`, fontSize: `var(--font-lx)`}}>
          <h1>Subscriptions</h1>
        </div>
        <div>Hello from the Subscriptions directory</div>
        <Link to="/">Go home</Link>
      </div>
    
  </Layout>
  )
}