import { useEffect } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import ImageGrid from './imageGrid'
import ContentBlock from '../../components/ContentBlock'
import { supportersData, manufacturerData } from '../../src/supportersData'
import Divider from '../../components/Divider'
import { Box, Typography } from '@material-ui/core'
import theme, { darkOrange } from '../../src/theme'

const allCars = '/assets/logos/supporters/all-cars.jpg'

const Supporters = () => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const description = `The Driver Alcohol Detection System for Safety (DADSS) research\
  program is supported by safety and children’s advocates, insurance\
	companies, state and local government representatives and members of\
	the alcohol industry – who all agree that technology can be the\
	answer to the persistent problem of drunk driving.`

  return (
    <>
      <Head>
        <title>DADSS | Supporters</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <ContentBlock header='Our Supporters'>
          <Divider />

          <Typography>
            The Driver Alcohol Detection System for Safety (DADSS) research
            program is supported by safety and children’s advocates, insurance
            companies, state and local government representatives and members of
            the alcohol industry – who all agree that technology can be the
            answer to the persistent problem of drunk driving.
          </Typography>

          <Box mt={3}>
            <Typography
              variant='h5'
              color='primary'
              align='center'
              gutterBottom>
              The world's leading car companies are involved in the DADSS
              research program, including:
            </Typography>

            <ImageGrid imageArray={manufacturerData} />
          </Box>

          <Box mt={3}>
            <Typography
              variant='h5'
              color='primary'
              align='center'
              gutterBottom>
              Other supporters of the DADSS program include:
            </Typography>

            <ImageGrid imageArray={supportersData} />

            <Typography paragraph>
              If your organization is interested in supporting the DADSS
              program, please contact{' '}
              <a href='mailto:info@dadss.org?subject=I want to be a DADSS supporter'>
                info@dadss.org
              </a>
              .
            </Typography>
          </Box>
        </ContentBlock>
      </main>
    </>
  )
}

export default Supporters
