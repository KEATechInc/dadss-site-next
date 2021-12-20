import { useRouter } from 'next/router'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import Head from 'next/head'
import Link from 'next/link'
import Thumb from '../../components/Layout/Thumb'
import ContentBlock from '../../components/Layout/ContentBlock'
import Divider from '../../components/Layout/Divider'
import { Grid, Typography, Box } from '@mui/material'
import theme, { dtpBlue } from '../../src/theme'
import HeroImage from '../../components/Layout/HeroImage'
import BlueButton from '../../components/Layout/BlueButton'
import Image from 'next/image'
import { PortableText, getClient } from '../../lib/sanity'
import { dtpLandingQuery } from '../../lib/queries'

import heroBg from '../../public/assets/drivenToProtect/GreyWash2.webp'
const vaBg = '/assets/drivenToProtect/Blue-Image2.webp'
const mdBg = '/assets/drivenToProtect/Blue-Image1.webp'
import dtpLogo from '../../public/assets/logos/dtpLogos/DTP-logo.webp'

const DrivenToProtect = ({ data }) => {
  const router = useRouter()

  if (!data || router.isFallback) {
    return null
  }
  const { page } = data
  const description = `Driven to Protect is a public-private partnership between the\
	Driver Alcohol Detection System for Safety (DADSS) Program\
	and individual state governments that is helping to develop\
	technology to eliminate drunk driving and save lives.`

  return (
    <>
      <Head>
        <title>DADSS | Driven To Protect</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <HeroImage image={heroBg} darken>
          <Image
            src={dtpLogo}
            alt='DTP Logo'
            objectFit='contain'
            priority={true}
          />
        </HeroImage>

        <ContentBlock
          header={page.pageHeader}
          headerColor={dtpBlue}
          linkColor={dtpBlue}
          divider>
          {page.pageContent && (
            <Typography component={PortableText} blocks={page.pageContent} />
          )}

          <Grid sx={{ mt: 2 }} container spacing={3}>
            {/* virginia */}
            <Grid item sm={6}>
              <Thumb
                img={vaBg}
                url={'/driven-to-protect/virginia'}
                label={'Virginia'}
              />

              {page.vaCaption && (
                <Typography variant='body2' paragraph sx={{ mt: 2 }}>
                  {page.vaCaption}
                </Typography>
              )}

              <BlueButton
                fullWidth
                onClick={() => router.push('/driven-to-protect/virginia')}>
                Learn more <AiFillCaretRight />
              </BlueButton>
            </Grid>

            {/* maryland */}
            <Grid item sm={6}>
              <Thumb
                img={mdBg}
                url={'/driven-to-protect/maryland'}
                label={'Maryland'}
              />

              {page.mdCaption && (
                <Typography variant='body2' paragraph sx={{ mt: 2 }}>
                  {page.mdCaption}
                </Typography>
              )}

              <BlueButton
                fullWidth
                onClick={() => router.push('/driven-to-protect/maryland')}>
                Learn more <AiFillCaretRight />
              </BlueButton>
            </Grid>
          </Grid>
        </ContentBlock>
      </main>
    </>
  )
}

export default DrivenToProtect

export const getStaticProps = async () => {
  const page = await getClient().fetch(dtpLandingQuery)
  return {
    props: {
      data: { page },
    },
  }
}
