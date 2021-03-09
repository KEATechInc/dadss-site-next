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
} from '../../../styles/generalStyles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

const dtpLogo = '/assets/logos/dtpLogos/VA-logo.webp'
const acts = '/assets/logos/dtpLogos/acts-logo.webp'
const dadss = '/assets/logos/dtpLogos/dadss-logo.webp'
const dmv = '/assets/logos/dtpLogos/dmv-logo.webp'
const nhtsa = '/assets/logos/dtpLogos/nhtsa-logo.webp'
const VAimg1 = '/assets/drivenToProtect/virginia/vaimg1.webp'
const VAimg2 = '/assets/drivenToProtect/virginia/vaimg2.webp'
const VAimg3 = '/assets/drivenToProtect/virginia/vaimg3.webp'
const VAimg4 = '/assets/drivenToProtect/virginia/vaimg4.webp'
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
					<ContentBlock className='Content'>
						<Content>
							Recognizing the potential of the DADSS technology to save lives by
							preventing drunk driving, Virginia became the first state to use
							NHTSA highway safety grant funds to partner with the DADSS Program
							through the Department of Motor Vehicles. The partnership – Driven
							to Protect – is another example of the technological innovation
							happening in Virginia and the ongoing leadership the state is
							showing in the fight against drunk driving.
						</Content>
						<Content>
							Visit the{' '}
							<Hyperlink
								className='Blue'
								href='https://www.discoveryhub.actsautosafety.org/'
								target='_blank'
								rel='noreferrer'>
								Driven to Protect Discovery Hub
							</Hyperlink>{' '}
							for free educational resources.
						</Content>
						<Content>
							In 2018, Governor Northam and the Virginia DMV announced a
							partnership with James River Transportation to conduct in-vehicle,
							on-road test trials of the alcohol detection technology.
							Technology integrators installed prototypes of the breath-based
							sensors into four vehicles in the James River Transportation (JRT)
							commercial fleet. The data and feedback collected from the
							prototype sensors, as well as from the drivers themselves, have
							been invaluable to improve the technology as it is prepared for
							widespread commercialization.
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

						<Content>
							Drunk driving remains a major threat to all Virginia families and
							road users. In 2019, Virginia reported 7,048 alcohol-related
							crashes, 264 alcohol-related fatalities, 4,402 alcohol-related
							injuries and 18,648 DUI convictions on its roadways. Through
							Driven to Protect, Virginia continues to put the health and safety
							of its residents first by educating the next generation about
							responsible driving behavior and by advancing technology that can
							prevent additional drunk driving crashes, injuries, and deaths on
							its roads.
						</Content>
						<ul>
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
						</ul>
					</ContentBlock>
					<div className='ImgWrapper'>
						<Image
							src={VAimg1}
							alt='Driven to Protect'
							height={175}
							width={250}
							objectFit='cover'
							objectPosition='center'
						/>
						<Image
							src={VAimg2}
							alt='Driven to Protect'
							height={175}
							width={250}
							objectFit='cover'
							objectPosition='center'
						/>
						<Image
							src={VAimg3}
							alt='Driven to Protect'
							height={175}
							width={250}
							objectFit='cover'
							objectPosition='center'
						/>
						<Image
							src={VAimg4}
							alt='Driven to Protect'
							height={175}
							width={250}
							objectFit='cover'
							objectPosition='center'
						/>
					</div>
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
							<Image
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
							<Image
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
							<Image
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
							<Image
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
