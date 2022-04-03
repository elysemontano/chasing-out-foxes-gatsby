import * as React from "react"
import Seo from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby";
import {Paper, makeStyles} from "@material-ui/core"
import Hero from "../components/hero"
import About from "../components/about"



const useStyles = makeStyles((theme) => ({
  homePage: {
    height: "100%"
  }
}))


const Home = () => {
  const styles = useStyles()
  return (
    <div className={styles.homePage}>
      <Seo title="Page two" />
      <Hero/>
      <About />
    </div>

  )
}


export default Home

