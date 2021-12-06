import Head from 'next/head'
import { webinarSlugsQuery } from '../../lib/queries'
import {
  PortableText,
  urlFor,
  usePreviewSubscription,
  getClient,
  filterDataToSingleItem,
} from '../../lib/sanity'
import { groq } from 'next-sanity'
import HeroImage from '../../components/Layout/HeroImage'
import ContentBlock from '../../components/Layout/ContentBlock'
import theme, { dadssGradient, dtpBlue } from '../../src/theme'
import { Box, Typography, styled, Grid } from '@mui/material'
import Divider from '../../components/Layout/Divider'
import Image from 'next/image'
import { useRouter } from 'next/router'

import dtpLogo from '../../public/assets/logos/dtpLogos/VA-logo.webp'
import heroBg from '../../public/assets/drivenToProtect/GreyWash1.webp'

const Webinar = ({ data, preview }) => {
  const router = useRouter()

  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  })

  // Client-side uses the same query, so we may need to filter it down again
  const page = filterDataToSingleItem(previewData, preview)

  if (!page || router.isFallback) {
    return null
  }

  const { details, title, pageBuilder, embedZone } = page
  const description = details ? details[0].children[0].text : ''

  return (
    <>
      <Head>
        <title>DADSS | {title}</title>
        <meta name='description' content={description} />
      </Head>
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
            {embedZone?.src && (
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
            <Grid item md={embedZone?.src ? 8 : 12} sx={{ mb: 3 }}>
              {pageBuilder && (
                <>
                  <Typography variant='h3' style={{ color: dtpBlue }}>
                    Event Speakers
                  </Typography>
                  <Divider size='small' />
                </>
              )}
              {pageBuilder?.map((card, index) => {
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
              Driver Alcohol Detection System for Safety (DADSS) Program and the
              Virginia Department of Motor Vehicles.
            </b>
          </Typography>
          <Divider />
        </ContentBlock>
      </main>
    </>
  )
}

export default Webinar

// styled components
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
export const getStaticProps = async ({ params, preview = false }) => {
  const query = groq`*[_type == "webinar" && slug.current == $slug]`
  const queryParams = { slug: params.slug }
  const previewData = await getClient(preview).fetch(query, queryParams)

  // Escape hatch, if the query failed to return data
  if (!previewData) return { notFound: true }

  // Helper function to reduce all returned documents down to just one
  const page = filterDataToSingleItem(previewData, preview)

  return {
    props: {
      preview,
      data: { page, query, queryParams },
    },
  }
}
export const getStaticPaths = async () => {
  const paths = await getClient().fetch(webinarSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
