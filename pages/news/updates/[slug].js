import { useEffect } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Loader from '../../../components/Loader'
import { useRouter } from 'next/router'
import { sanityClient, PortableText } from '../../../lib/sanity'
import { postSlugsQuery, postQuery } from '../../../lib/queries'
import Divider from '../../../components/Divider'
import { styled, Typography } from '@material-ui/core'
import ContentBlock from '../../../components/ContentBlock'
import theme from '../../../src/theme'

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await sanityClient.fetch(postQuery, { slug: params.slug })

  const notFound = Object.keys(post).length === 0 ? true : false

  return {
    props: {
      post,
    },
    revalidate: 300,
    notFound,
  }
}

const SinglePost = ({ post }) => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  let filteredPreview
  const router = useRouter()

  if (router.isFallback) {
    return <Loader></Loader>
  }

  return (
    <PostWrapper>
      <Head>
        <title>{`DADSS | ${post.title}`}</title>
        {(filteredPreview = post.preview[0].children[0].text)}
        <meta name='description' content={filteredPreview} />
      </Head>

      <ContentBlock header={post.title}>
        <Divider />
        <span style={{ fontSize: 16 }}>
          <Typography component={PortableText} blocks={post.body} />
        </span>
      </ContentBlock>
    </PostWrapper>
  )
}

const PostWrapper = styled('div')({
  '& figure': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .FigWrapper': {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
      '& img': {
        boxShadow: theme.shadows[2],
        marginBottom: 5,
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'contain',
      },
      '& p': {
        fontSize: '0.9em',
        margin: 0,
        padding: '0 5px',
      },
    },
  },
})

export default SinglePost
