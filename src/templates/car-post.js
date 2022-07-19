import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from "../components/layout"

const CarDiffuser = ({ data }) => {
    const post = data

    return (
        <Layout>
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>
            {data.mdx.body}
        </MDXRenderer>
        </Layout>
      )
}

    
  

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
    }
    body
  }
}
`

export default CarDiffuser