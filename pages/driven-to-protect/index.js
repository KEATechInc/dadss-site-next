import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { useRouter } from 'next/router'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import Head from 'next/head'
import Link from 'next/link'
import Thumb from '../../components/Layout/Thumb'
import ContentBlock from '../../components/ContentBlock'
import Divider from '../../components/Divider'
import { Grid, Typography, Box, Button } from '@material-ui/core'
import  { dtpBlue } from '../../src/theme'
import HeroImage from '../../components/Layout/HeroImage'

const heroBg = '/assets/drivenToProtect/GreyWash2.webp'
const vaBg = '/assets/drivenToProtect/Blue-Image2.webp'
const mdBg = '/assets/drivenToProtect/Blue-Image1.webp'
const dtpLogo = '/assets/logos/dtpLogos/DTP-logo.webp'
const description = `Driven to Protect is a public-private partnership between the\
	Driver Alcohol Detection System for Safety (DADSS) Program\
	and individual state governments that is helping to develop\
	technology to eliminate drunk driving and save lives.`

const DrivenToProtect = () => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])
  const router = useRouter()

  return (
    <>
      <Head>
        <title>DADSS | Driven To Protect</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <HeroImage image={heroBg}>
          <div>
            <img
              src={dtpLogo}
              alt='DTP Logo'
              width={850}
              height={110}
              objectFit='contain'
            />
          </div>
        </HeroImage>

        <ContentBlock
          header='Driven To Protect'
          headerColor={dtpBlue}
          linkColor={dtpBlue}>
          <Divider />

          <Typography paragraph>
            Driven to Protect is a public-private partnership between the{' '}
            <a href='/' target='_blank' rel='noreferrer'>
              Driver Alcohol Detection System for Safety (DADSS) Program
            </a>{' '}
            and individual state governments that is helping to develop
            technology to eliminate drunk driving and save lives.
          </Typography>
          <Typography paragraph>
            The vehicle-integrated alcohol detection technology will determine
            when a driver is impaired with a blood alcohol concentration at or
            above 0.08% and prevent the car from moving. The breakthrough
            technology will be fast, accurate, reliable, and affordable.
          </Typography>
          <Typography paragraph>
            <a
              href='https://www.youtube.com/watch?v=vddF6HjKrZY'
              target='_blank'
              rel='noreferrer'>
              Virginia was the first state to join DADSS
            </a>{' '}
            and help launch the Driven to Protect Initiative, followed by
            Maryland in 2019. Learn more about each state’s role in the fight
            against drunk driving below and visit the{' '}
            <Link href='/discovery-hub'>Driven to Protect Discovery Hub</Link>{' '}
            for free educational resources.
          </Typography>

          <Box mt={2}>
            <Grid container spacing={3}>
              {/* virginia */}
              <Grid item sm={6}>
                <Thumb
                  img={vaBg}
                  url={'/driven-to-protect/virginia'}
                  label={'Virginia'}
                />
                <Typography variant='body2' paragraph>
                  Learn how Virginia is testing the alcohol breath sensors in
                  partnership with James River Transportation and introducing
                  the technology to its citizens.
                </Typography>

                <Button
                  variant='outlined'
                  color='secondary'
                  fullWidth
                  onClick={() => router.push('/driven-to-protect/virginia')}>
                  Learn more <AiFillCaretRight />
                </Button>
              </Grid>

              {/* maryland */}
              <Grid item sm={6}>
                <Thumb
                  img={mdBg}
                  url={'/driven-to-protect/maryland'}
                  label={'Maryland'}
                />

                <Typography variant='body2' paragraph>
                  Learn how Maryland is putting the technology on the road by
                  outfitting seven fleet vehicles with the alcohol breath
                  sensors to gather real-world data.
                </Typography>

                <Button
                  variant='outlined'
                  color='secondary'
                  fullWidth
                  onClick={() => router.push('/driven-to-protect/maryland')}>
                  Learn more <AiFillCaretRight />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </ContentBlock>
      </main>
    </>
  )
}

export default DrivenToProtect
