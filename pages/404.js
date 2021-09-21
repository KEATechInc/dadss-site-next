import Head from 'next/head'
import Link from 'next/link'
import ContentBlock from '../components/Layout/ContentBlock'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

import DADSSLogo from '../public/assets/logos/graphic-logo-car.svg'

const PageNotFound = () => {
  const description = `Page not found. Oops. It appears something has gone wrong.`

  return (
    <>
      <Head>
        <title>DADSS | 404 - Page Not Found</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <ContentBlock header='Page Not Found' divider>
          <Typography variant='h5' gutterBottom>
            Oops. Something has gone wrong.
          </Typography>

          <Box m={2}>
            <Image src={DADSSLogo} alt='DADSS Car Logo' />
          </Box>

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
