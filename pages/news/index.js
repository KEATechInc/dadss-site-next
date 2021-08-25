import Head from 'next/head'
import { useRouter } from 'next/router'
import { sanityClient, PortableText } from '../../lib/sanity'
import { newsQuery } from '../../lib/queries'
import { formatDate } from '../../util/dateHandler'
import { Typography, Button, Box } from '@material-ui/core'
import ContentBlock from '../../components/Layout/ContentBlock'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import { Pagination } from '@material-ui/lab'
import Divider from '../../components/Layout/Divider'

const NewsUpdates = ({ currentPageNumber, currentPosts, pageCount }) => {
  const router = useRouter()

  const handleChange = (e, value) => {
    router.push('/news/' + value)
  }

  // Render component
  const renderPosts = () => {
    return (
      <>
        {currentPosts.map((post, index) => (
          <Box key={index} mb={3}>
            <Typography
              variant='h6'
              color='primary'
              gutterBottom
              style={{ textTransform: 'capitalize' }}>
              <b>{post?.title}</b>
            </Typography>
            <Typography>
              <b>{post?.category}</b>
            </Typography>
            <Typography>
              <b>Published: {formatDate(post?.published)}</b>
            </Typography>
            <span style={{ fontSize: 16 }}>
              <Typography component={PortableText} blocks={post?.preview} />
            </span>
            <Button
              variant='outlined'
              color='primary'
              onClick={() =>
                router.push('/news/updates/' + post?.slug.current)
              }>
              Learn more <AiFillCaretRight />
            </Button>
          </Box>
        ))}
      </>
    )
  }

  const description = `See the most recent news and updates for the DADSS\
	program here.`

  return (
    <>
      <Head>
        <title>DADSS | News & Updates</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <ContentBlock header='News & Updates'>
          <Divider />
          {renderPosts()}
          <Box mt={2}>
            <Pagination
              color='primary'
              count={pageCount}
              page={currentPageNumber}
              onChange={handleChange}
            />
          </Box>
        </ContentBlock>
      </main>
    </>
  )
}

export default NewsUpdates

export const getStaticProps = async ({ params }) => {
  const currentPage = params?.currentPage
  const currentPageNumber = +(currentPage || 1)

  const newsUpdates = await sanityClient.fetch(newsQuery)

  const totalPosts = newsUpdates.length

  const pageMin = (currentPageNumber - 1) * 5
  const pageMax = currentPageNumber * 5

  const currentPosts = newsUpdates.slice(pageMin, pageMax)

  const pageCount = Math.ceil(totalPosts / 5)

  const notFound = currentPageNumber ? false : true

  return {
    props: {
      currentPageNumber,
      currentPosts,
      pageCount,
    },
    revalidate: 300,
    notFound,
  }
}