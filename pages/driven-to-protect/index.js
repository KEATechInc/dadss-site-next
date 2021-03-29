import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { useRouter } from 'next/router'
import { DrivenToProtectWrapper } from '../../styles/drivenToProtectStyles'
import {
	Content,
	ContentBlock,
	HeadBlock,
	Header1,
	Hyperlink,
	Header2,
	Break,
	Circle,
} from '../../styles/generalStyles'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import Head from 'next/head'
import Image from 'next/image'

const dtpLogo = '/assets/logos/dtpLogos/DTP-logo.webp'
const description = `Driven to Protect is a public-private partnership between the\
	Driver Alcohol Detection System for Safety (DADSS) Program\
	and individual state governments that is helping to develop\
	technology to eliminate drunk driving and save lives.`

const DrivenToProtect = () => {
	useEffect(() => {
		ReactGA.initialize('UA-58614629-1')
		ReactGA.pageview(window.location.pathname)
	}, [])
	const router = useRouter()

	return (
		<>
			<Head>
				<title>DADSS | Driven To Protect</title>
				<meta name='description' content={description} />
			</Head>
			<DrivenToProtectWrapper>
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
					<Header1 className='Blue'>Driven to Protect</Header1>
					<Break>
						<hr />
						<Circle />
						<hr />
					</Break>
				</HeadBlock>
				<ContentBlock style={{paddingTop: '25px'}}>
					<Content>
						Driven to Protect is a public-private partnership between the{' '}
						<Hyperlink
							className='Blue'
							href='/'
							target='_blank'
							rel='noreferrer'>
							Driver Alcohol Detection System for Safety (DADSS) Program
						</Hyperlink>{' '}
						and individual state governments that is helping to develop
						technology to eliminate drunk driving and save lives.
					</Content>
					<Content>
						The vehicle-integrated alcohol detection technology will determine
						when a driver is impaired with a blood alcohol concentration at or
						above 0.08% and prevent the car from moving. The breakthrough
						technology will be fast, accurate, reliable, and affordable.
					</Content>
					<Content>
						<Hyperlink
							className='Blue'
							href='https://www.youtube.com/watch?v=vddF6HjKrZY'
							target='_blank'
							rel='noreferrer'>
							Virginia was the first state to join DADSS
						</Hyperlink>{' '}
						and help launch the Driven to Protect Initiative, followed by
						Maryland in 2019. Learn more about each state’s role in the fight
						against drunk driving below and visit the{' '}
						<Hyperlink
							className='Blue'
							href='https://www.discoveryhub.actsautosafety.org/'
							target='_blank'
							rel='noreferrer'>
							Driven to Protect Discovery Hub
						</Hyperlink>{' '}
						for free educational resources.
					</Content>
				</ContentBlock>
				<ContentBlock className='DirectoryWrapper' style={{paddingTop: '0'}}>
					<div className='Virginia'>
						<div
							className='ImgWrapper'
							onClick={() => router.push('/driven-to-protect/virginia')}>
							<Header2 className='White'>Virginia</Header2>
						</div>
						<Content>
							Learn how Virginia is testing the alcohol breath sensors in
							partnership with James River Transportation and introducing the
							technology to its citizens.
						</Content>
						<div className='LearnWrapper'>
							<Hyperlink
								className='Blue'
								onClick={() => router.push('/driven-to-protect/virginia')}>
								Learn more <AiFillCaretRight />
							</Hyperlink>
						</div>
					</div>
					<div className='Maryland'>
						<div
							className='ImgWrapper'
							onClick={() => router.push('/driven-to-protect/maryland')}>
							<Header2 className='White'>Maryland</Header2>
						</div>
						<Content>
							Learn how Maryland is putting the technology on the road by
							outfitting seven fleet vehicles with the alcohol breath sensors to
							gather real-world data.
						</Content>
						<div className='LearnWrapper'>
							<Hyperlink
								className='Blue'
								onClick={() => router.push('/driven-to-protect/maryland')}>
								Learn more <AiFillCaretRight />
							</Hyperlink>
						</div>
					</div>
				</ContentBlock>
			</DrivenToProtectWrapper>
		</>
	)
}

export default DrivenToProtect
