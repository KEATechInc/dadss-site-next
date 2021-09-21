import Head from 'next/head'
import ImageGrid from './imageGrid'
import ContentBlock from '../../components/Layout/ContentBlock'
import { Box, Typography } from '@mui/material'

const Supporters = () => {
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
import aamva from '../../public/assets/supportersImages/aamva.png'
import ahua from '../../public/assets//supportersImages/ahua.png'
import dscus from '../../public/assets//supportersImages/dscus.png'
import faar from '../../public/assets//supportersImages/faar.png'
import fia from '../../public/assets//supportersImages/fia.png'
import ghsa from '../../public/assets//supportersImages/ghsa.png'
import iihs from '../../public/assets//supportersImages/iihs.png'
import madd from '../../public/assets//supportersImages/madd.png'
import nationwide from '../../public/assets//supportersImages/nationwide.png'
import noys from '../../public/assets//supportersImages/noys.png'
import nsc from '../../public/assets//supportersImages/nsc.png'
import skw from '../../public/assets//supportersImages/skw.png'

// manufacturer imports
import bmw from '../../public/assets//manufacturerImages/bmw-group.png'
import ford from '../../public/assets//manufacturerImages/Ford.png'
import gm from '../../public/assets//manufacturerImages/gm.png'
import hyundai from '../../public/assets//manufacturerImages/hyundai.png'
import kia from '../../public/assets//manufacturerImages/kia.png'
import honda from '../../public/assets//manufacturerImages/honda.png'
import mazda from '../../public/assets//manufacturerImages/mazda.png'
import mercedes from '../../public/assets//manufacturerImages/mercedes.png'
import mitsubishi from '../../public/assets//manufacturerImages/mitsubishi.png'
import nissan from '../../public/assets//manufacturerImages/nissan.png'
import porsche from '../../public/assets//manufacturerImages/porsche.png'
import stellantis from '../../public/assets//manufacturerImages/stellantis.png'
import subaru from '../../public/assets//manufacturerImages/subaru.png'
import toyota from '../../public/assets//manufacturerImages/toyota.png'
import volkswagen from '../../public/assets//manufacturerImages/volkswagen.png'
import volvo from '../../public/assets//manufacturerImages/volvo.png'

export const manufacturerData = [
  {
    src: bmw,
    url: 'https://www.bmwgroup.com/en.html',
  },
  {
    src: ford,
    url: 'https://www.ford.com/',
  },
  {
    src: gm,
    url: 'https://www.gm.com/',
  },
  {
    src: honda,
    url: 'https://www.honda.com/',
  },
  {
    src: hyundai,
    url: 'https://www.hyundaiusa.com/us/en',
  },
  {
    src: kia,
    url: 'https://www.kia.com/us/en',
  },
  {
    src: mazda,
    url: 'https://www.mazdausa.com/',
  },
  {
    src: mercedes,
    url: 'https://www.mbusa.com/en/home',
  },
  {
    src: mitsubishi,
    url: 'https://www.mitsubishicars.com/#filter-modal',
  },
  {
    src: nissan,
    url: 'https://www.nissanusa.com/',
  },
  {
    src: porsche,
    url: 'https://www.porsche.com/usa/',
  },
  {
    src: stellantis,
    url: 'https://www.stellantis.com/en',
  },
  {
    src: subaru,
    url: 'https://www.subaru.com/index.html',
  },
  {
    src: toyota,
    url: 'https://www.toyota.com/',
  },
  {
    src: volkswagen,
    url: 'https://www.vw.com/en.html',
  },
  {
    src: volvo,
    url: 'https://www.volvocars.com/us',
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
