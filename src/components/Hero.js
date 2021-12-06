import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Image from "./Image"
import {makeStyles, Paper} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    heroSection: {
        height: "100%",
        background: "#132131",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    images: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    jodi: {
        width: "20vw",
        position: "absolute",
        top: "10vh",
        left: "5%",
        boxShadow: "8px 8px 30px #000000"
    },
    foxesTitle: {
        width: "50vw",
        position: "absolute",
        top: "5%",

    },
    brad: {
        width: "20vw",
        position: "absolute",
        bottom: "15%",
        boxShadow: "8px 8px 25px #000000"
    },
    deborah: {
        width: "20vw",
        position: "absolute",
        top: "10vh",
        right: "5%",
        boxShadow: "8px 8px 30px #000000"
    }
}))

function HomeImages({imageData}) {
    const styles = useStyles()
    return (
        <Paper className={styles.heroSection}> 
            <div className={styles.images}>
                {imageData.map((item, index) => {
                    return ( 
                        <div className={eval(item.className)} key={index}>
                            <Image fileName={item.url} key={index}/>  
                        </div>
                    )
                })}
            </div>
      </Paper> 
    )
}

const Hero = () => {
    return (
    <div style={{ display: "grid" }}>
        <StaticImage
            style={{
            gridArea: "1/1",
            }}
            layout="fullWidth"
            aspectRatio={3 / 1.4}
            src={
            "../images/background.jpg"
            }
            formats={["auto", "webp", "avif"]}
            alt= ""
        />
        <div
            style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center",
            display: "grid",
            }}
        >
            <HomeImages imageData={heroImages}/>
        </div>
        </div>
    )
};

export default Hero


const heroImages = [
    {alt: "Jodi", url: "IMG_6349.jpg", className: "styles.jodi" },
    {alt: "Chasing Out Foxes", url: "foxes-title-logo.png", className: "styles.foxesTitle" },
    {alt: "Brad", url: "IMG_6669.jpg", className: "styles.brad" },
    {alt: "Deborah", url: "IMG_2985-67.jpg", className: "styles.deborah" },
  ]