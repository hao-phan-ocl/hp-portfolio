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
    h1: {
      '@media (max-width:800px)': {
        fontSize: '4rem',
      },
    },
    h5: {
      '@media (max-width:800px)': {
        fontSize: '1.2rem',
      },
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
  },
})

export default theme
