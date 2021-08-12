import Head from 'next/head'
import { formatDate } from '../../util/dateHandler'
import { webinarQuery } from '../../lib/queries'
import { sanityClient, PortableText, urlFor } from '../../lib/sanity'
import HeroImage from '../../components/Layout/HeroImage'
import ContentBlock from '../../components/Layout/ContentBlock'
import theme, { bgOrange, dtpBlue, dtpLightBlue } from '../../src/theme'
import { Box, Typography, styled, Grid } from '@material-ui/core'
import Divider from '../../components/Layout/Divider'
import Image from 'next/image'

export const getStaticProps = async () => {
  const webinarInfo = await sanityClient.fetch(webinarQuery)

  const notFound = Object.keys(webinarInfo).length === 0 ? true : false

  return {
    props: {
      webinarInfo,
    },
    revalidate: 300,
    notFound,
  }
}

import dtpLogo from '../../public/assets/logos/dtpLogos/VA-logo.webp'
const heroBg = '/assets/drivenToProtect/GreyWash1.webp'

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
        <ContentBlock
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
        </ContentBlock>

        {/* panelist section */}
        <ContentBlock>
          {webinarInfo.pageBuilder && (
            <>
              <Typography variant='h3' style={{ color: dtpBlue }}>
                Meet The Expert Panelists
              </Typography>
              <Divider />
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
        </ContentBlock>
        <ContentBlock>
          <Divider />
          <Typography align='center'>
            Driven to Protect is a public-private partnership between the Driver
            Alcohol Detection System for Safety (DADSS) Program and the Virginia
            Department of Motor Vehicles.
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
    height: 250,
    width: '100%',
    objectFit: 'cover',
    boxShadow: theme.shadows[1],
  },
})
