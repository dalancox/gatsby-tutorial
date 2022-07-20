import * as React from "react"
import Layout from "../components/layout"
import WallDiffuserHeader from "../components/headers/wallHero"
import { Link } from "gatsby"


import * as styles from "./styles/category.module.css"

export default function Index() {
  return (
  
  <Layout>
    <WallDiffuserHeader />
    <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <div className={styles.title}>
          <h1>Wall Diffuser</h1>
        </div>
        <div>
          <h1 className={styles.subTitle}>Diffuser Setup and Features</h1>
          <p>Set up and navigate your diffuser and its features</p>
          <div className={styles.breakLine}></div>
          <h3>Diffuser Setup</h3>
          <div className={styles.articles}>
            <Link to="/wall-diffuser">
              <div className={styles.subArticles}>
                <h4>Set Up Your Pura Diffuser</h4>
                <p>Learn how to setup your Pura diffuser!</p>
              </div>
            </Link>
          </div>
          <h3>Diffuser Feature</h3>
          <div className={styles.articles}>
            <Link to="/">
              <div className={styles.subArticles}>
                <h4>Priority of Features</h4>
                <p>Learn what features take priority!</p>
              </div>
            </Link>
            <Link to="/">
              <div className={styles.subArticles}>
                <h4>Schedules</h4>
                <p>Set up and manage schedules.</p>
              </div>
            </Link>
            <Link to="/">
              <div className={styles.subArticles}>
                <h4>Replace a low fragrance</h4>
                <p>How to replace a low fragrance.</p>
              </div>
            </Link>
            <Link to="/">
              <div className={styles.subArticles}>
                <h4>Set Up Your Pura Diffuser</h4>
                <p>Learn how to setup your Pura diffuser!</p>
              </div>
            </Link>
          </div>
          <h3>Diffuser Troubleshooting</h3>
          <div className={styles.articles}>
            <Link to="/wall-diffuser/offline">
              <div className={styles.subArticles}>
                <h4>Diffuser Offline</h4>
                <p>Learn how to reconnect your Pura diffuser!</p>
              </div>
            </Link>
            <Link to="/">
              <div className={styles.subArticles}>
                <h4>WiFi Network Requirements</h4>
                <p>Learn what network you need.</p>
              </div>
            </Link>
            <Link to="/">
              <div className={styles.subArticles}>
                <h4>Weak Smell</h4>
                <p>Learn why you can't smell your Pura diffuser!</p>
              </div>
            </Link>
            <Link to="/">
              <div className={styles.subArticles}>
                <h4>Bluetooth</h4>
                <p>Learn how to connect the diffuser to Bluetooth.</p>
              </div>
            </Link>
          </div>
        </div>
        <Link to="/">Go home</Link>
      </div>
    
  </Layout>
  
  )
}