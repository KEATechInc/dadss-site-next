import Head from 'next/head'
import { sanityClient, PortableText } from '../../../lib/sanity'
import { postSlugsQuery, postQuery } from '../../../lib/queries'
import Divider from '../../../components/Layout/Divider'
import { Typography } from '@material-ui/core'
import ContentBlock from '../../../components/Layout/ContentBlock'

const SinglePost = ({ post }) => {
  let filteredPreview

  return (
    <>
      <Head>
        <title>{`DADSS | ${post?.title}`}</title>
        {(filteredPreview = post?.preview[0].children[0].text)}
        <meta name='description' content={filteredPreview} />
      </Head>

      <ContentBlock header={post?.title}>
        <Divider />
        <div style={{ width: '-webkit-fill-available' }}>
          <Typography component={PortableText} blocks={post?.body} />
        </div>
      </ContentBlock>
    </>
  )
}

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
    notFound,
  }
}
