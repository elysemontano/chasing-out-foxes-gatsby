import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import {makeStyles, Typography, Paper, Card, Container, CardContent} from "@material-ui/core"
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    aboutSection: {
        height: "100%",
        background: "#132131",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0px"
    },
    container: {
        height: "100%",
        paddingTop: "8vh",
        paddingBottom: "5vh",
    },
    card: {
        background: "#abbdd3",
        margin: 20,
        padding: 30
    },
    aboutCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    foxesPicture: {
        width: "1500px",
        margin: "20px",
        border: "2px solid white"
    },
    about: {
        textAlign: "center",
        padding: "30px"
    },
    info: {
        paddingTop: "10px"
    }
  }))

export default function About() {
    const styles = useStyles()
    return (
        <Paper className={styles.aboutSection}>
            <Container className={styles.container}>
                <Card className={styles.card}>
                    <CardContent>
                        <Typography variant="h5" style={{textAlign: "center"}}>About Us</Typography>
                        <div className={styles.aboutCard}>
                            <div className={styles.about}>
                                <Typography className={styles.info}>We are a group of Christian Musician/Songwriters purposed to write and perform songs for the glorification of our Lord Jesus Christ. Birthed from Sonrise Church in Santee, California, we are eager and blessed to share our music! </Typography>
                                <Typography className={styles.info}> Our name stems from Song of Songs 2:15</Typography>
                                <Typography className={styles.info}><i>"Then you must protect me from the foxes, foxes on the prowl, Foxes who would like nothing better than to get into our flowering garden."</i></Typography>
                                <Typography className={styles.info}>The idea is that the music pushes back the darkness and distractions to prepare the hearts and minds of those who will listen to the message God has for them. We are so blessed that you have found us!</Typography>
                            </div>
                            <div className={styles.foxesPicture}>
                                <StaticImage src="../images/homepage/IMG_8409.jpg" alt="Chasing Out Foxes Team Picture" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </Paper>
    )
}
