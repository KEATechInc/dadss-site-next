import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { DrivenToProtectWrapper } from '../../../styles/drivenToProtectStyles'
import {
  Content,
  ContentBlock,
  HeadBlock,
  Header1,
  Hyperlink,
  Break,
  Circle,
  Image,
} from '../../../styles/generalStyles'
import Link from 'next/link'
import Head from 'next/head'

const dtpLogo = '/assets/logos/dtpLogos/MD-logo.webp'
const acts = '/assets/logos/dtpLogos/acts-logo.webp'
const dadss = '/assets/logos/dtpLogos/dadss-logo.webp'
const dmv = '/assets/logos/dtpLogos/MVA-logo.webp'
const nhtsa = '/assets/logos/dtpLogos/nhtsa-logo.webp'
const MDimg1 = '/assets/drivenToProtect/maryland/dtpMary1.webp'
const MDimg2 = '/assets/drivenToProtect/maryland/dtpMary2.webp'
const MDimg3 = '/assets/drivenToProtect/maryland/dtpMary3.webp'
const MDimg4 = '/assets/drivenToProtect/maryland/dtpMary4.webp'

const DTPMaryland = () => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const description = `In August 2019, the state of Maryland formally announced the
	launch of its partnership between the Automotive Coalition for
	Traffic Safety’s DADSS Program and the Maryland Department of
	Transportation’s Motor Vehicle Administration (MDOT MVA) to test
	advanced prototype driver alcohol detection sensors installed in
	state–owned vehicles.`

  return (
    <>
      <Head>
        <title>DADSS | DTP Maryland</title>
        <meta name='description' content={description} />
      </Head>
      <DrivenToProtectWrapper className='Maryland'>
        <HeadBlock className='HeroImage'>
          <div className='LogoWrapper'>
            <img src={dtpLogo} alt='DTP Logo' />
          </div>
        </HeadBlock>
        <HeadBlock>
          <Header1 className='Blue'>Maryland Joins the Partnership</Header1>
          <Break>
            <hr />
            <Circle />
            <hr />
          </Break>
        </HeadBlock>
        <div className='DivideWrapper'>
          <ContentBlock className='Content'>
            <Content>
              In August 2019, the state of Maryland formally announced the
              launch of its partnership between the Automotive Coalition for
              Traffic Safety’s DADSS Program and the Maryland Department of
              Transportation’s Motor Vehicle Administration (MDOT MVA) to test
              advanced prototype driver alcohol detection sensors installed in
              state–owned vehicles.
            </Content>
            <Content>Read and see more here:</Content>
            <ul>
              <li>
                <Hyperlink
                  className='Blue'
                  href='https://wjla.com/news/local/maryland-pilot-program-impaired-driving'
                  target='_blank'
                  rel='noreferrer'>
                  ABC 7 News: Here’s how a new program is being implemented to
                  protect Maryland drivers
                </Hyperlink>
              </li>
              <li>
                <Hyperlink
                  className='Blue'
                  href='https://baltimore.cbslocal.com/2019/08/15/drunk-driving-deaths-new-alcohol-detection-system/'
                  target='_blank'
                  rel='noreferrer'>
                  CBS Baltimore: New Technology Hopes To Cut Down On Drunk
                  Driving Deaths By Nearly 60 Percent
                </Hyperlink>
              </li>
              <li>
                <Hyperlink
                  className='Blue'
                  href='https://wtop.com/maryland/2019/08/maryland-is-latest-testing-ground-for-tech-aimed-at-drunken-driving/'
                  target='_blank'
                  rel='noreferrer'>
                  WTOP: Maryland is latest testing ground for tech aimed at
                  drunken driving
                </Hyperlink>
              </li>
            </ul>
            <Content>
              Maryland’s existing traffic safety initiatives continuously put
              the health and safety of its residents first, making the state an
              ideal partner for the program to help test this life-saving
              technology. Driven to Protect is expanding on Maryland’s existing
              efforts by advancing technology that can prevent additional drunk
              driving crashes, injuries, and deaths on its roads.
            </Content>
            <Content>
              Through the Driven to Protect Initiative, MDOT MVA partnered with
              the national DADSS Program to help test this life-saving
              technology on Maryland roads. The DADSS Technical Team integrated
              the prototype DADSS breath alcohol detection sensors into seven
              vehicles. On-road tests are giving MDOT MVA staff first-hand
              experience with the DADSS technology as they drive these vehicles
              and are providing Program engineers and researchers with valuable
              information about how it performs in real-world operation. MDOT
              MVA will also provide demonstrations of the technology to the
              public around the state.
            </Content>
            <Content>
              Through Driven to Protect | Maryland, MDOT MVA continues its
              leadership in the state-level fight against drunk driving.
            </Content>
          </ContentBlock>
          <div className='ImgWrapper'>
            <Image src={MDimg1} alt='Driven to Protect' />
            <Image src={MDimg2} alt='Driven to Protect' />
            <Image src={MDimg3} alt='Driven to Protect' />
            <Image src={MDimg4} alt='Driven to Protect' />
          </div>
        </div>
        <Break>
          <hr />
          <Circle />
          <hr />
        </Break>
        <div className='LogoContainer'>
          <a
            href='https://www.dmv.virginia.gov/#/'
            target='_blank'
            rel='noreferrer'>
            <img src={dmv} alt='DMV Logo' />
          </a>
          <a href='https://www.nhtsa.gov/' target='_blank' rel='noreferrer'>
            <img src={nhtsa} alt='NHTSA Logo' />
          </a>
          <Link href='/'>
            <img src={dadss} alt='DADSS Logo' />
          </Link>
          <Link href='/driven-to-protect'>
            <img src={acts} alt='ACTS Logo' />
          </Link>
        </div>
        <Break>
          <hr />
          <Circle />
          <hr />
        </Break>
      </DrivenToProtectWrapper>
    </>
  )
}

export default DTPMaryland
