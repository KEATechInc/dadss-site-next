import Head from 'next/head'
import { webinarQuery } from '../../lib/queries'
import { sanityClient, PortableText, urlFor } from '../../lib/sanity'
import HeroImage from '../../components/Layout/HeroImage'
import ContentBlock from '../../components/Layout/ContentBlock'
import theme, { bgOrange, dtpBlue } from '../../src/theme'
import { Box, Typography, styled, Grid } from '@mui/material'
import Divider from '../../components/Layout/Divider'
import Image from 'next/image'

import dtpLogo from '../../public/assets/logos/dtpLogos/VA-logo.webp'
import revalidate from '../../util/revalidate'
import heroBg from '../../public/assets/drivenToProtect/GreyWash1.webp'

const Webinar = ({ webinarInfo }) => {
  const description = `${webinarInfo.details[0].children[0].text}`

  return (
    <>
      <Head>
        <title>DADSS | Webinar</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <HeroImage image={heroBg} darken>
          <Image src={dtpLogo} alt='DTP Logo' objectFit='contain' />
        </HeroImage>

        {/* webinar intro */}
        <ContentBlock
          header={webinarInfo.title}
          headerColor={dtpBlue}
          linkColor={dtpBlue}
          divider>
          <Typography component={PortableText} blocks={webinarInfo.details} />
        </ContentBlock>

        {/* webinar call to action */}
        {/* <ContentBlock
          background={dtpLightBlue}
          borderTop={dtpBlue}
          borderBottom={dtpBlue}
          fontColor='white'>
          <Typography variant='h3' style={{ textTransform: 'capitalize' }}>
            {webinarInfo.callToAction.caption}
          </Typography>
          <Divider size='small' />
          <CalloutBox>
            <Typography>
              <b>Date: </b>
              {formatDate(webinarInfo.callToAction.webinarDate)}
            </Typography>

            <Typography>
              <b>Time: </b>
              {webinarInfo.callToAction.webinarTime}
            </Typography>

            <Typography style={{ marginRight: theme.spacing(1) }}>
              <b>How To Register: </b>{' '}
            </Typography>
            <PortableText blocks={webinarInfo.callToAction.howToRegister} />
          </CalloutBox>
        </ContentBlock> */}

        {/* panelist section */}
        <ContentBlock noPadding>
          <Grid container justifyContent='center'>
            <Grid item md={6} sx={{ mb: 3 }}>
              {webinarInfo.pageBuilder && (
                <>
                  <Typography variant='h3' style={{ color: dtpBlue }}>
                    Meet The Expert Panelists
                  </Typography>
                  <Divider size='small' />
                </>
              )}

              {webinarInfo.pageBuilder.map((card, index) => {
                return (
                  <Box mb={3} key={index}>
                    <PanelistCard
                      container
                      spacing={3}
                      justifyContent='center'
                      alignItems='center'>

                      <Grid item sm={3}>
                        <Image
                          src={urlFor(card.panelistPortrait).url()}
                          alt={card.panelistPortrait.alt}
                          width={350}
                          height={350}
                        />
                      </Grid>
                      <Grid item sm={9}>
                        <Typography
                          component={PortableText}
                          blocks={card.panelistDescription}
                        />
                      </Grid>
                    </PanelistCard>
                  </Box>
                )
              })}
            </Grid>

            <Grid item md={6}>
              <iframe
                src='https://docs.google.com/forms/d/e/1FAIpQLSfZhh67QvXM3jIEEfL3ETjp4rKmybhR7Jkr9hOjaG9eJObPwA/viewform?embedded=true'
                width='600'
                height='1286'
                frameborder='0'
                marginheight='0'
                marginwidth='0'>
                Loading…
              </iframe>
            </Grid>

          </Grid>
        </ContentBlock>
        <ContentBlock>
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

const CalloutBox = styled(Box)({
  width: '100%',
  fontSize: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  '& a': {
    color: bgOrange,
  },
})
const PanelistCard = styled(Grid)({
  fontSize: 16,
  '& img': {
    height: 150,
    width: '100%',
    objectFit: 'cover',
    boxShadow: theme.shadows[1],
  },
})

// prerender

export const getStaticProps = async () => {
  const webinarInfo = await sanityClient.fetch(webinarQuery)

  const notFound = Object.keys(webinarInfo).length === 0 ? true : false

  return {
    props: {
      webinarInfo,
    },
    revalidate: revalidate,
    notFound,
  }
}
