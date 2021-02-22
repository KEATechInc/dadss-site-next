import { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import {
	Break,
	Circle,
	Content,
	ContentBlock,
	HeadBlock,
	Header1,
	Header3,
	CardWrapper,
} from '../../../styles/generalStyles'
import DateHandler from '../../../components/Dates'
import { sanityClient, PortableText } from '../../../lib/sanity'
import Head from 'next/head'
import { publicationsQuery } from '../../../lib/queries'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import { Pagination } from '@material-ui/lab'

export const getStaticProps = async () => {
	const publications = await sanityClient.fetch(publicationsQuery)

	return {
		props: {
			publications,
		},
		revalidate: 86400,
	}
}

const Publications = (props) => {
	useEffect(() => {
		ReactGA.initialize('UA-58614629-1')
		ReactGA.pageview(window.location.pathname)
	}, [])

	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(3)

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = props.publications.slice(
		indexOfFirstPost,
		indexOfLastPost
	)
	const totalPosts = props.publications.length
	const pageCount = Math.ceil(totalPosts / postsPerPage)

	const handleChange = (event, value) => {
		setCurrentPage(value)
		window.scrollTo(0, 0)
	}

	// Render components
	const renderPosts = () => {
		return (
			<CardWrapper>
				{currentPosts.map((post, index) => (
					<div className='UpdateCard' key={index}>
						<a href={post.fileUpload} target='_blank' rel='noreferrer'>
							<Header3>{post.title}</Header3>
						</a>
						<p className='Subtitle'>{post.subtitle}</p>
						<p className='Category'>Paper Number: {post.paperNumber}</p>
						<p className='Published'>
							Published: {DateHandler(post.publishDate)}
						</p>
						<PortableText
							blocks={post.description}
							projectId='9i9p7w70'
							dataset='production'
							useCdn='true'
						/>
						<a
							className='More'
							href={post.fileUpload}
							target='_blank'
							rel='noreferrer'>
							Learn more <AiFillCaretRight />
						</a>
					</div>
				))}
			</CardWrapper>
		)
	}

	const description = `As with any research and development effort, the DADSS Research\
	Program has published findings throughout the process. In the links\
	below, you can access these articles and research papers, published\
  from 2009 through the present.`

	return (
		<>
			<Head>
				<title>DADSS | Publications</title>
				<meta name='description' content={description} />
			</Head>
			<PublicationWrapper>
				<HeadBlock>
					<Header1>Publications</Header1>
					<Break>
						<hr></hr>
						<Circle></Circle>
						<hr></hr>
					</Break>
				</HeadBlock>
				<ContentBlock className='OpenerContent'>
					<Content>
						As with any research and development effort, the DADSS Research
						Program has published findings throughout the process. In the links
						below, you can access these articles and research papers, published
						from 2009 through the present.
					</Content>
				</ContentBlock>
				<ContentBlock>
					{renderPosts()}
					<Pagination
						count={pageCount}
						page={currentPage}
						onChange={handleChange}
						className='Pagination'></Pagination>
				</ContentBlock>
			</PublicationWrapper>
		</>
	)
}

const PublicationWrapper = styled.div`
	margin-top: 85px;

	.OpenerContent {
		padding-bottom: 25px;
	}
	.Subtitle {
		font-weight: 600;
		text-transform: capitalize;
	}
	.Pagination {
		margin-top: 25px;
	}
`

export default Publications
