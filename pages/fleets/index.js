import { useEffect } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Link from 'next/link'
import Divider from '../../components/Divider'
import HeroImage from '../../components/Layout/HeroImage'
import ContentBlock from '../../components/ContentBlock'
import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  styled,
  Typography,
} from '@material-ui/core'
import SidebarImage from '../../components/Layout/SidebarImage'
import LogoDivider from '../../components/Layout/LogoDivider'

const acts = '/assets/logos/dtpLogos/acts-logo.webp'
const dadss = '/assets/logos/dtpLogos/dadss-logo.webp'
const nhtsa = '/assets/logos/dadss-nhtsa.webp'
const Guidelines = '/assets/fleets/pdf/Guidelines-for-State-DADSS-Projects.pdf'
const heroBg = '/assets/fleets/images/DADSS.webp'
const Art1 = '/assets/fleets/images/Artboard-1.webp'
const Art2 = '/assets/fleets/images/Artboard-2.webp'
const Art3 = '/assets/fleets/images/Artboard-3.webp'

const Fleets = () => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const description = `DADSS is currently seeking opportunities to partner with state\
	fleets and/or private fleet organizations for trial deployment of\
	this vehicle technology.`

  return (
    <>
      <Head>
        <title>DADSS | Fleets</title>
        <meta name='description' content={description} />
      </Head>

      <main>
        <HeroImage image={heroBg} />
        <Container>
          <Grid container justifyContent='space-between'>
            <Grid item xs={12}>
              <Typography
                variant='h3'
                color='primary'
                align='center'
                gutterBottom
                style={{ marginTop: 32 }}>
                Fleets
              </Typography>
              <Divider />
            </Grid>

            <Grid item md={9}>
              <Typography
                variant='h4'
                align='center'
                color='primary'
                gutterBottom>
                DADSS Field Operation Trial Opportunities
              </Typography>
              <Typography paragraph>
                The Driver Alcohol Detection System for Safety Program (DADSS)
                is developing innovative, vehicle-integrated alcohol detection
                systems to address the problem of alcohol-impaired driving.
                These technologies, both breath- and touch-based, are intended
                to be seamless with the driving task, non-intrusive, accurate,
                fast, and require little to no maintenance. Development of the
                breath-based technology has progressed significantly and now
                requires real-world road testing in an uncontrolled,
                naturalistic setting. DADSS is currently seeking opportunities
                to partner with state fleets and/or private fleet organizations
                for trial deployment of this vehicle technology. State partners
                may be eligible to use certain NHTSA grant funds to sponsor
                DADSS research projects.{' '}
                <a href={Guidelines} target='_blank' rel='noreferrer'>
                  See here for guidance.
                </a>
              </Typography>
              <Typography paragraph>
                <b>Goals:</b>
              </Typography>

              <Box mb={2}>
                <ol>
                  <li>
                    Identify and address technical modifications for system
                    improvement; including: refine user interface, optimize
                    sensor performance and ruggedness, and improve measurement
                    algorithms
                  </li>
                  <li>
                    Increase public awareness and acceptance of the DADSS system
                  </li>
                  <li>
                    Determine feasibility of implementation into larger fleets,
                    privately owned, and commercial vehicles
                  </li>
                </ol>
              </Box>

              <Typography paragraph>
                To explore how to become a DADSS deployment partner, contact{' '}
                <a href='mailto:info@dadss.org?subject=I want to learn more about DADSS'>
                  info@dadss.org.
                </a>
              </Typography>
              <Typography paragraph>
                Watch our{' '}
                <a
                  href='https://www.youtube.com/watch?v=pg3S7lltGRE'
                  target='_blank'
                  rel='noreferrer'>
                  Ask the Experts: The Role of Fleets in Driven to Protect
                </a>{' '}
                webinar on YouTube to hear from experts about how our
                breakthrough technology can help support fleet operators in
                furthering their safe driving goals.
              </Typography>
            </Grid>

            {/* sidebar */}
            <Hidden smDown>
              <Grid item md={3}>
                <ContentBlock sticky sidebar>
                  <SidebarImage image={Art1} />
                  <SidebarImage image={Art2} />
                  <SidebarImage image={Art3} />
                </ContentBlock>
              </Grid>
            </Hidden>

            <Grid item xs={12}>
              <LogoDivider>
                <a
                  href='https://www.nhtsa.gov/'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={nhtsa} height={60} width={165} alt='NHTSA Logo' />
                </a>

                <Link href='/'>
                  <img src={dadss} height={65} width={220} alt='DADSS Logo' />
                </Link>
                <a
                  href='https://www.actsautosafety.org/'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={acts} height={65} width={135} alt='ACTS Logo' />
                </a>
              </LogoDivider>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default Fleets
