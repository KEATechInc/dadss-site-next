import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ContentBlock from '../../components/Layout/ContentBlock'
import Head from 'next/head'
import { PortableText, sanityClient } from '../../lib/sanity'
import { faqsQuery } from '../../lib/queries'

const FAQ = ({ faqData }) => {
  const [expanded, setExpanded] = useState(false)
  const router = useRouter()

  const description = `What is the Driver Alcohol Detection System for Safety (DADSS)\
	research program? Learn about this and more in our FAQ section.`

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  useEffect(() => {
    const route = router.asPath
    setExpanded(route.slice(5).toString())
  }, [router.asPath])

  return (
    <>
      <Head>
        <title>DADSS | FAQ</title>
        <meta name='description' content={description} />
      </Head>

      <main>
        <ContentBlock header='Frequently Asked Questions' divider>
          {faqData && (
            <div>
              {faqData.map((faq, i) => {
                return (
                  <Accordion
                    key={i}
                    expanded={expanded === `panel${i + 1}`}
                    onChange={handleChange(`panel${i + 1}`)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Anchor id={`panel${i + 1}`} />
                      <Typography variant='h6' color='primary'>{`${i + 1}. ${
                        faq.question
                      }`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: 16,
                        paddingTop: 0,
                      }}>
                      <Typography
                        component={PortableText}
                        blocks={faq.answer}
                      />
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </div>
          )}
        </ContentBlock>
      </main>
    </>
  )
}

const Anchor = styled('a')({
  display: 'block',
  position: 'relative',
  top: -100,
  visibility: 'hidden',
})

export default FAQ

export const getStaticProps = async () => {
  const faqData = await sanityClient.fetch(faqsQuery)
  return {
    props: { faqData },
  }
}
