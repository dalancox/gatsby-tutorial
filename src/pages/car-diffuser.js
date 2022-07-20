import * as React from "react"
import Layout from "../components/layout"
import CarDiffuserHeader from "../components/headers/carHero"
import { Link } from "gatsby"

export default function Index() {
  return (
  
    <Layout>
    <CarDiffuserHeader />
    <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <div style={{display: `flex`, justifyContent: `center`, fontSize: `var(--font-lx)`}}>
          <h1>Car Diffuser</h1>
        </div>
        <div>Hello from the Car Diffuser directory</div>
        <Link to="/">Go home</Link>
      </div>
    
  </Layout>
  
  )
}