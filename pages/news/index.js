import { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import {
  HeadBlock,
  Header1,
  ContentBlock,
  Header3,
  Break,
  Circle,
  CardWrapper,
} from '../../styles/generalStyles'
import styled from 'styled-components'
import Head from 'next/head'
import { sanityClient, PortableText } from '../../lib/sanity'
import { newsQuery } from '../../lib/queries'
import DateHandler from '../../components/Dates'
import Link from 'next/link'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import { Pagination } from '@material-ui/lab'

export const getStaticProps = async () => {
  const newsUpdates = await sanityClient.fetch(newsQuery)

  return {
    props: {
      newsUpdates,
    },
  }
}

const NewsUpdates = (props) => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = props.newsUpdates.slice(
    indexOfFirstPost,
    indexOfLastPost
  )
  const totalPosts = props.newsUpdates.length
  const pageCount = Math.ceil(totalPosts / postsPerPage)

  const handleChange = (event, value) => {
    setCurrentPage(value)
    window.scrollTo(0, 0)
  }

  // Render component
  const renderPosts = () => {
    return (
      <CardWrapper className='CardWrapper'>
        {currentPosts.map((post, index) => (
          <div className='UpdateCard' key={`${index}`}>
            <Link href={'/news/' + post.slug.current}>
              <Header3>{post.title}</Header3>
            </Link>
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

  const description = `See the most recent news and updates for the DADSS
	program here.`

  return (
    <>
      <Head>
        <title>DADSS | News & Updates</title>
        <meta name='description' content={description} />
      </Head>
      <NewsWrapper>
        <HeadBlock>
          <Header1>News & Updates</Header1>
          <Break>
            <hr />
            <Circle />
            <hr />
          </Break>
        </HeadBlock>
        <ContentBlock className='CardWrapper'>
          {renderPosts()}
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handleChange}
            className='Pagination'></Pagination>
        </ContentBlock>
      </NewsWrapper>
    </>
  )
}

const NewsWrapper = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .CardWrapper {
    a {
      color: inherit;
    }
  }
  .Pagination {
    margin-top: 25px;
  }
`

export default NewsUpdates
