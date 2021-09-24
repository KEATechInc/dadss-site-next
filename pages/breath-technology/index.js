import React from 'react'
import { Typography, Button } from '@mui/material'
import Head from 'next/head'
import ContentBlock from '../../components/Layout/ContentBlock'
import Image from '../../components/Layout/Image'
import { bgGray, bgOrange, darkOrange, fontGray } from '../../src/theme'

import DadssStill1 from '../../public/assets/breathBasedTech/breath-based-still1.webp'
import DadssStill2 from '../../public/assets/breathBasedTech/breath-based-still2.webp'
import DadssStill3 from '../../public/assets/breathBasedTech/breath-based-still3.webp'

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

      <main>
        <ContentBlock header='Breath Technology' divider>
          <Typography paragraph>
            When it comes to measuring a person’s blood alcohol concentration,
            most Americans are familiar with breathalyzers that require drivers
            to provide a deep-lung sample by blowing into a tube or other
            sensor.
          </Typography>
          <Typography paragraph>
            In contrast, the breath system being developed by Senseair, and
            their tier one auto supplier, Autoliv Development, is designed to
            unobtrusively analyze alcohol in the driver’s breath. Drivers will
            simply be able to enter the vehicle and breathe as they normally
            would.
          </Typography>
          <Image src={DadssStill1} alt='Breath System' />
        </ContentBlock>

        <ContentBlock
          header='How It Works'
          headerColor={fontGray}
          borderTop={darkOrange}
          borderBottom={darkOrange}
          background={bgOrange}
          dividerColor='white'
          divider>
          <Typography paragraph>
            The system draws the driver’s exhaled breath into a sensor, which
            measures the concentrations of alcohol and carbon dioxide present.
            The known quantity of carbon dioxide in human breath serves as an
            indicator of the degree of dilution of the alcohol concentration in
            exhaled air.
          </Typography>
          <Typography paragraph>
            Molecules of alcohol and those of tracers such as carbon dioxide
            absorb infrared light at specific wavelengths. The Senseair device
            directs infrared light beams on the breath sample and analyzes the
            wavelengths returned to quickly and accurately calculate the alcohol
            concentration. Senseair continues to move towards a prototype that
            can be integrated into a vehicle by utilizing mirrors to reduce the
            required optical length of the device. The device is highly
            sensitive and able to analyze diluted breath samples at dilutions
            expected from a driver’s natural breath plume.
          </Typography>
          <Image src={DadssStill2} alt='Molecules' />
        </ContentBlock>

        <ContentBlock header='Testing The Prototype' divider>
          <Typography paragraph>
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
          </Typography>
          <Image src={DadssStill3} alt='Vehicle Testing' marginBottom />
          <Typography paragraph>
            In order to determine how best to install this system into new
            vehicles, extensive research is being undertaken to fully understand
            the process of the breath stream after exhalation and the breath’s
            distribution in the cabin both from drivers and passengers. Some
            possible locations include the driver’s side door and the steering
            column. Another approach under consideration is to have multiple
            sensors placed strategically in the vehicle cabin that would allow
            the system to determine that the breath sample is from the driver
            and not from other passengers.
          </Typography>
          <Button
            href={PDF}
            target='_blank'
            rel='noreferrer'
            variant='outlined'
            color='primary'>
            Download PDF
          </Button>
        </ContentBlock>

        <ContentBlock
          borderTop={fontGray}
          borderBottom={fontGray}
          background={bgGray}
          fontColor='white'>
          <Typography variant='h4' color='textSecondary' gutterBottom>
            About The Manufacturer
          </Typography>
          <Typography paragraph>
            Senseair is an innovation-based sensor company and leading
            manufacturer of infrared carbon dioxide sensors and controllers. It
            is based in Sweden, with over 20 years’ experience in the field of
            infrared gas measurement technology. Learn more about the
            manufacturer at:{' '}
            <a
              href='https://Senseair.com/'
              target='_blank'
              rel='noreferrer'
              style={{ color: bgOrange }}>
              www.Senseair.com
            </a>
          </Typography>
        </ContentBlock>
      </main>
    </>
  )
}

export default BreathTech
