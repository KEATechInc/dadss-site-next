import { Typography, Box } from '@material-ui/core'
import ContentBlock from '../../components/Layout/ContentBlock'
import Head from 'next/head'
import Link from 'next/link'

const Contact = () => {
  const description = `For all general questions about the DADSS program, please email\
	info@dadss.org. For any media inquiries,\
	please email media@dadss.org.`

  return (
    <>
      <Head>
        <title>DADSS | Contact Us</title>
        <meta name='description' content={description} />
      </Head>
      <main>
        <ContentBlock header='Contact Us' divider>
          <Box>
            <Typography>
              For all general questions about the DADSS program, please email{' '}
              <a href='mailto:info@dadss.org?subject=I want to learn more about DADSS'>
                info@dadss.org
              </a>
              . For any media inquiries, please email{' '}
              <a href='mailto:media@dadss.org?subject=I have a question about DADSS media'>
                media@dadss.org
              </a>
              .
            </Typography>
            <Typography>
              You can also visit our{' '}
              <Link href='/faq'>Frequently Asked Questions</Link> and our{' '}
              <Link href='/news-updates'>News and Updates</Link> pages. For
              additional background on the program and resulting technologies,
              visit our <Link href='/resources'>Resources</Link> page.
            </Typography>
          </Box>
        </ContentBlock>
      </main>
    </>
  )
}

export default Contact
