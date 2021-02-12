import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  ContentBlock,
  Content,
  Header1,
  Header2,
  Header3,
  Button,
  Break,
  Circle,
  Hyperlink,
} from '../../styles/generalStyles'
import { AboutSection, Quote } from '../../styles/homeStyles'
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft'
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight'

const Car = '/assets/logos/graphic-logo-car.svg'
const Family = '/assets/logos/graphic-family.svg'
const Breath = '/assets/logos/graphic-tech-breath.svg'
const Touch = '/assets/logos/graphic-tech-touch.svg'
const ACTS = '/assets/logos/supporters/dadss-acts.webp'
const NHTSA = '/assets/logos/supporters/dadss-nhtsa.webp'

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
      <AboutSection>
        <section className='HeroWrapper'>
          <div className='SectionWrapper'>
            <ContentBlock className='QuoteVideoWrapper'>
              <div className='VideoWrapper'>
                <iframe
                  title='Driver Alcohol Detection System for Safety'
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/a_BojOOFiKg'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
              </div>
            </ContentBlock>
          </div>
          <ContentBlock className='Discovery Gray'>
            <Header2 className='White'>Discovery Hub</Header2>
            <Content className='White'>
              Visit the Driven to Protect Discovery Hub to learn about the
              dangers of alcohol–impaired driving and the innovative technology
              the DADSS Program is developing to make our roads and highways
              safer.
            </Content>
            <a
              href='https://www.discoveryhub.actsautosafety.org/'
              target='_blank'
              rel='noreferrer'>
              <Button>Visit the Hub</Button>
            </a>
          </ContentBlock>
        </section>
        <ContentBlock className='Work'>
          <Quote>
            <p>
              <ImQuotesLeft />
              Every year in the U.S., drunk driving claims approximately
            </p>
            <p>
              10,000 lives and costs approximately $194 billion.
              <ImQuotesRight />
            </p>
          </Quote>
          <Header1>Our Work</Header1>
          <Break>
            <hr /> <Circle /> <hr />
          </Break>
          <img
            src={Family}
            alt='DADSS Logo'
            className='ContentLogo Family'
            loading='lazy'
          />
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
            Watch our{' '}
            <Hyperlink
              target='_blank'
              rel='noreferrer'
              href='https://www.youtube.com/watch?v=Wk_DS91Y-mo'>
              August 2020 "Ask The Experts" presentation
            </Hyperlink>{' '}
            for more on the technology development process.
          </Content>
        </ContentBlock>
        <ContentBlock className='DADSSBlock'>
          <Header2>About DADSS</Header2>
          <Break>
            <hr />
          </Break>
          <img
            src={Car}
            alt='DADSS Logo'
            className='ContentLogo DADSS'
            loading='lazy'
          />
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
          <div className='LogoWrapper'>
            <img
              src={ACTS}
              alt='ACTS Logo'
              className='ContentLogo ACTS'
              loading='lazy'
              onClick={() => window.open('/driven-to-protect', '_blank')}
            />
            <img
              src={NHTSA}
              alt='NHTSA Logo'
              className='ContentLogo NHTSA'
              onClick={() => window.open('https://www.nhtsa.gov/', '_blank')}
              loading='lazy'
            />
          </div>
          <Button onClick={() => router.push('/program-overview')}>
            Program Overview
          </Button>
        </ContentBlock>
        <ContentBlock className='Orange Tech'>
          <Header2 className='Gray'>Technologies We're Exploring</Header2>
          <Break>
            <hr className='White' />
            <Circle className='White' />
            <hr className='White' />
          </Break>
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
                loading='lazy'
              />
              <Header3 className='Gray'>Breath-Based System</Header3>
              <Content>
                This system measures alcohol as a driver breathes normally, when
                in the driver's seat. It will be designed to take instantaneous
                readings as the driver breathes normally and to accurately and
                reliably distinguish between the driver’s breath and that of any
                passengers.
              </Content>
              <Button
                className='White'
                onClick={() => router.push('/breath-based-tech')}>
                Overview
              </Button>
            </div>
            <div className='SubWrapper'>
              <img
                src={Touch}
                alt='Touch System'
                className='ContentLogo Touch'
                loading='lazy'
              />
              <Header3 className='Gray'>Touch-Based System</Header3>
              <Content>
                This technology measures blood alcohol levels under the skin’s
                surface by shining an infrared-light through the fingertip of
                the driver. It will be integrated into current vehicle controls,
                such as the start button or steering wheel, and take multiple,
                accurate readings.
              </Content>
              <Button
                className='White'
                onClick={() => router.push('/touch-based-tech')}>
                Overview
              </Button>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock className='Gray Next'>
          <Header2 className='White'>What's Next?</Header2>
          <Break>
            <hr className='White' />
            <Circle className='White' />
            <hr className='White' />
          </Break>
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
          <Button onClick={() => router.push('/news-updates')}>
            More News & Updates
          </Button>
        </ContentBlock>
      </AboutSection>
    </>
  )
}
