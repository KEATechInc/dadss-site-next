import {
	PageWrap,
	HeroImage,
	transGray,
	Header1,
	ContentBlock,
	Header2,
	Content,
	ContainerH,
	MultiContentBlock,
	ContentCard,
	HubCardContainer,
	HubCardWrap,
	HubCardBack,
	HubCardFront,
	transDarkOrange,
	Break,
	Circle,
	boxShadow,
} from '../../styles/generalStyles'
import styled from 'styled-components'
import ReactPlayer from 'react-player/lazy'
import Head from 'next/head'
import ReactGA from 'react-ga'
import { useEffect } from 'react'

const landingHero = '/assets/landingPage/fw.png'

const brain = '/assets/landingPage/brain.jpg'
const shots = '/assets/landingPage/shots.jpg'
const whiskey = '/assets/landingPage/whiskey.jpg'
const BT = '/assets/landingPage/B-T.jpg'
const zero = '/assets/landingPage/zero.png'

const businessGuy = '/assets/landingPage/businessGuy.jpg'
const floyd = '/assets/landingPage/floyd.jpg'
const dash = '/assets/landingPage/dash.png'
const data = '/assets/landingPage/dataanalysis.png'

const description = `A landing page containing learning resources and educational modules detailing the dangers of driving under the influence and describe the efforts the DADSS program is taking to prevent them.`

export default function DiscoverHub() {
	useEffect(() => {
		ReactGA.initialize('UA-58614629-1')
		ReactGA.pageview(window.location.pathname)
	  }, [])

	return (
		<>
			<Head>
				<title>DADSS | Discovery Hub</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={description} />
			</Head>
			<PageWrap>
				<HeroImage
					landingHero={landingHero}
					position='center 50%'
					height='45vh'>
					<HeaderTextContainer>
						<div className='TextWrap'>
							<Header1 className='White'>Discovery Hub</Header1>
						</div>
					</HeaderTextContainer>
				</HeroImage>

				<ContentBlock className='Gray'>
					<Content style={{ padding: '25px 0' }}>
						<b>Welcome to the Discovery Hub.</b> Here, you can learn about the
						dangers of alcohol–impaired driving and the innovative technologies
						currently in development to make our roads and highways safer.
					</Content>
				</ContentBlock>

				<MultiContentBlock>
					<Header2 className='White'>Overview</Header2>
					<Break>
						<hr className='White' />
						<Circle className='White' />
						<hr className='White' />
					</Break>
					<ContainerH>
						<ContentCard>
							<Content className='Header'>
								Driver Alcohol Detection System for Safety (DADSS) Program
							</Content>
							<hr />
							<Content>
								DADSS is a first-of-its-kind, vehicle–integrated, alcohol
								detection technology. By passively detecting a driver's blood
								alcohol concentration (BAC), it prevents a car from moving while
								the driver’s BAC is at or above the legal limit of 0.08%.
							</Content>
							<Content>
								This technology must meet rigorous performance standards before
								it can be installed in cars or trucks. When ready, it will be
								offered to vehicle owners as a voluntary safety option, much
								like other driver–assist systems (i.e., automatic emergency
								braking or lane departure warning systems).
							</Content>
						</ContentCard>
						<ContentCard>
							<Content className='Header'>
								Key Partners in the DADSS Program
							</Content>
							<hr />
							<Content>DADSS Program partners include:</Content>
							<ul>
								<li>
									Automotive Coalition for Traffic Safety (ACTS), a Virginia
									nonprofit funded by the world's leading automakers
								</li>
								<li>
									U.S. Department of Transportation’s National Highway Traffic
									Safety Administration (NHTSA)
								</li>
								<li>
									Virginia Department of Motor Vehicle's Highway Safety Office
								</li>
							</ul>
							<Content>
								The DADSS Program is one of the most important government and
								private sector partnerships in recent years. Public-private
								partnerships like DADSS have led to innovations that enhance our
								everyday lives, such as internet, GPS, and the microchip.
							</Content>
						</ContentCard>
						<ContentCard>
							<Content className='Header'>
								DADSS Driven to Protect Discovery Hub
							</Content>
							<hr />
							<Content>The learning modules below allow you to:</Content>
							<ul>
								<li>
									Explore how alcohol is absorbed, processed and eliminated by
									the human body
								</li>
								<li>
									Learn how alcohol impairs your ability to safely operate a
									motor vehicle
								</li>
								<li>
									Obtain actionable information so you can avoid the dangers
									associated with drunk driving
								</li>
								<li>
									Find out how the novel DADSS technologies currently under
									development and testing will protect you and other motorists
									on the road in the future
								</li>
							</ul>
							<Content>
								There are also Science, Technology, Engineering, and Math (STEM)
								modules available so students can learn about the science and
								engineering behind the DADSS technologies.
							</Content>
						</ContentCard>
					</ContainerH>
				</MultiContentBlock>

				<ContentBlock className='Gray'>
					{eModules.length > 0 && (
						<>
							<Header2 className='White'>General Education Modules</Header2>
							<Break>
								<hr />
								<Circle />
								<hr />
							</Break>
							<HubCardContainer>
								<ContainerH>
									{eModules.map((module, index) => {
										return (
											<HubCardWrap key={index}>
												<a
													href={module.url}
													target='_blank'
													rel='noopener noreferrer'>
													<HubCardFront>
														<p>{module.title}</p>
													</HubCardFront>
													<HubCardBack bgImage={module.image}></HubCardBack>
												</a>
											</HubCardWrap>
										)
									})}
								</ContainerH>
							</HubCardContainer>
						</>
					)}

					{stemModules.length > 0 && (
						<>
							<Header2 className='White'>STEM Modules</Header2>
							<Break>
								<hr />
								<Circle />
								<hr />
							</Break>
							<HubCardContainer>
								<ContainerH>
									{stemModules.map((module, index) => {
										return (
											<HubCardWrap key={index}>
												<a
													href={module.url}
													target='_blank'
													rel='noopener noreferrer'>
													<HubCardFront background={transDarkOrange}>
														<p>{module.title}</p>
													</HubCardFront>
													<HubCardBack bgImage={module.image}></HubCardBack>
												</a>
											</HubCardWrap>
										)
									})}
								</ContainerH>
							</HubCardContainer>
						</>
					)}

					{videos.length > 0 && (
						<>
							<Header2 className='White'>Educational Videos</Header2>
							<Break>
								<hr />
								<Circle />
								<hr />
							</Break>
							<HubCardContainer>
								<ContainerH>
									{videos.map((video, index) => {
										return (
											<PlayerContainer key={index}>
												<Content className='TitleWrap'>{video.title}</Content>

												<div className='PlayerWrap'>
													<ReactPlayer
														key={index}
														className='ReactPlayer'
														url={video.url}
														width='100%'
														height='100%'
														controls={true}
													/>
												</div>
											</PlayerContainer>
										)
									})}
								</ContainerH>
							</HubCardContainer>
						</>
					)}
				</ContentBlock>
			</PageWrap>
		</>
	)
}

const HeaderTextContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	backdrop-filter: blur(0.5px);
	.TextWrap {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 25px;
		background: ${transGray};
		width: 100%;
	}
	h1 {
		width: 100%;
		text-align: right;
		margin: 0;
	}
`

const PlayerContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 400px;
	margin: 25px;
	justify-content: flex-end;
	align-items: center;
	.PlayerWrap {
		position: relative;
		padding-top: 56.25%;
		width: 100%;

		.ReactPlayer {
			position: absolute;
			top: 0;
			left: 0;
			box-shadow: ${boxShadow};
		}
	}
	.TitleWrap {
		text-align: center;
	}
`

const eModules = [
	{
		title: `The Brain, Lungs, and BAC (What's their role in Driving)`,
		image: brain,
		url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/The+Brains+Lungs+And+BAC+Whats+Their+Role+In+Driving/index.html#/`,
	},
	{
		title: `Alcohol Impaired Driving Informational`,
		image: shots,
		url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/Alcohol+Impaired+Driving+Informational/index.html#/`,
	},
	{
		title: `Alcohol Fact or Fiction`,
		image: whiskey,
		url: `https://kahoot.it/challenge/c581e616-fc89-49a8-aed0-7b79cc6ca52d_1614273467634`,
	},
	{
		title: `Breath and Touch Alcohol Detection Systems`,
		image: BT,
		url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/Breath+And+Touch+Alcohol+Detection+Systems+Raw/index.html#/`,
	},
	{
		title: `Underage Alcohol Use and Zero Tolerance Law Informational`,
		image: zero,
		url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/Underage+Alcohol+Use+and+Zero+Tolerance+Law+Informational/index.html#/`,
	},
]

const stemModules = [
	{
		title: `STEM Part 1: Spectroscopy `,
		image: floyd,
		url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/STEM+Part+1+Spectroscopy+Raw/index.html#/`,
	},
	{
		title: `STEM Part 2: The DADSS Benchtop Unit`,
		image: dash,
		url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/STEM+Part+2+The+DADSS+Benchtop+Unit+Raw/index.html#/`,
	},
	{
		title: `STEM Part 3a: Data Collection and Analysis (Basic)`,
		image: businessGuy,
		url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/STEM+Part+3a+Data+Collection+And+Analysis+Basic+Raw/index.html#/`,
	},
	{
		title: `STEM Part 3b: Data Collection and Analysis (Advanced)`,
		image: data,
		url: `https://dadss-d2p.s3.us-east-2.amazonaws.com/educational-modules/STEM+Part+3b+Data+Collection+And+Analysis+Advanced/index.html#/`,
	},
]

const videos = [
	{
		title: `The DADSS and Driven To Protect Demonstration Vehicle`,
		url: `https://youtu.be/D4AuGbnitZk`,
	},
	{
		title: `Overview of the DADSS Technology`,
		url: `https://youtu.be/SQK5H6h_JHc`,
	},
	{
		title: `First Anniversary of our Partnership with James River Transportation`,
		url: `https://youtu.be/LVud69MWn3Q`,
	},
	{
		title: `IIHS/HLDI Reception Featuring the DADSS and Driven To Protect Vehicle`,
		url: `https://youtu.be/ngkDsZ3sm-c`,
	},
	{
		title: `Time-lapse of a DADSS Vehicle Integration`,
		url: `https://youtu.be/JuGxxPAhbhI`,
	},
	{
		title: `A Day in the Life of a Breath Sensor: The Testing Process`,
		url: `https://youtu.be/P8fLx0OF57U`,
	},
]
