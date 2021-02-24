import styled from 'styled-components'
import Image from 'next/image'

const aamva = '/assets/logos/supporters/aamva.webp'
const ahua = '/assets/logos/supporters/ahua.webp'
const dscus = '/assets/logos/supporters/dscus.webp'
const faar = '/assets/logos/supporters/faar.webp'
const fia = '/assets/logos/supporters/fia.webp'
const ghsa = '/assets/logos/supporters/ghsa.webp'
const iihs = '/assets/logos/supporters/iihs.webp'
const madd = '/assets/logos/supporters/madd.webp'
const nationwide = '/assets/logos/supporters/nationwide.webp'
const noys = '/assets/logos/supporters/noys.webp'
const nsc = '/assets/logos/supporters/nsc.webp'
const skw = '/assets/logos/supporters/skw.webp'

const images = [
	{
		src: aamva,
		url: 'https://www.aamva.org/',
	},
	{
		src: ahua,
		url: 'https://www.highways.org/',
	},
	{ src: dscus, url: 'https://www.distilledspirits.org/' },
	{ src: faar, url: 'https://www.responsibility.org/' },
	{ src: fia, url: 'https://www.fiafoundation.org/' },
	{
		src: ghsa,
		url: 'http://www.ghsa.org/',
	},
	{
		src: iihs,
		url: 'https://www.iihs.org/',
	},
	{
		src: madd,
		url: 'https://www.madd.org/',
	},
	{
		src: noys,
		url: 'https://noys.org/',
	},
	{
		src: nationwide,
		url: 'https://www.nationwide.com/',
	},
	{
		src: nsc,
		url: 'https://www.nsc.org/?',
	},
	{
		src: skw,
		url: 'https://www.safekids.org/',
	},
]

const imgGrid = images.map((image, index) => {
	return (
		<Image
			src={image.src}
			alt='Supporter Logo'
			key={index}
			height={142}
			width={275}
			priority={true}
			onClick={() => window.open(`${image.url}`, '_blank')}
		/>
	)
})

const GridWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	max-width: 900px;
	min-height: 550px;
	margin-bottom: 25px;
	width: 90%;

	img {
		:hover {
			cursor: pointer;
		}
	}
`
const ImageGrid = () => {
	return <GridWrap>{imgGrid}</GridWrap>
}

export default ImageGrid
