import { useEffect } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, responsiveFontSizes } from '@mui/material'
import theme from '../src/theme'
import PropTypes from 'prop-types'
import { init } from '../util/googleAnalytics'

export default function MyApp({ Component, pageProps }) {
  const description =
    'Despite progress over the past three decades, drunk driving claims approximately 10,000 lives each year. The Driver Alcohol Detection System for Safety (DADSS) Program is researching a first-of-its-kind technology that holds the greatest potential we have seen to reverse this trend.'

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    init(process.env.ga4)
  }, [])

  return (
    <>
      <Head>
        <title>Driver Alcohol Detection System for Safety (DADSS)</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />

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
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/dadss-32.png'
        />
        <link
          rel='apple-touch-icon'
          type='image/png'
          href='/icons/dadss-32.png'
        />

        <link rel='mask-icon' href='/icons/dadss-32.png' color='#5bbad5' />
        <link rel='shortcut icon' href='/icons/dadss-32.png' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@DADSSTech' />
        <meta name='twitter:url' content='https://www.dadss.org' />
        <meta
          name='twitter:title'
          content='Driver Alcohol Detection System for Safety (DADSS)'
        />
        <meta name='twitter:description' content={description} />
        <meta
          name='twitter:image'
          content='https://www.dadss.org/icons/dadsss-152.png'
        />
        <meta name='twitter:creator' content='DADSS' />

        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Driver Alcohol Detection System for Safety (DADSS)'
        />
        <meta property='og:description' content={description} />
        <meta property='og:url' content='https://www.dadss.org' />
        <meta
          property='og:title'
          content='Driver Alcohol Detection System for Safety (DADSS)'
        />
        <meta
          name='image'
          property='og:image'
          content='https://www.dadss.org/icons/og-image.png'
        />
      </Head>

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
