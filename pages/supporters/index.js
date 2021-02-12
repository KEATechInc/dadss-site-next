import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { SupportersWrapper } from '../../styles/supportersStyles'
import {
  ContentBlock,
  Header3,
  Content,
  Break,
  Circle,
  HeadBlock,
  Header1,
  Hyperlink,
} from '../../styles/generalStyles'
import Head from 'next/head'
import ImageGrid from './imageGrid'

const allCars = '/assets/logos/supporters/all-cars.webp'

const Supporters = () => {
  useEffect(() => {
    ReactGA.initialize('UA-58614629-1')
    ReactGA.pageview(window.location.pathname)
  }, [])

  const description = `The Driver Alcohol Detection System for Safety (DADSS) research
	program is supported by safety and children’s advocates, insurance
	companies, state and local government representatives and members of
	the alcohol industry – who all agree that technology can be the
	answer to the persistent problem of drunk driving.`

  return (
    <>
      <Head>
        <title>DADSS | Supporters</title>
        <meta name='description' content={description} />
      </Head>
      <SupportersWrapper>
        <HeadBlock>
          <Header1>Our Supporters</Header1>
          <Break>
            <hr /> <Circle /> <hr />
          </Break>
        </HeadBlock>
        <ContentBlock>
          <Content>
            The Driver Alcohol Detection System for Safety (DADSS) research
            program is supported by safety and children’s advocates, insurance
            companies, state and local government representatives and members of
            the alcohol industry – who all agree that technology can be the
            answer to the persistent problem of drunk driving.
          </Content>
          <Header3>Supporters of the DADSS program include:</Header3>
          <ImageGrid />
          <Header3>
            The world's leading car companies are involved in the DADSS research
            program, including:
          </Header3>
          <img
            src={allCars}
            alt='Leading Car Manufacturers'
            className='Manufacturers'
          />
        </ContentBlock>
        <ContentBlock>
          <Content>
            If your organization is interested in supporting the DADSS program,
            please contact{' '}
            <Hyperlink href='mailto:info@dadss.org?subject=I want to be a DADSS supporter'>
              info@dadss.org
            </Hyperlink>
            .
          </Content>
        </ContentBlock>
      </SupportersWrapper>
    </>
  )
}

export default Supporters
