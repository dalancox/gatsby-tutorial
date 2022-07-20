import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from "../components/layout"

const ArticlePost = ({ data }) => {

    return (
        <Layout>
          <div style={{
              display: `block`,
              margin: `0 auto`,
              maxWidth: `var(--size-content)`,
              padding: `var(--size-gutter)`,
            }}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
          </div>
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

export default ArticlePost