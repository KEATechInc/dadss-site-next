import { useEffect } from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import {
  ContentBlock,
  Content,
  HeadBlock,
  Header1,
  Header3,
  Hyperlink,
  Break,
  Circle,
  bgGray,
  fontGray,
  Sidebar,
} from '../../styles/generalStyles'
import Head from 'next/head'
import Link from 'next/link'

const acts = '/assets/logos/dtpLogos/acts-logo.webp'
const dadss = '/assets/logos/dtpLogos/dadss-logo.webp'
const nhtsa = '/assets/logos/dtpLogos/nhtsa-logo.webp'
const Guidelines = '/assets/fleets/pdf/Guidelines-for-State-DADSS-Projects.pdf'
const Hero = '/assets/fleets/images/DADSS.webp'
const Art1 = '/assets/fleets/images/Artboard-1.webp'
const Art2 = '/assets/fleets/images/Artboard-2.webp'
const Art3 = '/assets/fleets/images/Artboard-3.webp'

const Fleets = () => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const description = `DADSS is currently seeking opportunities to partner with state\
	fleets and/or private fleet organizations for trial deployment of\
	this vehicle technology.`

  return (
    <>
      <Head>
        <title>DADSS | Fleets</title>
        <meta name='description' content={description} />
      </Head>
      <FleetsWrapper>
        <HeadBlock className='HeroImage'></HeadBlock>
        <HeadBlock>
          <Header1>Fleets</Header1>
          <Break>
            <hr /> <Circle /> <hr />
          </Break>
        </HeadBlock>
        <div className='DivideWrapper'>
          <ContentBlock className='Content' style={{ paddingTop: '25px' }}>
            <Header3>DADSS Field Operation Trial Opportunities</Header3>
            <Content>
              The Driver Alcohol Detection System for Safety Program (DADSS) is
              developing innovative, vehicle-integrated alcohol detection
              systems to address the problem of alcohol-impaired driving. These
              technologies, both breath- and touch-based, are intended to be
              seamless with the driving task, non-intrusive, accurate, fast, and
              require little to no maintenance. Development of the breath-based
              technology has progressed significantly and now requires
              real-world road testing in an uncontrolled, naturalistic setting.
              DADSS is currently seeking opportunities to partner with state
              fleets and/or private fleet organizations for trial deployment of
              this vehicle technology. State partners may be eligible to use
              certain NHTSA grant funds to sponsor DADSS research projects.{' '}
              <Hyperlink href={Guidelines} target='_blank' rel='noreferrer'>
                See here for guidance.
              </Hyperlink>
            </Content>
            <Content>
              <b>Goals:</b>
            </Content>
            <ol>
              <li>
                Identify and address technical modifications for system
                improvement; including: refine user interface, optimize sensor
                performance and ruggedness, and improve measurement algorithms
              </li>
              <li>
                Increase public awareness and acceptance of the DADSS system
              </li>
              <li>
                Determine feasibility of implementation into larger fleets,
                privately owned, and commercial vehicles
              </li>
            </ol>
            <Content>
              To explore how to become a DADSS deployment partner, contact{' '}
              <Hyperlink href='mailto:info@dadss.org?subject=I want to learn more about DADSS'>
                info@dadss.org.
              </Hyperlink>
            </Content>
            <Content>
              Watch our{' '}
              <Hyperlink
                href='https://www.youtube.com/watch?v=pg3S7lltGRE'
                target='_blank'
                rel='noreferrer'>
                Ask the Experts: The Role of Fleets in Driven to Protect
              </Hyperlink>{' '}
              webinar on YouTube to hear from experts about how our breakthrough
              technology can help support fleet operators in furthering their
              safe driving goals.
            </Content>
          </ContentBlock>
          <Sidebar className='ImageWrapper'>
            <img
              src={Art1}
              alt='DADSS Sensor'
              height={175}
              width={250}
              objectFit='cover'
              objectPosition='center'
            />
            <img
              src={Art2}
              alt='DADSS Sensor 2'
              height={175}
              width={250}
              objectFit='cover'
              objectPosition='center'
            />
            <img
              src={Art3}
              alt='DADSS Fleet'
              height={175}
              width={250}
              objectFit='cover'
              objectPosition='center'
            />
          </Sidebar>
        </div>
        <Break>
          <hr />
          <Circle />
          <hr />
        </Break>
        <div className='LogoContainer'>
          <a href='https://www.nhtsa.gov/' target='_blank' rel='noreferrer'>
            <div className='LogoWrapper'>
              <img
                src={nhtsa}
                height={70}
                width={190}
                objectFit='contain'
                alt='NHTSA Logo'
              />
            </div>
          </a>
          <div className='LogoWrapper'>
            <Link href='/'>
              <img
                src={dadss}
                height={65}
                width={220}
                objectFit='contain'
                alt='DADSS Logo'
              />
            </Link>
          </div>
          <div className='LogoWrapper'>
            <Link href='/driven-to-protect'>
              <img
                src={acts}
                height={60}
                width={150}
                objectFit='contain'
                alt='ACTS Logo'
              />
            </Link>
          </div>
        </div>
        <Break>
          <hr />
          <Circle />
          <hr />
        </Break>
      </FleetsWrapper>
    </>
  )
}

const FleetsWrapper = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    width: 100%;
    text-align: left;
  }
  .HeroImage {
    background: ${bgGray};
    background-image: url(${Hero});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 30vh;
    width: 100%;
    padding: 0;
    border-bottom: 5px solid ${fontGray};
  }
  .Content {
    padding-bottom: 25px;
  }
  .DivideWrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    max-width: 1000px;
  }
  .ImageWrapper {
    display: none;
  }
  .LogoContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .LogoWrapper {
      padding: 25px;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 900px) {
    .Content {
      max-width: 700px;
    }
    .ImageWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      padding: 45px 25px 25px;
      min-width: 300px;
      height: 625px;
    }
  }
`

export default Fleets
