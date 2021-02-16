import styled from 'styled-components'
import {
	HeadBlock,
	Header1,
	Hyperlink,
	Break,
	Circle,
	Content,
	ContentBlock,
} from '../../styles/generalStyles'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Contact = () => {
	const description = `For all general questions about the DADSS program, please email\
	info@dadss.org. For any media inquiries,\
	please email media@dadss.org.`

	const router = useRouter()

	return (
		<>
			<Head>
				<title>DADSS | Contact Us</title>
				<meta name='description' content={description} />
			</Head>
			<ContactWrapper>
				<HeadBlock>
					<Header1>Contact Us</Header1>
					<Break>
						<hr />
						<Circle />
						<hr />
					</Break>
				</HeadBlock>
				<ContentBlock>
					<Content>
						For all general questions about the DADSS program, please email{' '}
						<Hyperlink href='mailto:info@dadss.org?subject=I want to learn more about DADSS'>
							info@dadss.org
						</Hyperlink>
						. For any media inquiries, please email{' '}
						<Hyperlink href='mailto:media@dadss.org?subject=I have a question about DADSS media'>
							media@dadss.org
						</Hyperlink>
						.
					</Content>
					<Content>
						You can also visit our{' '}
						<Hyperlink onClick={() => router.push('/faq')}>
							Frequently Asked Questions
						</Hyperlink>{' '}
						and our{' '}
						<Hyperlink onClick={() => router.push('/news-updates')}>
							News and Updates
						</Hyperlink>{' '}
						pages. For additional background on the program and resulting
						technologies, visit our{' '}
						<Hyperlink onClick={() => router.push('/resources')}>
							Resources
						</Hyperlink>{' '}
						page.
					</Content>
				</ContentBlock>
			</ContactWrapper>
		</>
	)
}

const ContactWrapper = styled.div`
	margin-top: 85px;
	a {
		a {
			color: inherit;
		}
	}
`

export default Contact
