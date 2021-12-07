import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'

const socialItems = [
    { icon: FacebookIcon, url: ''},
    { icon: YouTubeIcon, url: ''},
    { icon: InstagramIcon, url: ''}
]

export default function({style}) {
    return (
        <Grid container >
            {socialItems.map((item, id) => (
                <Grid item key={id}>
                    <Link href={item.url} target="_blank">
                        <IconButton style={style} sx={{ fontSize: 35 }}>
                            <item.icon style={{ fontSize: 35 }}/>
                        </IconButton>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}
