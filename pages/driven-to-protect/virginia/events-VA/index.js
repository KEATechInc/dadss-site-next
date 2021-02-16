import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  Break,
  Circle,
  ContentBlock,
  HeadBlock,
  Header1,
  Header3,
  Content,
  dtpBlue,
} from '../../../../styles/generalStyles'
import DateHandler from '../../../../components/Dates'
import Head from 'next/head'
import { sanityClient } from '../../../../lib/sanity'
import { eventsVaQuery } from '../../../../lib/queries'
import { Pagination } from '@material-ui/lab'

export const getStaticProps = async () => {
  const events = await sanityClient.fetch(eventsVaQuery)

  return {
    props: {
      events,
    },
  }
}

const EventsDTPVA = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = props.events.slice(indexOfFirstPost, indexOfLastPost)
  const totalPosts = props.events.length
  const pageCount = Math.ceil(totalPosts / postsPerPage)

  const handleChange = (event, value) => {
    setCurrentPage(value)
    window.scrollTo(0, 0)
  }

  const renderPosts = () => {
    return (
      <>
        {currentPosts.map((post, index) => (
          <div className='Details' key={index}>
            <a href={post.url} target='_blank' rel='noreferrer'>
              <Header3>{post.title}</Header3>
            </a>
            |<p className='EventDate'>{DateHandler(post.eventDate)}</p> |
            <p className='Location'>{post.location}</p>
          </div>
        ))}
      </>
    )
  }

  const description = `Driven to Protect will be at conferences,\
    events and venues throughout Virginia in the coming months.\
    Find out when Driven to Protect will be exhibiting\
    or presenting near you.`

  return (
    <>
      <Head>
        <title>DADSS | Driven To Protect VA Events</title>
        <meta name='description' content={description} />
      </Head>
      <EventsWrapper>
        <HeadBlock>
          <Header1 className='Blue'>Driven To Protect VA Events</Header1>
          <Break>
            <hr className='Blue' />
            <Circle className='Blue'></Circle>
            <hr className='Blue' />
          </Break>
        </HeadBlock>
        <ContentBlock className='OpeningContent'>
          <Content>
            Driven to Protect will be at conferences, events and venues
            throughout Virginia in the coming months. Find out when Driven to
            Protect will be exhibiting or presenting near you.
          </Content>
        </ContentBlock>
        <ContentBlock className='ContentWrapper'>
          {renderPosts()}
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handleChange}
            className='Pagination'></Pagination>
        </ContentBlock>
      </EventsWrapper>
    </>
  )
}

const EventsWrapper = styled.div`
  margin-top: 85px;
  .OpeningContent {
    padding: 25px;
  }
  .ContentWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    .Details {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      align-items: center;
      width: 100%;
      max-width: 1000px;
      margin: 15px 0;
      font-weight: 500;
      font-size: 1.2rem;
      h3 {
        font-size: 1.2rem;
        margin: 0 8px 0 0;
        text-align: left;
        color: ${dtpBlue};
      }
      a {
        text-decoration: none;
      }
      p {
        margin: 0 8px 0;
      }
    }
  }
  .Pagination {
    margin-top: 25px;
  }
`

export default EventsDTPVA
