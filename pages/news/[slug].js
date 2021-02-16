import { useEffect } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import styled from 'styled-components'
import { sanityClient, PortableText } from '../../lib/sanity'
import { postSlugsQuery, postQuery } from '../../lib/queries'
import {
  ContentBlock,
  HeadBlock,
  Header2,
  fontGray,
  darkOrange,
  boxShadow,
  Break,
  Circle,
} from '../../styles/generalStyles'

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await sanityClient.fetch(postQuery, { slug: params.slug })
  return {
    props: {
      post,
    },
  }
}

const SinglePost = ({ post }) => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const filteredPreview = post.preview[0].children[0].text

  return (
    <PostWrapper>
      <Head>
        <title>{`DADSS | ${post.title}`}</title>
        <meta name='description' content={filteredPreview} />
      </Head>
      <HeadBlock>
        <Header2>{post.title}</Header2>
        <Break>
          <hr />
          <Circle />
          <hr />
        </Break>
      </HeadBlock>
      <ContentBlock>
        <PortableText className='Block' blocks={post.body} />
      </ContentBlock>
    </PostWrapper>
  )
}

const PostWrapper = styled.div`
  margin-top: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: auto;
    img {
      margin: 25px;
      max-height: 500px;
      width: auto;
      box-shadow: ${boxShadow};
    }
  }
  p {
    color: ${fontGray};
    padding: 5px 0;
    max-width: 1000px;
  }
  ul {
    margin-left: 50px;
    li {
      color: ${fontGray};
      margin: 10px 0;
    }
  }
  a {
    color: ${darkOrange};
    font-weight: bold;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  .Block {
    max-width: 1000px;
  }
`

export default SinglePost
