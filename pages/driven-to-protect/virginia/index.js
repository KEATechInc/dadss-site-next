import { useRouter } from 'next/router'
import Head from 'next/head'
import Divider from '../../../components/Layout/Divider'
import HeroImage from '../../../components/Layout/HeroImage'
import ContentBlock from '../../../components/Layout/ContentBlock'
import { dtpBlue } from '../../../src/theme'
import { Container, Grid, Hidden, styled, Typography } from '@mui/material'
import LogoDivider from '../../../components/Layout/LogoDivider'
import { ACTS, NHTSA, DADSS, VADMV } from '../../../components/Logos'
import BlueButton from '../../../components/Layout/BlueButton'
import Image from 'next/image'
import heroBg from '../../../public/assets/drivenToProtect/GreyWash1.webp'
import dtpLogo from '../../../public/assets/logos/dtpLogos/VA-logo.webp'
import { dtpVaQuery } from '../../../lib/queries'
import { PortableText, getClient } from '../../../lib/sanity'

const DTPVirginia = ({ data }) => {
  const router = useRouter()

  if (!data || router.isFallback) {
    return null
  }
  const { page } = data
  const description = `Recognizing the potential of the DADSS technology to save lives by\
	preventing drunk driving, Virginia became the first state to use\
	NHTSA highway safety grant funds to partner with the DADSS Program\
	through the Department of Motor Vehicles.`

  return (
    <>
      <Head>
        <title>DADSS | DTP Virginia</title>
        <meta name='description' content={description} />
      </Head>

      <PageWrap>
        <HeroImage image={heroBg} darken>
          <Image
            src={dtpLogo}
            alt='DTP Logo'
            objectFit='contain'
            priority={true}
          />
        </HeroImage>

        <Container>
          <Grid container justifyContent='space-between' spacing={2}>
            <Grid item xs={12}>
              {page.pageHeader && (
                <>
                  <Typography
                    variant='h2'
                    color='primary'
                    align='center'
                    gutterBottom
                    sx={{ mt: 4, pb: 2, color: dtpBlue }}>
                    {page.pageHeader}
                  </Typography>
                  <Divider />
                </>
              )}
            </Grid>

            <Grid item md={8}>
              {page.introContent && (
                <Typography
                  component={PortableText}
                  blocks={page.introContent}
                />
              )}
              {page.pageBuilder &&
                page.pageBuilder.map((section, i) => {
                  const { sectionHeader, sectionBody, ctaCaption, ctaUrl } =
                    section
                  return (
                    <div key={i}>
                      {sectionHeader && (
                        <>
                          <Typography
                            color={dtpBlue}
                            sx={{ mt: 3 }}
                            variant='h3'>
                            {sectionHeader}
                          </Typography>
                          <Divider size='small' />
                        </>
                      )}
                      <Typography
                        component={PortableText}
                        blocks={sectionBody}
                        sx={{ width: '100%' }}
                      />
                      {ctaCaption && ctaUrl && (
                        <>
                          {/* asset download available ? use asset url : use supplied cta url */}
                          {page.assetUrl[i] ? (
                            <a
                              className='btnWrap'
                              href={page.assetUrl[i]}
                              target='_blank'
                              rel='noreferrer'>
                              <StandardButton>{ctaCaption}</StandardButton>
                            </a>
                          ) : (
                            <a
                              className='btnWrap'
                              href={ctaUrl.url}
                              target='_blank'
                              rel='noreferrer'>
                              <StandardButton>{ctaCaption}</StandardButton>
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  )
                })}
            </Grid>

            {/* sidebar */}
            <Hidden mdDown>
              <Grid item md={4}>
                <ContentBlock sticky sidebar>
                  {page.sidebarBuilder &&
                    page.sidebarBuilder.map((section, i) => {
                      const { sectionHeader, sectionBody, ctaCaption, ctaUrl } =
                        section
                      return (
                        <div key={i}>
                          <Typography variant='h5' sx={{ color: dtpBlue }}>
                            {sectionHeader}
                          </Typography>
                          <Divider size='small' />
                          <Typography
                            component={PortableText}
                            blocks={sectionBody}
                          />
                          {ctaCaption && ctaUrl && (
                            <>
                              {/* asset download available ? use asset url : use supplied cta url */}
                              {page.sidebarAssetUrl[i] ? (
                                <a
                                  className='btnWrap'
                                  href={page.sidebarAssetUrl[i]}
                                  target='_blank'
                                  rel='noreferrer'>
                                  <BlueButton sx={{ mb: 2 }} fullWidth>
                                    {ctaCaption}
                                  </BlueButton>
                                </a>
                              ) : (
                                <a
                                  className='btnWrap'
                                  href={ctaUrl.url}
                                  target='_blank'
                                  rel='noreferrer'>
                                  <BlueButton sx={{ mb: 2 }} fullWidth>
                                    {ctaCaption}
                                  </BlueButton>
                                </a>
                              )}
                            </>
                          )}
                        </div>
                      )
                    })}
                </ContentBlock>
              </Grid>
            </Hidden>

            {/* logo banner */}
            <Grid item xs={12}>
              <LogoDivider>
                <ACTS />
                <DADSS />
                <NHTSA />
                <VADMV />
              </LogoDivider>
            </Grid>
          </Grid>
        </Container>
      </PageWrap>
    </>
  )
}

export default DTPVirginia

const PageWrap = styled('main')({
  '& a': {
    color: dtpBlue,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
})

export const getStaticProps = async () => {
  const page = await getClient().fetch(dtpVaQuery)
  return {
    props: {
      data: { page },
    },
  }
}
