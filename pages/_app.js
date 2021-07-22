import { useEffect } from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import theme from '../src/theme'
import PropTypes from 'prop-types'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    router.events?.on('routeChangeComplete', () => {
      window.scrollTo(0, 0)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Driver Alcohol Detection System for Safety (DADSS)</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
