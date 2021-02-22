import { useState, useEffect } from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import {
	Break,
	Circle,
	ContentBlock,
	HeadBlock,
	Header1,
	Header3,
	Content,
} from '../../../styles/generalStyles'
import Head from 'next/head'
import Link from 'next/link'
import DateHandler from '../../../components/Dates'
import { Pagination } from '@material-ui/lab'
import { eventsQuery } from '../../../lib/queries'
import { sanityClient } from '../../../lib/sanity'

export async function getStaticProps() {
	const events = await sanityClient.fetch(eventsQuery)

	return {
		props: {
			events,
		},
		revalidate: 60,
	}
}

const Events = (props) => {
	useEffect(() => {
		ReactGA.initialize('UA-58614629-1')
		ReactGA.pageview(window.location.pathname)
	}, [])

	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(10)

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = props.events.slice(indexOfFirstPost, indexOfLastPost)
	const totalPosts = props.events.length
	const pageCount = Math.ceil(totalPosts / postsPerPage)

	const handleChange = (event, value) => {
		setCurrentPage(value)
		window.scrollTo(0, 0)
	}

	const renderPosts = () => {
		return (
			<>
				{currentPosts.map((post, index) => (
					<div className='Details' key={index}>
						<a href={post.url} target='_blank' rel='noreferrer'>
							<Header3>{post.title}</Header3>
						</a>
						|<p className='EventDate'>{DateHandler(post.eventDate)}</p> |
						<p className='Location'>{post.location}</p>
					</div>
				))}
			</>
		)
	}

	const description = `Over the years, the DADSS Program has organized, presented at and\
	exhibited at a range of events – from traffic safety and advanced\
	technology conferences, to media events, to briefings with key\
	partners. Learn about past events and check back for upcoming ones.`

	return (
		<>
			<Head>
				<title>DADSS | Events</title>
				<meta name='description' content={description} />
			</Head>
			<EventsWrapper>
				<HeadBlock>
					<Header1>Events</Header1>
					<Break>
						<hr></hr>
						<Circle></Circle>
						<hr />
					</Break>
				</HeadBlock>
				<ContentBlock className='OpeningContent'>
					<Content>
						Over the years, the DADSS Program has organized, presented at and
						exhibited at a range of events – from traffic safety and advanced
						technology conferences, to media events, to briefings with key
						partners. Learn about past events and check back for upcoming ones.
					</Content>
				</ContentBlock>
				<ContentBlock className='ContentWrapper'>
					{renderPosts()}
					<Pagination
						count={pageCount}
						page={currentPage}
						onChange={handleChange}
						className='Pagination'></Pagination>
				</ContentBlock>
			</EventsWrapper>
		</>
	)
}

const EventsWrapper = styled.div`
	margin-top: 85px;
	.OpeningContent {
		padding: 25px;
	}
	.ContentWrapper {
		display: flex;
		flex-direction: column;
		width: 100%;

		.Details {
			display: flex;
			flex-wrap: wrap;
			justify-content: left;
			align-items: center;
			width: 100%;
			max-width: 1000px;
			margin: 15px 0;
			font-weight: 500;
			font-size: 1.2rem;
			h3 {
				font-size: 1.2rem;
				margin: 0 8px 0 0;
				text-align: left;
				cursor: pointer;
			}
			a {
				text-decoration: none;
			}
			p {
				margin: 0 8px 0;
			}
		}
	}
	.Pagination {
		margin-top: 25px;
	}
`

export default Events
