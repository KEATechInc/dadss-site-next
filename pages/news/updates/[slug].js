import Head from 'next/head'
import { sanityClient, PortableText } from '../../../lib/sanity'
import { postSlugsQuery, postQuery } from '../../../lib/queries'
import Divider from '../../../components/Layout/Divider'
import { styled, Typography } from '@material-ui/core'
import ContentBlock from '../../../components/Layout/ContentBlock'
import theme from '../../../src/theme'

const SinglePost = ({ post }) => {
  let filteredPreview

  return (
    <PostWrapper>
      <Head>
        <title>{`DADSS | ${post?.title}`}</title>
        {(filteredPreview = post?.preview[0].children[0].text)}
        <meta name='description' content={filteredPreview} />
      </Head>

      <ContentBlock header={post?.title}>
        <Divider />
        <span style={{ fontSize: 16 }}>
          <Typography component={PortableText} blocks={post?.body} />
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

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
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