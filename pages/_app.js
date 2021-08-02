import { useEffect } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline, responsiveFontSizes } from '@material-ui/core'
import theme from '../src/theme'
import PropTypes from 'prop-types'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
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

        <meta name='application-name' content='DADSS' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='DADSS' />
        <meta name='description' content='DADSS Website' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />

        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/icons/dadss-152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/dadss-180.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='167x167'
          href='/icons/dadss-167.png'
        />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon.ico' />

        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/favicon.ico' color='#5bbad5' />
        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://www.dadss.org' />
        <meta name='twitter:title' content='DADSS' />
        <meta name='twitter:description' content='DADSS Website' />
        <meta
          name='twitter:image'
          content='https://www.dadss.org/icons/dadsss-512.png'
        />
        <meta name='twitter:creator' content='DADSS' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='DADSS' />
        <meta property='og:description' content='DADSS Website' />
        <meta property='og:site_name' content='DADSS' />
        <meta property='og:url' content='https://www.dadss.org' />
        <meta
          property='og:image'
          content='https://www.dadss.org/icons/dadsss-512.png'
        />

        <meta
          property='og:title'
          content='Driver Alcohol Detection System for Safety (DADSS)'
        />
        <meta
          property='og:image'
          content='https://www.dadss.org/assets/logos/graphic-logo-car.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
