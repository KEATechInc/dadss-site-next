import Head from 'next/head'
import { formatDate } from '../../util/dateHandler'
import { PortableText, getClient } from '../../lib/sanity'
import { recentPostsQuery, resourcesQuery } from '../../lib/queries'
import { useRouter } from 'next/router'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import Divider from '../../components/Layout/Divider'
import { Box, Container, Grid, Hidden, Typography, styled } from '@mui/material'
import ContentBlock from '../../components/Layout/ContentBlock'
import { darkOrange, dtpBlue } from '../../src/theme'
import StandardButton from '../../components/Layout/Button'
import Link from 'next/link'

const Resources = ({ data }) => {
  const router = useRouter()

  if (!data || router.isFallback) {
    return null
  }

  const { posts, resources } = data

  const renderPosts = () => {
    return (
      <>
        {posts &&
          posts.map((post, index) => (
            <Box key={index} mb={3}>
              <Typography style={{ textTransform: 'capitalize' }}>
                <b>{post.category}</b>
              </Typography>
              <Typography>
                <b>Published: {formatDate(post.published)}</b>
              </Typography>
              <span style={{ fontSize: 16 }}>
                <Typography component={PortableText} blocks={post.preview} />
              </span>
              <Link href={'/news/updates/' + post.slug.current} passHref>
                <StandardButton fullWidth variant='outlined' color='primary'>
                  Learn more <AiFillCaretRight />
                </StandardButton>
              </Link>
            </Box>
          ))}
      </>
    )
  }

  const description = `In the Fall of 2020, we launched the Driven to Protect Discovery\
	Hub, offering free videos and educational resources – including\
	a series of STEM- inspired lessons – about alcohol-impaired\
	driving and the ways the DADSS technology can prevent it.`

  return (
    <>
      <Head>
        <title>DADSS | Resources</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <Container>
          <Grid container justifyContent='space-between' spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant='h2'
                color='primary'
                align='center'
                gutterBottom
                style={{ marginTop: 48, paddingBottom: 16 }}>
                Resources
              </Typography>
              <Divider />
            </Grid>

            <Grid item md={8}>
              <ResourceWrap>
                {resources.dadssResources && (
                  <Typography
                    component={PortableText}
                    blocks={resources.dadssResources}
                  />
                )}
              </ResourceWrap>

              {resources.dtpVaResources && (
                <DtpResourceWrap mt={6} mb={6} style={{ width: '100%' }}>
                  {resources.dtpVaResourcesHeader && (
                    <>
                      <Typography
                        variant='h2'
                        align='center'
                        gutterBottom
                        style={{ color: dtpBlue }}>
                        {resources.dtpVaResourcesHeader}
                      </Typography>
                      <Divider />
                    </>
                  )}

                  <Typography
                    component={PortableText}
                    blocks={resources.dtpVaResources}
                  />
                </DtpResourceWrap>
              )}
            </Grid>

            {/* sidebar */}
            <Hidden mdDown>
              <Grid item md={4}>
                <ContentBlock sticky sidebar>
                  <Typography
                    variant='h4'
                    align='center'
                    style={{ color: darkOrange }}>
                    Recent Updates
                  </Typography>
                  <Divider size='small' />
                  {renderPosts()}
                </ContentBlock>
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default Resources

const ResourceWrap = styled(Box)({
  '& a': {
    fontWeight: 'bold',
    color: darkOrange,
  },
})
const DtpResourceWrap = styled(Box)({
  '& a': {
    fontWeight: 'bold',
    color: dtpBlue,
  },
})

export const getStaticProps = async () => {
  const posts = await getClient().fetch(recentPostsQuery)
  const resources = await getClient().fetch(resourcesQuery)

  return {
    props: {
      data: { posts, resources },
    },
  }
}
