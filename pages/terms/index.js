import styled from 'styled-components'
import {
	Content,
	ContentBlock,
	HeadBlock,
	Header1,
	Break,
	Circle,
} from '../../styles/generalStyles'
import Head from 'next/head'

const TermsWrapper = styled.div`
	margin-top: 85px;
`

const Terms = () => {
	const description = `By utilizing this site, you assume full responsibility for ensuring\
	your appropriate use and reliance upon the information and agree to\
	hold harmless ACTS and DADSS sponsors and partners for any claims\
	connected to your use of the information, other than those resulting\
	from ACTS violation of any third party’s proprietary rights.`

	return (
		<>
			<Head>
				<title>DADSS | Terms</title>
				<meta name='description' content={description} />
			</Head>
			<TermsWrapper>
				<HeadBlock>
					<Header1>Terms and Conditions</Header1>
					<Break>
						<hr />
						<Circle />
						<hr />
					</Break>
				</HeadBlock>
				<ContentBlock>
					<Content>
						Except for ACTS warranty that the information contained in the DADSS
						website has been provided from what it believes are reliable
						sources, the information in the DADSS website is provided “as is”
						and{' '}
						<b>
							no representation or warranty, express or implied, including any
							warranty of merchantability or of fitness for a particular purpose
							is made regarding the information. ACTS disclaims all
							responsibility and liability for the accuracy, completeness or
							currentness of the website.
						</b>
					</Content>
					<Content>
						By utilizing this site, you assume full responsibility for ensuring
						your appropriate use and reliance upon the information and agree to
						hold harmless ACTS and DADSS sponsors and partners for any claims
						connected to your use of the information, other than those resulting
						from ACTS violation of any third party’s proprietary rights.
					</Content>
				</ContentBlock>
			</TermsWrapper>
		</>
	)
}

export default Terms
