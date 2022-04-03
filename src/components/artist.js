import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper, Container, Typography, Grid, Card, CardContent} from '@material-ui/core'
import Image from "../components/Image"

const useStyles = makeStyles(() => ({
    artistSection: {
        height: "100%",
        background: "#bbcdd6",
    },
    content: {
        height: "100%",
        justifyContent: "center",
        textAlign: "center", 
        color: "#616161",
    },
    container: {
        height: "100%",
        paddingTop: "8vh",
        paddingBottom: "10vh",
    },
    flex: {
        display: "flex",
    },
    projectBlock: {
        background: "#54707f",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        margin: "2vh",
    },
    card: {
        background: "white",
        margin: "2% 8% 2% 8%",
        boxShadow: "3px 3px 10px #808a93"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    header: {
        padding: "40px 350px 35px 350px"
    },
    cardTop: {
        display: "flex", 
        padding: "20px",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-evenly",
    },
    bio: {
        backgroundColor: "#edf1f4", 
        padding: "40px",
        margin: "0px 40px 0px 40px"
    },
    cardTopItems: {
        width: "30%"
    },
    title: {
        letterSpacing: "2px",
        color: "#616161"
    }
}))

function ArtistCard({data}) {
    const styles = useStyles()
    return (
        <div>
            {data.map((person, index) => {
                return (
                <Grid container>
                    <Grid item>
                        <Card className={styles.card}>
                            <CardContent className={styles.cardContent}>
                                <div className={styles.cardTop} style={index % 2 === 0 ? {flexDirection: "row-reverse"} : {flexDirection: "row"}}>
                                    <Image fileName={person.image} className={styles.media} style={{width: "130px", borderRadius: "100%", border: "solid white 3px", boxShadow: "2px 2px 20px #808a93"}}/>
                                    <div  className={styles.cardTopItems}>
                                        <Typography variant="h4"><b>{person.name}</b></Typography>
                                        <Typography className={styles.title}>{person.title}</Typography>
                                    </div>
                                </div>
                                <div className={styles.bio}>
                                    <Typography>{person.bio}</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                )
            })}
        </div>
    )
} 

export default function Artist() {
    const styles = useStyles()
    return (
        <Paper className={styles.artistSection}>
            <Container className={styles.container}>
                <Grid container className={styles.content}>
                    <Grid item className={styles.header}>
                        <Typography variant="h2" style={{paddingBottom: "20px"}}>Artists</Typography>
                        <Typography variant="p" style={{lineHeight: "1.5"}}>Our artists have a heart of worship to bring glory and honor to our Lord and Savior.  We long to bring new and fresh songs to Christ's body so we can praise His name.</Typography>
                    </Grid>
                    <Grid item>
                        <ArtistCard data={people}/>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}


const people = [
    {
        name: "Barry Bedore",
        title: "Worship Director/Songwriter",
        image: "barry.jpg",
        bio: `Barry started playing guitar at the tender age of 12.  Under the instruction of the late Mark Bacilla, Barry refined his musicianship, and his guitar playing became more robust and diverse.  Barry’s resume includes “Croce’s”, “Off Broadway Live” and “The Hotel Del” to name a few. He has been bandleader and arranger in many of the bands he has played with over the years including the Sonrise Church Worship Team and The Encore Supper Club Band at Off Broadway Live. Additionally, Barry teaches, writes, arranges and produces music. Because of Barry’s love for the Lord, creating a christian music band and writing original christian music has been the dream of He and his wife Cassie for many years. Now the dream has become a reality in the forming of the band, “Chasing Out Foxes”. Barry and Cassie have been married for 28 years and have two adult children, Wes & Lauren.`
    },
    {
        name: "Cassie Bedore",
        title: "Worship Director/Songwriter",
        image: "cassie.jpg",
        bio: `Cassie’s involvement in ministry and Chasing Out Foxes has been a labor of love. The vision for Chasing out Foxes and a Christian music studio was given to her during a worship experience at a youth camp where she was serving as a high school leader in 2011. Several years later, a chance meeting and a conversation with Elyse solidified that vision when they learned that they had been given similar direction. Since then, they have been working diligently to accomplish what they feel the Lord has called them to do. The hope is to create a place where Christian musicians can come together, write and record music that blesses and glorifies the Lord. We are praying that all who hear our music will be blessed as well.  As a song writer, Cassie draws inspiration from the love of the Lord, life and the tension between the two. Cassie has been a poet and writer of songs since she was a child. But it’s her husband Barry, and the amazing musicians in Chasing Out Foxes that help bring those songs to life. Cassie and Barry have been together for 30 years and have two adult children, Wes and Lauren.`
    },
    {
        name: "Lauren Bedore",
        title: "Artist/Songwriter",
        image: "lauren.jpg",
        bio: `Hi! It’s me, Lauren.  I’m notoriously bad at describing myself, but I’ll try.  I grew up in San Diego, singing with my pops (who shreds the gnar on guitar) and was pretty heavily influenced by all of the music he and my mom played throughout my childhood. I started to develop my own canon of musical heroes and was especially amazed by the ones that seemingly wrote their songs from inside of my head; those people that captured the essence of being a person so scarily well.I appreciate the way music can create a whole otherworldly space that we can occupy for a while. 
        I appreciate the way music allows us to connect deeper. It feels like it can extract the multifaceted substance of the human experience and become the medium with which we create and share and join together. 
        If I am thinking deeply and am trying on my philosophical pants, that’s why I love music, singing, and music in relation to God. 
        On a less think-y note, it’s just fun! Riffing with my friends, making stank faces when someone plays an inventive part, dancing, and head banging. (Although I would argue head-banging is just an outworking of the more philosophical “music is a connective tissue” thought. Lol.)
        Wow, well that was a lot, but basically, I’m Lauren and music is neat. I hope as we share our music, it can mean something for you and your connection to God.`
    },
    {
        name: "David Cardarelli",
        title: "Artist/Songwriter",
        image: "david.jpg",
        bio: `David grew up between Tampa, Fl and Campo, CA. and has been playing music since he was 13.  He loves praising our Heavenly Father and feels like it’s a small offering back to Him. 
        Being involved in Chasing Out Foxes has been like a family to him.  David plays, sings and writes music he feels is inspired by the Holy Spirit. He just loves seeing each of the Lord’s many, uniquely beautiful blessings unravel in front of us. He feels that it is one of the most amazing things about worship.  David is married to his beautiful wife Breanna for 6 years and blessed with 2 wonderful children, Gabriella (10) and David Jr.(3).`
    },
    {
        name: "Brad Johnson",
        title: "Artist/Songwriter",
        image: "brad.jpg",
        bio: `Brad is so blessed that God is revealed to him through His imprint on all He created. Worshipping, to Brad, is every breath and step taken daily in God's love for that creation, while songwriting is simply Brad's expression of God's revelation of those things. 
        Beauty and joy are both evident and accessible when our sight is through the lens of God's amazing love and mercy!
        Brad Johnson has been married to his childhood sweetheart, Katie, for 31 years.  They have two grown children, Caleb and Saralyn, who are a source of unspeakable joy in their lives.. Prior to entering into family life, Brad spent his years in Southern California and Upper Eastern Tennessee, aka God's Country!`
    },
    {
        name: "Jodi Kohler",
        title: "Artist/Songwriter",
        image: "jodi.jpg",
        bio: `Jodi started her singing endeavors in a Pentecostal church singing Southern Gospel music.  She traveled with the Heirloom Quartet  to many Christian venues across the country from here in her hometown of San Diego to Missouri and even Kodiak, Alaska.
        Outside of the quartet, Jodi has sung the National Anthem at a variety of sporting events, including the San Diego Regional Wrestling Championships for SDIKWA.  Other soloist experiences include singing with Dan and Amber Clarkson  on multiple stages at the San Diego County Fair in addition to singing for numerous wedding ceremonies and memorials.   She has also performed dinner theater at the Off Broadway Live Theater in Santee, CA singing with Bob Schulze and Steve Rolf in the Country Fried Gospel and Christmas Show.  Currently, Jodi still pursues songwriting and singing worship.`,
    },
    {
        name: "Elyse Montano",
        title: "Artist/Songwriter",
        image: "elyse.png",
        bio: `Elyse grew up singing in her church and has always been passionate about singing.  In college, Elyse studied as a music major at Mesa College for a period of time and learned the fundamentals of music theory where she began learning about writing music. 
        For years she wrote secular music until finding her calling at Sonrise Church where she began writing Christian music. Finding her heart and true passion, she longed to be a part of a community of Christian songwriters. Of course, God opened the doors and made way for Chasing Out Foxes where Elyse can share her passion for songwriting and Jesus with the rest of the world.  While Chasing Out Foxes is her second family, Elyse is blessed to have an incredible husband Jeremiah, and two amazing kids, Tristan and Hailey.`
    },
    {
        name: "Amber Pich",
        title: "Artist/Songwriter",
        image: "amber.jpg",
        bio: `Amber really doesn’t see herself as a writer but more of a musical interpreter of the lyrics God shows her through His word, her life and the amazing creative team. Amber is thankful for the talents and sincere hearts of those in Chasing Out Foxes. 
        Amber has been playing and singing on worship teams since 1990. She and her husband Jason have always been a part of the music ministry. In their 29 years of dating and marriage, being involved has always kept them accountable and connected in church life and ministry.`
    },
    {
        name: "Jason Pich",
        title: "Artist/Songwriter",
        image: "jason.jpg",
        bio: `Jason grew up playing music in the church and has been involved in the ministry for several years.  His approach to music writing is to try new things. Jason loves to push himself to experiment with tone, layering and sound. 
        His desire to exercise creative styles is contagious and the whole team benefits. Jason enjoys the family of musicians he gets to work with. Jason and his wife Amber have been together for 29 years and have four children.`
    },
    {
        name: "Victoria Pich",
        title: "Artist/Songwriter",
        image: "victoria.jpg",
        bio: `Victoria has been attending Sonrise Community Church since before she could remember, and has grown musically through praise and worship. Growing up in a musical family contributed to her love of music. 
        In her early years, Victoria was part of “Prelude to Praise” a program to train up young worshippers led by Amber Pich and Barry Bedore. Victoria was also involved in the drum line during high school. Victoria is passionate about playing guitar, singing, playing drums and songwriting.  Along with her love of music, Victoria loves doing research and is a graduate student in the field of biology.`
    },
    {
        name: "Bob Schulze",
        title: "Artist/Songwriter",
        image: "bob.jpg",
        bio: `Bob grew up singing gospel music. His mom said he was singing before he could talk. He credits his abilities to sing harmony to his mom and dad. Both being singers, they would always make sure Bob knew how to blend with them. 
        When it comes to leading worship, Bob has one creed... ... “there is an audience of one. The congregation are the performers, who sing praises to that One. The worship team are the “prompters”. If there is someone in church that day who either doesn’t know how to worship, or simply doesn’t feel like it, it is OUR job to make sure they see that it is possible to worship our Jesus! To free them up in order to worship any way they choose!” It truly is an honor!`
    },
    {
        name: "Deborah Woods",
        title: "Artist/Songwriter",
        image: "deborah.jpg",
        bio: `Deborah has been involved in music and worship since she was a young child in her local church’s children’s choir. She has kept her passion for music in every season of her life through leading worship, learning instruments, performing, songwriting and playing music with her friends.
        Whether before a group of 5 or 500, Deborah deeply enjoys the sense of connection with people and God that leading worship brings. She plans to continue growing spiritually and musically through worship for years to come. Deborah is a wife, mother, and beauty industry professional. She and her family have lived in San Diego since her husband, Jeremiah was stationed at MCAS Miramar in 2014. `
    },
    {
        name: "Drew Yantis",
        title: "Artist/Songwriter",
        image: "drew.jpg",
        bio: `Drew began drumming in the kitchen at an early age with wooden spoons, shortly thereafter he received a pair of drumsticks, and he has been drumming ever since.  Drew comes from a musical family, his father David Yantis was a Christian recording artist signed with World Records.  
        His father produced six albums with World Records and Drew performed on some songs that charted on the Christian Broadcast Network.  Growing up, he studied privately with a symphony percussionist and formed his first band with friends at twelve years old.   During school years, he performed in Orchestra, Jazz Ensemble and Marching Drum Corps.  Performance highlights include singing in La Boheme with the San Diego Opera, traveling-drumming on cruise ships and performing with Barry Bedore in the Latin jazz group, Yavaz.  For Drew, it was the youth summer christian camps as a teenager that had the most impact in bringing him closer to the Lord.  One of Drew's favorite bible verses is Psalm 150:5 "Praise Him with loud cymbals; Praise Him with resounding cymbals."`
    }
]