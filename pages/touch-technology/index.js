import React from 'react'
import { Typography, Button } from '@material-ui/core'
import Head from 'next/head'
import ContentBlock from '../../components/Layout/ContentBlock'
import Image from '../../components/Layout/Image'
import { bgGray, bgOrange, darkOrange, fontGray } from '../../src/theme'

const DadssStill1 = '/assets/touchBasedTech/touch-based-still1.webp'
const DadssStill2 = '/assets/touchBasedTech/touch-based-still2.webp'
const PDF = '/assets/touchBasedTech/pdf/DADSS_Touch-Based.pdf'

const TouchTech = () => {
  const description = `The DADSS Research Program is working on a new approach to measuring\
	blood alcohol concentration: a touch system that uses\
	spectroscopy to measure alcohol in the driver’s tissue. This\
	technology broadens the options for an integrated system that can\
	reliably prevent drunk driving while remaining invisible to any\
	driver under the legal limit.`

  return (
    <>
      <Head>
        <title>DADSS | Touch Technology</title>
        <meta name='description' content={description} />
      </Head>

      <main>
        <ContentBlock header='Touch Technology' divider>
          <Typography paragraph>
            The DADSS Research Program is working on a new approach to measuring
            blood alcohol concentration: a touch system that uses spectroscopy
            to measure alcohol in the driver’s tissue. This technology broadens
            the options for an integrated system that can reliably prevent drunk
            driving while remaining invisible to any driver under the legal
            limit.
          </Typography>
          <Image src={DadssStill2} alt='Touch System' />
        </ContentBlock>
        <ContentBlock
          header='How It Works'
          headerColor={fontGray}
          borderBottom={darkOrange}
          borderTop={darkOrange}
          background={bgOrange}
          divider
          dividerColor='white'>
          <Typography paragraph>
            The touch system analyzes alcohol found beneath the driver’s skin’s
            surface (or more specifically, the blood alcohol content detected in
            the capillaries). Measurement begins by shining an infrared light on
            the driver’s skin, similar to a low power flashlight, which moves
            into the tissue. A portion of the light is reflected back to the
            skin’s surface, where it is collected by the touch pad. This light
            contains information on the skin’s unique chemical properties,
            including the concentration of alcohol.
          </Typography>
          <Typography paragraph>
            There are two discrete wavelength sources that signal the presence
            of alcohol. To ensure the speed, accuracy and precision of the
            device, the touch system doesn’t analyze all wavelengths – it
            focuses precisely at the wavelengths where alcohol can be found. The
            system will be able to take multiple readings in less than a second.
          </Typography>
          <Image src={DadssStill1} alt='How It Works Image' />
        </ContentBlock>

        <ContentBlock header='Testing The Prototype' divider>
          <Typography paragraph>
            The DADSS Research Program has created a touch standard calibration
            device that combines a series of 8 compounds to accurately simulate
            the composition and density of tissue in a finger. The prototypes
            will also continue to be put through a series of human subject
            tests, comparing prototype readings to blood sample readings, as
            well as durability tests in different environmental situations.
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
          borderBottom={fontGray}
          borderTop={fontGray}
          fontColor='white'
          background={bgGray}>
          <Typography variant='h4' color='textSecondary' gutterBottom>
            Vehicle Installation
          </Typography>
          <Typography paragraph>
            The touch pad will be installed somewhere that is natural to the
            driver, such as the vehicle start button. Manufacturers are also
            working to ensure that the car can accurately detect when it is not
            the driver using the touch-pad. One possibility is that the touch
            technology will use driver presence detectors in the front seat,
            which would generate a low-level signal when the driver is seated.
            When the driver presses the stop/start button or wherever the sensor
            is located, the driver completes the loop and confirms that he or
            she is the person touching the button. If anyone not in the driver
            seat presses the button, the circuit will not be closed and the
            alcohol measurement will not be considered valid.
          </Typography>
        </ContentBlock>
      </main>
    </>
  )
}

export default TouchTech
