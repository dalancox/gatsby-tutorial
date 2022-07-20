import * as React from "react"
import Layout from "../components/layout"
import TableTopDiffuserHeader from "../components/headers/tableTopHero"
import { Link } from "gatsby"

export default function Index() {
  return (
  
    <Layout>
    <TableTopDiffuserHeader />
    <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <div style={{display: `flex`, justifyContent: `center`, fontSize: `var(--font-lx)`}}>
          <h1>Table Top</h1>
        </div>
        <div>Hello from the Table Top directory</div>
        <Link to="/">Go home</Link>
      </div>
    
  </Layout>
  
  )
}