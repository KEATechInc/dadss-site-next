import Head from 'next/head'
import { webinarQuery, webinarSlugsQuery } from '../../lib/queries'
import { sanityClient, PortableText, urlFor } from '../../lib/sanity'
import HeroImage from '../../components/Layout/HeroImage'
import ContentBlock from '../../components/Layout/ContentBlock'
import theme, { dadssGradient, dtpBlue } from '../../src/theme'
import { Box, Typography, styled, Grid } from '@mui/material'
import Divider from '../../components/Layout/Divider'
import Image from 'next/image'

import dtpLogo from '../../public/assets/logos/dtpLogos/VA-logo.webp'
import heroBg from '../../public/assets/drivenToProtect/GreyWash1.webp'

const Webinar = ({ webinarData }) => {
  if (webinarData) {
    const { details, title, pageBuilder, embedZone } = webinarData
    const description = `${details[0].children[0].text}`
    const Header = (
      <Head>
        <title>DADSS | {title}</title>
        <meta name='description' content={description} />
      </Head>
    )

    return (
      <>
        {Header}
        <main>
          <HeroImage image={heroBg} darken>
            <Image src={dtpLogo} alt='DTP Logo' objectFit='contain' />
          </HeroImage>

          {/* webinar intro */}
          <ContentBlock
            header={title}
            headerColor={dtpBlue}
            linkColor={dtpBlue}
            divider>
            <Typography component={PortableText} blocks={details} />
          </ContentBlock>

          <ContentBlock noPadding>
            {/* grid start */}
            <Grid
              container
              justifyContent='space-between'
              direction='row-reverse'
              spacing={3}>
              {/* google form section */}
              {embedZone.src && (
                <Grid
                  item
                  md={4}
                  container
                  justifyContent='center'
                  sx={{ mb: 3 }}>
                  <iframe
                    src={embedZone.src}
                    width='640'
                    height='1000'
                    frameBorder='0'
                    marginHeight='0'
                    marginWidth='0'>
                    Loading…
                  </iframe>
                </Grid>
              )}

              {/* panelists section*/}
              <Grid item md={embedZone.src ? 8 : 12} sx={{ mb: 3 }}>
                {pageBuilder && (
                  <>
                    <Typography variant='h3' style={{ color: dtpBlue }}>
                      Event Speakers
                    </Typography>
                    <Divider size='small' />
                  </>
                )}
                {pageBuilder.map((card, index) => {
                  const { panelistPortrait, panelistDescription } = card
                  return (
                    <Box mb={3} key={index}>
                      <PanelistCard container spacing={3} alignItems='center'>
                        <Grid item sm={3} container justifyContent='center'>
                          <Image
                            src={urlFor(panelistPortrait).url()}
                            alt={panelistPortrait.alt}
                            width={720}
                            height={1080}
                          />
                        </Grid>
                        <Grid item sm={9}>
                          <Typography
                            component={PortableText}
                            blocks={panelistDescription}
                          />
                        </Grid>
                      </PanelistCard>
                    </Box>
                  )
                })}
              </Grid>
            </Grid>
          </ContentBlock>
          <ContentBlock noPadding>
            <Divider />
            <Typography align='center'>
              <b>
                Driven to Protect is a public-private partnership between the
                Driver Alcohol Detection System for Safety (DADSS) Program and
                the Virginia Department of Motor Vehicles.
              </b>
            </Typography>
            <Divider />
          </ContentBlock>
        </main>
      </>
    )
  }
  return null
}

export default Webinar

const PanelistCard = styled(Grid)({
  fontSize: 16,
  '& p': {
    marginTop: 0,
  },
  '& img': {
    height: 200,
    width: '100%',
    objectFit: 'cover',
    boxShadow: theme.shadows[1],
    background: dadssGradient,
  },
})

// prerender
export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(webinarSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug = '' } = params
  const webinarData = await sanityClient.fetch(webinarQuery, {
    slug: slug,
  })
  const notFound = Object.keys(webinarData).length === 0 ? true : false
  return {
    props: {
      webinarData,
    },
    notFound,
  }
}
