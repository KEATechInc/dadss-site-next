import ReactGA from 'react-ga'
import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import {
	HeadBlock,
	Header1,
	Header3,
	Break,
	Circle,
	ContentBlock,
	Content,
	Hyperlink,
} from '../styles/generalStyles'

const DADSSLogo = '/assets/logos/graphic-logo-car.svg'

const PageNotFound = () => {
	useEffect(() => {
		ReactGA.initialize('UA-58614629-1')
		ReactGA.pageview(window.location.pathname)
	}, [])

	const description = `Oops. It appears something has gone wrong.`

	return (
		<>
			<Head>
				<title>DADSS | 404 - Page Not Found</title>
				<meta name='description' content={description} />
			</Head>
			<BodyWrapper>
				<HeadBlock>
					<Header1>Page Not Found</Header1>
					<Break>
						<hr />
						<Circle></Circle>
						<hr />
					</Break>
				</HeadBlock>
				<ContentBlock>
					<Header3>Oops. Something has gone wrong.</Header3>
					<img src={DADSSLogo} alt='DADSS Car Logo' />
					<Content>
						Sorry about that. Follow this link to{' '}
						<Link href='/'>
							<Hyperlink>Return Home</Hyperlink>
						</Link>
						.
					</Content>
				</ContentBlock>
			</BodyWrapper>
		</>
	)
}

const BodyWrapper = styled.div`
	margin-top: 85px;

	img {
		max-height: 150px;
		width: auto;
		margin: 25px;
	}
	p {
		text-align: center;
	}
`

export default PageNotFound
