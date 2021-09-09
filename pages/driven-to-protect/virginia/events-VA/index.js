import { useState } from 'react'
import { formatDate, getYear } from '../../../../util/dateHandler'
import Head from 'next/head'
import { sanityClient } from '../../../../lib/sanity'
import { eventsVaQuery } from '../../../../lib/queries'
import { Pagination } from '@material-ui/lab'
import { Box, styled, Typography } from '@material-ui/core'
import ContentBlock from '../../../../components/Layout/ContentBlock'
import Divider from '../../../../components/Layout/Divider'
import theme, { dtpBlue } from '../../../../src/theme'
import revalidate from '../../../../util/revalidate'

const EventsDTPVA = (props) => {
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

  const description = `Driven to Protect will be at conferences,\
    events and venues throughout Virginia in the coming months.\
    Find out when Driven to Protect will be exhibiting\
    or presenting near you.`

  return (
    <>
      <Head>
        <title>DADSS | Events</title>
        <meta name='description' content={description} />
      </Head>
      <PageWrap>
        <ContentBlock header='Events' headerColor={dtpBlue}>
          <Divider />
          <Typography paragraph>
            Over the years, the DADSS Program has organized, presented at and
            exhibited at a range of events – from traffic safety and advanced
            technology conferences, to media events, to briefings with key
            partners. Learn about past events and check back for upcoming ones.
          </Typography>

          {uniqueYears.map((year, i) => {
            return (
              <>
                {sortPosts(year).length > 0 && (
                  <Box key={i} mt={1} style={{ width: '100%' }}>
                    <Typography
                      variant='h4'
                      style={{ color: dtpBlue }}
                      align='center'>
                      {year}
                    </Typography>
                    <Divider size='small' />
                    {renderPosts(sortPosts(year))}
                  </Box>
                )}
              </>
            )
          })}

          <Box mt={2}>
            <Pagination
              color='secondary'
              count={pageCount}
              page={currentPage}
              onChange={handleChange}
            />
          </Box>
        </ContentBlock>
      </PageWrap>
    </>
  )
}

export default EventsDTPVA

const PageWrap = styled('main')({
  '& a': {
    color: dtpBlue,
  },
})

export const getStaticProps = async () => {
  const events = await sanityClient.fetch(eventsVaQuery)

  return {
    props: {
      events,
    },
    revalidate: revalidate,
  }
}