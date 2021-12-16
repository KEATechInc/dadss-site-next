import Head from 'next/head'
import ContentBlock from '../components/Layout/ContentBlock'
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft'
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight'
import Divider from '../components/Layout/Divider'
import { Typography, styled, Grid, Container } from '@mui/material'
import theme, { dadssGradient, bgGray, bgOrange } from '../src/theme'
import { NHTSA, ACTS } from '../components/Logos'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'
import { getClient, PortableText, urlFor } from '../lib/sanity'
import { homeQuery } from '../lib/queries'
import StandardButton from '../components/Layout/Button'

export default function Home({ data }) {
  const router = useRouter()

  if (!data.page || router.isFallback) {
    return null
  }

  const { page } = data

  const description =
    'Despite progress over the past three decades, drunk driving claims approximately 10,000 lives each year. The Driver Alcohol Detection System for Safety (DADSS) Program is researching a first-of-its-kind technology that holds the greatest potential we have seen to reverse this trend.'

  return (
    <>
      <Head>
        <title>Driver Alcohol Detection System for Safety (DADSS)</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        {/* video hero */}
        {page.heroVideoUrl && (
          <div style={{ background: 'black', width: '100%' }}>
            <Container>
              <PlayerWrap>
                <Player
                  url={page.heroVideoUrl}
                  width='100%'
                  height='100%'
                  controls={true}
                />
              </PlayerWrap>
            </Container>
          </div>
        )}

        {/* banner */}
        {page.announcementBody && (
          <AnnouncementWrap>
            <ContentBlock background={dadssGradient} borderBottom={bgGray}>
              {page.announcementHeader && (
                <Typography
                  variant='h4'
                  color='textSecondary'
                  align='center'
                  gutterBottom>
                  {page.announcementHeader}
                </Typography>
              )}

              <Typography
                color='textSecondary'
                component={PortableText}
                blocks={page.announcementBody}
              />

              {page.announcementCtaUrl && (
                <a className='btnWrap' href={page.announcementCtaUrl}>
                  <StandardButton color='secondary'>Learn More</StandardButton>
                </a>
              )}
            </ContentBlock>
          </AnnouncementWrap>
        )}

        {page.quotation && (
          <ContentBlock>
            <Typography variant='h4' component='p' align='center'>
              <ImQuotesLeft
                style={{ marginRight: theme.spacing(2), fontSize: '.9em' }}
              />
              {page.quotation}
              <ImQuotesRight
                style={{ marginLeft: theme.spacing(2), fontSize: '.9em' }}
              />
            </Typography>
          </ContentBlock>
        )}

        {/* content start - section one */}
        {page.sectionOneBody && (
          <ContentBlock
            headerImage={page.sectionOneImage}
            header={page.sectionOneHeader}
            divider>
            <Typography component={PortableText} blocks={page.sectionOneBody} />

            {page.sectionOneCtaUrl && (
              <a className='btnWrap' href={page.sectionOneCtaUrl}>
                <StandardButton color='primary'>
                  {page.sectionOneCtaCaption}
                </StandardButton>
              </a>
            )}
          </ContentBlock>
        )}

        {page.sectionTwoBody && (
          <ContentBlock
            headerImage={page.sectionTwoImage}
            header={page.sectionTwoHeader}
            divider>
            {page.sectionTwoBody && (
              <Typography
                component={PortableText}
                blocks={page.sectionTwoBody}
              />
            )}

            {/* figure out how to make this work through the CMS */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: 16,
              }}>
              <ACTS />
              <NHTSA />
            </div>

            {page.sectionTwoCtaUrl && (
              <a className='btnWrap' href={page.sectionTwoCtaUrl}>
                <StandardButton color='primary'>
                  {page.sectionTwoCtaCaption}
                </StandardButton>
              </a>
            )}
          </ContentBlock>
        )}

        {/* horizontal technologies section */}
        {page.horizontalSectionHeader && (
          <ContentBlock
            background={bgGray}
            borderTop={bgOrange}
            borderBottom={bgOrange}
            header={page.horizontalSectionHeader}
            headerColor={'#fff'}
            fontColor={'#fff'}
            divider
            dividerColor={bgOrange}>
            {page.horizontalSubHeaderCopy && (
              <Typography
                component={PortableText}
                blocks={page.horizontalSubHeaderCopy}
              />
            )}

            <Grid container spacing={4}>
              {page.horizontalSubSectionOneBody && (
                <SubContent item xs={12} sm={6}>
                  {page.horizontalSubSectionImageOne && (
                    <Image
                      src={urlFor(page.horizontalSubSectionImageOne)}
                      alt=''
                      height={150}
                      width={115}
                    />
                  )}
                  {page.horizontalSubSectionHeaderOne && (
                    <>
                      <Typography variant='h4' gutterBottom>
                        {page.horizontalSubSectionHeaderOne}
                      </Typography>
                      <Divider size='small' />
                    </>
                  )}
                  <Typography
                    sx={{ height: '100%' }}
                    component={PortableText}
                    blocks={page.horizontalSubSectionOneBody}
                  />
                  {page.horizontalSubSectionOneCtaUrl &&
                    page.horizontalSubSectionOneCtaCaption && (
                      <a
                        className='btnWrap'
                        href={page.horizontalSubSectionOneCtaUrl}>
                        <StandardButton color='primary'>
                          {page.horizontalSubSectionOneCtaCaption}
                        </StandardButton>
                      </a>
                    )}
                </SubContent>
              )}

              {page.horizontalSubSectionTwoBody && (
                <SubContent item xs={12} sm={6}>
                  {page.horizontalSubSectionImageTwo && (
                    <Image
                      src={urlFor(page.horizontalSubSectionImageTwo)}
                      alt=''
                      height={150}
                      width={115}
                    />
                  )}

                  {page.horizontalSubSectionHeaderTwo && (
                    <>
                      <Typography variant='h4' gutterBottom>
                        {page.horizontalSubSectionHeaderTwo}
                      </Typography>
                      <Divider size='small' />
                    </>
                  )}

                  <Typography
                    component={PortableText}
                    blocks={page.horizontalSubSectionTwoBody}
                    sx={{ height: '100%' }}
                  />

                  {page.horizontalSubSectionTwoCtaUrl &&
                    page.horizontalSubSectionTwoCtaCaption && (
                      <a
                        className='btnWrap'
                        href={page.horizontalSubSectionTwoCtaUrl}>
                        <StandardButton color='primary'>
                          {page.horizontalSubSectionTwoCtaCaption}
                        </StandardButton>
                      </a>
                    )}
                </SubContent>
              )}
            </Grid>
          </ContentBlock>
        )}

        {/* generic page builder sections */}
        {page.pageBuilder &&
          page.pageBuilder.map((section, i) => {
            const {
              sectionImage,
              sectionHeader,
              sectionBody,
              ctaCaption,
              ctaUrl,
            } = section
            return (
              <ContentBlock
                key={i}
                header={sectionHeader}
                headerImage={sectionImage}
                divider>
                <Typography component={PortableText} blocks={sectionBody} />
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
                      <a className='btnWrap' href={ctaUrl.url}>
                        <StandardButton>{ctaCaption}</StandardButton>
                      </a>
                    )}
                  </>
                )}
              </ContentBlock>
            )
          })}
      </main>
    </>
  )
}

const Image = styled('img')({
  margin: theme.spacing(1),
  marginBottom: theme.spacing(2),
})
const SubContent = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',
})
const PlayerWrap = styled('div')({
  position: 'relative',
  paddingTop: '56.25%',
  width: '100%',
  height: '100%',
})
const Player = styled(ReactPlayer)({
  position: 'absolute',
  top: 0,
  left: 0,
})
const AnnouncementWrap = styled('div')({
  '& p': {
    color: 'white',
  },
})

// prerender data
export const getStaticProps = async () => {
  const page = await getClient().fetch(homeQuery)

  return {
    props: {
      data: { page },
    },
  }
}
