import React from 'react'
import {withWidth,Typography,Hidden,Button} from '@material-ui/core'

const Oculto = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho : {props.width}
            </Typography>
         <Hidden xsDown>    {/* // que oculte mientras sea xs o inferior */}
                <Button variant="contained" color="primary">xs</Button>  
            </Hidden>
            <Hidden smDown>    {/* // que oculte mientras sea sm o inferior */}
                <Button variant="contained" color="primary">sm</Button>  
            </Hidden>
            <Hidden mdUp>    {/* // que oculte mientras sea md o superior */}
                <Button variant="contained" color="primary">md</Button>  
            </Hidden>
            <Hidden only={['lg','md']}>    {/* // que oculte solo a lo que se especifique  */}
                <Button variant="contained" color="primary">lg</Button>  
            </Hidden>
        </div>
    )
}

export default withWidth()(Oculto)//esto es para visualizar los puntos de quiebre
