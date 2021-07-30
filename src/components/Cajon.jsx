import { makeStyles,Drawer, Divider } from '@material-ui/core'
import React from 'react'
import Listas from './Lista'

const drawerWidth = 240
const estilos = makeStyles(theme => ({
    drawer:{
        width:drawerWidth,
        flexShrink:0,
    },
    drawerPaper:{
        width:drawerWidth,
    },
    toolbar:theme.mixins.toolbar
}))

const Cajon = (props) => {
    const classes = estilos()
    return (
       <Drawer
       className={classes.drawer}
       variant={props.variant}
       classes={{paper:classes.drawerPaper}}
       anchor="left"
       open={props.open}
       onClose={props.onClose? props.onClose:null}>     {/* se Recibe o true o false dependiendo de eso se envia o no el resultado para q se cierre*/}
   
           <div className={classes.toolbar}></div>
           <Divider/>
           <Listas/>

         

       </Drawer>
    )
}

export default Cajon
