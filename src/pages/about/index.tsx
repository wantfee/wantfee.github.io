import Layout from '@theme/Layout'
import React from 'react'
import classes from "./index.module.css"

const index = () => {
  return (
    // <Layout title="About" description="Here's the about page">
        <div className={classes.aboutContainer}>
        <h1>Here's the about page</h1>
        </div>
      
    // </Layout>
  )
}

export default index