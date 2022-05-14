import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ccd6f6',
    },
    secondary: {
      main: '#64ffda',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    // h5: {
    //   fontSize: '1.75rem',
    // },
    // h6: {
    //   fontSize: '1rem',
    //   fontWeight: 400,
    // },
  },
})

export default theme
