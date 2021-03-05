import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import {
	Break,
	Circle,
	ContentBlock,
	HeadBlock,
	Header1,
	Header2,
	Header3,
	Content,
	dtpBlue,
} from '../../../../styles/generalStyles'
import { formatDate, getYear } from '../../../../util/dateHandler'
import Head from 'next/head'
import { sanityClient } from '../../../../lib/sanity'
import { eventsVaQuery } from '../../../../lib/queries'
import { Pagination } from '@material-ui/lab'

export const getStaticProps = async () => {
	const events = await sanityClient.fetch(eventsVaQuery)

	return {
		props: {
			events,
		},
		revalidate: 86400,
	}
}

const EventsDTPVA = (props) => {
	useEffect(() => {
		ReactGA.initialize('UA-58614629-1')
		ReactGA.pageview(window.location.pathname)
	}, [])

	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(10)

	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = props.events.slice(indexOfFirstPost, indexOfLastPost)
	const totalPosts = props.events.length
	const pageCount = Math.ceil(totalPosts / postsPerPage)

	const handleChange = (event, value) => {
		setCurrentPage(value)
		window.scrollTo(0, 0)
	}

	const years = props.events.map((post) => {
		return getYear(post.eventDate)
	})
	const uniqueYears = [...new Set(years)]

	const sortPosts = (sortByYear) => {
		const sortedPosts = currentPosts.filter((posts) => {
			return getYear(posts.eventDate) == sortByYear
		})
		return sortedPosts
	}

	const renderPosts = (sortedPosts) => {
		return (
			<>
				{sortedPosts.map((post) => (
					<div className='Details' key={post.title}>
						<a href={post.url} target='_blank' rel='noreferrer'>
							<Header3>{post.title}</Header3>
						</a>
						|<p className='EventDate'>{formatDate(post.eventDate)}</p> |
						<p className='Location'>{post.location}</p>
					</div>
				))}
			</>
		)
	}

	const description = `Driven to Protect will be at conferences,\
    events and venues throughout Virginia in the coming months.\
    Find out when Driven to Protect will be exhibiting\
    or presenting near you.`

	return (
		<>
			<Head>
				<title>DADSS | Events</title>
				<meta name='description' content={description} />
			</Head>
			<EventsWrapper>
				<HeadBlock>
					<Header1 className='Blue'>Events</Header1>
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
					{uniqueYears.map((year) => {
						return (
							<>
								{sortPosts(year).length > 0 && (
									<>
										<Header2 className='Blue'>{year}</Header2>
										<Break>
											<hr />
										</Break>
										{renderPosts(sortPosts(year))}
									</>
								)}
							</>
						)
					})}
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
				color: ${dtpBlue};
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

export default EventsDTPVA
