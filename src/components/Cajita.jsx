import React from 'react'
import {Box, Grid, Typography} from '@material-ui/core'

const Cajita = () => {
    return (
        <div>
        <Box
        color="primary.main">soy una cajita</Box> 

        <Box 
        color="primary.contrastText"
        bgcolor="primary.main"
        >otra cajita</Box>
                <Box 
        color="primary.contrastText"
        bgcolor="primary.main"
        m={2}
        >otra cajita con margin</Box>
                  <Box 
        color="primary.contrastText"
        bgcolor="primary.main"
        mx={2} // tambien my es para el margin de arriba y abbajo, mr(margin right) y ml (margin left) mt(top) mb(bottom)
        p={2}// lo de arriba tambien se aplica con el padding
        >otra cajita con margin solo ala derecha e izquierda y con padding</Box>
         <Box
        color="primary.main"
        border={2}
        borderColor="error.main"
        mt={2}>soy una cajita con borde</Box> 

         <Typography variant="h4" color="initial">Con Grid</Typography>
      <Grid container >   {/* el grid q envuelve todo siempre lleva container */}
          <Grid  xs={12} mb={2}>{/* 12 es el espacio maximo si agregamos en una caja 6 y en la otra 8 siempre se acomodara abajo */}
            <Box border={2}>xs12</Box>
          </Grid>
          <Grid item xs={6}>{/* xs es la forma final que siempre tendra la caja pues es el punto de quiebre mas chico */}
            <Box mt={2} border={2}>xs6</Box>
          </Grid>
          <Grid item  xs={6}>
            <Box mt={2} border={2}>xs6</Box>
          </Grid>
          <Grid item m={2} xs={12} sm={6} md={4}>{/* aqui se estaria ubicando dependiendo el punto de quiebre */}
            <Box mt={2} border={2}>xs12 sm6 md4</Box>
          </Grid>

          <Grid item m={2} xs={12} sm={6} md={4}>
            <Box mt={2} border={2} >xs12 sm6 md4</Box>
          </Grid>
        </Grid>

        
        </div>
    )
}

export default Cajita
