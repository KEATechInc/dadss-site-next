import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import Divider from '../../../components/Layout/Divider'
import HeroImage from '../../../components/Layout/HeroImage'
import ContentBlock from '../../../components/Layout/ContentBlock'
import { dtpBlue } from '../../../src/theme'
import { Box, Container, Grid, Hidden, styled, Typography } from '@mui/material'
import Video from '../../../components/Layout/Video'
import LogoDivider from '../../../components/Layout/LogoDivider'
import { ACTS, NHTSA, DADSS, VADMV } from '../../../components/Logos'
import BlueButton from '../../../components/Layout/BlueButton'
import Image from 'next/image'

import heroBg from '../../../public/assets/drivenToProtect/GreyWash1.webp'
import dtpLogo from '../../../public/assets/logos/dtpLogos/VA-logo.webp'
const PDF = '/assets/drivenToProtect/pdf/Driven-to-Protect-Overview.pdf'
const facts = '/assets/resources/pdf/Driven to Protect_The Facts.pdf'
const pr = '/assets/resources/pdf/Press Release_Dec 8 Event.pdf'

const DTPVirginia = () => {
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
          <Image
            src={dtpLogo}
            alt='DTP Logo'
            objectFit='contain'
            priority={true}
          />
        </HeroImage>

        <Container>
          <Grid container justifyContent='space-between' spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant='h3'
                color='primary'
                align='center'
                gutterBottom
                style={{ marginTop: 48, paddingBottom: 16, color: dtpBlue }}>
                Virginia: The First State Partnership
              </Typography>
              <Divider />
            </Grid>

            <Grid item md={8}>
              <Typography paragraph>
                Driven to Protect | Virginia is an initiative of the DADSS
                Program. Individual state governments have partnered with Driven
                to Protect to help develop technology to eliminate drunk driving
                and save lives.
              </Typography>
              <Typography paragraph>
                The{' '}
                <Link href='/'>
                  Driver Alcohol Detection System for Safety (DADSS)
                </Link>{' '}
                Program, a public-private partnership between the{' '}
                <a
                  href='https://www.actsautosafety.org/'
                  target='_blank'
                  rel='norefferer'>
                  Automotive Coalition for Traffic Safety (ACTS)
                </a>{' '}
                and the{' '}
                <a
                  href='https://www.nhtsa.gov/'
                  target='_blank'
                  rel='norefferer'>
                  National Highway Traffic Safety Administration (NHTSA)
                </a>
                {`, is developing advanced vehicle safety technology that can
                automatically detect when a driver is intoxicated with a blood
                alcohol concentration at or above 0.08% — the legal limit in all
                50 states except Utah (0.05%) — and prevent the car from moving.
                Virginia became the first state to collaborate with the DADSS
                Program to support the development and deployment of the DADSS
                technology. The collaboration — the Driven to Protect | Virginia
                Initiative — is an example of the technological innovation
                happening in Virginia.`}
              </Typography>

              <Typography
                variant='h4'
                gutterBottom
                align='center'
                style={{ color: dtpBlue }}>
                Real World Testing
              </Typography>
              <Divider size='small' />
              <Typography paragraph>
                {`The DADSS Program is advancing the state of alcohol detection
                technology by developing a system that is fast, accurate,
                reliable, and affordable — all without affecting normal driving
                behavior.`}
              </Typography>
              <Typography paragraph>
                {`In 2018, Governor Northam and the Virginia DMV announced a
                collaboration with the DADSS Program and James River
                Transportation (JRT) to conduct in-vehicle, on-road test trials.
                Technology integrators installed prototypes of the breath
                sensors into vehicles in the JRT commercial fleet. The data and
                feedback collected from the prototype sensors, as well as from
                the drivers themselves, have been invaluable to improve the
                technology as it is prepared for widespread commercialization.
                JRT vehicles have driven over 77,700 miles with the sensors
                installed, run the sensors for more than 15,000 hours, and
                collected more than 98,400 breath samples from participating
                drivers.`}
              </Typography>
              <Typography paragraph>
                {`In December 2021, the Driven to Protect | Virginia Initiative
                announced a collaboration with Schneider, the first truckload
                carrier to work with the Initiative — marking a new milestone
                toward widespread deployment of in-vehicle alcohol detection
                technology. This deployment will help refine the technology by
                increasing the stress that the system is put under on the road,
                exponentially increasing the number of miles driven, and
                exposing the system to new drivers and a wider range of
                environmental conditions. The effort builds upon Driven to
                Protect | Virginia’s ongoing collaboration with JRT.`}
              </Typography>

              <Box mb={2}>
                <Video
                  videoUrl={
                    'https://www.youtube.com/watch?v=lNb3L-dWXjg&feature=emb_title'
                  }
                />
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
                {`In 2020, Virginia reported 6,624 alcohol-related crashes, 272
                alcohol-related fatalities, and 3,986 alcohol-related injuries
                on its roadways. Through Driven to Protect, Virginia continues
                to put the health and safety of its residents first by educating
                the next generation about responsible driving behavior and by
                advancing technology that can prevent additional drunk driving
                crashes, injuries, and deaths on its roads.`}
              </Typography>

              <ul>
                <li>
                  <a href={PDF} target='_blank' rel='noreferrer'>
                    Download overview about Virginia’s Driven to Protect
                    |Virginia Initiative
                  </a>
                </li>
                <li>
                  <a href={facts} target='_blank' rel='noreferrer'>
                    Get the facts about drunk driving – and Driven to Protect |
                    Virginia
                  </a>
                </li>
                <li>
                  <Link href='/discovery-hub'>
                    Explore the free educational resources available on the
                    Discovery Hub
                  </Link>
                </li>
                <li>
                  <Link href='/driven-to-protect/virginia/events-va'>
                    View past and upcoming events in Virginia, showcasing the
                    technology
                  </Link>
                </li>
                <li>
                  <Link href='/resources'>
                    Find fact sheets, videos and other resources
                  </Link>
                </li>
              </ul>

              <Typography
                variant='h4'
                gutterBottom
                align='center'
                style={{ color: dtpBlue }}>
                Discovery Hub
              </Typography>
              <Divider size='small' />
              <Typography paragraph>
                {`In collaboration with the Virginia Department of Education and
                as part of the Driven to Protect | Virginia Initiative, the
                Initiative is developing and distributing a series of STEM
                lessons that put students in the shoes of the engineers and data
                analysts working on the DADSS technology. Virginia’s leadership
                in technology and innovation begins in our schools, and by
                showing students the practical application of their lessons, we
                can inspire a new generation to build technology that saves
                lives.`}
              </Typography>
              <Typography paragraph>
                {`The Initiative has also developed virtual learning modules and
                video content that show how the technology works, how alcohol
                affects the body, statistics and laws about impaired driving in
                Virginia, and more. All of these resources are available to
                educators through the Virtual Virginia learning portal – earning
                them continuing education credits – and available to the general
                public at the Discovery Hub.`}
              </Typography>
            </Grid>

            {/* sidebar */}
            <Hidden mdDown>
              <Grid item md={4}>
                <ContentBlock sticky sidebar>
                  <Typography
                    variant='h5'
                    align='center'
                    gutterBottom
                    style={{ color: dtpBlue }}>
                    Schneider Joins Driven to Protect | Virginia
                  </Typography>
                  <Divider size='small' />
                  <Typography paragraph>
                    {`This collaboration, announced in December 2021, will make
                      Schneider the first truckload carrier to conduct a trial
                      deployment of the lifesaving DADSS technology and will
                      collect data on hundreds of thousands of real-world
                      operating miles.`}
                  </Typography>
                  <BlueButton
                    sx={{ mb: 3 }}
                    onClick={() => router.push(pr)}
                    fullWidth
                    variant='outlined'
                    color='secondary'>
                    Learn More <AiFillCaretRight />
                  </BlueButton>

                  <Typography
                    variant='h5'
                    align='center'
                    gutterBottom
                    style={{ color: dtpBlue }}>
                    Explore The Discovery Hub
                  </Typography>
                  <Divider size='small' />
                  <Typography paragraph>
                    {`In the Fall of 2020, we launched the Discovery Hub,
                      offering free videos and educational resources — including
                      a series of STEM-inspired lessons — about alcohol-impaired
                      driving and the ways the DADSS technology can prevent it.`}
                  </Typography>

                  <Link href='/discovery-hub'>
                    <BlueButton sx={{ mb: 3 }} fullWidth>
                      Learn More <AiFillCaretRight />
                    </BlueButton>
                  </Link>

                  <Typography
                    variant='h5'
                    align='center'
                    gutterBottom
                    style={{ color: dtpBlue }}>
                    Follow Driven to Protect | Virginia on Twitter
                  </Typography>
                  <Divider size='small' />
                  <Typography paragraph>
                    {`Keep up with the latest developments on the 
                      partnership between DADSS and the Virginia DMV`}
                  </Typography>

                  <BlueButton
                    onClick={() =>
                      router.push('https://twitter.com/DrvnToProtectVA')
                    }
                    fullWidth>
                    Learn More <AiFillCaretRight />
                  </BlueButton>
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
  '& a': {
    color: dtpBlue,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
})
