import ContentBlock from '../../components/Layout/ContentBlock'
import { Typography, Button, styled, Grid } from '@mui/material'
import theme, { darkOrange, bgOrange, fontGray } from '../../src/theme'
import {useRouter} from 'next/router'

const Breath = '/assets/logos/graphic-tech-breath.svg'
const Touch = '/assets/logos/graphic-tech-touch.svg'

const Technologies = () => {
  const router = useRouter()
  return (
    <>
      {/* DADSS tech */}
      <ContentBlock
        background={bgOrange}
        borderTop={darkOrange}
        borderBottom={darkOrange}
        header={`Technologies We're Exploring`}
        headerColor={fontGray}
        divider
        dividerColor='white'>
        <Typography paragraph>
          The goal of the DADSS Research Program is to advance the state of
          alcohol detection technology by developing a system that is fast,
          accurate, reliable and affordable — all without affecting normal
          driving behavior. The program is exploring two different technologies
          for installation in new vehicles: a breath-based system and a
          touch-based system.
        </Typography>

        <Grid container spacing={4}>
          <SubContent item xs={12} sm={6}>
            <Image src={Breath} alt='Breath System' height={150} width={115} />
            <Typography variant='h4' gutterBottom>
              Breath System
            </Typography>
            <div style={{ height: '100%' }}>
              <Typography paragraph>
                {`This system measures alcohol as a driver breathes normally, when
                in the driver's seat. It will be designed to take instantaneous
                readings as the driver breathes normally and to accurately and
                reliably distinguish between the driver’s breath and that of any
                passengers.`}
              </Typography>
            </div>
            <Button
              color='secondary'
              variant='contained'
              onClick={() => router.push('/breath-technology')}>
              Overview
            </Button>
          </SubContent>

          <SubContent item xs={12} sm={6}>
            <Image src={Touch} alt='Touch System' height={150} width={115} />
            <Typography variant='h4' gutterBottom>
              Touch System
            </Typography>
            <div style={{ height: '100%' }}>
              <Typography paragraph>
                This technology measures blood alcohol levels under the skin’s
                surface by shining an infrared-light through the fingertip of
                the driver. It will be integrated into current vehicle controls,
                such as the start button or steering wheel, and take multiple,
                accurate readings.
              </Typography>
            </div>

            <Button
              color='secondary'
              variant='contained'
              onClick={() => router.push('/touch-technology')}>
              Overview
            </Button>
          </SubContent>
        </Grid>
      </ContentBlock>
    </>
  )
}

export default Technologies

const SubContent = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',
})

const Image = styled('img')({
  margin: theme.spacing(1),
  marginBottom: theme.spacing(2),
})
