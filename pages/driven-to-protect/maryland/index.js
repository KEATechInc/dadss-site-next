import Head from 'next/head'
import Divider from '../../../components/Layout/Divider'
import HeroImage from '../../../components/Layout/HeroImage'
import ContentBlock from '../../../components/Layout/ContentBlock'
import { dtpBlue } from '../../../src/theme'
import {
  Box,
  Container,
  Grid,
  Hidden,
  styled,
  Typography,
} from '@material-ui/core'
import LogoDivider from '../../../components/Layout/LogoDivider'
import SidebarImage from '../../../components/Layout/SidebarImage'
import { DADSS, NHTSA, ACTS, MDT } from '../../../components/Logos'
import Image from 'next/image'

const heroBg = '/assets/drivenToProtect/GreyWash3.webp'
import dtpLogo from '../../../public/assets/logos/dtpLogos/MD-logo.webp'
const MDimg1 = '/assets/drivenToProtect/maryland/dtpMary1.webp'
const MDimg2 = '/assets/drivenToProtect/maryland/dtpMary2.webp'
const MDimg3 = '/assets/drivenToProtect/maryland/dtpMary3.webp'
const MDimg4 = '/assets/drivenToProtect/maryland/dtpMary4.webp'

const DTPMaryland = () => {
  const description = `In August 2019, the state of Maryland formally announced the\
	launch of its partnership between the Automotive Coalition for\
	Traffic Safety’s DADSS Program and the Maryland Department of\
	Transportation’s Motor Vehicle Administration (MDOT MVA) to test\
	advanced prototype driver alcohol detection sensors installed in\
	state–owned vehicles.`

  return (
    <>
      <Head>
        <title>DADSS | DTP Maryland</title>
        <meta name='description' content={description} />
      </Head>
      <PageWrap>
        <HeroImage image={heroBg} darken>
          <Image src={dtpLogo} alt='DTP Logo' objectFit='contain' priority={true}/>
        </HeroImage>

        <Container>
          <Grid container justifyContent='space-between' spacing={2}>
            {/* header section */}
            <Grid item xs={12}>
              <Typography
                variant='h3'
                color='primary'
                align='center'
                gutterBottom
                style={{ marginTop: 32, color: dtpBlue }}>
                Maryland Joins The Partnership
              </Typography>
              <Divider />
            </Grid>

            {/* left content */}
            <Grid item md={9}>
              <Typography paragraph>
                In August 2019, the state of Maryland formally announced the
                launch of its partnership between the Automotive Coalition for
                Traffic Safety’s DADSS Program and the Maryland Department of
                Transportation’s Motor Vehicle Administration (MDOT MVA) to test
                advanced prototype driver alcohol detection sensors installed in
                state–owned vehicles.
              </Typography>
              <Typography paragraph>Read and see more here:</Typography>

              <Box mb={2}>
                <ul>
                  <li>
                    <a
                      href='https://wjla.com/news/local/maryland-pilot-program-impaired-driving'
                      target='_blank'
                      rel='noreferrer'>
                      ABC 7 News: Here’s how a new program is being implemented
                      to protect Maryland drivers
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://baltimore.cbslocal.com/2019/08/15/drunk-driving-deaths-new-alcohol-detection-system/'
                      target='_blank'
                      rel='noreferrer'>
                      CBS Baltimore: New Technology Hopes To Cut Down On Drunk
                      Driving Deaths By Nearly 60 Percent
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://wtop.com/maryland/2019/08/maryland-is-latest-testing-ground-for-tech-aimed-at-drunken-driving/'
                      target='_blank'
                      rel='noreferrer'>
                      WTOP: Maryland is latest testing ground for tech aimed at
                      drunken driving
                    </a>
                  </li>
                </ul>
              </Box>

              <Typography paragraph>
                Maryland’s existing traffic safety initiatives continuously put
                the health and safety of its residents first, making the state
                an ideal partner for the program to help test this life-saving
                technology. Driven to Protect is expanding on Maryland’s
                existing efforts by advancing technology that can prevent
                additional drunk driving crashes, injuries, and deaths on its
                roads.
              </Typography>
              <Typography paragraph>
                Through the Driven to Protect Initiative, MDOT MVA partnered
                with the national DADSS Program to help test this life-saving
                technology on Maryland roads. The DADSS Technical Team
                integrated the prototype DADSS breath alcohol detection sensors
                into seven vehicles. On-road tests are giving MDOT MVA staff
                first-hand experience with the DADSS technology as they drive
                these vehicles and are providing Program engineers and
                researchers with valuable information about how it performs in
                real-world operation. MDOT MVA will also provide demonstrations
                of the technology to the public around the state.
              </Typography>
              <Typography paragraph>
                Through Driven to Protect | Maryland, MDOT MVA continues its
                leadership in the state-level fight against drunk driving.
              </Typography>
            </Grid>

            {/* sidebar */}
            <Hidden smDown>
              <Grid item md={3}>
                <ContentBlock sticky sidebar>
                  <SidebarImage image={MDimg1} />
                  <SidebarImage image={MDimg2} />
                  <SidebarImage image={MDimg3} />
                  <SidebarImage image={MDimg4} />
                </ContentBlock>
              </Grid>
            </Hidden>

            {/* logo section */}
            <Grid item xs={12}>
              <LogoDivider>
                <ACTS />
                <DADSS />
                <NHTSA />
                <MDT />
              </LogoDivider>
            </Grid>
          </Grid>
        </Container>
      </PageWrap>
    </>
  )
}

export default DTPMaryland

const PageWrap = styled('main')({
  '& button': {
    color: dtpBlue,
  },
  '& a': {
    color: dtpBlue,
    cursor: 'pointer',
  },
})
