import Head from 'next/head'
import { sanityClient, PortableText } from '../../../lib/sanity'
import { postSlugsQuery, postQuery } from '../../../lib/queries'
import Divider from '../../../components/Layout/Divider'
import { Typography } from '@mui/material'
import { newsQuery } from '../../../lib/queries'
import GetMoreContent from '../../../components/Layout/news/GetMoreContent'
import ContentBlock from '../../../components/Layout/ContentBlock'

const SinglePost = ({ post, linkData, titleData }) => {
  if (post) {
    const { title, preview, body } = post
    const postPosition = titleData.indexOf(title)

    return (
      <>
        <Head>
          <title>{`DADSS | ${title}`}</title>
          <meta name='description' content={preview[0].children[0].text} />
        </Head>

        <ContentBlock header={title}>
          <Divider />
          <div style={{ width: '-webkit-fill-available' }}>
            <Typography component={PortableText} blocks={body} />
            <GetMoreContent
              postLinks={linkData}
              postTitles={titleData}
              currentPost={postPosition}
            />
          </div>
        </ContentBlock>
      </>
    )
  }

  return null
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
  const allPosts = await sanityClient.fetch(newsQuery)

  const titleData = allPosts.map((entry) => entry.title)
  const linkData = allPosts.map((entry) => {
    const { slug, url } = entry
    return {
      slug: slug ? slug.current : false,
      url: url ? url : false,
    }
  })

  const notFound = Object.keys(post).length === 0 ? true : false

  return {
    props: {
      post,
      titleData,
      linkData,
    },
    notFound,
  }
}
