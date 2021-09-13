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
import { faqData } from '../../src/faqData'

const FAQ = () => {
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
              {faqData.map((faq, index) => {
                return (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Anchor id={`panel${index + 1}`} />
                      <Typography variant='h6' color='primary'>{`${
                        index + 1
                      }. ${faq.question}`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{ display: 'flex', flexDirection: 'column' }}>
                      {faq.answer.map((p, index) => {
                        return (
                          <Typography component='span' key={index} paragraph>
                            {p}
                          </Typography>
                        )
                      })}
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
