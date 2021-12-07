import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Social from '../components/Social'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Typography } from '@material-ui/core'

const navigationLinks = [
    {name: "Home", href: "" },
    {name: "Artists", href: "" },
    {name: "Songs", href: "" },
    {name: "Contact", href: "" },
    {name: "Sonrise Church", href: "" },
];

const useStyles = makeStyles((theme) => ({
    footerSection: {
        height: "100%",
        background: "#2b2b2c",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    content: {
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        color: "#e9f0f3",
        display: "flex",
        flexDirection: "column"
    },
    container: {
        height: "100%",
        paddingTop: "5vh",
        paddingBottom: "8vh",
    },
    link: {
        marginRight: 20,
        color: "#e9f0f3",
    },
}))

export default function Footer() {
    const styles = useStyles()
    return (
        <Paper className={styles.footerSection}>
            <Container className={styles.container}>
                <Grid container className={styles.content}>
                    <Grid item>
                        <Social style={{color: "#e9f0f3", paddingBottom: "25px"}}/>
                    </Grid>
                    <Grid item>
                        {navigationLinks.map((item, id) => (
                            <Link
                                className={styles.link}
                                underlne="none"
                                key={id}
                                href={item.href}>
                            {item.name}
                            </Link>
                        ))}
                    </Grid>
                    <Typography style={{paddingTop: "20px"}}>Chasing Out Foxes &copy; 2021</Typography>
                </Grid>
            </Container>
        </Paper>
    )
}