import { createTheme } from '@material-ui/core/styles'

// Site color schemes and defaults
export const bgOrange = '#FF9969'
export const darkOrange = '#DA3D1D'
export const transDarkOrange = 'rgba(218, 61, 29, .7)'
export const fontGray = '#333436'
export const bgGray = '#464646'
export const transGray = 'rgba(0, 0, 0, 60%)'
export const dtpBlue = '#1E4488'
export const transDtpBlue = 'rgba(30, 68, 136, .7)'
export const dtpLightBlue = '#117EC2'
export const boxShadow = '0px 2px 4px rgb(0,0,0,0.5)'
export const breakShadow = '0px 1px 2px rgb(0,0,0,0.25)'
export const textShadow = '0px 1px 2px rgb(0,0,0,0.25)'
export const dadssGradientBG = 'rgb(240,153,34)'
export const dadssGradient = 'linear-gradient(90deg, #FF9969 0%, #DA3D1D 90%)'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#FF9969',
      main: '#DA3D1D',
    },
    secondary: {
      main: '#333436',
      dark: '#464646',
    },
    text: {
      primary: '#333436',
      secondary: '#fff',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: ['Open Sans', `sans-serif`].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 950,
      lg: 1150,
      xl: 1970,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        a: {
          textDecoration: 'none',
          fontWeight: 'bold',
          color: darkOrange,
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        'ul, ol': {
          margin: 0,
          paddingLeft: 32,
          fontSize: 16,
          '& li': {
            marginBottom: 8,
          },
        },
      },
    },
  },
})

export default theme
