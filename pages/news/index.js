import { useEffect } from 'react'
import ReactGA from 'react-ga'
import {
	HeadBlock,
	Header1,
	ContentBlock,
	Header3,
	Break,
	Circle,
	CardWrapper,
} from '../../styles/generalStyles'
import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { sanityClient, PortableText } from '../../lib/sanity'
import { newsQuery } from '../../lib/queries'
import DateHandler from '../../components/Dates'
import Link from 'next/link'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import { Pagination } from '@material-ui/lab'
import Loader from '../../components/Loader'

export const getStaticProps = async ({ params }) => {
	const currentPage = params?.currentPage
	const currentPageNumber = +(currentPage || 1)

	const newsUpdates = await sanityClient.fetch(newsQuery)

	const totalPosts = newsUpdates.length

	const pageMin = (currentPageNumber - 1) * 5
	const pageMax = currentPageNumber * 5

	const currentPosts = newsUpdates.slice(pageMin, pageMax)

	const pageCount = Math.ceil(totalPosts / 5)

	return {
		props: {
			currentPageNumber,
			currentPosts,
			pageCount,
		},
		revalidate: 60,
	}
}

const NewsUpdates = ({ currentPageNumber, currentPosts, pageCount }) => {
	useEffect(() => {
		ReactGA.initialize('UA-58614629-1')
		ReactGA.pageview(window.location.pathname)
	}, [])

	const router = useRouter()

	const handleChange = (event, value) => {
		router.push('/news/' + value)
	}

	if (router.isFallback) {
		return <Loader></Loader>
	}

	// Render component
	const renderPosts = () => {
		return (
			<CardWrapper className='CardWrapper'>
				{currentPosts.map((post, index) => (
					<div className='UpdateCard' key={`${index}`}>
						<Link href={'/news/updates/' + post.slug.current}>
							<Header3>{post.title}</Header3>
						</Link>
						<p className='Category'>{post.category}</p>
						<p className='Published'>
							Published: {DateHandler(post.published)}
						</p>
						<PortableText blocks={post.preview} />
						<Link href={'/news/updates/' + post.slug.current}>
							<p className='More'>
								Learn more <AiFillCaretRight />
							</p>
						</Link>
					</div>
				))}
			</CardWrapper>
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
			<NewsWrapper>
				<HeadBlock>
					<Header1>News & Updates</Header1>
					<Break>
						<hr />
						<Circle />
						<hr />
					</Break>
				</HeadBlock>
				<ContentBlock>
					{renderPosts()}
					<Pagination
						count={pageCount}
						page={currentPageNumber}
						onChange={handleChange}
						className='Pagination'></Pagination>
				</ContentBlock>
			</NewsWrapper>
		</>
	)
}

const NewsWrapper = styled.div`
	margin-top: 85px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.CardWrapper {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		a {
			color: inherit;
		}
		h3 {
			cursor: pointer;
		}
	}
	.Pagination {
		margin-top: 25px;
	}
`

export default NewsUpdates
