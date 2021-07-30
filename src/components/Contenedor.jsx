import { Hidden, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Cajon from './Cajon'
import Navbar from './Navbar'



const estilos = makeStyles(theme=>({
    root:{
        display:'flex'
    },
    toolbar:theme.mixins.toolbar,
    content:{
        flexGrow:1,
        backgroundColor:theme.palette.background.default,
        padding:theme.spacing(3)
    },
}))
const Contenedor = () => {

   const classes = estilos()
  const [abrir, setAbrir] = useState(false)
  const accionAbrir = ()=>{
      setAbrir(!abrir)
  }
    return (
        <div className={classes.root}>
            <Navbar
            accionAbrir={accionAbrir}/>
            {/* //se envia para el onclick la funcion */}
            <Hidden xsDown>
            <Cajon
            variant="permanent"
            open={abrir}
            />
            </Hidden>
            <Hidden smUp>
            <Cajon
            variant="temporary"
            open={abrir}
            onClose={accionAbrir}//se reciben los resultados para cerrar el cajon
           />
            </Hidden>
           <div className={classes.content}>
           <div className={classes.toolbar}>
           
               </div> 
             
               content
        </div>
        </div> 
    )
}

export default Contenedor
