import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    offset:theme.mixins.toolbar, //va a colocar el alto de forma dinamica
    menuButton:{
        marginRight:theme.spacing(2),//8 x2 =16px de espaciado
        [theme.breakpoints.up('sm')]:{
          display:'none'
        }
    },
    title:{
      flexGrow:1
    },
    appBar:{
      // width:`calc(100% - ${240}px)`,
      // marginLeft:240
    [theme.breakpoints.up('sm')]:{ // de esta manera se modifica con el punto de quiebre sm
     width:`calc(100% - ${240}px)`,
      marginLeft:240
    }
    }
}) )

const Navbar = (props) => {
    const classes = useStyles()
    return (
       
            <AppBar position="fixed" color="primary" className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>props.accionAbrir()}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  Bluuweb
                </Typography>
              </Toolbar>
            </AppBar>
          
       
    )
}

export default Navbar




{/* <div className={classes.offset}></div> */}