import { useEffect } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import {
  HeadBlock,
  Header2,
  Button,
  ContentBlock,
  Content,
  Break,
  Circle,
  Hyperlink,
} from '../../styles/generalStyles'
import { OverviewWrapper } from '../../styles/programOverviewStyles'

const PDF = '/assets/programOverview/pdf/DADSS_ProgramOverview.pdf'
const source1 = '/assets/programOverview/pdf/2013 Alcohol-Impaired Driving TSF Sheet.pdf'
const source2 = '/assets/programOverview/pdf/The Economic and Societal Impact Of Motor Vehicle Crashes, 2010 (Revised May 2015).pdf'

const ProgramOverview = () => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const description = `Drunk driving remains a serious public health and safety issue.\
	But what if we could help invent a world without drunk driving?`

  return (
    <>
      <Head>
        <title>DADSS | Program Overview</title>
        <meta name='description' content={description} />
      </Head>
      <OverviewWrapper>
        <HeadBlock className='HeadBlock'>
          <Header2>The Problem</Header2>
          <Break>
            <hr />
            <Circle />
            <hr />
          </Break>
        </HeadBlock>
        <ContentBlock className='Problem'>
          <ul>
            <li>
              Each year in America, drunk driving claims more than 10,000 lives
              and costs the U.S. approximately $194 billion.<sup>1</sup>
            </li>
            <li>
              Alcohol-impaired driving fatalities account for more than 1/3 of
              all motor vehicle traffic fatalities in the United States.
              <sup>2</sup>
            </li>
            <li>
              In 2013, of the fatalities among children age 14 and younger, 17
              percent occurred in alcohol-impaired-driving crashes.<sup>3</sup>
            </li>
          </ul>
          <Content>
            <b>
              Drunk driving remains a serious public health and safety issue.
              But what if we could help invent a world without drunk driving?
            </b>
          </Content>
        </ContentBlock>
        <ContentBlock className='Orange'>
          <Header2 className='Gray'>A New Approach</Header2>
          <Break>
            <hr className='White' />
            <Circle className='White' />
            <hr className='White' />
          </Break>
          <Content className='Gray'>
            The Driver Alcohol Detection System for Safety (DADSS) Research
            Program brings together the Automotive Coalition for Traffic Safety
            (ACTS), which represents the world’s leading automakers, and the
            National Highway Traffic Safety Administration (NHTSA) in one of the
            most important government and private sector partnerships in recent
            years. Public-private partnerships like DADSS have led to
            innovations that enhance our everyday lives, such as the internet,
            GPS and the microchip.
          </Content>
          <Content className='Gray'>
            The Program is researching a first-of-its-kind technology called the
            Alcohol Detection System that will detect when a driver is
            intoxicated with a blood alcohol concentration (BAC) at or above
            0.08% – the legal limit in all 50 states except Utah – and prevent
            the car from moving. The system will be made available as a safety
            option in new vehicles, much like automatic braking, lane departure
            warning and other advanced driver assist vehicle technologies.
          </Content>
          <Content className='Gray'>
            Combining the sharpest minds in transportation innovation with the
            world’s leading experts in non-invasive alcohol sensing, the
            technology will be fast, accurate, reliable and affordable. And
            unlike existing alcohol detection technologies, it will be
            seamlessly integrated into vehicles and will not affect normal
            driving behavior.
          </Content>
        </ContentBlock>
        <ContentBlock>
          <Header2>Technologies Under Exploration</Header2>
          <Break>
            <hr /> <Circle /> <hr />
          </Break>
          <Content>
            Congress recognized the life-saving potential of the DADSS Program
            and has made it part of a multi-faceted national commitment to
            reduce and help eliminate drunk driving. With support from safety
            advocates and the auto industry, ACTS and NHTSA entered into a
            cooperative agreement in 2008 to research and test proof-of-concept
            prototypes and determine which technologies were most promising for
            vehicle integration. After extensive research, it was determined
            that two options would be explored for installation in new vehicles:
          </Content>
          <ul>
            <li>
              A breath-based system, which measures alcohol as a driver breathes
              normally, when in the driver’s seat. It will be designed to take
              instantaneous readings as the driver breathes normally and to
              accurately and reliably distinguish between the driver’s breath
              and that of any passengers.
            </li>
            <li>
              A touch-based system, which measures blood alcohol levels under
              the skin’s surface by shining an infrared-light through the
              fingertip of the driver. It will be integrated into current
              vehicle controls, such as the start button or steering wheel, and
              take multiple, accurate readings.
            </li>
          </ul>
          <Content>
            In 2013, ACTS and NHTSA extended their agreement, and the Program
            entered a new phase to reduce the size of the systems and ensure
            strict performance specifications are met relating to speed,
            accuracy, precision and reliability. As part of the ongoing
            research, the prototypes will be integrated in vehicles for a series
            of field tests, which will allow engineers to observe driver
            behavior in natural settings and thoroughly test the systems in
            real-world scenarios. Once completed, auto manufacturers will be
            able to offer the system as a safety option in new vehicles. It will
            take time for this pioneering technology to be available
            commercially, but developing a system that is seamless, accurate and
            reliable is the first step and a top priority.
          </Content>
          <Content>
            An analysis by the Insurance Institute for Highway Safety indicates
            that if driver BACs can be limited to no more than 0.08% percent –
            the legal limit in all 50 states except Utah – approximately 7,000
            lives could be saved annually.<sup>4</sup>
          </Content>
          <a href={PDF} target='_blank' rel='noreferrer'>
            <Button>Download PDF</Button>
          </a>
        </ContentBlock>

        <ContentBlock className='Footnotes'>
          <Break>
            <hr /> <Circle /> <hr />
          </Break>
          <Content>
            <sup>1</sup>National Highway Traffic Safety Administration (NHTSA).
            “The Economic and Societal Impact Of Motor Vehicle Crashes, 2010.”
            Washington (DC), May 2015 (Revised), DOT HS 812 013. Available at
            URL:
            <br />
            <Hyperlink href={source2} target='_blank' rel='noreferrer'>
              www-nrd.nhtsa.dot.gov/Pubs/812013.pdf
            </Hyperlink>
          </Content>
          <Content>
            <sup>2</sup>National Highway Traffic Safety Administration (NHTSA).
            “Traffic Safety Facts 2013 Data: Alcohol-Impaired Driving.”
            Washington (DC), December 2014, DOT HS 812 102. Available at URL:
            <br />
            <Hyperlink href={source1} target='_blank' rel='noreferrer'>
              www-nrd.nhtsa.dot.gov/Pubs/812102.pdf
            </Hyperlink>
          </Content>
          <Content>
            <sup>3</sup>Ibid.
          </Content>
          <Content>
            <sup>4</sup>Insurance Institute for Highway Safety Data Institute.
            “Alcohol Detection Device Project is now in Development Phase.”
            Insurance Institute for Highway Safety, Nov. 2011. Available at URL:
            <br />
            <Hyperlink
              href='http://www.iihs.org/iihs/sr/statusreport/article/46/10/4'
              target='_blank'
              rel='noreferrer'>
              www.iihs.org/iihs/sr/statusreport/article/46/10/4
            </Hyperlink>
          </Content>
          <Break className='BottomBreak'>
            <hr /> <Circle /> <hr />
          </Break>
        </ContentBlock>
      </OverviewWrapper>
    </>
  )
}

export default ProgramOverview
