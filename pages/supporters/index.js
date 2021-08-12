import { useEffect } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import ImageGrid from './imageGrid'
import ContentBlock from '../../components/Layout/ContentBlock'
import { Box, Typography } from '@material-ui/core'

const Supporters = () => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const description = `The Driver Alcohol Detection System for Safety (DADSS) research\
  program is supported by safety and children’s advocates, insurance\
	companies, state and local government representatives and members of\
	the alcohol industry – who all agree that technology can be the\
	answer to the persistent problem of drunk driving.`

  return (
    <>
      <Head>
        <title>DADSS | Supporters</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <ContentBlock header='Our Supporters' divider>
          <Typography>
            The Driver Alcohol Detection System for Safety (DADSS) research
            program is supported by safety and children’s advocates, insurance
            companies, state and local government representatives and members of
            the alcohol industry – who all agree that technology can be the
            answer to the persistent problem of drunk driving.
          </Typography>

          <Box mt={3}>
            <Typography
              variant='h5'
              color='primary'
              align='center'
              gutterBottom>
              {`The world's leading car companies are involved in the DADSS
              research program, including:`}
            </Typography>

            <Box mt={2} mb={2}>
              <ImageGrid imageArray={manufacturerData} />
            </Box>
          </Box>

          <Box mb={3} mt={3}>
            <Typography
              variant='h5'
              color='primary'
              align='center'
              gutterBottom>
              Other supporters of the DADSS program include:
            </Typography>

            <Box mt={2} mb={2}>
              <ImageGrid imageArray={supportersData} />
            </Box>

            <Typography paragraph>
              If your organization is interested in supporting the DADSS
              program, please contact{' '}
              <a href='mailto:info@dadss.org?subject=I want to be a DADSS supporter'>
                info@dadss.org
              </a>
              .
            </Typography>
          </Box>
        </ContentBlock>
      </main>
    </>
  )
}

export default Supporters

// supporters imports
import aamva from './supportersImages/aamva.webp'
import ahua from './supportersImages/ahua.webp'
import dscus from './supportersImages/dscus.webp'
import faar from './supportersImages/faar.webp'
import fia from './supportersImages/fia.webp'
import ghsa from './supportersImages/ghsa.webp'
import iihs from './supportersImages/iihs.webp'
import madd from './supportersImages/madd.webp'
import nationwide from './supportersImages/nationwide.webp'
import noys from './supportersImages/noys.webp'
import nsc from './supportersImages/nsc.webp'
import skw from './supportersImages/skw.webp'

// manufacturer imports
import bmw from './manufacturerImages/bmw-group.webp'
import ford from './manufacturerImages/Ford.webp'
import gm from './manufacturerImages/gm.webp'
import hyundai from './manufacturerImages/hyundai.webp'
import kia from './manufacturerImages/kia.webp'
import honda from './manufacturerImages/honda.webp'
import mazda from './manufacturerImages/mazda.webp'
import mercedes from './manufacturerImages/mercedes.webp'
import mitsubishi from './manufacturerImages/mitsubishi.webp'
import nissan from './manufacturerImages/nissan.webp'
import porsche from './manufacturerImages/porsche.webp'
import stellantis from './manufacturerImages/stellantis.webp'
import subaru from './manufacturerImages/subaru.webp'
import toyota from './manufacturerImages/toyota.webp'
import volkswagen from './manufacturerImages/volkswagen.webp'
import volvo from './manufacturerImages/volvo.webp'

export const manufacturerData = [
	{
		src: bmw,
		url: 'https://www.bmwgroup.com/en.html'
	},	
	{
		src: ford,
		url: 'https://www.ford.com/'
	},	
	{
		src: gm,
		url: 'https://www.gm.com/'
	},	
	{
		src: honda,
		url: 'https://www.honda.com/'
	},	
	{
		src: hyundai,
		url: 'https://www.hyundaiusa.com/us/en'
	},	
	{
		src: kia,
		url: 'https://www.kia.com/us/en'
	},	
	{
		src: mazda,
		url: 'https://www.mazdausa.com/'
	},	
	{
		src: mercedes,
		url: 'https://www.mbusa.com/en/home'
	},	
	{
		src: mitsubishi,
		url: 'https://www.mitsubishicars.com/#filter-modal'
	},	
	{
		src: nissan,
		url: 'https://www.nissanusa.com/'
	},	
	{
		src: porsche,
		url: 'https://www.porsche.com/usa/'
	},	
	{
		src: stellantis,
		url: 'https://www.stellantis.com/en'
	},	
	{
		src: subaru,
		url: 'https://www.subaru.com/index.html'
	},	
	{
		src: toyota,
		url: 'https://www.toyota.com/'
	},	
	{
		src: volkswagen,
		url: 'https://www.vw.com/en.html'
	},	
	{
		src: volvo,
		url: 'https://www.volvocars.com/us'
	},	

]


export const supportersData = [
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
