import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SearchBar from "../components/searchBar"

import * as styles from "./styles/index.module.css"

const IndexPage = () => (
  <>
    <Layout>

    <SearchBar />

    <div className={styles.imgContainer}>

      <Link to="/wall-diffuser" className={styles.iconLinks}>
        <div className={styles.imgIcons}>
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_imac_family_2x.png" alt="wall diffuser" width="68" height="68"></img>
        </div>
        <span>Wall Diffuser</span>
      </Link>

      <Link to="/car-diffuser" className={styles.iconLinks}>
        <div className={styles.imgIcons}>
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_apple_watch_2x.png" alt="car diffuser" width="68" height="68"></img>
        </div>
        <span>Car Diffuser</span>
      </Link>

      <Link to="/table-top" className={styles.iconLinks}>
        <div className={styles.imgIcons}>
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_ipad_family_2x.png" alt="tabletop" width="68" height="68"></img>
        </div>
        <span>Table Top Diffuser</span>
      </Link>

      <Link to="/subscriptions" className={styles.iconLinks}>
        <div className={styles.imgIcons}>
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_iphone_family_2x.png" alt="subscriptions" width="68" height="68"></img>
        </div>
        <span>Subscriptions</span>
      </Link>
    </div>

    <div className={styles.breakLine}></div>

    <div className={styles.contentBlock}>
      <div className={styles.contentSection}>
        <img src="https://cdn.shopify.com/s/files/1/0023/0021/5405/files/streamline-icon-star-rating-one_400x400_1_600x600_crop_center.progressive.png.jpg?v=1647367842" width='250' height='250'></img>
        <div style={{maxWidth: `350px`}}>
          <h2>The Pura Promise</h2>
          <h3 style={{fontSize: `15px`, marginBottom: `0.5rem`}}>SAFE. ECO-FRIENDLY. AND OH-SO PREMIUM.</h3>
          <p>We're always in the pursuit of creating life-changing fragrances and products in a way that is safe for your entire family while also being environmentally and socially responsible.</p>
          <Link to="/" style={{color: `blue`}}>Learn More  </Link>
        </div>
      </div>
    </div>

    <div className={styles.breakLine}></div>

    <div className={styles.contentBlock}>
      <div className={styles.contentSection}>
        <div  style={{maxWidth: `350px`}}>
        <h2>How do I manage my Subscription?</h2>
          <p>Take advantage of our easy-to-use swap fragrance feature, all at a 30% discount! Let's go through how to swap the fragrances in your subscription.</p>
          <Link to="/" style={{color: `blue`}}>Learn More  </Link>
          </div>
          <img src="https://cdn.shopify.com/s/files/1/0023/0021/5405/files/cal_600x600_crop_center.progressive.png.jpg?v=1647369014" width='250' height='250'></img>
      </div>
    </div>

    </Layout>
  </>
  
)

export default IndexPage