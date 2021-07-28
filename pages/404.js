import ReactGA from 'react-ga'
import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ContentBlock from '../components/Layout/ContentBlock'
import { Typography } from '@material-ui/core'
import Image from '../components/Layout/Image'
import theme from '../src/theme'

const DADSSLogo = '/assets/logos/graphic-logo-car.svg'

const PageNotFound = () => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const description = `Page not found. Oops. It appears something has gone wrong.`

  return (
    <>
      <Head>
        <title>DADSS | 404 - Page Not Found</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <ContentBlock header='Page Not Found' divider>
          <Typography variant='h4' gutterBottom>
            Oops. Something has gone wrong.
          </Typography>
          <img
            src={DADSSLogo}
            alt='DADSS Car Logo'
            height='150px'
            width='100%'
            style={{ margin: theme.spacing(2) }}
          />
          <Typography>
            Sorry about that. Follow this link to{' '}
            <Link href='/'>Return Home</Link>.
          </Typography>
        </ContentBlock>
      </main>
    </>
  )
}

export default PageNotFound
