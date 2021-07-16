import React from 'react'
import { styled } from '@material-ui/core'
import {
  HeadBlock,
  Header1,
  Header2,
  Header3,
  ContentBlock,
  Content,
  Hyperlink,
  Button,
} from '../../styles/generalStyles'
import Head from 'next/head'
import Divider from '../../components/Divider'

const DadssStill1 = '/assets/breathBasedTech/breath-based-still1.webp'
const DadssStill2 = '/assets/breathBasedTech/breath-based-still2.webp'
const DadssStill3 = '/assets/breathBasedTech/breath-based-still3.webp'
const PDF = '/assets/breathBasedTech/pdf/DADSS_Breath-Based.pdf'

const BreathTech = () => {
  const description = `The breath system being developed by Senseair,\
	and their tier one auto supplier, Autoliv Development, is designed\
	to unobtrusively analyze alcohol in the driver’s breath.`

  return (
    <>
      <Head>
        <title>DADSS | Breath Technology</title>
        <meta name='description' content={description} />
      </Head>
      <BreathBasedWrapper>
        <HeadBlock>
          <Header1>Breath Technology</Header1>
          <Divider />
        </HeadBlock>
        <ContentBlock style={{ paddingTop: '25px' }}>
          <Content>
            When it comes to measuring a person’s blood alcohol concentration,
            most Americans are familiar with breathalyzers that require drivers
            to provide a deep-lung sample by blowing into a tube or other
            sensor.
          </Content>
          <Content>
            In contrast, the breath system being developed by Senseair,
            and their tier one auto supplier, Autoliv Development, is designed
            to unobtrusively analyze alcohol in the driver’s breath. Drivers
            will simply be able to enter the vehicle and breathe as they
            normally would.
          </Content>
          <div className='ImageWrapper'>
            <img
              src={DadssStill1}
              alt='Breath System'
              height={560}
              width={1000}
              priority={true}
            />
          </div>
        </ContentBlock>
        <ContentBlock className='Orange'>
          <Header2 className='Gray'>How it Works</Header2>
          <Divider color='white' />
          <Content>
            The system draws the driver’s exhaled breath into a sensor, which
            measures the concentrations of alcohol and carbon dioxide present.
            The known quantity of carbon dioxide in human breath serves as an
            indicator of the degree of dilution of the alcohol concentration in
            exhaled air.
          </Content>
          <Content>
            Molecules of alcohol and those of tracers such as carbon dioxide
            absorb infrared light at specific wavelengths. The Senseair device
            directs infrared light beams on the breath sample and analyzes the
            wavelengths returned to quickly and accurately calculate the alcohol
            concentration. Senseair continues to move towards a prototype that
            can be integrated into a vehicle by utilizing mirrors to reduce the
            required optical length of the device. The device is highly
            sensitive and able to analyze diluted breath samples at dilutions
            expected from a driver’s natural breath plume.
          </Content>
          <div className='ImageWrapper'>
            <img src={DadssStill2} alt='Molecules' height={560} width={1000} />
          </div>
        </ContentBlock>

        <ContentBlock>
          <Header2>Testing the Prototype</Header2>
          <Divider />
          <Content>
            To test the prototype under development, the DADSS Research Program
            has developed a wet gas breath simulator. The simulator blends gases
            such as carbon dioxide, nitrogen and oxygen with moisture to create
            an “exhaled breath” that matches the composition, temperature and
            pressure of a natural human breath. Ethanol can then be added to the
            breath at various concentrations. In addition, the Senseair
            prototype will continue to run through a series of human subject
            tests, as well as durability tests in different environmental
            situations, from temperature shifts, to sudden changes in motion, to
            interference such as dust or mechanical shock.
          </Content>
          <div className='ImageWrapper'>
            <img
              src={DadssStill3}
              alt='Vehicle Testing'
              height={560}
              width={1000}
            />
          </div>
          <Content>
            In order to determine how best to install this system into new
            vehicles, extensive research is being undertaken to fully understand
            the process of the breath stream after exhalation and the breath’s
            distribution in the cabin both from drivers and passengers. Some
            possible locations include the driver’s side door and the steering
            column. Another approach under consideration is to have multiple
            sensors placed strategically in the vehicle cabin that would allow
            the system to determine that the breath sample is from the driver
            and not from other passengers.
          </Content>
          <a href={PDF} target='_blank' rel='noreferrer'>
            <Button>Download PDF</Button>
          </a>
        </ContentBlock>
        <ContentBlock className='Gray Manufacturer'>
          <Header3 className='White'>About The Manufacturer</Header3>
          <Content className='White'>
            Senseair is an innovation-based sensor company and leading
            manufacturer of infrared carbon dioxide sensors and controllers. It
            is based in Sweden, with over 20 years’ experience in the field of
            infrared gas measurement technology. Learn more about the
            manufacturer at:{' '}
            <Hyperlink
              href='https://Senseair.com/'
              target='_blank'
              rel='noreferrer'
              className='ContrastOrange'>
              www.Senseair.com
            </Hyperlink>
          </Content>
        </ContentBlock>
      </BreathBasedWrapper>
    </>
  )
}

const BreathBasedWrapper = styled('div')({
  marginTop: 85,
  '& .ImageWrapper': {
    margin: '10px 0 5px',
  },
})

export default BreathTech
