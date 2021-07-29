import React from 'react'
import Button from '@material-ui/core/Button'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton ,Icon, makeStyles} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles';
import theme from './temaConfig';

const useStyles = makeStyles({
  BotonPersonalizado:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
})




function App() {
  const classes = useStyles()
  
  return (
    <ThemeProvider theme={theme}>
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
  </ThemeProvider>
  );
}

export default App;
