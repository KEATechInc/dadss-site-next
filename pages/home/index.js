import Head from 'next/head'
import { useRouter } from 'next/router'
import ContentBlock from '../../components/ContentBlock'
import {
  Content,
  Header1,
  Header2,
  Header3,
  Hyperlink,
  PlayerContainer,
  ContainerH,
  bgGray,
} from '../../styles/generalStyles'
import { AboutSection, Quote } from '../../styles/homeStyles'
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft'
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight'
import Link from 'next/link'
import Divider from '../../components/Divider'
import { Typography, Button } from '@material-ui/core'
import theme, { dadssGradient } from '../../src/theme'
import HomeHero from '../../components/HomeHero'

const Car = '/assets/logos/graphic-logo-car.svg'
const Family = '/assets/logos/graphic-family.svg'
const Breath = '/assets/logos/graphic-tech-breath.svg'
const Touch = '/assets/logos/graphic-tech-touch.svg'
const ACTS = '/assets/logos/dadss-acts.webp'
const NHTSA = '/assets/logos/dadss-nhtsa.webp'

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
        <HomeHero videoUrl={url} />

        <ContentBlock background={dadssGradient} border={bgGray}>
          <Typography variant='h4' color='textSecondary' gutterBottom>
            Announcement
          </Typography>
          <Typography color='textSecondary' paragraph>
            The Automotive Coalition for Traffic Safety has announced the first
            product equipped with DADSS Technology will be coming out of the lab
            and into commercial vehicles later this year, and the technology is
            now available for open-source licensing in commercial vehicles.
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

        <ContentBlock className='Work'>
          <Quote>
            <p>
              <ImQuotesLeft />
              Every year in the U.S., drunk driving claims approximately 10,000
              lives and costs approximately $194 billion.
              <ImQuotesRight />
            </p>
          </Quote>

          <Header1>Our Work</Header1>
          <Divider />

          <div className='ImageWrapper'>
            <img
              src={Family}
              alt='DADSS Logo'
              className='ContentLogo Family'
              height={170}
              width={170}
              priority={true}
            />
          </div>

          <Content>
            Despite progress over the past three decades, drunk driving claims
            approximately 10,000 lives each year. The Driver Alcohol Detection
            System for Safety (DADSS) Program is researching a first-of-its-kind
            technology that holds the greatest potential we have seen to reverse
            this trend. The technology will automatically detect when a driver
            is intoxicated with a blood alcohol concentration (BAC) at or above
            0.08% — the legal limit in all 50 states except Utah — and prevent
            the car from moving. Once it has met rigorous performance standards,
            it will be voluntarily offered as a safety option in new vehicles —
            like automatic braking, lane departure warning and other advanced
            driver assist vehicle technologies.
          </Content>
          <Content>
            Read our{' '}
            <Hyperlink href='/faq'>Frequently Asked Questions</Hyperlink> for
            more information on the development process and how the technology
            works.
          </Content>
        </ContentBlock>
        <ContentBlock className='DADSSBlock'>
          <Header2>About DADSS</Header2>
          <Divider />
          <div className='ImageWrapper'>
            <img
              src={Car}
              alt='DADSS Logo'
              className='ContentLogo DADSS'
              height={120}
              width={310}
            />
          </div>

          <Content>
            The Driver Alcohol Detection System for Safety (DADSS) research
            program brings together the{' '}
            <b>Automotive Coalition for Traffic Safety (ACTS)</b>, which
            represents the world’s leading automakers, and the{' '}
            <b>National Highway Traffic Safety Administration (NHTSA) </b>
            in one of the most important government and private sector
            partnerships in recent years. Public-private partnerships like DADSS
            have led to innovations that enhance our everyday lives, such as the
            internet, GPS and the microchip.
          </Content>
          <Content>
            Congress and safety advocates nationwide are supporting the effort,
            making DADSS part of a multi-faceted national commitment to reduce
            and help eliminate drunk driving. The research and testing is being
            overseen by a team of independent engineers and scientists, and will
            be further tested under real-world operating conditions before it is
            made available as a consumer option.
          </Content>
          <div className='LogoContainer'>
            <a href='https://www.nhtsa.gov/' target='_blank' rel='noreferrer'>
              <div className='LogoWrapper'>
                <img
                  src={NHTSA}
                  height={70}
                  width={245}
                  objectFit='contain'
                  alt='NHTSA Logo'
                />
              </div>
            </a>
            <div className='LogoWrapper'>
              <Link href='/driven-to-protect'>
                <img
                  src={ACTS}
                  height={70}
                  width={150}
                  objectFit='contain'
                  alt='ACTS Logo'
                />
              </Link>
            </div>
          </div>
          <Button onClick={() => router.push('/program-overview')}>
            Program Overview
          </Button>
        </ContentBlock>

        <ContentBlock className='Orange Tech'>
          <Header2 className='Gray'>Technologies We're Exploring</Header2>

          <Divider color='white' />

          <Content>
            The goal of the DADSS Research Program is to advance the state of
            alcohol detection technology by developing a system that is fast,
            accurate, reliable and affordable — all without affecting normal
            driving behavior. The program is exploring two different
            technologies for installation in new vehicles: a breath-based system
            and a touch-based system.
          </Content>
          <div className='BlockWrapper'>
            <div className='SubWrapper'>
              <img
                src={Breath}
                alt='Breath System'
                className='ContentLogo Breath'
                height={150}
                width={115}
              />
              <Header3 className='Gray'>Breath System</Header3>
              <Content>
                This system measures alcohol as a driver breathes normally, when
                in the driver's seat. It will be designed to take instantaneous
                readings as the driver breathes normally and to accurately and
                reliably distinguish between the driver’s breath and that of any
                passengers.
              </Content>
              <Button
                className='White'
                onClick={() => router.push('/breath-technology')}>
                Overview
              </Button>
            </div>
            <div className='SubWrapper'>
              <img
                src={Touch}
                alt='Touch System'
                className='ContentLogo Touch'
                height={150}
                width={115}
              />
              <Header3 className='Gray'>Touch System</Header3>
              <Content>
                This technology measures blood alcohol levels under the skin’s
                surface by shining an infrared-light through the fingertip of
                the driver. It will be integrated into current vehicle controls,
                such as the start button or steering wheel, and take multiple,
                accurate readings.
              </Content>
              <Button
                className='White'
                onClick={() => router.push('/touch-technology')}>
                Overview
              </Button>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock className='Gray Next'>
          <Header2 className='White'>What's Next?</Header2>
          <Divider />

          <Content className='White'>
            When the Program began in 2008, DADSS focused on research and
            creation of proof-of-concept laboratory prototypes to determine
            which technologies were most promising for vehicle integration.
          </Content>
          <Content className='White'>
            In 2013, ACTS and NHTSA extended their agreement to further develop
            and test the breath-based and touch-based prototypes to reduce the
            size and ensure they meet strict performance standards related to
            speed, accuracy, precision and reliability.
          </Content>
          <Content className='White'>
            As part of the ongoing research, the prototypes will be integrated
            into vehicles for a series of field tests, which will allow
            engineers to observe driver behavior in natural settings and
            thoroughly test the systems in real-world scenarios.
          </Content>
          <Content className='White'>
            It will take time for this pioneering technology to be available
            commercially, but developing a system that is seamless, accurate and
            reliable is the first step and a top priority.
          </Content>
          <Button onClick={() => router.push('/news')}>
            More News & Updates
          </Button>
        </ContentBlock>
      </main>
    </>
  )
}
