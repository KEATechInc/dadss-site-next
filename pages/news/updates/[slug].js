import Head from 'next/head'
import {
  PortableText,
  getClient,
  filterDataToSingleItem,
  usePreviewSubscription,
} from '../../../lib/sanity'
import { postSlugsQuery } from '../../../lib/queries'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import Divider from '../../../components/Layout/Divider'
import { Typography } from '@mui/material'
import { newsQuery } from '../../../lib/queries'
import GetMoreContent from '../../../components/Layout/news/GetMoreContent'
import ContentBlock from '../../../components/Layout/ContentBlock'

const SinglePost = ({ data, preview }) => {
  const router = useRouter()

  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  })

  // Client-side uses the same query, so we may need to filter it down again
  const page = filterDataToSingleItem(previewData, preview)

  if (!page || router.isFallback) {
    return null
  }

  const { title, body } = data.page
  const description = page.preview ? page.preview[0].children[0].text : ''
  const postPosition = data?.titleData.indexOf(title)

  return (
    <>
      <Head>
        <title>{`DADSS | ${title}`}</title>
        <meta name='description' content={description} />
      </Head>

      <ContentBlock header={title}>
        <Divider />
        <div style={{ width: '-webkit-fill-available' }}>
          <Typography component={PortableText} blocks={body} />
          <GetMoreContent
            postLinks={data?.linkData}
            postTitles={data?.titleData}
            currentPost={postPosition}
          />
        </div>
      </ContentBlock>
    </>
  )
}

export default SinglePost

// Prerender data
export const getStaticProps = async ({ params, preview = false }) => {
  const query = groq`*[_type == "post" && slug.current == $slug]`
  const queryParams = { slug: params.slug }
  const previewData = await getClient(preview).fetch(query, queryParams)

  // Escape hatch, if the query failed to return data
  if (!previewData) return { notFound: true }

  // Helper function to reduce all returned documents down to just one
  const page = filterDataToSingleItem(previewData, preview)

  // Get title and link data for content recommendations
  const allPosts = await getClient().fetch(newsQuery)
  const titleData = allPosts.map((entry) => entry.title)
  const linkData = allPosts.map((entry) => {
    const { slug, url } = entry
    return {
      slug: slug ? slug.current : false,
      url: url ? url : false,
    }
  })

  return {
    props: {
      preview,
      data: { page, query, queryParams, titleData, linkData },
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getClient().fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
