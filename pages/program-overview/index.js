import Head from 'next/head'
import Divider from '../../components/Layout/Divider'
import ContentBlock from '../../components/Layout/ContentBlock'
import { Typography } from '@mui/material'
import { getClient, PortableText } from '../../lib/sanity'
import { programOverviewQuery } from '../../lib/queries'
import { useRouter } from 'next/router'
import StandardButton from '../../components/Layout/StandardButton'
import { bgOrange, darkOrange, fontGray } from '../../src/theme'
import evenCheck from '../../lib/evenCheck'

const ProgramOverview = ({ data }) => {
  const router = useRouter()

  if (!data || router.isFallback) {
    return null
  }
  const { page } = data

  const description = `Drunk driving remains a serious public health and safety issue.\
	But what if we could help invent a world without drunk driving?`

  return (
    <>
      <Head>
        <title>DADSS | Program Overview</title>
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

        {page.sourcesCited && (
          <ContentBlock>
            <Divider size='small' />
            <Typography component={PortableText} blocks={page.sourcesCited} />
            <Divider size='small' />
          </ContentBlock>
        )}
      </main>
    </>
  )
}

export default ProgramOverview

export const getStaticProps = async () => {
  const page = await getClient().fetch(programOverviewQuery)
  return {
    props: {
      data: { page },
    },
  }
}
