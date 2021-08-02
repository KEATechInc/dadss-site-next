import { useEffect } from 'react'
import ReactGA from 'react-ga'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import Divider from '../../../components/Layout/Divider'
import HeroImage from '../../../components/Layout/HeroImage'
import ContentBlock from '../../../components/Layout/ContentBlock'
import { dtpBlue } from '../../../src/theme'
import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  styled,
  Typography,
} from '@material-ui/core'
import Video from '../../../components/Layout/Video'
import LogoDivider from '../../../components/Layout/LogoDivider'
import { ACTS, NHTSA, DADSS, VADMV } from '../../../components/Logos'
import BlueButton from '../../../components/Layout/BlueButton'

const heroBg = '/assets/drivenToProtect/GreyWash1.webp'
const dtpLogo = '/assets/logos/dtpLogos/VA-logo.webp'
const dadss = '/assets/logos/dtpLogos/dadss-logo.webp'
const dmv = '/assets/logos/dtpLogos/dmv-logo.webp'
const PDF = '/assets/drivenToProtect/pdf/Driven-to-Protect-Overview.pdf'

const DTPVirginia = () => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const description = `Recognizing the potential of the DADSS technology to save lives by\
	preventing drunk driving, Virginia became the first state to use\
	NHTSA highway safety grant funds to partner with the DADSS Program\
	through the Department of Motor Vehicles.`

  const router = useRouter()

  return (
    <>
      <Head>
        <title>DADSS | DTP Virginia</title>
        <meta name='description' content={description} />
      </Head>

      <PageWrap>
        <HeroImage image={heroBg} darken>
          <img src={dtpLogo} alt='DTP Logo' width={'100%'} height={'100%'} />
        </HeroImage>

        <Container>
          <Grid container justifyContent='space-between' spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant='h3'
                color='primary'
                align='center'
                gutterBottom
                style={{ marginTop: 32, color: dtpBlue }}>
                Virginia: The First State Partnership
              </Typography>
              <Divider />
            </Grid>

            <Grid item md={9}>
              <Typography paragraph>
                There’s an innovative technology undergoing developmental
                refinements that could save lives by preventing drunk driving –
                and Virginia is playing a critical role in making this
                technology a reality.
              </Typography>
              <Typography paragraph>
                The Automotive Coalition for Traffic Safety’s (ACTS) Driver
                Alcohol Detection System for Safety (DADSS) Program is
                developing advanced vehicle safety technology that can
                automatically detect when a driver is intoxicated with a blood
                alcohol concentration at or above 0.08% -- the legal limit in
                all 50 states except Utah (0.05%) – and prevent the car from
                moving. Virginia became the first state to partner with the
                DADSS Program. This partnership – the Driven to Protect
                Initiative– is an example of the technological innovation
                happening in Virginia.
              </Typography>

              <Typography
                variant='h4'
                gutterBottom
                align='center'
                style={{ color: dtpBlue }}>
                Real World Testing With James River Transportation
              </Typography>
              <Divider size='small' />
              <Typography paragraph>
                The DADSS Program is advancing the state of alcohol detection
                technology by developing a system that is fast, accurate,
                reliable, and affordable – all without affecting normal driving
                behavior.
              </Typography>
              <Typography paragraph>
                In 2018, Governor Northam and the Virginia DMV announced a
                partnership with ACTS and James River Transportation (JRT) to
                conduct in-vehicle, on-road test trials. Technology integrators
                installed prototypes of the breath sensors into vehicles in the
                JRT commercial fleet. The data and feedback collected from the
                prototype sensors, as well as from the drivers themselves, have
                been invaluable to improve the technology as it is prepared for
                widespread commercialization.
              </Typography>

              <Typography
                variant='h4'
                gutterBottom
                align='center'
                style={{ color: dtpBlue }}>
                ACTS Discovery Hub
              </Typography>
              <Divider size='small' />
              <Typography paragraph>
                In collaboration with the Virginia Department of Education, ACTS
                is developing and distributing a series of STEM lessons that put
                students in the shoes of the engineers and data analysts working
                on the DADSS technology. Virginia’s leadership in technology and
                innovation begins in our schools, and by showing students the
                practical application of their lessons, we can inspire a new
                generation to build technology that saves lives.
              </Typography>
              <Typography paragraph>
                Focusing on the DADSS technology and the Driven to Protect
                initiative, ACTS also developed virtual learning modules and
                video content that show how the technology works, how alcohol
                affects the body, statistics and laws about impaired driving in
                Virginia, and more. All of these resources are available to
                educators through the Virtual Virginia learning portal – earning
                them continuing education credits – and available to the general
                public at the <Link href='/discovery-hub'>Discovery Hub</Link>.
              </Typography>

              <Box mb={2}>
                <Video videoUrl={'https://www.youtube.com/embed/lNb3L-dWXjg'} />
              </Box>

              <Typography
                variant='h4'
                gutterBottom
                align='center'
                style={{ color: dtpBlue }}>
                More Resources
              </Typography>
              <Divider size='small' />
              <Typography paragraph>
                In 2020, Virginia reported 6,624 alcohol-related crashes, 272
                alcohol-related fatalities, 3,386 alcohol-related injuries on
                its roadways. Through Driven to Protect, Virginia continues to
                put the health and safety of its residents first by educating
                the next generation about responsible driving behavior and by
                advancing technology that can prevent additional drunk driving
                crashes, injuries, and deaths on its roads.
              </Typography>

              <ul>
                <li>
                  <a href={PDF} target='_blank' rel='noreferrer'>
                    Download overview about the Driven to Protect program in
                    Virginia
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      router.push('/driven-to-protect/virginia/events-VA')
                    }>
                    View past and upcoming events in Virginia, showcasing the
                    technology
                  </a>
                </li>
                <li>
                  <a onClick={() => router.push('/resources')}>
                    Find fact sheets, videos, and other resources
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.youtube.com/watch?v=Wk_DS91Y-mo'
                    target='_blank'
                    rel='noreferrer'>
                    Hear from experts behind the technology development process
                  </a>
                </li>

                <li>
                  <a
                    href='https://www.youtube.com/watch?v=pg3S7lltGRE'
                    target='_blank'
                    rel='noreferrer'>
                    Hear from experts about how the technology can support fleet
                    operators in furthering their safe driving goals
                  </a>
                </li>
              </ul>
            </Grid>

            {/* sidebar */}
            <Hidden smDown>
              <Grid item md={3}>
                <ContentBlock sticky sidebar>
                  <Box mb={4}>
                    <Typography
                      variant='h5'
                      align='center'
                      gutterBottom
                      style={{ color: dtpBlue }}>
                      Explore The Discovery Hub
                    </Typography>
                    <Divider size='small' />
                    <Typography paragraph>
                      In the Fall of 2020, we launched the Discovery Hub,
                      offering free videos and educational resources – including
                      a series of STEM- inspired lessons – about
                      alcohol-impaired driving and the ways the DADSS technology
                      can prevent it.
                    </Typography>
                    <BlueButton
                      fullWidth
                      onClick={() => router.push('/discovery-hub')}
                      variant='outlined'
                      color='secondary'>
                      Learn More <AiFillCaretRight />
                    </BlueButton>
                  </Box>

                  <Box>
                    <Typography
                      variant='h5'
                      align='center'
                      gutterBottom
                      style={{ color: dtpBlue }}>
                      Follow Driven To Protect On Twitter
                    </Typography>
                    <Divider size='small' />
                    <Typography paragraph>
                      Keep up with the latest developments on the partnership
                      between DADSS and the Virginia DMV
                    </Typography>

                    <BlueButton
                      href='https://twitter.com/DrvnToProtectVA'
                      target='_blank'
                      fullWidth
                      rel='noreferrer'>
                      Learn More <AiFillCaretRight />
                    </BlueButton>
                  </Box>
                </ContentBlock>
              </Grid>
            </Hidden>

            {/* logo banner */}
            <Grid item xs={12}>
              <LogoDivider>
                <ACTS />
                <DADSS />
                <NHTSA />
                <VADMV />
              </LogoDivider>
            </Grid>
          </Grid>
        </Container>
      </PageWrap>
    </>
  )
}

export default DTPVirginia

const PageWrap = styled('main')({
  '& button': {
    color: dtpBlue,
  },
  '& a': {
    color: dtpBlue,
    cursor: 'pointer',
  },
})
