import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { DrivenToProtectWrapper } from '../../../styles/drivenToProtectStyles'
import {
	Content,
	ContentBlock,
	HeadBlock,
	Header1,
	Hyperlink,
	Break,
	Circle,
	Header2,
	Header3,
	Sidebar,
} from '../../../styles/generalStyles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'

const dtpLogo = '/assets/logos/dtpLogos/VA-logo.webp'
const acts = '/assets/logos/dtpLogos/acts-logo.webp'
const dadss = '/assets/logos/dtpLogos/dadss-logo.webp'
const dmv = '/assets/logos/dtpLogos/dmv-logo.webp'
const nhtsa = '/assets/logos/dtpLogos/nhtsa-logo.webp'
const PDF = '/assets/drivenToProtect/pdf/Driven-to-Protect-Overview.pdf'

const DTPVirginia = () => {
	useEffect(() => {
		ReactGA.initialize('UA-58614629-1')
		ReactGA.pageview(window.location.pathname)
	}, [])

	const description = `Recognizing the potential of the DADSS technology to save lives by\
	preventing drunk driving, Virginia became the first state to use\
	NHTSA highway safety grant funds to partner with the DADSS Program\
	through the Department of Motor Vehicles.`

	const router = useRouter()

	return (
		<>
			<Head>
				<title>DADSS | DTP Virginia</title>
				<meta name='description' content={description} />
			</Head>
			<DrivenToProtectWrapper className='Virginia'>
				<HeadBlock className='HeroImage'>
					<div className='LogoWrapper'>
						<img
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
					<Header1 className='Blue'>
						Virginia: The First State Partnership
					</Header1>
					<Break>
						<hr />
						<Circle />
						<hr />
					</Break>
				</HeadBlock>

				<div className='DivideWrapper'>
					<ContentBlock className='Content' style={{ paddingTop: '25px' }}>
						<Content>
							There’s an innovative technology undergoing developmental
							refinements that could save lives by preventing drunk driving –
							and Virginia is playing a critical role in making this technology
							a reality.
						</Content>
						<Content>
							The Automotive Coalition for Traffic Safety’s (ACTS) Driver
							Alcohol Detection System for Safety (DADSS) Program is developing
							advanced vehicle safety technology that can automatically detect
							when a driver is intoxicated with a blood alcohol concentration at
							or above 0.08% -- the legal limit in all 50 states except Utah
							(0.05%) – and prevent the car from moving. Virginia became the
							first state to partner with the DADSS Program. This partnership –
							the Driven to Protect Initiative– is an example of the
							technological innovation happening in Virginia.
						</Content>

						<Header2 className='Blue'>
							Real World Testing with James River Transportation
						</Header2>
						<Break>
							<hr />
						</Break>
						<Content>
							The DADSS Program is advancing the state of alcohol detection
							technology by developing a system that is fast, accurate,
							reliable, and affordable – all without affecting normal driving
							behavior.
						</Content>
						<Content>
							In 2018, Governor Northam and the Virginia DMV announced a
							partnership with ACTS and James River Transportation (JRT) to
							conduct in-vehicle, on-road test trials. Technology integrators
							installed prototypes of the breath sensors into vehicles in the
							JRT commercial fleet. The data and feedback collected from the
							prototype sensors, as well as from the drivers themselves, have
							been invaluable to improve the technology as it is prepared for
							widespread commercialization.
						</Content>

						<Header2 className='Blue'>ACTS Discovery Hub</Header2>
						<Break>
							<hr />
						</Break>
						<Content>
							In collaboration with the Virginia Department of Education, ACTS
							is developing and distributing a series of STEM lessons that put
							students in the shoes of the engineers and data analysts working
							on the DADSS technology. Virginia’s leadership in technology and
							innovation begins in our schools, and by showing students the
							practical application of their lessons, we can inspire a new
							generation to build technology that saves lives.
						</Content>
						<Content>
							Focusing on the DADSS technology and the Driven to Protect
							initiative, ACTS also developed virtual learning modules and video
							content that show how the technology works, how alcohol affects
							the body, statistics and laws about impaired driving in Virginia,
							and more. All of these resources are available to educators
							through the Virtual Virginia learning portal – earning them
							continuing education credits – and available to the general public
							at the{' '}
							<Hyperlink href='/discovery-hub' className='Blue'>
								Discovery Hub
							</Hyperlink>
							.
						</Content>

						<div className='VideoContainer'>
							<iframe
								title='Driven to Protect in Virginia'
								width='560'
								height='315'
								src='https://www.youtube.com/embed/lNb3L-dWXjg'
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowfullscreen></iframe>
						</div>

						<Header2 className='Blue'>More Resources</Header2>
						<Break>
							<hr />
						</Break>
						<Content>
							In 2020, Virginia reported 6,624 alcohol-related crashes, 272
							alcohol-related fatalities, 3,386 alcohol-related injuries on its
							roadways. Through Driven to Protect, Virginia continues to put the
							health and safety of its residents first by educating the next
							generation about responsible driving behavior and by advancing
							technology that can prevent additional drunk driving crashes,
							injuries, and deaths on its roads.
						</Content>

						<ul>
							<li>
								<Hyperlink
									className='Blue'
									href={PDF}
									target='_blank'
									rel='noreferrer'>
									Download overview about the Driven to Protect program in
									Virginia
								</Hyperlink>
							</li>
							<li>
								<Hyperlink
									className='Blue'
									onClick={() =>
										router.push('/driven-to-protect/virginia/events-VA')
									}>
									View past and upcoming events in Virginia, showcasing the
									technology
								</Hyperlink>
							</li>
							<li>
								<Hyperlink
									className='Blue'
									onClick={() => router.push('/resources')}>
									Find fact sheets, videos, and other resources
								</Hyperlink>
							</li>
							<li>
								<Hyperlink
									className='Blue'
									href='https://www.youtube.com/watch?v=Wk_DS91Y-mo'
									target='_blank'
									rel='noreferrer'>
									Hear from experts behind the technology development process
								</Hyperlink>
							</li>

							<li>
								<Hyperlink
									className='Blue'
									href='https://www.youtube.com/watch?v=pg3S7lltGRE'
									target='_blank'
									rel='noreferrer'>
									Hear from experts about how the technology can support fleet
									operators in furthering their safe driving goals
								</Hyperlink>
							</li>
						</ul>
					</ContentBlock>

					<Sidebar>
						<div className='sidebarCard'>
							<Header3 className='Blue'>Explore The Discovery Hub</Header3>
							<Break>
								<hr />
							</Break>
							<Content>
								In the Fall of 2020, we launched the Discovery Hub, offering
								free videos and educational resources – including a series of
								STEM- inspired lessons – about alcohol-impaired driving and the
								ways the DADSS technology can prevent it.
							</Content>
							<div className='learnMore'>
								<Hyperlink href='/discovery-hub' className='Blue'>
									Learn More <AiFillCaretRight />
								</Hyperlink>
							</div>
						</div>

						<div className='sidebarCard'>
							<Header3 className='Blue'>
								Get Involved with Youth Traffic Safety Month
							</Header3>
							<Break>
								<hr />
							</Break>
							<Content>
								Help us spread the word to your followers and networks by
								sharing social content, sending an e-newsletter or posting copy
								on your website.
							</Content>

							<div className='learnMore'>
								<Hyperlink
									href='https://thesocialpresskit.com/driven-to-protect-powered-by-dadss-virginia'
									target='_blank'
									rel='noreferrer'
									className='Blue'>
									Learn More <AiFillCaretRight />
								</Hyperlink>
							</div>
						</div>
					</Sidebar>
				</div>

				<Break>
					<hr />
					<Circle />
					<hr />
				</Break>

				<div className='LogoContainer'>
					<a
						href='https://www.dmv.virginia.gov/#/'
						target='_blank'
						rel='noreferrer'>
						<div className='LogoWrapper'>
							<img
								src={dmv}
								height={55}
								width={200}
								objectFit='contain'
								alt='DMV Logo'
							/>
						</div>
					</a>
					<a href='https://www.nhtsa.gov/' target='_blank' rel='noreferrer'>
						<div className='LogoWrapper'>
							<img
								src={nhtsa}
								height={70}
								width={190}
								objectFit='contain'
								alt='NHTSA Logo'
							/>
						</div>
					</a>

					<div className='LogoWrapper'>
						<Link href='/'>
							<img
								src={dadss}
								height={65}
								width={220}
								objectFit='contain'
								alt='DADSS Logo'
							/>
						</Link>
					</div>
					<div className='LogoWrapper'>
						<Link href='/driven-to-protect'>
							<img
								src={acts}
								height={60}
								width={150}
								objectFit='contain'
								alt='ACTS Logo'
							/>
						</Link>
					</div>
				</div>
				<Break>
					<hr />
					<Circle />
					<hr />
				</Break>
			</DrivenToProtectWrapper>
		</>
	)
}

export default DTPVirginia
