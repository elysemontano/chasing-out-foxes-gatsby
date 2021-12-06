import { Link } from 'gatsby'
import { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { IconButton, Divider, SwipeableDrawer, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronIcon from '@material-ui/icons/ChevronRight'
import PropTypes from 'prop-types'
import React from 'react'



const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5px'
  },
  navDrawer: {
    color: "#292e32", 
    display:"flex", 
    flexDirection: "column", 
    padding: "10px", 
    paddingLeft: "20px"
  },
  appBarTransparent: {
    backgroundColor: "#292e32",
    margin: "0"
  },
  appBarSolid: {
      backgroundColor: "#292e32",
  },
  title: {
    margin: theme.spacing(1),
    color: '#fff',
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  toolbar: {
    width: '80%'
  },
  logo: {
    width: "5%",
    borderRadius: "100%",
  },
  paper: {
    background: "#292e32",
    color: "white"
  }
}))

const navigationLinks = [
  {name: "Artists", href: "" },
  {name: "Songs", href: "" },
  {name: "Contact", href: "" },
];

function Navigation({style}) {
  const styles = useStyles()
  return (
      <div>
          {navigationLinks.map((item, id) => (
              <Link
                  className={styles.link}
                  style={style}
                  variant="button"
                  underline="none"
                  key={id}
                  href={item.href}
                  >
                  {item.name}
              </Link>
          ))}
      </div>
  )
}

const Header = ({ siteTitle }) => {
  const styles = useStyles()
  const [navBackground, setNavBackground] = useState("appBarSolid")
  const [open, setOpen] = useState(false)
  const navRef = React.useRef()
  navRef.current = navBackground


  useEffect(() => {
      const handleScroll = () => {
          const show = window.scrollY > 310
          if(show) {
              setNavBackground('appBarTransparent')
          } else {
              setNavBackground('appBarSolid')
          }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
          document.removeEventListener('scroll', handleScroll)
      }
  }, [])

  return (
    <AppBar className={styles[navRef.current]} position="sticky" >
      <div className={styles.nav}>
        <Toolbar className={styles.toolbar}>
            <Link to='/' className={styles.link}>
              <StaticImage 
                          src="../images/CoF logo White Outline.png" 
                          alt="Chasing Out Foxes Logo" 
                          className={styles.logo}/>
              <Typography variant='h6' component='h1' className={styles.title}>{ siteTitle }</Typography>
            </Link>
          </Toolbar>
          <div onClick={() => setOpen(true)}>                    
                      <IconButton style={{color: "white"}}>
                          <MenuIcon />
                      </IconButton>
          </div>
        <SwipeableDrawer classes={{ paper: styles.paper}} anchor="right" open={open} onOpen={()=> setOpen(true)} onClose={()=> setOpen(false)}>
          <div onClick={()=> setOpen(false)}>
                        <IconButton>
                            <ChevronIcon style={{color: "white" }}/>
                        </IconButton>
            </div>
            <Divider/>
            <Navigation style={{color: "#e9f0f3", display:"flex", flexDirection: "column", padding: "10px", paddingLeft: "20px"}}/>  
        </SwipeableDrawer>
      </div>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header