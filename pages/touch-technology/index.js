import React from 'react'
import { Typography } from '@mui/material'
import Head from 'next/head'
import ContentBlock from '../../components/Layout/ContentBlock'
import { bgGray, bgOrange, darkOrange, fontGray } from '../../src/theme'
import { useRouter } from 'next/router'
import { touchTechnology } from '../../lib/queries'
import { PortableText, getClient } from '../../lib/sanity'
import evenCheck from '../../lib/evenCheck'
import StandardButton from '../../components/Layout/StandardButton'

const TouchTech = ({ data }) => {
  const router = useRouter()

  if (!data || router.isFallback) {
    return null
  }
  const { page } = data
  const description = `The DADSS Research Program is working on a new approach to measuring\
	blood alcohol concentration: a touch system that uses\
	spectroscopy to measure alcohol in the driver’s tissue. This\
	technology broadens the options for an integrated system that can\
	reliably prevent drunk driving while remaining invisible to any\
	driver under the legal limit.`

  return (
    <>
      <Head>
        <title>DADSS | Touch Technology</title>
        <meta name='description' content={description} />
      </Head>

      <main>
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
                background={evenCheck(i) == 'odd' ? bgOrange : null}
                dividerColor={evenCheck(i) == 'odd' ? 'white' : null}
                headerColor={evenCheck(i) == 'odd' ? fontGray : null}
                fontColor={evenCheck(i) == 'odd' ? fontGray : null}
                borderTop={evenCheck(i) == 'odd' ? darkOrange : null}
                borderBottom={evenCheck(i) == 'odd' ? darkOrange : null}
                divider>
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
              </ContentBlock>
            )
          })}

        {page.calloutBoxContent && (
          <ContentBlock
            background={bgGray}
            fontColor='white'
            borderTop={bgOrange}
            borderBottom={bgOrange}
            linkColor={bgOrange}>
            {page.calloutBoxHeader && (
              <Typography component='h3' variant='h4'>
                {page.calloutBoxHeader}
              </Typography>
            )}
            <Typography
              component={PortableText}
              blocks={page.calloutBoxContent}
            />
          </ContentBlock>
        )}
      </main>
    </>
  )
}

export default TouchTech

export const getStaticProps = async () => {
  const page = await getClient().fetch(touchTechnology)
  return {
    props: {
      data: { page },
    },
  }
}
