import React from 'react'
import Button from '@material-ui/core/Button'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton ,Icon, makeStyles} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles';
import theme from './temaConfig';
import Navbar from './components/Navbar';
import Listas from './components/Lista';
import Oculto from './components/Oculto';

const Ejemplos = () => {
    return (  <ThemeProvider theme={theme}>
        <Navbar/>
        <div>
          jasjaksas
          <Button className={classes.BotonPersonalizado}>ESTE ES UN BOTON</Button>
          <Button variant='contained' color="primary" href="https://getbootstrap.com/docs/5.0/helpers/position/">
            Boton href
          </Button>
          <DeleteIcon />
          <Icon>room</Icon>
          <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>}>
            BORRAME
          </Button>
          <Button variant="contained" color="primary" endIcon={<Icon>room</Icon>}>
            ROOM
          </Button>
          <IconButton aria-label="delete">
            <Icon color="secondary">room</Icon>
            
          </IconButton>
         
         
        </div>
        <Listas/>
        <Oculto/>
        </ThemeProvider>
    )
}

export default Ejemplos
