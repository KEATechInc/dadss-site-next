import { useState } from 'react'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'
import ContentBlock from '../../../components/Layout/ContentBlock'
import Divider from '../../../components/Layout/Divider'
import { formatDate, getYear } from '../../../util/dateHandler'
import { Pagination } from '@material-ui/lab'
import { eventsQuery } from '../../../lib/queries'
import { sanityClient } from '../../../lib/sanity'
import theme from '../../../src/theme'

export async function getStaticProps() {
  const events = await sanityClient.fetch(eventsQuery)

  return {
    props: {
      events,
    },
    revalidate: 300,
  }
}

const Events = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = props.events.slice(indexOfFirstPost, indexOfLastPost)
  const totalPosts = props.events.length
  const pageCount = Math.ceil(totalPosts / postsPerPage)

  const handleChange = (event, value) => {
    setCurrentPage(value)
    window.scrollTo(0, 0)
  }

  const years = props.events.map((post) => {
    return getYear(post.eventDate)
  })
  const uniqueYears = [...new Set(years)]

  const sortPosts = (sortByYear) => {
    const sortedPosts = currentPosts.filter((posts) => {
      return getYear(posts.eventDate) == sortByYear
    })
    return sortedPosts
  }

  const renderPosts = (sortedPosts) => {
    return (
      <>
        {sortedPosts.map((post, i) => (
          <Box
            component='div'
            key={i}
            mb={2}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}>
            <a href={post.url} target='_blank' rel='noreferrer'>
              <Typography style={{ marginRight: theme.spacing(1) }}>
                <b>{post.title}</b>
              </Typography>
            </a>
            <Typography noWrap style={{ marginRight: theme.spacing(1) }}>
              | {formatDate(post.eventDate)}
            </Typography>
            <Typography noWrap>| {post.location}</Typography>
          </Box>
        ))}
      </>
    )
  }

  const description = `Over the years, the DADSS Program has organized, presented at and\
	exhibited at a range of events – from traffic safety and advanced\
	technology conferences, to media events, to briefings with key\
	partners. Learn about past events and check back for upcoming ones.`

  return (
    <>
      <Head>
        <title>DADSS | Events</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <ContentBlock header='Events'>
          <Divider />
          <Typography paragraph>
            Over the years, the DADSS Program has organized, presented at and
            exhibited at a range of events – from traffic safety and advanced
            technology conferences, to media events, to briefings with key
            partners. Learn about past events and check back for upcoming ones.
          </Typography>

          {uniqueYears.map((year, i) => {
            return (
              <div key={i} style={{ width: '100%' }}>
                {sortPosts(year).length > 0 && (
                  <Box key={i} mt={1} style={{ width: '100%' }}>
                    <Typography variant='h4' color='primary' align='center'>
                      {year}
                    </Typography>
                    <Divider size='small' />
                    {renderPosts(sortPosts(year))}
                  </Box>
                )}
              </div>
            )
          })}

          <Box mt={2}>
            <Pagination
              color='primary'
              count={pageCount}
              page={currentPage}
              onChange={handleChange}
            />
          </Box>
        </ContentBlock>
      </main>
    </>
  )
}

export default Events
