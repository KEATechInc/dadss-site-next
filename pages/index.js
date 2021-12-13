import Head from 'next/head'
import ContentBlock from '../components/Layout/ContentBlock'
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft'
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight'
import Divider from '../components/Layout/Divider'
import { Typography, styled, Grid, Container } from '@mui/material'
import theme, { dadssGradient, bgGray, bgOrange } from '../src/theme'
import { NHTSA, ACTS } from '../components/Logos'
import ReactPlayer from 'react-player'
import { getClient, PortableText, urlFor } from '../lib/sanity'
import { homeQuery } from '../lib/queries'
import StandardButton from '../components/Layout/Button'

export default function Home({ homepageData }) {
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
        {homepageData.heroVideoUrl && (
          <div style={{ background: 'black', width: '100%' }}>
            <Container>
              <PlayerWrap>
                <Player
                  url={homepageData.heroVideoUrl}
                  width='100%'
                  height='100%'
                  controls={true}
                />
              </PlayerWrap>
            </Container>
          </div>
        )}

        {/* banner */}
        {homepageData.announcementBody && (
          <AnnouncementWrap>
            <ContentBlock background={dadssGradient} borderBottom={bgGray}>
              {homepageData.announcementHeader && (
                <Typography
                  variant='h4'
                  color='textSecondary'
                  align='center'
                  gutterBottom>
                  {homepageData.announcementHeader}
                </Typography>
              )}

              <Typography
                color='textSecondary'
                component={PortableText}
                blocks={homepageData.announcementBody}
              />

              {homepageData.announcementCtaUrl && (
                <a className='btnWrap' href={homepageData.announcementCtaUrl}>
                  <StandardButton color='secondary'>Learn More</StandardButton>
                </a>
              )}
            </ContentBlock>
          </AnnouncementWrap>
        )}

        {homepageData.quotation && (
          <ContentBlock>
            <Typography variant='h4' component='p' align='center'>
              <ImQuotesLeft
                style={{ marginRight: theme.spacing(2), fontSize: '.9em' }}
              />
              {homepageData.quotation}
              <ImQuotesRight
                style={{ marginLeft: theme.spacing(2), fontSize: '.9em' }}
              />
            </Typography>
          </ContentBlock>
        )}

        {/* content start - section one */}
        {homepageData.sectionOneBody && (
          <ContentBlock>
            {homepageData.sectionOneImage && (
              <Image
                sx={{ mb: 4 }}
                src={urlFor(homepageData.sectionOneImage)}
                height={150}
                width={150}
              />
            )}

            {homepageData.sectionOneHeader && (
              <>
                <Typography
                  variant='h2'
                  align='center'
                  color='primary'
                  gutterBottom>
                  {homepageData.sectionOneHeader}
                </Typography>
                <Divider />
              </>
            )}

            <Typography
              component={PortableText}
              blocks={homepageData.sectionOneBody}
            />

            {homepageData.sectionOneCtaUrl && (
              <a className='btnWrap' href={homepageData.sectionOneCtaUrl}>
                <StandardButton color='primary'>
                  {homepageData.sectionOneCtaCaption}
                </StandardButton>
              </a>
            )}
          </ContentBlock>
        )}

        {homepageData.sectionTwoBody && (
          <ContentBlock>
            {homepageData.sectionTwoImage && (
              <Image
                sx={{ mb: 4 }}
                src={urlFor(homepageData.sectionTwoImage)}
                height={100}
              />
            )}

            {homepageData.sectionTwoHeader && (
              <>
                <Typography
                  variant='h2'
                  align='center'
                  color='primary'
                  gutterBottom>
                  {homepageData.sectionTwoHeader}
                </Typography>
                <Divider />
              </>
            )}

            {homepageData.sectionTwoBody && (
              <Typography
                component={PortableText}
                blocks={homepageData.sectionTwoBody}
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

            {homepageData.sectionTwoCtaUrl && (
              <a className='btnWrap' href={homepageData.sectionTwoCtaUrl}>
                <StandardButton color='primary'>
                  {homepageData.sectionTwoCtaCaption}
                </StandardButton>
              </a>
            )}
          </ContentBlock>
        )}

        {/* horizontal technologies section */}
        {homepageData.horizontalSectionHeader && (
          <ContentBlock
            background={bgGray}
            borderTop={bgOrange}
            borderBottom={bgOrange}
            header={homepageData.horizontalSectionHeader}
            headerColor={'#fff'}
            fontColor={'#fff'}
            divider
            dividerColor={bgOrange}>
            {homepageData.horizontalSubHeaderCopy && (
              <Typography
                component={PortableText}
                blocks={homepageData.horizontalSubHeaderCopy}
              />
            )}

            <Grid container spacing={4}>
              {homepageData.horizontalSubSectionOneBody && (
                <SubContent item xs={12} sm={6}>
                  {homepageData.horizontalSubSectionImageOne && (
                    <Image
                      src={urlFor(homepageData.horizontalSubSectionImageOne)}
                      height={150}
                      width={115}
                    />
                  )}
                  {homepageData.horizontalSubSectionHeaderOne && (
                    <>
                      <Typography variant='h4' gutterBottom>
                        {homepageData.horizontalSubSectionHeaderOne}
                      </Typography>
                      <Divider size='small' />
                    </>
                  )}
                  <Typography
                    sx={{ height: '100%' }}
                    component={PortableText}
                    blocks={homepageData.horizontalSubSectionOneBody}
                  />
                  {homepageData.horizontalSubSectionOneCtaUrl &&
                    homepageData.horizontalSubSectionOneCtaCaption && (
                      <a
                        className='btnWrap'
                        href={homepageData.horizontalSubSectionOneCtaUrl}>
                        <StandardButton color='primary'>
                          {homepageData.horizontalSubSectionOneCtaCaption}
                        </StandardButton>
                      </a>
                    )}
                </SubContent>
              )}

              {homepageData.horizontalSubSectionTwoBody && (
                <SubContent item xs={12} sm={6}>
                  {homepageData.horizontalSubSectionImageTwo && (
                    <Image
                      src={urlFor(homepageData.horizontalSubSectionImageTwo)}
                      height={150}
                      width={115}
                    />
                  )}

                  {homepageData.horizontalSubSectionHeaderTwo && (
                    <>
                      <Typography variant='h4' gutterBottom>
                        {homepageData.horizontalSubSectionHeaderTwo}
                      </Typography>
                      <Divider size='small' />
                    </>
                  )}

                  <Typography
                    component={PortableText}
                    blocks={homepageData.horizontalSubSectionTwoBody}
                    sx={{ height: '100%' }}
                  />

                  {homepageData.horizontalSubSectionTwoCtaUrl &&
                    homepageData.horizontalSubSectionTwoCtaCaption && (
                      <a
                        className='btnWrap'
                        href={homepageData.horizontalSubSectionTwoCtaUrl}>
                        <StandardButton color='primary'>
                          {homepageData.horizontalSubSectionTwoCtaCaption}
                        </StandardButton>
                      </a>
                    )}
                </SubContent>
              )}
            </Grid>
          </ContentBlock>
        )}

        {/* generic page builder sections */}
        {homepageData.pageBuilder &&
          homepageData.pageBuilder.map((section, i) => {
            return (
              <ContentBlock key={i} header={section.sectionHeader} divider>
                <Typography
                  component={PortableText}
                  blocks={section.sectionBody}
                />
                <a className='btnWrap' href={section.ctaUrl}>
                  <StandardButton color='primary'>
                    {section.ctaCaption}
                  </StandardButton>
                </a>
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
export const getStaticProps = async ({ preview = false }) => {
  const homepageData = await getClient(preview).fetch(homeQuery)

  return {
    props: {
      preview,
      homepageData,
    },
  }
}
