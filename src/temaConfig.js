import {
     
    unstable_createMuiStrictModeTheme as createMuiTheme,
    darken,
  } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple'
import { lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette:{
        primary:{
            main:lightGreen[900]
        }
    }
})
export default theme