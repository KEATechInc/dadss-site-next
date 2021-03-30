import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {
	ContentBlock,
	Content,
	Header1,
	Header2,
	Header3,
	Button,
	Break,
	Circle,
	Hyperlink,
	PlayerContainer,
	ContainerH,
} from '../../styles/generalStyles'
import { AboutSection, Quote } from '../../styles/homeStyles'
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft'
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight'
import ReactPlayer from 'react-player'
import Link from 'next/link'

const Car = '/assets/logos/graphic-logo-car.svg'
const Family = '/assets/logos/graphic-family.svg'
const Breath = '/assets/logos/graphic-tech-breath.svg'
const Touch = '/assets/logos/graphic-tech-touch.svg'
const ACTS = '/assets/logos/supporters/dadss-acts.webp'
const NHTSA = '/assets/logos/supporters/dadss-nhtsa.webp'

export default function Home() {
	const router = useRouter()
	const description =
		'Despite progress over the past three decades, drunk driving claims approximately 10,000 lives each year. The Driver Alcohol Detection System for Safety (DADSS) Program is researching a first-of-its-kind technology that holds the greatest potential we have seen to reverse this trend.'

	return (
		<>
			<Head>
				<title>Driver Alcohol Detection System for Safety (DADSS)</title>
				<meta name='description' content={description} />
			</Head>
			<AboutSection>
				<section className='HeroWrapper'>
					<ContainerH>
						<PlayerContainer style={{ margin: '0' }}>
							<div className='PlayerWrap'>
								<ReactPlayer
									className='ReactPlayer shadowNone'
									title='Driver Alcohol Detection System for Safety'
									width='100%'
									height='100%'
									controls={true}
									url='https://www.youtube.com/embed/a_BojOOFiKg'
								/>
							</div>
						</PlayerContainer>
					</ContainerH>

					<ContentBlock className='Discovery Gray' style={{ padding: '25px' }}>
						<Header2 className='White'>Discovery Hub</Header2>
						<Content className='White'>
							Visit the Driven to Protect Discovery Hub to learn about the
							dangers of alcohol–impaired driving and the innovative technology
							the DADSS Program is developing to make our roads and highways
							safer.
						</Content>
						<Button
							onClick={() => {
								router.push('/discovery-hub')
							}}>
							Visit the Hub
						</Button>
					</ContentBlock>
				</section>

				<ContentBlock className='Work'>
					<Quote>
						<p>
							<ImQuotesLeft />
							Every year in the U.S., drunk driving claims approximately 10,000
							lives and costs approximately $194 billion.
							<ImQuotesRight />
						</p>
					</Quote>

					<Header1>Our Work</Header1>
					<Break>
						<hr /> <Circle /> <hr />
					</Break>

					<div className='ImageWrapper'>
						<Image
							src={Family}
							alt='DADSS Logo'
							className='ContentLogo Family'
							height={170}
							width={170}
							priority={true}
						/>
					</div>

					<Content>
						Despite progress over the past three decades, drunk driving claims
						approximately 10,000 lives each year. The Driver Alcohol Detection
						System for Safety (DADSS) Program is researching a first-of-its-kind
						technology that holds the greatest potential we have seen to reverse
						this trend. The technology will automatically detect when a driver
						is intoxicated with a blood alcohol concentration (BAC) at or above
						0.08% — the legal limit in all 50 states except Utah — and prevent
						the car from moving. Once it has met rigorous performance standards,
						it will be voluntarily offered as a safety option in new vehicles —
						like automatic braking, lane departure warning and other advanced
						driver assist vehicle technologies.
					</Content>
					<Content>
						Watch our{' '}
						<Hyperlink
							target='_blank'
							rel='noreferrer'
							href='https://www.youtube.com/watch?v=Wk_DS91Y-mo'>
							August 2020 "Ask The Experts" presentation
						</Hyperlink>{' '}
						for more on the technology development process.
					</Content>
				</ContentBlock>
				<ContentBlock className='DADSSBlock'>
					<Header2>About DADSS</Header2>
					<Break>
						<hr />
					</Break>
					<div className='ImageWrapper'>
						<Image
							src={Car}
							alt='DADSS Logo'
							className='ContentLogo DADSS'
							height={120}
							width={310}
						/>
					</div>

					<Content>
						The Driver Alcohol Detection System for Safety (DADSS) research
						program brings together the{' '}
						<b>Automotive Coalition for Traffic Safety (ACTS)</b>, which
						represents the world’s leading automakers, and the{' '}
						<b>National Highway Traffic Safety Administration (NHTSA) </b>
						in one of the most important government and private sector
						partnerships in recent years. Public-private partnerships like DADSS
						have led to innovations that enhance our everyday lives, such as the
						internet, GPS and the microchip.
					</Content>
					<Content>
						Congress and safety advocates nationwide are supporting the effort,
						making DADSS part of a multi-faceted national commitment to reduce
						and help eliminate drunk driving. The research and testing is being
						overseen by a team of independent engineers and scientists, and will
						be further tested under real-world operating conditions before it is
						made available as a consumer option.
					</Content>
					<div className='LogoContainer'>
						<a href='https://www.nhtsa.gov/' target='_blank' rel='noreferrer'>
							<div className='LogoWrapper'>
								<Image
									src={NHTSA}
									height={70}
									width={190}
									objectFit='contain'
									alt='NHTSA Logo'
								/>
							</div>
						</a>
						<div className='LogoWrapper'>
							<Link href='/driven-to-protect'>
								<Image
									src={ACTS}
									height={60}
									width={150}
									objectFit='contain'
									alt='ACTS Logo'
								/>
							</Link>
						</div>
					</div>
					<Button onClick={() => router.push('/program-overview')}>
						Program Overview
					</Button>
				</ContentBlock>
				<ContentBlock className='Orange Tech'>
					<Header2 className='Gray'>Technologies We're Exploring</Header2>
					<Break>
						<hr className='White' />
						<Circle className='White' />
						<hr className='White' />
					</Break>
					<Content>
						The goal of the DADSS Research Program is to advance the state of
						alcohol detection technology by developing a system that is fast,
						accurate, reliable and affordable — all without affecting normal
						driving behavior. The program is exploring two different
						technologies for installation in new vehicles: a breath-based system
						and a touch-based system.
					</Content>
					<div className='BlockWrapper'>
						<div className='SubWrapper'>
							<Image
								src={Breath}
								alt='Breath System'
								className='ContentLogo Breath'
								height={150}
								width={115}
							/>
							<Header3 className='Gray'>Breath-Based System</Header3>
							<Content>
								This system measures alcohol as a driver breathes normally, when
								in the driver's seat. It will be designed to take instantaneous
								readings as the driver breathes normally and to accurately and
								reliably distinguish between the driver’s breath and that of any
								passengers.
							</Content>
							<Button
								className='White'
								onClick={() => router.push('/breath-based-tech')}>
								Overview
							</Button>
						</div>
						<div className='SubWrapper'>
							<Image
								src={Touch}
								alt='Touch System'
								className='ContentLogo Touch'
								height={150}
								width={115}
							/>
							<Header3 className='Gray'>Touch-Based System</Header3>
							<Content>
								This technology measures blood alcohol levels under the skin’s
								surface by shining an infrared-light through the fingertip of
								the driver. It will be integrated into current vehicle controls,
								such as the start button or steering wheel, and take multiple,
								accurate readings.
							</Content>
							<Button
								className='White'
								onClick={() => router.push('/touch-based-tech')}>
								Overview
							</Button>
						</div>
					</div>
				</ContentBlock>

				<ContentBlock className='Gray Next'>
					<Header2 className='White'>What's Next?</Header2>
					<Break>
						<hr backgroundcolor='bgOrange' />
						<Circle backgroundcolor='bgOrange' />
						<hr backgroundcolor='bgOrange' />
					</Break>
					<Content className='White'>
						When the Program began in 2008, DADSS focused on research and
						creation of proof-of-concept laboratory prototypes to determine
						which technologies were most promising for vehicle integration.
					</Content>
					<Content className='White'>
						In 2013, ACTS and NHTSA extended their agreement to further develop
						and test the breath-based and touch-based prototypes to reduce the
						size and ensure they meet strict performance standards related to
						speed, accuracy, precision and reliability.
					</Content>
					<Content className='White'>
						As part of the ongoing research, the prototypes will be integrated
						into vehicles for a series of field tests, which will allow
						engineers to observe driver behavior in natural settings and
						thoroughly test the systems in real-world scenarios.
					</Content>
					<Content className='White'>
						It will take time for this pioneering technology to be available
						commercially, but developing a system that is seamless, accurate and
						reliable is the first step and a top priority.
					</Content>
					<Button onClick={() => router.push('/news')}>
						More News & Updates
					</Button>
				</ContentBlock>
			</AboutSection>
		</>
	)
}
