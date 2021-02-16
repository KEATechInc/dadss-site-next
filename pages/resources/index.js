import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { ResourcesWrapper } from '../../styles/resourcesStyles'
import {
  HeadBlock,
  Header1,
  Header2,
  Break,
  Circle,
  ContentBlock,
  Content,
  Hyperlink,
  Header3,
  CardWrapper,
} from '../../styles/generalStyles'
import Link from 'next/link'
import Head from 'next/head'
import DateHandler from '../../components/Dates'
import { PortableText, sanityClient } from '../../lib/sanity'
import { recentPostsQuery } from '../../lib/queries'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'

const programPDF = '/assets/programOverview/pdf/DADSS_ProgramOverview.pdf'
const faqPDF = '/assets/resources/pdf/DADSS-Resources-FAQ.pdf'
const breathPDF = '/assets/breathBasedTech/pdf/DADSS_Breath-Based.pdf'
const touchPDF = '/assets/touchBasedTech/pdf/DADSS_Touch-Based.pdf'
const opinionPDF =
  '/assets/resources/pdf/DADSS_Public-Opinion-Research_091317_v1.pdf'
const drivenPDF = '/assets/drivenToProtect/pdf/Driven-to-Protect-Overview.pdf'
const infoPDF = '/assets/resources/pdf/DTP-JRT-Infographic-v2.pdf'

export const getStaticProps = async () => {
  const posts = await sanityClient.fetch(recentPostsQuery)

  return {
    props: {
      posts,
    },
  }
}

const Resources = ({posts}) => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const renderPosts = () => {
    return (
      <CardWrapper>
        {posts &&
          posts.map((post, index) => (
            <div className='UpdateCard' key={index}>
              <p className='Category'>{post.category}</p>
              <p className='Published'>
                Published: {DateHandler(post.published)}
              </p>
              <PortableText blocks={post.preview} />
              <Link href={'/news/' + post.slug.current}>
                <p className='More'>
                  Learn more <AiFillCaretRight />
                </p>
              </Link>
            </div>
          ))}
      </CardWrapper>
    )
  }

  const description = `In the Fall of 2020, we launched the Driven to Protect Discovery\
	Hub, offering free videos and educational resources – including\
	a series of STEM- inspired lessons – about alcohol-impaired\
	driving and the ways the DADSS technology can prevent it.`

  return (
    <>
      <Head>
        <title>DADSS | Resources</title>
        <meta name='description' content={description} />
      </Head>
      <ResourcesWrapper>
        <HeadBlock>
          <Header1>Resources</Header1>
          <Break>
            <hr />
            <Circle></Circle>
            <hr />
          </Break>
        </HeadBlock>
        <div className='DivideWrapper'>
          <div className='DivideLeft'>
            <ContentBlock>
              <Content>
                In the Fall of 2020, we launched the Driven to Protect Discovery
                Hub, offering free videos and educational resources – including
                a series of STEM- inspired lessons – about alcohol-impaired
                driving and the ways the DADSS technology can prevent it.
              </Content>
              <Content>
                <Hyperlink
                  href='https://www.discoveryhub.actsautosafety.org/'
                  target='_blank'
                  rel='noreferrer'>
                  Explore the Discovery Hub
                </Hyperlink>
              </Content>
              <Content>
                For additional background on the DADSS program and resulting
                technologies, watch our videos below or visit our{' '}
                <Hyperlink
                  href='https://www.youtube.com/channel/UC5be5Eh_SVXbn6d6RI8BYtQ'
                  target='_blank'
                  rel='noreferrer'>
                  YouTube page
                </Hyperlink>
                .
              </Content>
              <ul>
                <li>
                  <Hyperlink
                    href='https://www.youtube.com/watch?v=fwuIAQY7xq4&t=1s'
                    target='_blank'
                    rel='noreferrer'>
                    Take a look at the technology development process in the lab
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink
                    href='https://www.youtube.com/watch?v=Wk_DS91Y-mo'
                    target='_blank'
                    rel='noreferrer'>
                    Hear from experts behind the testing and development process
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink
                    href='https://www.youtube.com/watch?v=lNb3L-dWXjg'
                    target='_blank'
                    rel='noreferrer'>
                    Learn about our work in Virginia, through Driven to Protect
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink
                    href='https://www.youtube.com/watch?v=LVud69MWn3Q'
                    target='_blank'
                    rel='noreferrer'>
                    Meet James River Transportation and learn more about on-road
                    testing in Virginia
                  </Hyperlink>
                </li>
              </ul>
              <Content>You can also download these materials:</Content>
              <ul>
                <li>
                  <Hyperlink href={programPDF} target='_blank' rel='noreferrer'>
                    The DADSS Program: Overview and Purpose
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink href={faqPDF} target='_blank' rel='noreferrer'>
                    Frequently Asked Questions
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink href={breathPDF} target='_blank' rel='noreferrer'>
                    A Look at the Technology: Breath-Based System
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink href={touchPDF} target='_blank' rel='noreferrer'>
                    A Look at the Technology: Touch-Based System
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink href={opinionPDF} target='_blank' rel='noreferrer'>
                    Public Opinion Research
                  </Hyperlink>
                </li>
              </ul>
            </ContentBlock>
            <ContentBlock className='Blue VABlock'>
              <Header2 className='Blue'>Driven to Protect VA</Header2>
              <Break className='VADivider'>
                <hr />
                <Circle className='Toggle' />
                <hr className='Toggle' />
              </Break>
              <Content className='Gray'>
                You can also download materials about the Driven to Protect
                program in Virginia:
              </Content>
              <ul>
                <li>
                  <Hyperlink
                    className='Blue'
                    href={drivenPDF}
                    target='_blank'
                    rel='noreferrer'>
                    Driven to Protect Overview
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink
                    className='Blue'
                    href={infoPDF}
                    target='_blank'
                    rel='noreferrer'>
                    Infographic: On-road Testing
                  </Hyperlink>
                </li>
              </ul>
            </ContentBlock>
          </div>
          <div className='DivideRight'>
            <Header3>Recent Updates</Header3>
            <Break>
              <hr />
            </Break>
            {renderPosts()}
          </div>
        </div>
      </ResourcesWrapper>
    </>
  )
}

export default Resources
