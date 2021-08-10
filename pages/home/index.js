import Head from 'next/head'
import { useRouter } from 'next/router'
import ContentBlock from '../../components/Layout/ContentBlock'
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft'
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight'
import Link from 'next/link'
import Divider from '../../components/Layout/Divider'
import { Typography, Button, Box, styled } from '@material-ui/core'
import theme, { dadssGradient, bgGray } from '../../src/theme'
import { NHTSA, ACTS } from '../../components/Logos'
import HomeHero from './HomeHero'
import Technologies from './Technologies'
import Next from './Next'

const Car = '/assets/logos/graphic-logo-car.svg'
const Family = '/assets/logos/graphic-family.svg'

const url = `https://www.youtube.com/watch?v=a_BojOOFiKg`

export default function Home() {
  const router = useRouter()
  const description =
    'Despite progress over the past three decades, drunk driving claims approximately 10,000 lives each year. The Driver Alcohol Detection System for Safety (DADSS) Program is researching a first-of-its-kind technology that holds the greatest potential we have seen to reverse this trend.'

  return (
    <>
      <Head>
        <title>Driver Alcohol Detection System for Safety (DADSS)</title>
        <meta name='description' content={description} />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* video hero */}
        <HomeHero videoUrl={url} />

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
            The Automotive Coalition for Traffic Safety has announced the first
            product equipped with DADSS Technology will be coming out of the lab
            and into commercial vehicles later this year, and the technology is
            now available for open licensing in commercial vehicles.
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            href='https://www.actsautosafety.org/announcementpage?fbclid=IwAR1wAvDwsa5fIeB9RnkWAWfKIwCd7ykbCD5rwiaXThy-cpSnNcqC3Pzxm9I'
            target='_blank'
            rel='noopener noreferrer'>
            Learn More
          </Button>
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
            The Driver Alcohol Detection System for Safety (DADSS) research
            program brings together the{' '}
            <b>Automotive Coalition for Traffic Safety (ACTS)</b>, which
            represents the world’s leading automakers, and the{' '}
            <b>National Highway Traffic Safety Administration (NHTSA) </b>
            in one of the most important government and private sector
            partnerships in recent years. Public-private partnerships like DADSS
            have led to innovations that enhance our everyday lives, such as the
            internet, GPS and the microchip.
          </Typography>
          <Typography paragraph>
            Congress and safety advocates nationwide are supporting the effort,
            making DADSS part of a multi-faceted national commitment to reduce
            and help eliminate drunk driving. The research and testing is being
            overseen by a team of independent engineers and scientists, and will
            be further tested under real-world operating conditions before it is
            made available as a consumer option.
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
        <Technologies />

        {/* what's next section */}
        <Next />
      </main>
    </>
  )
}

const Image = styled('img')({
  margin: theme.spacing(1),
  marginBottom: theme.spacing(2),
})
