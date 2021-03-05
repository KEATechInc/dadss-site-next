import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import {
	Break,
	Circle,
	HeadBlock,
	Header1,
	Header2,
	bgGray,
	fontGray,
	ContentBlock,
	dtpBlue,
	boxShadow,
	dtpLightBlue,
	bgOrange,
} from '../../styles/generalStyles'
import { formatDate } from '../../util/dateHandler'
import { webinarQuery } from '../../lib/queries'
import { sanityClient, PortableText, urlFor } from '../../lib/sanity'

export const getStaticProps = async () => {
	const webinarInfo = await sanityClient.fetch(webinarQuery)

	const notFound = Object.keys(webinarInfo).length === 0 ? true : false
	console.log(notFound)

	return {
		props: {
			webinarInfo,
		},
		revalidate: 3600,
		notFound,
	}
}

const dtpLogo = '/assets/logos/dtpLogos/VA-logo.webp'
const HeroImage = '/assets/drivenToProtect/GreyWash1.jpg'

const Webinar = ({ webinarInfo }) => {
	const description = `${webinarInfo.details[0].children[0].text}`

	return (
		<>
			<Head>
				<title>DADSS | Webinar</title>
				<meta name='description' content={description} />
			</Head>
			<PageWrapper>
				<HeadBlock className='HeroImage'>
					<div className='LogoWrapper'>
						<Image
							src={dtpLogo}
							alt='DTP Logo'
							width={850}
							height={110}
							object-fit='cover'
							priority={true}
						/>
					</div>
				</HeadBlock>
				<HeadBlock>
					<Header1 className='Blue'>{webinarInfo.title}</Header1>
					<Break>
						<hr></hr>
						<Circle></Circle>
						<hr></hr>
					</Break>
				</HeadBlock>
				<ContentBlock className='Details'>
					<PortableText
						className='Block'
						blocks={webinarInfo.details}></PortableText>
				</ContentBlock>
				<ContentBlock className='CTASection'>
					<div className='CallToActionWrapper'>
						<Header2 className='White'>
							{webinarInfo.callToAction.caption}
						</Header2>
						<Break>
							<hr></hr>
						</Break>
						<p>
							<b>Date: </b>
							{formatDate(webinarInfo.callToAction.webinarDate)}
						</p>
						<p>
							<b>Time: </b>
							{webinarInfo.callToAction.webinarTime}
						</p>
						<div className='Register'>
							<b>How To Register: </b>
							<PortableText
								className='Block'
								blocks={webinarInfo.callToAction.howToRegister}></PortableText>
						</div>
					</div>
				</ContentBlock>
				<ContentBlock className='PanelistSection'>
					{webinarInfo.pageBuilder && (
						<>
							<Header2 className='Blue'>Expert Panelists</Header2>
							<Break>
								<hr></hr>
							</Break>
						</>
					)}

					{webinarInfo.pageBuilder.map((card, index) => (
						<div className='PanelistCard' key={index}>
							<img
								className='PanelistPortrait'
								src={urlFor(card.panelistPortrait)}
								alt={card.panelistPortrait.alt}
							/>
							<PortableText blocks={card.panelistDescription} />
						</div>
					))}
				</ContentBlock>
				<ContentBlock className='CalloutSection'>
					<div className='FooterCallout'>
						<Break>
							<hr></hr>
							<Circle></Circle>
							<hr></hr>
						</Break>
						<p>
							Driven to Protect is a public-private partnership between the
							Driver Alcohol Detection System for Safety (DADSS) Program and the
							Virginia Department of Motor Vehicles.
						</p>
						<Break>
							<hr></hr>
							<Circle></Circle>
							<hr></hr>
						</Break>
					</div>
				</ContentBlock>
			</PageWrapper>
		</>
	)
}

const PageWrapper = styled.div`
	margin-top: 85px;
	.HeroImage {
		background: ${bgGray};
		background-image: url(${HeroImage});
		background-repeat: no-repeat;
		background-position: right center;
		background-size: cover;
		height: 30vh;
		width: 100%;
		padding: 0;
		border-bottom: 5px solid ${fontGray};
		.LogoWrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			backdrop-filter: brightness(70%) blur(2px);
			padding: 25px;
		}
	}
	.Details {
		padding: 25px;
	}
	.Block {
		max-width: 1000px;
	}
	.CTASection {
		padding-top: 0;
		.CallToActionWrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			max-width: 1000px;
			background: ${dtpLightBlue};
			padding: 25px 25px 50px;
			border: 5px solid ${dtpBlue};
			color: white;
			box-shadow: ${boxShadow};
			p {
				margin: 0;
				display: inline;
			}
			a {
				color: ${bgOrange};
				font-weight: bold;
				text-decoration: none;
				:hover {
					text-decoration: underline;
				}
			}
			.Register {
				text-align: center;
			}
		}
	}
	a {
		color: ${dtpBlue};
		font-weight: bold;
		text-decoration: none;
		:hover {
			text-decoration: underline;
		}
	}
	.PanelistSection {
		.PanelistCard {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			max-width: 1000px;
			width: 100%;
			padding: 25px 0;
			.PanelistPortrait {
				max-width: 200px;
				width: 100%;
				height: auto;
				object-fit: contain;
				margin: 10px 25px 10px 10px;
				box-shadow: ${boxShadow};
			}
			p {
				max-width: 725px;
			}
		}
	}
	.CalloutSection {
		padding: 15px;
		.FooterCallout {
			display: flex;
			flex-direction: column;
			align-items: center;
			p {
				font-size: 0.9em;
				width: 60%;
				text-align: center;
			}
		}
	}
`
export default Webinar
