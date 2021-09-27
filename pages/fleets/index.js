import Head from 'next/head'
import Divider from '../../components/Layout/Divider'
import HeroImage from '../../components/Layout/HeroImage'
import ContentBlock from '../../components/Layout/ContentBlock'
import { Box, Container, Grid, Hidden, Typography, styled } from '@mui/material'
import SidebarImage from '../../components/Layout/SidebarImage'
import LogoDivider from '../../components/Layout/LogoDivider'
import { ACTS, DADSS, NHTSA } from '../../components/Logos'

const Guidelines = '/assets/fleets/pdf/Guidelines-for-State-DADSS-Projects.pdf'
import heroBg from '../../public/assets/fleets/images/DADSS.webp'
import { darkOrange } from '../../src/theme'
const Art1 = '/assets/fleets/images/Artboard-1.webp'
const Art2 = '/assets/fleets/images/Artboard-2.webp'
const Art3 = '/assets/fleets/images/Artboard-3.webp'

const Fleets = () => {
  const description = `DADSS is currently seeking opportunities to partner with state\
	fleets and/or private fleet organizations for trial deployment of\
	this vehicle technology.`

  return (
    <>
      <Head>
        <title>DADSS | Fleets</title>
        <meta name='description' content={description} />
      </Head>

      <PageWrap>
        <HeroImage image={heroBg} />
        <Container>
          <Grid container justifyContent='space-between' spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant='h3'
                color='primary'
                align='center'
                gutterBottom
                style={{ marginTop: 48 }}>
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
            <Hidden mdDown>
              <Grid item md={3}>
                <ContentBlock sidebar>
                  <SidebarImage image={Art1} />
                  <SidebarImage image={Art2} />
                  <SidebarImage image={Art3} />
                </ContentBlock>
              </Grid>
            </Hidden>

            <Grid item xs={12}>
              <LogoDivider>
                <ACTS />
                <DADSS />
                <NHTSA />
              </LogoDivider>
            </Grid>
          </Grid>
        </Container>
      </PageWrap>
    </>
  )
}

export default Fleets

const PageWrap = styled('main')({
  '& a': {
    fontWeight: 'bold',
    color: darkOrange,
  },
})
