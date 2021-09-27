import Link from 'next/link'
import Head from 'next/head'
import { formatDate } from '../../util/dateHandler'
import { PortableText, sanityClient } from '../../lib/sanity'
import { recentPostsQuery } from '../../lib/queries'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import Divider from '../../components/Layout/Divider'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Typography,
  styled,
} from '@mui/material'
import ContentBlock from '../../components/Layout/ContentBlock'
import { darkOrange, dtpBlue } from '../../src/theme'
import revalidate from '../../util/revalidate'

const programPDF = '/assets/resources/pdf/DADSS Program Update.pdf'
const programStats = '/assets/resources/pdf/DADSS_DigitalFlyer.pdf'
const opinionPDF =
  '/assets/resources/pdf/DADSS_Public-Opinion-Research_091317_v1.pdf'
const drivenPDF = '/assets/drivenToProtect/pdf/Driven-to-Protect-Overview.pdf'
const infoPDF = '/assets/resources/pdf/DTP-JRT-Infographic-v2.pdf'

const Resources = ({ posts }) => {
  const router = useRouter()

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
              <Button
                fullWidth
                variant='outlined'
                color='primary'
                onClick={() =>
                  router.push('/news/updates/' + post.slug.current)
                }>
                Learn more <AiFillCaretRight />
              </Button>
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
                variant='h3'
                color='primary'
                align='center'
                gutterBottom
                style={{ marginTop: 32 }}>
                Resources
              </Typography>
              <Divider />
            </Grid>

            <Grid item md={8}>
              <ResourceWrap>
                {/*  */}
                <Box mt={2}>
                  <Typography paragraph>
                    For more information about the DADSS Program, use these
                    materials:
                  </Typography>

                  <ul>
                    <li>
                      <a href={programPDF} target='_blank' rel='noreferrer'>
                        Program Update
                      </a>
                    </li>
                    <li>
                      <Link href='/faq'>Frequently Asked Questions</Link>
                    </li>
                    <li>
                      <a href={programStats} target='_blank' rel='noreferrer'>
                        Infographic: Progress to Date
                      </a>
                    </li>
                    <li>
                      <a href={opinionPDF} target='_blank' rel='noreferrer'>
                        Public Opinion Research
                      </a>
                    </li>
                  </ul>
                </Box>
                <Typography paragraph>
                  In the Fall of 2020, we launched the Driven to Protect
                  Discovery Hub, offering free videos and educational resources
                  – including a series of STEM- inspired lessons – about
                  alcohol-impaired driving and the ways the DADSS technology can
                  prevent it.
                </Typography>

                {/*  */}
                <Typography paragraph>
                  <Link href='/discovery-hub'>
                    <a>Explore the Discovery Hub</a>
                  </Link>
                </Typography>

                {/*  */}
                <Box>
                  <Typography paragraph>
                    For additional background on the DADSS program and resulting
                    technologies, watch our videos below or visit our{' '}
                    <a
                      href='https://www.youtube.com/channel/UC5be5Eh_SVXbn6d6RI8BYtQ'
                      target='_blank'
                      rel='noreferrer'>
                      YouTube page
                    </a>
                    :
                  </Typography>

                  <ul>
                    <li>
                      <a
                        href='https://www.youtube.com/watch?v=fwuIAQY7xq4&t=1s'
                        target='_blank'
                        rel='noreferrer'>
                        Take a look at the technology development process in the
                        lab
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.youtube.com/watch?v=Wk_DS91Y-mo'
                        target='_blank'
                        rel='noreferrer'>
                        Hear from experts behind the testing and development
                        process
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.youtube.com/watch?v=lNb3L-dWXjg'
                        target='_blank'
                        rel='noreferrer'>
                        Learn about our work in Virginia, through Driven to
                        Protect
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.youtube.com/watch?v=LVud69MWn3Q'
                        target='_blank'
                        rel='noreferrer'>
                        Meet James River Transportation and learn more about
                        on-road testing in Virginia
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.youtube.com/watch?v=pg3S7lltGRE'
                        target='_blank'
                        rel='noreferrer'>
                        Hear from experts about how the technology can support
                        fleet operators in furthering their safe driving goals
                      </a>
                    </li>
                  </ul>
                </Box>
              </ResourceWrap>

              <DtpResourceWrap mt={6} mb={6} style={{ width: '100%' }}>
                <Typography
                  variant='h3'
                  align='center'
                  gutterBottom
                  style={{ color: dtpBlue }}>
                  Driven To Protect VA
                </Typography>
                <Divider />
                <Typography paragraph>
                  You can also download materials about the Driven to Protect
                  program in Virginia:
                </Typography>
                <ul>
                  <li>
                    <a href={drivenPDF} target='_blank' rel='noreferrer'>
                      Driven to Protect Overview
                    </a>
                  </li>
                  <li>
                    <a href={infoPDF} target='_blank' rel='noreferrer'>
                      Infographic: On-road Testing
                    </a>
                  </li>
                </ul>
              </DtpResourceWrap>
            </Grid>

            {/* sidebar */}
            <Hidden mdDown>
              <Grid item md={4}>
                <ContentBlock sticky sidebar>
                  <Typography
                    variant='h5'
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
  const posts = await sanityClient.fetch(recentPostsQuery)

  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}
