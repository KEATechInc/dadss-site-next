import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  ContentBlock,
  HeadBlock,
  Header1,
  Header3,
  Break,
  Circle,
  boxShadow,
  darkOrange
} from '../../styles/generalStyles'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
  }, [router.pathname])

  return (
    <>
      <Head>
        <title>DADSS | FAQ</title>
        <meta name='description' content={description} />
      </Head>
      <FAQWrapper>
        <HeadBlock>
          <Header1>Frequently Asked Questions</Header1>
          <Break>
            <hr />
            <Circle />
            <hr />
          </Break>
        </HeadBlock>

        <ContentBlock className='FAQWrapper'>
          {faqData && (
            <>
              {faqData.map((faq, index) => {
                return (
                  <Accordion
                    key={index}
                    className='Accordion'
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}>
                    <AccordionSummary
                      className='AccordionSummary'
                      expandIcon={<ExpandMoreIcon />}>
                      <a className='anchor' id={`panel${index + 1}`} />
                      <Header3>{`${index + 1}. ${faq.question}`}</Header3>
                    </AccordionSummary>
                    <AccordionDetails className='AccordionDetails'>
                      {faq.answer.map((p, index) => {
                        return (
                          <Typography component='span' key={index} gutterBottom>
                            {p}
                          </Typography>
                        )
                      })}
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </>
          )}
        </ContentBlock>
      </FAQWrapper>
    </>
  )
}

const FAQWrapper = styled.div`
  margin-top: 85px;
  a.anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
  }
  .FAQWrapper {
    .Accordion {
      max-width: 1000px;
      border-radius: 0;
      box-shadow: ${boxShadow};
      .AccordionSummary {
        margin: 0;
      }
      .AccordionDetails {
        flex-direction: column;
        padding-top: 0;
        & span {
          & a {
            color: ${darkOrange};
            font-weight: bold;
            transition: 0.1s;
            :hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
    }
    h3 {
      width: 100%;
      font-size: 1.4em;
      text-align: left;
    }
  }
`
export default FAQ
