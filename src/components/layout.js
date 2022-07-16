import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)


  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div>
        <main>{children}</main>
      </div>

      <Footer />
    </>
  )
}


export default Layout