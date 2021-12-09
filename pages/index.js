import Head from 'next/head'
import { useRouter } from 'next/router'
import ContentBlock from '../components/Layout/ContentBlock'
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft'
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight'
import Link from 'next/link'
import Divider from '../components/Layout/Divider'
import { Typography, Button, Box, styled, Grid, Container } from '@mui/material'
import theme, { dadssGradient, bgGray, bgOrange } from '../src/theme'
import { NHTSA, ACTS } from '../components/Logos'
import ReactPlayer from 'react-player'

const Car = '/assets/logos/graphic-logo-car.svg'
const Family = '/assets/logos/graphic-family.svg'
const Breath = '/assets/logos/graphic-tech-breath.svg'
const Touch = '/assets/logos/graphic-tech-touch.svg'

const pr = '/assets/resources/Press Release_Dec 8 Event.pdf'

export default function Home() {
  const router = useRouter()
  const description =
    'Despite progress over the past three decades, drunk driving claims approximately 10,000 lives each year. The Driver Alcohol Detection System for Safety (DADSS) Program is researching a first-of-its-kind technology that holds the greatest potential we have seen to reverse this trend.'

  return (
    <>
      <Head>
        <title>Driver Alcohol Detection System for Safety (DADSS)</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        {/* video hero */}
        <div style={{ background: 'black' }}>
          <Container>
            <PlayerWrap>
              <Player
                url={'https://www.youtube.com/watch?v=a_BojOOFiKg'}
                width='100%'
                height='100%'
                controls={true}
              />
            </PlayerWrap>
          </Container>
        </div>

        {/* banner */}
        <ContentBlock background={dadssGradient} borderBottom={bgGray}>
          <Typography
            variant='h4'
            color='textSecondary'
            align='center'
            gutterBottom>
            Announcement
          </Typography>
          <Typography color='textSecondary' paragraph>
            {`The Driven to Protect | Virginia Initiative and Schneider, a
            premier provider of transportation, intermodal and logistics
            services, announced a collaboration that will make Schneider the
            first truckload carrier to install lifesaving technology developed
            through the Driver Alcohol Detection System for Safety (DADSS)
            Program.`}
          </Typography>
          <Link href='/webinars/december-event' passHref>
            <Button
              style={{ color: '#fff', fontWeight: 400 }}
              variant='contained'
              color='secondary'>
              Learn More
            </Button>
          </Link>
        </ContentBlock>

        {/* content start */}
        <ContentBlock>
          <Box mb={3}>
            <Typography variant='h5' align='center' paragraph>
              <ImQuotesLeft style={{ marginRight: theme.spacing(1) }} />
              Every year in the U.S., drunk driving claims approximately 10,000
              lives and costs approximately $194 billion.
              <ImQuotesRight style={{ marginLeft: theme.spacing(1) }} />
            </Typography>
          </Box>

          <Typography variant='h3' align='center' color='primary' gutterBottom>
            Our Work
          </Typography>
          <Divider />

          <Image src={Family} alt='DADSS Logo' height={170} width={170} />

          <div>
            <Typography paragraph>
              Despite progress over the past three decades, drunk driving claims
              approximately 10,000 lives each year. The Driver Alcohol Detection
              System for Safety (DADSS) Program is researching a
              first-of-its-kind technology that holds the greatest potential we
              have seen to reverse this trend. The technology will automatically
              detect when a driver is intoxicated with a blood alcohol
              concentration (BAC) at or above 0.08% — the legal limit in all 50
              states except Utah — and prevent the car from moving. Once it has
              met rigorous performance standards, it will be voluntarily offered
              as a safety option in new vehicles — like automatic braking, lane
              departure warning and other advanced driver assist vehicle
              technologies.
            </Typography>
            <Typography paragraph>
              Read our <Link href='/faq'>Frequently Asked Questions</Link> for
              more information on the development process and how the technology
              works.
            </Typography>
          </div>

          <Box mt={3} />
          {/* about */}
          <Typography variant='h3' align='center' color='primary' gutterBottom>
            About DADSS
          </Typography>
          <Divider />

          <Image src={Car} alt='DADSS Logo' height={120} width={310} />

          <Typography paragraph>
            The Driver Alcohol Detection System for Safety (DADSS) Research
            Program brings together the{' '}
            <b>Automotive Coalition for Traffic Safety (ACTS)</b>, which
            represents the world’s leading automakers, and the{' '}
            <b>National Highway Traffic Safety Administration (NHTSA)</b> in one
            of the most important government and private sector partnerships in
            transportation history. Public-private partnerships like DADSS have
            led to innovations that enhance our everyday lives, such as the
            Internet, GPS and the microchip.
          </Typography>
          <Typography paragraph>
            Congress and safety advocates nationwide are supporting the effort,
            making DADSS part of a multi-faceted national commitment to reduce
            and help eliminate drunk driving. The research and testing is being
            overseen by a team of independent engineers and scientists, and also
            being tested under real-world operating conditions before it is made
            available as a consumer option.
          </Typography>

          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
            <ACTS />
            <NHTSA />
          </div>

          <Box mt={2}>
            <Button
              color='primary'
              variant='contained'
              onClick={() => router.push('/program-overview')}>
              Program Overview
            </Button>
          </Box>
        </ContentBlock>

        {/* technologies section */}
        {/* DADSS tech */}
        <ContentBlock
          background={bgGray}
          borderTop={bgOrange}
          borderBottom={bgOrange}
          header={`Technologies We're Exploring`}
          headerColor={'#fff'}
          fontColor={'#fff'}
          divider
          dividerColor={bgOrange}>
          <Typography paragraph>
            The goal of the DADSS Research Program is to advance the state of
            alcohol detection technology by developing a system that is fast,
            accurate, reliable and affordable — all without affecting normal
            driving behavior. The program is exploring two different
            technologies for installation in new vehicles: a breath-based system
            and a touch-based system.
          </Typography>

          <Grid container spacing={4}>
            <SubContent item xs={12} sm={6}>
              <Image
                src={Breath}
                alt='Breath System'
                height={150}
                width={115}
              />
              <Typography variant='h4' gutterBottom>
                Breath System
              </Typography>
              <div style={{ height: '100%' }}>
                <Typography paragraph>
                  {`This system measures alcohol as a driver breathes normally, when
                in the driver's seat. It will be designed to take instantaneous
                readings as the driver breathes normally and to accurately and
                reliably distinguish between the driver’s breath and that of any
                passengers.`}
                </Typography>
              </div>
              <Button
                color='primary'
                variant='contained'
                onClick={() => router.push('/breath-technology')}>
                Overview
              </Button>
            </SubContent>

            <SubContent item xs={12} sm={6}>
              <Image src={Touch} alt='Touch System' height={150} width={115} />
              <Typography variant='h4' gutterBottom>
                Touch System
              </Typography>
              <div style={{ height: '100%' }}>
                <Typography paragraph>
                  This technology measures blood alcohol levels under the skin’s
                  surface by shining an infrared-light through the fingertip of
                  the driver. It will be integrated into current vehicle
                  controls, such as the start button or steering wheel, and take
                  multiple, accurate readings.
                </Typography>
              </div>

              <Button
                color='primary'
                variant='contained'
                onClick={() => router.push('/touch-technology')}>
                Overview
              </Button>
            </SubContent>
          </Grid>
        </ContentBlock>

        {/* what's next section */}
        <ContentBlock header={`Program History & Timeline`} divider>
          <Typography paragraph>
            The DADSS Program began in 2008 and was focused on research and
            creation of proof-of-concept prototypes to determine which
            technological approaches were most promising for vehicle
            integration. After extensive research, it was determined that the
            breath system and touch system were most viable.
          </Typography>
          <Typography paragraph>
            Since that time, the Program has focused on ensuring the technology
            meets strict performance specifications related to accuracy,
            precision and reliability, so sober drivers are not inconvenienced,
            and so drunk drivers are never allowed to operate the vehicle.
          </Typography>
          <Typography paragraph>
            In 2018, the Commonwealth of Virginia announced the{' '}
            <Link href='/driven-to-protect/virginia'>
              first trial deployment
            </Link>{' '}
            with James River Transportation (JRT) to conduct in-vehicle, on-road
            test trials of the technology with sober drivers in naturalistic
            settings. This initiative, called Driven to Protect, was expanded to
            Maryland in 2019. That same year, the Program expanded on-road
            testing to include controlled, in-vehicle tests with drinking
            passengers, to determine how the sensors respond to real-world
            conditions. Those tests continue today.
          </Typography>
          <Typography paragraph>
            In 2021, the Program announced the{' '}
            <a
              href='https://www.actsautosafety.org/announcementpage?fbclid=IwAR1wAvDwsa5fIeB9RnkWAWfKIwCd7ykbCD5rwiaXThy-cpSnNcqC3Pzxm9I'
              target='_blank'
              rel='noreferrer'>
              first-generation system
            </a>{' '}
            equipped with the breath technology will be made available for open
            licensing in fleet vehicles for the first time ever. ACTS will begin
            licensing the technology to interested parties and a product
            equipped with the breath technology will be made available in late
            2021 to any existing fleet or company that wants to outfit it into
            their vehicles – whether it be transportation vehicles, government
            fleets, rental cars, transportation vehicles, trucking companies,
            etc. This system is designed for fleet operators implementing a
            zero-tolerance alcohol policy for their drivers.
          </Typography>
          <Typography paragraph>
            Today, teams of engineers, chemists and data scientists are working
            to reduce the size of the sensors so they are small enough to fit
            into passenger vehicles, can withstand harsh environmental
            conditions, do not require extensive calibration and can last the
            entire lifetime of a vehicle. Previous transportation safety
            innovations like airbags have taken a minimum of 20 years to be
            tested and approved for the public’s use, and the DADSS Program is
            on track to be completed in less time.
          </Typography>
          <Typography paragraph>
            Also in 2021, announced the{' '}
            <a href={pr} target='_blank' rel='noreferrer'>
              largest trial deployment
            </a>{' '}
            of DADSS technology to date, through a new trial deployment with
            Schneider, the first truckload carrier to collaborate with the
            Initiative. The pilot will help generate hundreds of thousands of
            real-world operating miles needed to commercialize fully passive
            vehicle-integrated breath technology — marking a new milestone
            toward the widespread deployment of the DADSS technology.
          </Typography>
          <Button
            color='primary'
            variant='contained'
            onClick={() => router.push('/news')}>
            More News & Updates
          </Button>
        </ContentBlock>
      </main>
    </>
  )
}

const Image = styled('img')({
  margin: theme.spacing(1),
  marginBottom: theme.spacing(2),
})
const SubContent = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',
})
const PlayerWrap = styled('div')({
  position: 'relative',
  paddingTop: '56.25%',
  width: '100%',
  height: '100%',
})
const Player = styled(ReactPlayer)({
  position: 'absolute',
  top: 0,
  left: 0,
})
