import { Link } from 'gatsby'
import { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { IconButton, Divider, SwipeableDrawer, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import PropTypes from 'prop-types'
import React from 'react'
import Social from './social'



const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    textAlign: 'right',
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
    paddingLeft: "20px",
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
  toolbar: {
    width: '80%'
  },
  logo: {
    width: "5%",
    borderRadius: "100%",
  },
  paper: {
    background: "#292e32",
    color: "white",
  },
  customizedButton: {
    position: 'relative',
    left: '95%',
    top: '9%',
 },
 customizedMenu: {
  position: 'relative',
  display: 'flex',
  justifyContent: 'right',
},
  logoContainer: {
    position: 'absolute',
    width: '100%',

  }
}))

const navigationLinks = [
  {name: "Artists", href: "/artists" },
  {name: "Songs", href: "" },
  {name: "Contact", href: "" },
];

function Navigation({style}) {
  const styles = useStyles()
  return (
      <div style={{marginTop: '50px'}}>
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
          <Social style={{color: "#e9f0f3", paddingBottom: "25px"}}/>
        </Toolbar>
        <div className={styles.logoContainer}>
        {window.location.pathname !== "/" ? (
          <Link to='/' className={styles.link}>
              <StaticImage 
                          src="../images/CoF logo White Outline.png" 
                          alt="Chasing Out Foxes Logo" 
                          className={styles.logo}/>
              </Link>
              ) : null}
        </div>
          <div onClick={() => setOpen(true)}>                    
                      <IconButton style={{color: "white"}}>
                          <MenuIcon style={{ fontSize: 35 }}/>
                      </IconButton>
          </div>
        <SwipeableDrawer classes={{ paper: styles.paper}} anchor="top" open={open} onOpen={()=> setOpen(true)} onClose={()=> setOpen(false)}>
          <div onClick={()=> setOpen(false)}>
                        <IconButton className={styles.customizedButton}>
                            <ExpandLessIcon style={{color: "white" }}/>
                        </IconButton>
            </div>
            <Divider/>
            <Navigation style={{ flexDirection: "column", padding: "10px", }} className={styles.customizedMenu}/>  
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
