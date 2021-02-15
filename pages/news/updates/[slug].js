import { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import styled from 'styled-components'
import { sanityClient, PortableText } from '../../../lib/sanity'
import { postSlugsQuery, postBySlugQuery } from '../../../lib/queries'
import {
  ContentBlock,
  HeadBlock,
  Header2,
  fontGray,
  darkOrange,
  boxShadow,
  Break,
  Circle,
} from '../../../styles/generalStyles'

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await sanityClient.fetch(postBySlugQuery, { slug: params.slug })
  return {
    props: {
      post
    }
  }
}

const SinglePost = ({post}) => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <PostWrapper>
      <Head>
        <title>{`DADSS | ${post.title}`}</title>
        <meta name='description' content={post.preview} />
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
  &.Loading {
    height: 100vh;
  }
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
  ul > li {
    color: ${fontGray};
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
