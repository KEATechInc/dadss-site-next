import { useState } from 'react'
import { getYear } from '../../../util/dateHandler'
import { sanityClient, PortableText } from '../../../lib/sanity'
import Head from 'next/head'
import ContentBlock from '../../../components/Layout/ContentBlock'
import Divider from '../../../components/Layout/Divider'
import { publicationsQuery } from '../../../lib/queries'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import { Pagination } from '@material-ui/lab'
import { Typography, Button, Box } from '@material-ui/core'

export const getStaticProps = async () => {
  const publications = await sanityClient.fetch(publicationsQuery)

  return {
    props: {
      publications,
    },
    revalidate: 300,
  }
}

const Publications = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = props.publications.slice(
    indexOfFirstPost,
    indexOfLastPost
  )
  const totalPosts = props.publications.length
  const pageCount = Math.ceil(totalPosts / postsPerPage)

  const handleChange = (event, value) => {
    setCurrentPage(value)
    window.scrollTo(0, 0)
  }

  // Render components
  const renderPosts = () => {
    return (
      <>
        {currentPosts.map((post, index) => (
          <Box mt={1} mb={2} key={index}>
            <Typography color='primary' variant='h6' gutterBottom>
              <b>{post.title}</b>
            </Typography>
            <Typography gutterBottom>
              <b>{post.subtitle}</b>
            </Typography>
            <Typography>
              <b>Paper Number: {post.paperNumber}</b>
            </Typography>
            <Typography>
              <b>Publish Year: {getYear(post.publishDate)}</b>
            </Typography>
            <PortableText blocks={post.description} />
            {(post.url || post.fileUpload) && (
              <Button
                variant='outlined'
                color='primary'
                href={post.url || post.fileUpload}
                target='_blank'
                rel='noreferrer'>
                Learn more <AiFillCaretRight />
              </Button>
            )}
          </Box>
        ))}
      </>
    )
  }

  const description = `As with any research and development effort, the DADSS Research\
	Program has published findings throughout the process. In the links\
	below, you can access these articles and research papers, published\
  from 2009 through the present.`

  return (
    <>
      <Head>
        <title>DADSS | Publications</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <ContentBlock header='Publications'>
          <Divider />
          <Typography paragraph>
            As with any research and development effort, the DADSS Research
            Program has published findings throughout the process. In the links
            below, you can access these articles and research papers, published
            from 2009 through the present.
          </Typography>

          {renderPosts()}

          <Pagination
            color='primary'
            count={pageCount}
            page={currentPage}
            onChange={handleChange}
          />
        </ContentBlock>
      </main>
    </>
  )
}

export default Publications
