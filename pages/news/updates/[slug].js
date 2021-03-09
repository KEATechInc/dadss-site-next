import { useEffect } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Loader from '../../../components/Loader'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { sanityClient, PortableText } from '../../../lib/sanity'
import { postSlugsQuery, postQuery } from '../../../lib/queries'
import {
	ContentBlock,
	HeadBlock,
	Header2,
	fontGray,
	darkOrange,
	Break,
	Circle,
	boxShadow,
} from '../../../styles/generalStyles'

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
		revalidate: 3600,
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
		align-items: center;
		justify-content: center;
		.FigWrapper {
			display: flex;
			flex-direction: column;
			padding: 25px;
			img {
				box-shadow: ${boxShadow};
				margin-bottom: 5px;
				max-width: 100%;
				height: auto;
				object-fit: contain;
			}
			p {
				font-size: 0.9em;
				margin: 0;
				padding: 0 5px;
			}
		}
	} 
	p {
		color: ${fontGray};
		padding: 5px 0;
		margin: 0;
		max-width: 1000px;
	}
	ul {
		padding-left: 25px;
		li {
			color: ${fontGray};
			padding: 8px 0;
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
