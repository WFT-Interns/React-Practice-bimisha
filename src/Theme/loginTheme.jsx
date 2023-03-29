import React from 'react'
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import styled from '@emotion/styled';



const theme = createTheme({
    palette:{
        primary:{
            main: '#000',
        },
        secondary: {
            main: '#f44336',
          },
       },
    components: {
        MuiButton: {
          styleOverrides: {

            root: {
              textTransform: "uppercase",
              fontWeight: 700,
            },
    
            outlined: {
              border: "3px solid #00000",
              margin: "5px",
              height: "40px",
              width: "100px",
            },
          },
        },
    },
});


   
export default theme;



